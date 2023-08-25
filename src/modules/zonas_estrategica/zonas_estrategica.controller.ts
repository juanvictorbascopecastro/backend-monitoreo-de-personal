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
import { ZonasEstrategicaService } from "./zonas_estrategica.service";
import { CreateZonasEstrategicaDto } from "./dto/create-zonas_estrategica.dto";
import { UpdateZonasEstrategicaDto } from "./dto/update-zonas_estrategica.dto";
import { Auth } from "../auth/decorators";
import { ValidRoles } from "../auth/interface";
import { CiudadGuard } from "../persona/guards/ciudad.guard";
import { CiudadDecorator } from "../persona/decorators/ciudad.decorator";

@Controller("zonas-estrategica")
export class ZonasEstrategicaController {
  constructor(
    private readonly zonasEstrategicaService: ZonasEstrategicaService
  ) {}

  @Post()
  @Auth(ValidRoles.admin)
  @UseGuards(CiudadGuard)
  create(
    @Body() createZonasEstrategicaDto: CreateZonasEstrategicaDto,
    @CiudadDecorator() ciudad
  ) {
    return this.zonasEstrategicaService.create(
      createZonasEstrategicaDto,
      ciudad
    );
  }
  @Patch(":id")
  @Auth(ValidRoles.admin)
  @UseGuards(CiudadGuard)
  update(
    @Param("id") id: string,
    @Body() updateZonasEstrategicaDto: UpdateZonasEstrategicaDto,
    @CiudadDecorator() ciudad
  ) {
    return this.zonasEstrategicaService.update(
      +id,
      updateZonasEstrategicaDto,
      ciudad
    );
  }

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  findAll() {
    return this.zonasEstrategicaService.findAll();
  }

  @Get(":id")
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  findOne(@Param("id") id: string) {
    return this.zonasEstrategicaService.findOne(+id);
  }

  @Delete(":id")
  @Auth(ValidRoles.admin)
  remove(@Param("id") id: string) {
    return this.zonasEstrategicaService.remove(+id);
  }
}
