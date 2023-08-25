import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Persona } from "src/modules/persona/entities";

export const PersonaDecorator = createParamDecorator(
  (data: string, ctx: ExecutionContext): Persona => {
    const req = ctx.switchToHttp().getRequest();
    return req.persona;
  }
);
