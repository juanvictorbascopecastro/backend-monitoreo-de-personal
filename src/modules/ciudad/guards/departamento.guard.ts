import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { DepartamentoService } from "src/modules/departamento/departamento.service";

@Injectable()
export class DepartamentoGuard implements CanActivate {
  constructor(private readonly departamentoService: DepartamentoService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id_departamento } = request.body;
    const departamento = await this.departamentoService.findOne(
      id_departamento
    );
    if (!departamento)
      throw new NotFoundException(
        `El departamento con el id ${id_departamento} no existe!`
      );
    request.departamento = departamento;
    return true;
  }
}
