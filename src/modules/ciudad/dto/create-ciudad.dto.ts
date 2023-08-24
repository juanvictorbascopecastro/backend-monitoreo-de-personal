import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateCiudadDto {
  @IsString({ message: "El nombre es de tipo string!" })
  @MinLength(1)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNumber()
  id_departamento: number;
}
