import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class CreateCiudadDto {
  @IsString({ message: "El nombre es de tipo string!" })
  @MinLength(1)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNumber()
  @IsNotEmpty({ message: "El id_departamento es requerido!" })
  id_departamento: number;
}
