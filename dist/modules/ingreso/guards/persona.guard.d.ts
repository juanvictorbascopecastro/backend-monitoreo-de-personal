import { CanActivate, ExecutionContext } from "@nestjs/common";
import { PersonaService } from "src/modules/persona/persona.service";
export declare class PersonaGuard implements CanActivate {
    private readonly personaService;
    constructor(personaService: PersonaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
