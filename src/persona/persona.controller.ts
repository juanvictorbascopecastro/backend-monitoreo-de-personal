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
import {
  CreatePersonaDto,
  LoginPersonaDto,
  UpdatePersonaDto,
} from "./dto/index";
import { AuthGuard } from "@nestjs/passport";

@Controller("usuarios")
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
  }

  @Post("login")
  login(@Body() loginPersonDto: LoginPersonaDto) {
    return this.personaService.login(loginPersonDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.personaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.personaService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.personaService.remove(+id);
  }
}
