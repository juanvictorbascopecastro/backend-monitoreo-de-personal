import { Persona } from "src/modules/persona/entities";
import { Departamento } from "../../departamento/entities/departamento.entity";
import { ZonasEstrategica } from "src/modules/zonas_estrategica/entities/zonas_estrategica.entity";
export declare class Ciudad {
    id: number;
    nombre: string;
    descripcion?: string;
    departamento: Departamento;
    persona: Persona;
    zonas: ZonasEstrategica;
}
