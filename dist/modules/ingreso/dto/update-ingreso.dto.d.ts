import { CreateIngresoDto } from "./create-ingreso.dto";
declare const UpdateIngresoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateIngresoDto>>;
export declare class UpdateIngresoDto extends UpdateIngresoDto_base {
    id_persona: number;
    id_zona: number;
    detalles: string;
}
export {};
