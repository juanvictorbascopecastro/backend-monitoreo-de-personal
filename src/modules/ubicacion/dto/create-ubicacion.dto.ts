import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUbicacionDto {
  @IsNumber()
  @IsNotEmpty({ message: "longitud es requerido!" })
  longitud: string;

  @IsNumber()
  @IsNotEmpty({ message: "latitud es requerido!" })
  latitud: string;

  @IsNumber()
  @IsNotEmpty({ message: "bateria es requerido!" })
  bateria: string;

  @IsNumber()
  @IsOptional()
  id_ingreso: number;

  @IsNumber()
  @IsNotEmpty({ message: "id_persona es requerido!" })
  id_persona: number;

  @IsOptional()
  @IsString()
  detalles: string;
}
