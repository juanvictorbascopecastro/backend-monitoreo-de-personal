import { DepartamentoService } from "./departamento.service";
import { CreateDepartamentoDto } from "./dto/create-departamento.dto";
import { UpdateDepartamentoDto } from "./dto/update-departamento.dto";
export declare class DepartamentoController {
    private readonly departamentoService;
    constructor(departamentoService: DepartamentoService);
    create(createDepartamentoDto: CreateDepartamentoDto): Promise<import("./entities/departamento.entity").Departamento>;
    findAll(): Promise<import("./entities/departamento.entity").Departamento[]>;
    findOne(id: string): Promise<import("./entities/departamento.entity").Departamento>;
    update(id: string, updateDepartamentoDto: UpdateDepartamentoDto): Promise<import("./entities/departamento.entity").Departamento>;
    remove(id: string): Promise<import("./entities/departamento.entity").Departamento>;
}
