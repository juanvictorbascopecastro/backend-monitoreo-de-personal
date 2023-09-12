import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { Response } from "express";
import { FilesService } from "./files.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileFilter, fileNamer } from "src/files/helpers";
import { diskStorage } from "multer";
import { ConfigService } from "@nestjs/config";

@Controller("files")
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService
  ) {}

  @Post("persona")
  @UseInterceptors(
    FileInterceptor("foto", {
      fileFilter: fileFilter,
      // limits: { fieldSize: 1500 },
      storage: diskStorage({
        destination: "./static/profiles",
        filename: fileNamer,
      }),
    })
  )
  uploadFoto(@UploadedFile() file: Express.Multer.File) {
    const secureUrl = `${this.configService.get("HOST_API")}/files/persona/${
      file.filename
    }`;
    return { secureUrl };
  }

  @Get("persona/:imageName")
  findFoto(@Res() res: Response, @Param("imageName") imageName: string) {
    const path = this.filesService.getStaticPersonaFoto(imageName);
    res.sendFile(path);
  }

  // @Get("persona-url/:imageName")
  // findUrlFoto(@Param("imageName") imageName: string) {
  //   const path = this.filesService.getStaticPersonaFoto(imageName);
  //   const secureUrl = `${this.configService.get(
  //     "HOST_NAME"
  //   )}/files/persona-url/${imageName}`;
  //   return { secureUrl };
  // }
}
