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
import { IngresoService } from "./ingreso.service";
import { CreateIngresoDto } from "./dto/create-ingreso.dto";
import { UpdateIngresoDto } from "./dto/update-ingreso.dto";
import { Auth } from "../auth/decorators";
import { PersonaGuard } from "./guards/persona.guard";
import { Persona } from "../persona/entities";
import { PersonaDecorator } from "./decorators/persona.decorator";
import { ZonaGuard } from "./guards/zona.guard";
import { ZonaDecorator } from "./decorators/zona.decorator";
import { ZonasEstrategica } from "../zonas_estrategica/entities/zonas_estrategica.entity";

@Controller("ingreso")
export class IngresoController {
  constructor(private readonly ingresoService: IngresoService) {}

  @Post()
  @Auth()
  @UseGuards(PersonaGuard, ZonaGuard)
  create(
    @Body() createIngresoDto: CreateIngresoDto,
    @PersonaDecorator() persona: Persona,
    @ZonaDecorator() zona: ZonasEstrategica
  ) {
    return this.ingresoService.create(createIngresoDto, persona, zona);
  }

  @Patch(":id")
  @Auth()
  @UseGuards(PersonaGuard, ZonaGuard)
  update(
    @Param("id") id: string,
    @Body() updateIngresoDto: UpdateIngresoDto,
    @PersonaDecorator() persona: Persona,
    @ZonaDecorator() zona: ZonasEstrategica
  ) {
    return this.ingresoService.update(+id, updateIngresoDto, persona, zona);
  }

  @Get()
  @Auth()
  findAll() {
    return this.ingresoService.findAll();
  }

  @Get(":id")
  @Auth()
  findOne(@Param("id") id: string) {
    return this.ingresoService.findOne(+id);
  }

  @Delete(":id")
  @Auth()
  remove(@Param("id") id: string) {
    return this.ingresoService.remove(+id);
  }
}
