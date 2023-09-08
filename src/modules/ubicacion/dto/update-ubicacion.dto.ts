import { PartialType } from "@nestjs/mapped-types";
import { CreateUbicacionDto } from "./create-ubicacion.dto";
import { IsNumber, IsString } from "class-validator";

export class UpdateUbicacionDto extends PartialType(CreateUbicacionDto) {
  @IsNumber()
  longitud: string;

  @IsNumber()
  latitud: string;

  @IsNumber()
  bateria: string;

  @IsNumber()
  id_ingreso: number;

  @IsNumber()
  id_persona: number;

  @IsString()
  detalles: string;
}
