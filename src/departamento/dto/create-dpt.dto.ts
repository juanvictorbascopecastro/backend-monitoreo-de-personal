import { IsString, IsOptional } from "class-validator";
export class CreateDptoDto {
  @IsString({ message: "El nombre es de tipo string" })
  readonly nombre: string;
  @IsString()
  @IsOptional()
  readonly descripcion: string | null;
}
