import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from "@nestjs/common";
import { Departamento } from "src/modules/departamento/entities/departamento.entity";

export const DepartamentoDecorator = createParamDecorator(
  (data: string, ctx: ExecutionContext): Departamento => {
    const req = ctx.switchToHttp().getRequest();
    return req.departamento;
  }
);
