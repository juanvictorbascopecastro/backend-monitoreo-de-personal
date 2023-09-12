import { ReportarseImagen } from "./reportarse.imagen.entity";
export declare class Reportarse {
    id: number;
    id_persona: number;
    comentario?: string;
    fecha: Date;
    imagenes?: ReportarseImagen[];
}
