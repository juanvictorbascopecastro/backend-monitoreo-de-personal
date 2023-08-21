import { PartialType } from "@nestjs/mapped-types";
import { CreateReportarseDto } from "./create-reportarse.dto";
import { IsArray, IsNumber, IsString } from "class-validator";

export class UpdateReportarseDto extends PartialType(CreateReportarseDto) {
  @IsNumber()
  id_persona?: number;

  @IsString()
  comentario?: string;

  @IsArray({ message: "imagenes es de tipo arreglo de string!" })
  @IsString({ each: true })
  imagenes?: string[];
}
