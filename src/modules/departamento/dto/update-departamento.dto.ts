import { PartialType } from "@nestjs/mapped-types"; // las hace opcionales a todas
import { CreateDepartamentoDto } from "./create-departamento.dto";
import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateDepartamentoDto extends PartialType(CreateDepartamentoDto) {
  @IsString({ message: "El nombre es de tipo string!" })
  @MinLength(1)
  nombre: string;

  @IsOptional()
  descripcion?: string;
}
