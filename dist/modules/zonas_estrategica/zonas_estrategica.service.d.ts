import { CreateZonasEstrategicaDto } from "./dto/create-zonas_estrategica.dto";
import { UpdateZonasEstrategicaDto } from "./dto/update-zonas_estrategica.dto";
import { Ciudad } from "../ciudad/entities/ciudad.entity";
import { ZonasEstrategica } from "./entities/zonas_estrategica.entity";
import { DataSource, Repository } from "typeorm";
export declare class ZonasEstrategicaService {
    private readonly zonasEstrategicaRepository;
    private readonly dataSource;
    private readonly logger;
    constructor(zonasEstrategicaRepository: Repository<ZonasEstrategica>, dataSource: DataSource);
    create(createZonasEstrategicaDto: CreateZonasEstrategicaDto, ciudad: Ciudad): Promise<ZonasEstrategica>;
    findAll(): Promise<ZonasEstrategica[]>;
    findOne(id: number): Promise<ZonasEstrategica>;
    update(id: number, updateZonasEstrategicaDto: UpdateZonasEstrategicaDto, ciudad: Ciudad): Promise<ZonasEstrategica>;
    remove(id: number): Promise<ZonasEstrategica>;
    private handleExceptions;
}
