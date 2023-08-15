import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Patch,
  ParseIntPipe,
} from "@nestjs/common";
import { CreateDptoDto } from "./dto/create-dpt.dto";

@Controller("departamento")
export class DepartamentoController {
  @Get()
  getAll() {
    return ["Movil", "Camion"];
  }

  @Get(":id")
  getById(@Param("id", ParseIntPipe) id: number) {
    return "Movil";
  }

  @Post()
  create(@Body() data: CreateDptoDto) {
    return data;
  }
  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() data: CreateDptoDto) {
    return data;
  }
}
