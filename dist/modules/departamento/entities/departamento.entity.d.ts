import { Ciudad } from "../../ciudad/entities/ciudad.entity";
export declare class Departamento {
    id: number;
    nombre: string;
    descripcion?: string;
    ciudad: Ciudad;
}
