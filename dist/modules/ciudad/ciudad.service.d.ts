import { CreateCiudadDto } from "./dto/create-ciudad.dto";
import { UpdateCiudadDto } from "./dto/update-ciudad.dto";
import { DataSource, Repository } from "typeorm";
import { Ciudad } from "./entities/ciudad.entity";
import { Departamento } from "../departamento/entities/departamento.entity";
export declare class CiudadService {
    private readonly ciudadRepository;
    private readonly dataSource;
    private readonly logger;
    constructor(ciudadRepository: Repository<Ciudad>, dataSource: DataSource);
    create(createCiudadDto: CreateCiudadDto, departamento: Departamento): Promise<Ciudad>;
    update(id: number, updateCiudadDto: UpdateCiudadDto, departamento: Departamento): Promise<Ciudad>;
    findAll(): Promise<Ciudad[]>;
    findOne(id: number): Promise<Ciudad>;
    remove(id: number): Promise<Ciudad>;
    private handleExceptions;
}
