import { Ingreso } from "src/modules/ingreso/entities/ingreso.entity";
import { Persona } from "src/modules/persona/entities";
export declare class Ubicacion {
    id: number;
    fecha: Date;
    longitud: string;
    latitud: string;
    bateria: string;
    detalles: string;
    ingreso: Ingreso;
    persona: Persona;
}
