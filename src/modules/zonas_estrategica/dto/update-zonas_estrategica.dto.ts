import { PartialType } from "@nestjs/mapped-types";
import { CreateZonasEstrategicaDto } from "./create-zonas_estrategica.dto";
import { IsNumber, IsString } from "class-validator";

export class UpdateZonasEstrategicaDto extends PartialType(
  CreateZonasEstrategicaDto
) {
  @IsString()
  nombre: string;

  @IsNumber()
  longitud: string;

  @IsNumber()
  latitud: string;

  @IsNumber()
  radio: string;

  @IsNumber()
  id_ciudad: number;
}
