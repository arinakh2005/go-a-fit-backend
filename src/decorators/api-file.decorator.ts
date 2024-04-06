import { fileMimetypeFilter } from '../filters/file-mimetype-filter';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { applyDecorators, UseInterceptors } from '@nestjs/common';

export function ApiFile(
  fieldName: string = 'file',
  requiredFieldKeys: string[] = [],
  extraProperties: object = { },
  localOptions?: MulterOptions,
): <TFunction extends Function, Y>(target: (object | TFunction), propertyKey?: (string | symbol), descriptor?: TypedPropertyDescriptor<Y>) => void {
  return applyDecorators(
    UseInterceptors(FileInterceptor(fieldName, localOptions)),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        required: requiredFieldKeys ? requiredFieldKeys : [],
        properties: {
          ...extraProperties,
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
  requiredFieldKeys: string[],
  extraProperties: object = { },
): <TFunction extends Function, Y>(target: (object | TFunction), propertyKey?: (string | symbol), descriptor?: TypedPropertyDescriptor<Y>) => void {
  return ApiFile(fileName, requiredFieldKeys, extraProperties, {
    fileFilter: fileMimetypeFilter('image'),
  });
}
