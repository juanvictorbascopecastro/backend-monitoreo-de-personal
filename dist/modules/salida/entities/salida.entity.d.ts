import { Ingreso } from "src/modules/ingreso/entities/ingreso.entity";
export declare class Salida {
    id: number;
    fecha: Date;
    detalles: string;
    ingreso: Ingreso;
}
