import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSalidaDto {
  @IsNumber()
  id_ingreso: number;

  @IsString()
  @IsOptional()
  detalles: string;
}
