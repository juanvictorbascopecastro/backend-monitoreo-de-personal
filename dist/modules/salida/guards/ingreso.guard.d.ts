import { CanActivate, ExecutionContext } from "@nestjs/common";
import { IngresoService } from "src/modules/ingreso/ingreso.service";
export declare class IngresoGuard implements CanActivate {
    private readonly ingresoService;
    constructor(ingresoService: IngresoService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
