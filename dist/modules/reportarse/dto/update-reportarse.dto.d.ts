import { CreateReportarseDto } from "./create-reportarse.dto";
declare const UpdateReportarseDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateReportarseDto>>;
export declare class UpdateReportarseDto extends UpdateReportarseDto_base {
    id_persona?: number;
    comentario?: string;
    imagenes?: string[];
}
export {};
