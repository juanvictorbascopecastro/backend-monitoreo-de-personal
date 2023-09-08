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
import { SalidaService } from "./salida.service";
import { CreateSalidaDto } from "./dto/create-salida.dto";
import { UpdateSalidaDto } from "./dto/update-salida.dto";
import { ValidRoles } from "../auth/interface";
import { Auth } from "../auth/decorators";
import { IngresoGuard } from "../salida/guards/ingreso.guard";
import { IngresoDecorator } from "../ubicacion/decorators/ingreso.decorators";
import { Ingreso } from "../ingreso/entities/ingreso.entity";

@Controller("salida")
export class SalidaController {
  constructor(private readonly salidaService: SalidaService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  @UseGuards(IngresoGuard)
  create(
    @Body() createSalidaDto: CreateSalidaDto,
    @IngresoDecorator() ingreso: Ingreso
  ) {
    return this.salidaService.create(createSalidaDto, ingreso);
  }

  @Patch(":id")
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  @UseGuards(IngresoGuard)
  update(
    @Param("id") id: string,
    @Body() updateSalidaDto: UpdateSalidaDto,
    @IngresoDecorator() ingreso: Ingreso
  ) {
    return this.salidaService.update(+id, updateSalidaDto, ingreso);
  }

  // @Get()
  // @Auth(ValidRoles.admin, ValidRoles.usuario)
  // findAll() {
  //   return this.salidaService.findAll();
  // }

  @Get(":id")
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  findOne(@Param("id") id: string) {
    return this.salidaService.findOne(+id);
  }

  @Delete(":id")
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  remove(@Param("id") id: string) {
    return this.salidaService.remove(+id);
  }
}
