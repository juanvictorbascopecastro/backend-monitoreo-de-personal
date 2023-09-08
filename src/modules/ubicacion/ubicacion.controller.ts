import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { UbicacionService } from "./ubicacion.service";
import { CreateUbicacionDto } from "./dto/create-ubicacion.dto";
import { UpdateUbicacionDto } from "./dto/update-ubicacion.dto";
import { ValidRoles } from "../auth/interface";
import { Auth } from "../auth/decorators";
import { PersonaGuard } from "../ingreso/guards/persona.guard";
import { IngresoDecorator } from "./decorators/ingreso.decorators";
import { Ingreso } from "../ingreso/entities/ingreso.entity";
import { PersonaDecorator } from "../ingreso/decorators/persona.decorator";
import { Persona } from "../persona/entities";
import { IngresoGuard } from "./guards/ingreso.guard";

@Controller("ubicacion")
export class UbicacionController {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  @UseGuards(PersonaGuard, IngresoGuard)
  create(
    @Body() createUbicacionDto: CreateUbicacionDto,
    @IngresoDecorator() ingreso: Ingreso,
    @PersonaDecorator() persona: Persona
  ) {
    return this.ubicacionService.create(createUbicacionDto, ingreso, persona);
  }

  @Patch(":id")
  @Auth(ValidRoles.admin)
  @UseGuards(PersonaGuard, IngresoGuard)
  update(
    @Param("id") id: string,
    @Body() updateUbicacionDto: UpdateUbicacionDto,
    @IngresoDecorator() ingreso: Ingreso,
    @PersonaDecorator() persona: Persona
  ) {
    return this.ubicacionService.update(
      +id,
      updateUbicacionDto,
      ingreso,
      persona
    );
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  findAll() {
    return this.ubicacionService.findAll();
  }

  @Get("persona/:id")
  @Auth(ValidRoles.admin)
  findPersona(@Param("id") id: string, @Query("fecha") fecha: Date) {
    return this.ubicacionService.findPerson(+id, fecha);
  }

  @Get(":id")
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  findOne(@Param("id") id: string) {
    return this.ubicacionService.findOne(+id);
  }

  @Delete(":id")
  @Auth(ValidRoles.admin)
  remove(@Param("id") id: string) {
    return this.ubicacionService.remove(+id);
  }
}
