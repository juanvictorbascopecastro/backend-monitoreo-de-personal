import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { PersonaService } from "./persona.service";
import { CreatePersonaDto, UpdatePersonaDto } from "./dto/index";
import { ValidRoles } from "../auth/interface";
import { Auth } from "../auth/decorators";
import { CiudadGuard } from "./guards/ciudad.guard";
import { CiudadDecorator } from "./decorators/ciudad.decorator";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileFilter, fileNamer } from "src/files/helpers";
import { diskStorage } from "multer";
import { FilesService } from "src/files/files.service";

@Controller("usuarios")
export class PersonaController {
  constructor(
    private readonly personaService: PersonaService,
    private readonly filesService: FilesService
  ) {}

  @Post()
  // para la imagen
  @UseGuards(CiudadGuard)
  @Auth(ValidRoles.admin) // solo admin
  @UseInterceptors(
    FileInterceptor("foto", {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: "./static/profiles",
        filename: fileNamer,
      }),
    })
  )
  create(
    @Body() createPersonaDto: CreatePersonaDto,
    @CiudadDecorator() ciudad,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.personaService.create(
      createPersonaDto,
      ciudad,
      file ? file.filename : null
    );
  }

  @Patch(":id")
  @Auth(ValidRoles.admin)
  @UseGuards(CiudadGuard)
  // para la imagen
  @UseInterceptors(
    FileInterceptor("foto", {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: "./static/profiles",
        filename: fileNamer,
      }),
    })
  )
  update(
    @Param("id") id: string,
    @Body() updatePersonaDto: UpdatePersonaDto,

    @CiudadDecorator() ciudad,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.personaService.update(
      +id,
      updatePersonaDto,
      ciudad,
      file.filename
    );
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  findAll() {
    return this.personaService.findAll();
  }

  @Get(":id")
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  findOne(@Param("id") id: string) {
    return this.personaService.findOne(+id);
  }

  @Delete(":id")
  @Auth(ValidRoles.admin)
  remove(@Param("id") id: string) {
    return this.personaService.remove(+id);
  }

  @Get("persona/:imageName")
  findFoto(@Res() res: Response, @Param("imageName") imageName: string) {
    const path = this.filesService.getStaticPersonaFoto(imageName);
    res.sendFile(path);
  }
}
