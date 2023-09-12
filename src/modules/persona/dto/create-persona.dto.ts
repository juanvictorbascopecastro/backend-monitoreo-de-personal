import {
  IsDate,
  IsEmail,
  IsIn,
  IsNotEmpty,
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
  @IsNotEmpty()
  nombre: string;

  @IsOptional()
  @IsString()
  apellido?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsString()
  @IsNotEmpty()
  ci?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail(
    {},
    { message: "El correo electrónico debe ser un correo electrónico!" }
  )
  email: string;

  @IsString()
  @IsNotEmpty()
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

  //@IsNumber()
  @IsNotEmpty({ message: "El id_ciudad es requerido!" })
  id_ciudad: number;
}
