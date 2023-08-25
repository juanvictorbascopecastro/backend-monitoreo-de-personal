import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { ZonasEstrategicaService } from "src/modules/zonas_estrategica/zonas_estrategica.service";

@Injectable()
export class ZonaGuard implements CanActivate {
  constructor(
    private readonly zonaEstrategicaService: ZonasEstrategicaService
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id_zona } = request.body;
    const zona = await this.zonaEstrategicaService.findOne(id_zona);
    if (!zona)
      throw new NotFoundException(`La zona con el id ${id_zona} no existe!`);
    request.zona = zona;
    return true;
  }
}
