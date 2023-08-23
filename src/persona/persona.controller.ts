import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PersonaService } from "./persona.service";
import { CreatePersonaDto, UpdatePersonaDto } from "./dto/index";
import { Auth } from "src/auth/decorators";
import { ValidRoles } from "src/auth/interface";

@Controller("usuarios")
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  @Auth(ValidRoles.admin) // solo admin
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
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

  @Patch(":id")
  @Auth(ValidRoles.admin)
  update(@Param("id") id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(":id")
  @Auth(ValidRoles.admin)
  remove(@Param("id") id: string) {
    return this.personaService.remove(+id);
  }
}
