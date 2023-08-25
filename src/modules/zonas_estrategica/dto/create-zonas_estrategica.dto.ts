import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateZonasEstrategicaDto {
  @IsString()
  @IsNotEmpty({ message: "Nombre o descripcion de la zona es requerido!" })
  nombre: string;

  @IsNumber()
  @IsNotEmpty({ message: "longitud es requerido!" })
  longitud: string;

  @IsNumber()
  @IsNotEmpty({ message: "latitud es requerido!" })
  latitud: string;

  @IsNumber()
  @IsNotEmpty({ message: "radio es requerido!" })
  radio: string;

  @IsNumber()
  @IsNotEmpty({ message: "id_ciudad es requerido!" })
  id_ciudad: number;
}
