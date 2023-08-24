import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateReportarseDto {
  @IsNumber()
  id_persona: number;

  @IsString()
  @IsOptional()
  comentario?: string;

  @IsOptional()
  @IsArray({ message: "imagenes es de tipo arreglo de string!" })
  @IsString({ each: true })
  imagenes?: string[];
}
