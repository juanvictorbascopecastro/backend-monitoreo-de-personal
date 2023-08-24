import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
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
    request.departamento = departamento;
    return true;
  }
}
