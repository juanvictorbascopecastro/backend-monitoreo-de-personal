import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { PersonaService } from "./persona.service";
import { CreatePersonaDto, UpdatePersonaDto } from "./dto/index";
import { ValidRoles } from "../auth/interface";
import { Auth } from "../auth/decorators";
import { CiudadGuard } from "./guards/ciudad.guard";
import { CiudadDecorator } from "./decorators/ciudad.decorator";

@Controller("usuarios")
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  @Auth(ValidRoles.admin) // solo admin
  @UseGuards(CiudadGuard)
  create(
    @Body() createPersonaDto: CreatePersonaDto,
    @CiudadDecorator() ciudad
  ) {
    return this.personaService.create(createPersonaDto, ciudad);
  }
  @Patch(":id")
  @Auth(ValidRoles.admin)
  @UseGuards(CiudadGuard)
  update(
    @Param("id") id: string,
    @Body() updatePersonaDto: UpdatePersonaDto,
    @CiudadDecorator() ciudad
  ) {
    return this.personaService.update(+id, updatePersonaDto, ciudad);
  }

  @Delete(":id")
  @Auth(ValidRoles.admin)
  remove(@Param("id") id: string) {
    return this.personaService.remove(+id);
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
}
