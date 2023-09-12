import { ZonasEstrategicaService } from "./zonas_estrategica.service";
import { CreateZonasEstrategicaDto } from "./dto/create-zonas_estrategica.dto";
import { UpdateZonasEstrategicaDto } from "./dto/update-zonas_estrategica.dto";
export declare class ZonasEstrategicaController {
    private readonly zonasEstrategicaService;
    constructor(zonasEstrategicaService: ZonasEstrategicaService);
    create(createZonasEstrategicaDto: CreateZonasEstrategicaDto, ciudad: any): Promise<import("./entities/zonas_estrategica.entity").ZonasEstrategica>;
    update(id: string, updateZonasEstrategicaDto: UpdateZonasEstrategicaDto, ciudad: any): Promise<import("./entities/zonas_estrategica.entity").ZonasEstrategica>;
    findAll(): Promise<import("./entities/zonas_estrategica.entity").ZonasEstrategica[]>;
    findOne(id: string): Promise<import("./entities/zonas_estrategica.entity").ZonasEstrategica>;
    remove(id: string): Promise<import("./entities/zonas_estrategica.entity").ZonasEstrategica>;
}
