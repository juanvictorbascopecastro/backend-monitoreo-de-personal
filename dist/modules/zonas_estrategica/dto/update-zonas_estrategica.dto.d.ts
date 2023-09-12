import { CreateZonasEstrategicaDto } from "./create-zonas_estrategica.dto";
declare const UpdateZonasEstrategicaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateZonasEstrategicaDto>>;
export declare class UpdateZonasEstrategicaDto extends UpdateZonasEstrategicaDto_base {
    nombre: string;
    longitud: string;
    latitud: string;
    radio: string;
    id_ciudad: number;
}
export {};
