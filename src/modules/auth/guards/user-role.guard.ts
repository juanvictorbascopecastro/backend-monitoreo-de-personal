import { Reflector } from "@nestjs/core";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadRequestException,
  ForbiddenException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { METADATA_ROLES } from "../decorators/role-protected.decorator";

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(
      METADATA_ROLES,
      context.getHandler()
    );
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    if (!user) throw new BadRequestException("User not found!");
    if (user) {
      if (!validRoles) return true;
      if (validRoles.length <= 0) return true;
    }
    if (user && !user.usuario)
      throw new ForbiddenException(
        `¡El usuario ${user.nombre} ${
          user.apellido || ""
        } debe ser el rol '${validRoles.join(", ")}' para realizar esta acción!`
      );
    if (validRoles.includes(user.usuario.rol)) return true;
    else
      throw new ForbiddenException(
        `¡El usuario ${user.nombre} ${
          user.apellido || ""
        } debe ser el rol '${validRoles.join(", ")}' para realizar esta acción!`
      );
  }
}
