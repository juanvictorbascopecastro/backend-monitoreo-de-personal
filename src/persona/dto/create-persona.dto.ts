import {
  IsDate,
  IsEmail,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  Validate,
} from "class-validator";
import { IsBeforeToday } from "./validador";
import { ValidRoles } from "./../../auth/interface";

export class CreatePersonaDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  apellido?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsString()
  @IsOptional()
  ci?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsString()
  @IsEmail(
    {},
    { message: "El correo electrónico debe ser un correo electrónico!" }
  )
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "La contraseña debe tener mayúsculas, minúsculas y un número",
  })
  password: string;

  @IsOptional()
  @IsDate({ message: "¡La fecha de nacimiento debe ser una fecha válida!" })
  @Validate(IsBeforeToday)
  fecha_nacimiento: string;

  @IsOptional()
  @IsIn([ValidRoles.admin, ValidRoles.usuario], {
    message: "¡El rol no es válido!",
  })
  rol: string;

  @IsNumber()
  id_ciudad: number;
}
