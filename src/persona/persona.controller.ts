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
import { Persona } from "./entities/persona.entity";
import { ValidRoles } from "./interface";
import { Auth, GetUser } from "./decorators";

@Controller("usuarios")
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  @Auth(ValidRoles.admin) // solo admin
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
  }

  // @Post("login")
  // login(@Body() loginPersonDto: LoginPersonaDto) {
  //   return this.personaService.login(loginPersonDto);
  // }

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

  // @Get("data/token")
  // @UseGuards(AuthGuard())
  // getUserToken(@GetUser() user: Persona) {
  //   return { user };
  // }

  @Get("prueba/decoradores")
  // @SetMetadata("roles", ["admin"])
  // @RoleProtected(ValidRoles.admin)
  // @UseGuards(AuthGuard(), UserRoleGuard)
  @Auth(ValidRoles.admin)
  testingPriveteRoute(@GetUser() user: Persona) {
    return user;
  }
}
