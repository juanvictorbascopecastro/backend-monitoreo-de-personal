import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from "class-validator";

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

  fecha_nacimiento: string;

  @IsNumber()
  id_ciudad: number;
}

// const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// return expresionRegular.test(this.email);
