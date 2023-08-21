import { PartialType } from "@nestjs/mapped-types";
import { CreatePersonaDto } from "./create-persona.dto";
import {
  IsEmail,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from "class-validator";

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
  @IsString()
  nombre: string;

  @IsString()
  apellido?: string;

  @IsString()
  direccion?: string;

  @IsString()
  ci?: string;

  @IsString()
  telefono?: string;

  @IsString()
  @IsEmail(
    {},
    { message: "El correo electrónico debe ser un correo electrónico!" }
  )
  email: string;

  @IsString()
  @MinLength(6, {
    message: "La contraseña debe tener mas o igual a 5 caracteres!",
  })
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "La contraseña debe tener mayúsculas, minúsculas y un número!",
  })
  password: string;

  fecha_nacimiento: string;

  @IsNumber()
  id_ciudad: number;
}
