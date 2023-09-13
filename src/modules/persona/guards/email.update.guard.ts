import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ConflictException,
} from "@nestjs/common";
import { PersonaService } from "../persona.service";

@Injectable()
export class EmailUpdateGuard implements CanActivate {
  constructor(private readonly personaService: PersonaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { email } = request.body;
    const { id } = request.params;
    if (!email) return true;
    const persona = await this.personaService.findByEmail(email);
    if (persona && parseInt(id) !== persona.id)
      throw new ConflictException(
        `Ya existe una persona con el email ${email}!`
      );

    return true;
  }
}
