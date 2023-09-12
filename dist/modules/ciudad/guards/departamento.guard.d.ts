import { CanActivate, ExecutionContext } from "@nestjs/common";
import { DepartamentoService } from "src/modules/departamento/departamento.service";
export declare class DepartamentoGuard implements CanActivate {
    private readonly departamentoService;
    constructor(departamentoService: DepartamentoService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
