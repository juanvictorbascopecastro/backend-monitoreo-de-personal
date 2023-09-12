import { CanActivate, ExecutionContext } from "@nestjs/common";
import { CiudadService } from "src/modules/ciudad/ciudad.service";
export declare class CiudadGuard implements CanActivate {
    private readonly ciudadService;
    constructor(ciudadService: CiudadService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
