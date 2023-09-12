import { CreateIngresoDto } from "./dto/create-ingreso.dto";
import { UpdateIngresoDto } from "./dto/update-ingreso.dto";
import { Ingreso } from "./entities/ingreso.entity";
import { DataSource, Repository } from "typeorm";
import { Persona } from "../persona/entities";
import { ZonasEstrategica } from "../zonas_estrategica/entities/zonas_estrategica.entity";
export declare class IngresoService {
    private readonly ingresoRepository;
    private readonly dataSource;
    private readonly logger;
    constructor(ingresoRepository: Repository<Ingreso>, dataSource: DataSource);
    create(createIngresoDto: CreateIngresoDto, persona: Persona, zona: ZonasEstrategica): Promise<Ingreso>;
    update(id: number, updateIngresoDto: UpdateIngresoDto, persona: Persona, zona: ZonasEstrategica): Promise<Ingreso>;
    findAll(): Promise<Ingreso[]>;
    findOne(id: number): Promise<Ingreso>;
    remove(id: number): Promise<Ingreso>;
    private handleExceptions;
}
