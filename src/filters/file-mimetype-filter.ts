import { UnsupportedMediaTypeException } from '@nestjs/common';

export function fileMimetypeFilter(...mimetypes: string[]): (req, file: Express.Multer.File, callback: (error: (Error | null), acceptFile: boolean) => void) => void {
  return (
    req, file: Express.Multer.File,
    callback: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    if (mimetypes.some((m) => file.mimetype.includes(m))) {
      callback(null, true);
    } else {
      callback(new UnsupportedMediaTypeException(`File type is not matching: ${mimetypes.join(', ')}`), false);
    }
  };
}
