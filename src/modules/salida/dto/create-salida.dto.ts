import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSalidaDto {
  @IsNumber()
  @IsNotEmpty({ message: "EL id_ingreso es requerido!" })
  id_ingreso: number;

  @IsString()
  @IsOptional()
  detalles: string;
}
