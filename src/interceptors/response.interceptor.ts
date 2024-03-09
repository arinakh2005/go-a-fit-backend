import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Response<T> {
  status: ResponseStatus,
  statusCode: number;
  message: string;
  result: T;
}

export enum ResponseStatus {
  Success = 'success',
  Error = 'error',
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) => throwError(() => this.errorHandler(err, context)))
    );
  }

  public errorHandler(exception: HttpException, context: ExecutionContext): void {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      status: ResponseStatus.Error,
      statusCode: status,
      message: exception.message,
      result: exception,
    });
  }

  public responseHandler(res: any, context: ExecutionContext): Response<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    const statusCode = response.statusCode;

    return {
      status: ResponseStatus.Success,
      statusCode,
      result: res,
      message: res.message,
    };
  }
}