import { IngresoService } from "./ingreso.service";
import { CreateIngresoDto } from "./dto/create-ingreso.dto";
import { UpdateIngresoDto } from "./dto/update-ingreso.dto";
import { Persona } from "../persona/entities";
import { ZonasEstrategica } from "../zonas_estrategica/entities/zonas_estrategica.entity";
export declare class IngresoController {
    private readonly ingresoService;
    constructor(ingresoService: IngresoService);
    create(createIngresoDto: CreateIngresoDto, persona: Persona, zona: ZonasEstrategica): Promise<import("./entities/ingreso.entity").Ingreso>;
    update(id: string, updateIngresoDto: UpdateIngresoDto, persona: Persona, zona: ZonasEstrategica): Promise<import("./entities/ingreso.entity").Ingreso>;
    findAll(): Promise<import("./entities/ingreso.entity").Ingreso[]>;
    findOne(id: string): Promise<import("./entities/ingreso.entity").Ingreso>;
    remove(id: string): Promise<import("./entities/ingreso.entity").Ingreso>;
}
