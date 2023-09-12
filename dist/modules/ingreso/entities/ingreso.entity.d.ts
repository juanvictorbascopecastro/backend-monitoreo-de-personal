import { ZonasEstrategica } from "src/modules/zonas_estrategica/entities/zonas_estrategica.entity";
import { Persona } from "../../persona/entities";
import { Ubicacion } from "src/modules/ubicacion/entities/ubicacion.entity";
import { Salida } from "src/modules/salida/entities/salida.entity";
export declare class Ingreso {
    id: number;
    fecha: Date;
    detalles: string;
    persona: Persona;
    zona: ZonasEstrategica;
    ubicacion: Ubicacion[];
    salida: Salida;
}
