import { CiudadService } from "./ciudad.service";
import { CreateCiudadDto } from "./dto/create-ciudad.dto";
import { UpdateCiudadDto } from "./dto/update-ciudad.dto";
export declare class CiudadController {
    private readonly ciudadService;
    constructor(ciudadService: CiudadService);
    create(createCiudadDto: CreateCiudadDto, dpto: any): Promise<import("./entities/ciudad.entity").Ciudad>;
    findAll(): Promise<import("./entities/ciudad.entity").Ciudad[]>;
    findOne(id: string): Promise<import("./entities/ciudad.entity").Ciudad>;
    update(id: string, updateCiudadDto: UpdateCiudadDto, dpto: any): Promise<import("./entities/ciudad.entity").Ciudad>;
    remove(id: string): Promise<import("./entities/ciudad.entity").Ciudad>;
}
