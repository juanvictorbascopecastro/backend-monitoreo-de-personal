import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Ingreso } from "src/modules/ingreso/entities/ingreso.entity";

export const IngresoDecorator = createParamDecorator(
  (data: string, ctx: ExecutionContext): Ingreso => {
    const req = ctx.switchToHttp().getRequest();
    return req.ingreso;
  }
);
