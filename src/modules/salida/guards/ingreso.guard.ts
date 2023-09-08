import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { IngresoService } from "src/modules/ingreso/ingreso.service";

@Injectable()
export class IngresoGuard implements CanActivate {
  constructor(private readonly ingresoService: IngresoService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id_ingreso } = request.body;
    const ingreso = await this.ingresoService.findOne(id_ingreso);
    if (!ingreso)
      throw new NotFoundException(
        `El ingreso con el id ${id_ingreso} no existe!`
      );
    request.ingreso = ingreso;
    return true;
  }
}
