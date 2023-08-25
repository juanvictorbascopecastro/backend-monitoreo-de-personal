import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { ZonasEstrategica } from "src/modules/zonas_estrategica/entities/zonas_estrategica.entity";

export const ZonaDecorator = createParamDecorator(
  (data: string, ctx: ExecutionContext): ZonasEstrategica => {
    const req = ctx.switchToHttp().getRequest();
    return req.zona;
  }
);
