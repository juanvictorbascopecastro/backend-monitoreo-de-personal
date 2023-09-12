import { UbicacionService } from "./ubicacion.service";
import { CreateUbicacionDto } from "./dto/create-ubicacion.dto";
import { UpdateUbicacionDto } from "./dto/update-ubicacion.dto";
import { Ingreso } from "../ingreso/entities/ingreso.entity";
import { Persona } from "../persona/entities";
export declare class UbicacionController {
    private readonly ubicacionService;
    constructor(ubicacionService: UbicacionService);
    create(createUbicacionDto: CreateUbicacionDto, ingreso: Ingreso, persona: Persona): Promise<import("./entities/ubicacion.entity").Ubicacion>;
    update(id: string, updateUbicacionDto: UpdateUbicacionDto, ingreso: Ingreso, persona: Persona): Promise<import("./entities/ubicacion.entity").Ubicacion>;
    findAll(): Promise<import("./entities/ubicacion.entity").Ubicacion[]>;
    findPersona(id: string, fecha: Date): Promise<any[]>;
    findOne(id: string): Promise<import("./entities/ubicacion.entity").Ubicacion>;
    remove(id: string): Promise<import("./entities/ubicacion.entity").Ubicacion>;
}
