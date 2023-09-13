import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ConflictException,
} from "@nestjs/common";
import { PersonaService } from "../persona.service";

@Injectable()
export class EmailSaveGuard implements CanActivate {
  constructor(private readonly personaService: PersonaService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { email } = request.body;
    if (!email) throw new ConflictException(`Email es requerido!`);
    const persona = await this.personaService.findByEmail(email);
    if (persona)
      throw new ConflictException(
        `Ya existe una persona con el email ${email}!`
      );

    return true;
  }
}
