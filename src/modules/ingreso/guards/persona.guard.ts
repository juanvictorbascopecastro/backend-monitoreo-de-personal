import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PersonaService } from "src/modules/persona/persona.service";

@Injectable()
export class PersonaGuard implements CanActivate {
  constructor(private readonly personaService: PersonaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id_persona } = request.body;
    const persona = await this.personaService.findOne(id_persona);
    if (!persona)
      throw new NotFoundException(
        `La persona con el id ${id_persona} no existe!`
      );
    request.persona = persona;
    return true;
  }
}
