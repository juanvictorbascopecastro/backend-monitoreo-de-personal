import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CiudadService } from "src/modules/ciudad/ciudad.service";

@Injectable()
export class CiudadGuard implements CanActivate {
  constructor(private readonly ciudadService: CiudadService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id_ciudad } = request.body;
    const ciudad = await this.ciudadService.findOne(id_ciudad);
    if (!ciudad)
      throw new NotFoundException(
        `La ciudad con el id ${id_ciudad} no existe!`
      );
    request.ciudad = ciudad;
    return true;
  }
}
