import { fileMimetypeFilter } from '../filters/file-mimetype-filter';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { applyDecorators, UseInterceptors } from '@nestjs/common';

export function ApiFile(
  fieldName: string = 'file',
  required: boolean = false,
  localOptions?: MulterOptions,
): <TFunction extends Function, Y>(target: (object | TFunction), propertyKey?: (string | symbol), descriptor?: TypedPropertyDescriptor<Y>) => void {
  return applyDecorators(
    UseInterceptors(FileInterceptor(fieldName, localOptions)),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        required: required ? [fieldName] : [],
        properties: {
          [fieldName]: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    }),
  );
}

export function ApiImageFile(
  fileName: string = 'image',
  required: boolean = false,
): <TFunction extends Function, Y>(target: (object | TFunction), propertyKey?: (string | symbol), descriptor?: TypedPropertyDescriptor<Y>) => void {
  return ApiFile(fileName, required, {
    fileFilter: fileMimetypeFilter('image'),
  });
}
