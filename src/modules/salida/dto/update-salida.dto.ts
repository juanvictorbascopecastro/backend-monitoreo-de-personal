import { PartialType } from "@nestjs/mapped-types";
import { CreateSalidaDto } from "./create-salida.dto";
import { IsNumber, IsString } from "class-validator";

export class UpdateSalidaDto extends PartialType(CreateSalidaDto) {
  @IsNumber()
  id_ingreso: number;

  @IsString()
  detalles: string;
}
