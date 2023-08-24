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
import { CiudadService } from "./ciudad.service";
import { CreateCiudadDto } from "./dto/create-ciudad.dto";
import { UpdateCiudadDto } from "./dto/update-ciudad.dto";
import { Auth } from "../auth/decorators";
import { ValidRoles } from "../auth/interface";
import { DepartamentoDecorator } from "./decorators/departamento.decorator";
import { DepartamentoGuard } from "./guards/departamento.guard";

@Controller("ciudades")
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Post()
  @Auth(ValidRoles.admin)
  @UseGuards(DepartamentoGuard)
  create(
    @Body() createCiudadDto: CreateCiudadDto,
    @DepartamentoDecorator() dpto
  ) {
    return this.ciudadService.create(createCiudadDto, dpto);
  }

  @Get()
  findAll() {
    return this.ciudadService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ciudadService.findOne(+id);
  }

  @Patch(":id")
  @Auth(ValidRoles.admin)
  @UseGuards(DepartamentoGuard)
  update(
    @Param("id") id: string,
    @Body() updateCiudadDto: UpdateCiudadDto,
    @DepartamentoDecorator() dpto
  ) {
    console.log(updateCiudadDto);
    return this.ciudadService.update(+id, updateCiudadDto, dpto);
  }

  @Delete(":id")
  @Auth(ValidRoles.admin)
  remove(@Param("id") id: string) {
    return this.ciudadService.remove(+id);
  }
}
