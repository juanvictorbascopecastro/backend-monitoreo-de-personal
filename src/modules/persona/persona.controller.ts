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
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from "@nestjs/common";
import { Response } from "express";
import { CreatePersonaDto, UpdatePersonaDto } from "./dto/index";
import { ValidRoles } from "../auth/interface";
import { Auth } from "../auth/decorators";
import { CiudadDecorator } from "./decorators/ciudad.decorator";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { fileFilter } from "src/files/helpers";
import { FilesService } from "src/files/files.service";
import { EmailSaveGuard, CiudadGuard, EmailUpdateGuard } from "./guards/";
import { PersonaService } from "./persona.service";
import { PhotoValidatorsPipe } from "./pipes/photo.validators.pipe";

@Controller("usuarios")
export class PersonaController {
  constructor(
    private readonly personaService: PersonaService,
    private readonly filesService: FilesService
  ) {}

  @Post()
  @Auth(ValidRoles.admin)
  @UseGuards(CiudadGuard)
  @UseInterceptors(FilesInterceptor("foto"))
  async cargarArchivos(
    @CiudadDecorator() ciudad,
    @UploadedFiles(new PhotoValidatorsPipe())
    files: Array<Express.Multer.File>,
    @Body() createPersonaDto: CreatePersonaDto
    // @Body() data: any
  ) {
    // console.log(data);
    return this.personaService.create(
      createPersonaDto,
      ciudad,
      files && files.length > 0 ? files[0] : null
    );
  }
  /* @Post()
  @Auth(ValidRoles.admin) // solo admin
  @UseGuards(CiudadGuard, EmailSaveGuard)
  // para la imagen
  @UseInterceptors(
    FileInterceptor("foto", {
      fileFilter: fileFilter,
    })
  )
  create(
    @CiudadDecorator() ciudad,
    @UploadedFile() file: Express.Multer.File,
    @Body() createPersonaDto: CreatePersonaDto
  ) {
    console.log(createPersonaDto);
    console.log(file);
    return this.personaService.create(createPersonaDto, ciudad, file);
  }*/

  @Patch(":id")
  @Auth(ValidRoles.admin)
  @UseGuards(CiudadGuard)
  @UseInterceptors(FileInterceptor("foto")) // para la imagen
  update(
    @Param("id") id: string,
    @Body() updatePersonaDto: UpdatePersonaDto,
    @CiudadDecorator() ciudad,
    @UploadedFile(new PhotoValidatorsPipe()) file: Express.Multer.File
  ) {
    if (updatePersonaDto.rol === "") updatePersonaDto.rol = null;
    return this.personaService.update(+id, updatePersonaDto, ciudad, file);
  }

  @Patch("estado/:id")
  @Auth(ValidRoles.admin)
  @UseGuards(CiudadGuard)
  @UseInterceptors(FileInterceptor("foto")) // para la imagen
  updateStatus(@Param("id") id: string, @Body() data) {
    // console.log(data);
    return this.personaService.updateStatus(+id, data.estado);
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
