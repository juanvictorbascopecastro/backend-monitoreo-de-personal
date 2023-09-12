import { Usuario } from "./index";
import { Ingreso } from "src/modules/ingreso/entities/ingreso.entity";
import { Ciudad } from "src/modules/ciudad/entities/ciudad.entity";
import { Ubicacion } from "src/modules/ubicacion/entities/ubicacion.entity";
export declare class Persona {
    id: number;
    nombre: string;
    apellido?: string;
    direccion?: string;
    ci: string;
    telefono?: string;
    checkEmail(): void;
    email: string;
    password: string;
    fecha_nacimiento: string;
    foto?: string;
    estado: boolean;
    checkFieldsBeforeInsert(): void;
    checkFieldsBeforeUpdate(): void;
    usuario: Usuario;
    ciudad: Ciudad;
    ingreso: Ingreso[];
    ubicacion: Ubicacion[];
}
