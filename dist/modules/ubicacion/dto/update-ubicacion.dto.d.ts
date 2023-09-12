import { CreateUbicacionDto } from "./create-ubicacion.dto";
declare const UpdateUbicacionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUbicacionDto>>;
export declare class UpdateUbicacionDto extends UpdateUbicacionDto_base {
    longitud: string;
    latitud: string;
    bateria: string;
    id_ingreso: number;
    id_persona: number;
    detalles: string;
}
export {};
