import { CreateDepartamentoDto } from "./dto/create-departamento.dto";
import { UpdateDepartamentoDto } from "./dto/update-departamento.dto";
import { Repository } from "typeorm";
import { Departamento } from "./entities/departamento.entity";
export declare class DepartamentoService {
    private readonly departamentoRepository;
    private readonly logger;
    constructor(departamentoRepository: Repository<Departamento>);
    create(createDepartamentoDto: CreateDepartamentoDto): Promise<Departamento>;
    findAll(): Promise<Departamento[]>;
    findOne(id: number): Promise<Departamento>;
    update(id: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<Departamento>;
    remove(id: number): Promise<Departamento>;
    private handleExceptions;
}
