import { UseGuards, applyDecorators } from "@nestjs/common";
import { ValidRoles } from "../interface";
import { RoleProtected } from "./index";
import { AuthGuard } from "@nestjs/passport";
import { UserRoleGuard } from "../guards/user-role.guard";

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(
      AuthGuard() /* Define el usuario actual en base al token */,
      UserRoleGuard /* Verifica que solo los tipos de usuarios realicen esta accion */
    )
  );
}
