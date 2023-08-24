import { IsOptional, IsString, MinLength } from "class-validator";
export class CreateDepartamentoDto {
  @IsString({ message: "El nombre es de tipo string!" })
  @MinLength(1)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
