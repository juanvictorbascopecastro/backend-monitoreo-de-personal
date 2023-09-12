import { CreateSalidaDto } from "./dto/create-salida.dto";
import { UpdateSalidaDto } from "./dto/update-salida.dto";
import { Salida } from "./entities/salida.entity";
import { DataSource, Repository } from "typeorm";
import { Ingreso } from "../ingreso/entities/ingreso.entity";
export declare class SalidaService {
    private readonly salidaRepository;
    private readonly dataSource;
    private readonly logger;
    constructor(salidaRepository: Repository<Salida>, dataSource: DataSource);
    create(createSalidaDto: CreateSalidaDto, ingreso: Ingreso): Promise<any>;
    update(id: number, updateSalidaDto: UpdateSalidaDto, ingreso: Ingreso): Promise<any>;
    findOne(id: number): Promise<any>;
    remove(id: number): Promise<any>;
    private findByIngreso;
    private handleExceptions;
}
