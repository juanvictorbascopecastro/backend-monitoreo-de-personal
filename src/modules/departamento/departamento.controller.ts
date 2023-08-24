import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DepartamentoService } from "./departamento.service";
import { CreateDepartamentoDto } from "./dto/create-departamento.dto";
import { UpdateDepartamentoDto } from "./dto/update-departamento.dto";
import { Auth } from "../auth/decorators";
import { ValidRoles } from "../auth/interface";

@Controller("departamentos")
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.usuario)
  create(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentoService.create(createDepartamentoDto);
  }

  @Get()
  findAll() {
    return this.departamentoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.departamentoService.findOne(+id);
  }

  @Patch(":id")
  @Auth(ValidRoles.admin)
  update(
    @Param("id") id: string,
    @Body() updateDepartamentoDto: UpdateDepartamentoDto
  ) {
    return this.departamentoService.update(+id, updateDepartamentoDto);
  }

  @Delete(":id")
  @Auth(ValidRoles.admin)
  remove(@Param("id") id: string) {
    return this.departamentoService.remove(+id);
  }
}
