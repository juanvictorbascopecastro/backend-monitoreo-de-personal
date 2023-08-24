import { PartialType } from "@nestjs/mapped-types";
import { CreateIngresoDto } from "./create-ingreso.dto";
import { IsNumber, IsString } from "class-validator";

export class UpdateIngresoDto extends PartialType(CreateIngresoDto) {
  @IsNumber()
  id_persona: number;

  @IsNumber()
  id_zona: number;

  @IsString()
  detalles: string;
}
