import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ZonasEstrategicaService } from "src/modules/zonas_estrategica/zonas_estrategica.service";
export declare class ZonaGuard implements CanActivate {
    private readonly zonaEstrategicaService;
    constructor(zonaEstrategicaService: ZonasEstrategicaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
