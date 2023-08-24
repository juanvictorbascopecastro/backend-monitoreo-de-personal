import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { IngresoService } from "./ingreso.service";
import { CreateIngresoDto } from "./dto/create-ingreso.dto";
import { UpdateIngresoDto } from "./dto/update-ingreso.dto";
import { Auth } from "../auth/decorators";

@Controller("ingreso")
export class IngresoController {
  constructor(private readonly ingresoService: IngresoService) {}

  @Post()
  @Auth()
  create(@Body() createIngresoDto: CreateIngresoDto) {
    return this.ingresoService.create(createIngresoDto);
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

  @Patch(":id")
  @Auth()
  update(@Param("id") id: string, @Body() updateIngresoDto: UpdateIngresoDto) {
    return this.ingresoService.update(+id, updateIngresoDto);
  }

  @Delete(":id")
  @Auth()
  remove(@Param("id") id: string) {
    return this.ingresoService.remove(+id);
  }
}
