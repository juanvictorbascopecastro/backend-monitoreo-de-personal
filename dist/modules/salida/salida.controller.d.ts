import { SalidaService } from "./salida.service";
import { CreateSalidaDto } from "./dto/create-salida.dto";
import { UpdateSalidaDto } from "./dto/update-salida.dto";
import { Ingreso } from "../ingreso/entities/ingreso.entity";
export declare class SalidaController {
    private readonly salidaService;
    constructor(salidaService: SalidaService);
    create(createSalidaDto: CreateSalidaDto, ingreso: Ingreso): Promise<any>;
    update(id: string, updateSalidaDto: UpdateSalidaDto, ingreso: Ingreso): Promise<any>;
    findOne(id: string): Promise<any>;
    remove(id: string): Promise<any>;
}
