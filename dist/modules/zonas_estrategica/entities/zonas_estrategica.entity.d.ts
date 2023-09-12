import { Ciudad } from "src/modules/ciudad/entities/ciudad.entity";
import { Ingreso } from "src/modules/ingreso/entities/ingreso.entity";
export declare class ZonasEstrategica {
    id: number;
    nombre: string;
    longitud: string;
    latitud: string;
    radio: string;
    ciudad: Ciudad;
    ingreso: Ingreso[];
}
