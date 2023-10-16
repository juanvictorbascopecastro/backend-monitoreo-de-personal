import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class PhotoValidatorsPipe implements PipeTransform {
  transform(
    files: Array<Express.Multer.File> | Express.Multer.File,
    metadata: ArgumentMetadata
  ): Array<Express.Multer.File> | Express.Multer.File {
    const allowedFileTypes = [
      "image/jpg",
      "image/png",
      "image/jpeg",
      "image/gif",
    ];
    // console.log(files);
    if (Array.isArray(files)) {
      files.forEach((file: Express.Multer.File) => {
        if (!allowedFileTypes.includes(file.mimetype)) {
          // validamos si es el tipo de archivo permitido
          throw new HttpException(
            `¡El archivo ${file.originalname} no es de un tipo de archivo permitido!`,
            HttpStatus.BAD_REQUEST
          );
        }
        if (file.size > 4000000) {
          // validamos si es el tamañopermitido
          throw new HttpException(
            `¡El archivo ${file.originalname} no debe exceder el tamaño superior a 4 MB!`,
            HttpStatus.BAD_REQUEST
          );
        }
      });
    } else if (files != null) {
      if (!allowedFileTypes.includes(files.mimetype)) {
        // validamos si es el tipo de archivo permitido
        throw new HttpException(
          `¡El archivo ${files.originalname} no es de un tipo de archivo permitido!`,
          HttpStatus.BAD_REQUEST
        );
      }
      if (files.size > 4000000) {
        // validamos si es el tamañopermitido
        throw new HttpException(
          `¡El archivo ${files.originalname} no debe exceder el tamaño superior a 4 MB!`,
          HttpStatus.BAD_REQUEST
        );
      }
    }

    return files;
  }
}
