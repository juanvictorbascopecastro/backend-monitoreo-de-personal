import { CreateUbicacionDto } from "./dto/create-ubicacion.dto";
import { UpdateUbicacionDto } from "./dto/update-ubicacion.dto";
import { Ubicacion } from "./entities/ubicacion.entity";
import { DataSource, Repository } from "typeorm";
import { Ingreso } from "../ingreso/entities/ingreso.entity";
import { Persona } from "../persona/entities";
export declare class UbicacionService {
    private readonly ubicacionRepository;
    private readonly dataSource;
    private readonly logger;
    constructor(ubicacionRepository: Repository<Ubicacion>, dataSource: DataSource);
    create(createUbicacionDto: CreateUbicacionDto, ingreso: Ingreso, persona: Persona): Promise<Ubicacion>;
    findAll(): Promise<Ubicacion[]>;
    findPerson(id: number, fecha: Date): Promise<any[]>;
    findOne(id: number): Promise<Ubicacion>;
    update(id: number, updateUbicacionDto: UpdateUbicacionDto, ingreso: Ingreso, persona: Persona): Promise<Ubicacion>;
    remove(id: number): Promise<Ubicacion>;
    private handleExceptions;
}
