import { CreatePersonaDto } from "./create-persona.dto";
declare const UpdatePersonaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePersonaDto>>;
export declare class UpdatePersonaDto extends UpdatePersonaDto_base {
    nombre: string;
    apellido?: string;
    direccion?: string;
    ci?: string;
    telefono?: string;
    fecha_nacimiento: string;
    rol: string;
    id_ciudad: number;
}
export {};
