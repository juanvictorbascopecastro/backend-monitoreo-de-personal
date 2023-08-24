import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateIngresoDto {
  @IsNumber()
  id_persona: number;

  @IsNumber()
  id_zona: number;

  @IsOptional()
  @IsString()
  detalles: string;
}
