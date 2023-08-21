import { PartialType } from "@nestjs/mapped-types";
import { CreateCiudadDto } from "./create-ciudad.dto";
import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateCiudadDto extends PartialType(CreateCiudadDto) {
  @IsString({ message: "El nombre es de tipo string!" })
  @MinLength(1)
  @IsOptional()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNumber()
  @IsOptional()
  id_departamento: number;
}
