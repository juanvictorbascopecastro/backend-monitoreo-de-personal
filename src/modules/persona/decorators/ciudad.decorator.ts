import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Ciudad } from "src/modules/ciudad/entities/ciudad.entity";

export const CiudadDecorator = createParamDecorator(
  (data: string, ctx: ExecutionContext): Ciudad => {
    const req = ctx.switchToHttp().getRequest();
    return req.ciudad;
  }
);
