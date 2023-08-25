import { PartialType } from "@nestjs/mapped-types";
import { CreatePersonaDto } from "./create-persona.dto";
import {
  IsDate,
  IsEmail,
  IsIn,
  IsNumber,
  IsString,
  Matches,
  MinLength,
  Validate,
} from "class-validator";
import { IsBeforeToday } from "./validador";
import { ValidRoles } from "./../../auth/interface";

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

  @IsDate({ message: "¡La fecha de nacimiento debe ser una fecha válida!" })
  @Validate(IsBeforeToday)
  fecha_nacimiento: string;

  @IsIn([ValidRoles.admin, ValidRoles.usuario], {
    message: "¡El rol no es válido!",
  })
  rol: string;

  @IsNumber()
  id_ciudad: number;
}