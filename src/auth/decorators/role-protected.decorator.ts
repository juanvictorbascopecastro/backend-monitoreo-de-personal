import { SetMetadata } from "@nestjs/common";
import { ValidRoles } from "../interface";

export const METADATA_ROLES = "roles";
// mapea los tipos de roles validos
export const RoleProtected = (...args: ValidRoles[]) => {
  return SetMetadata(METADATA_ROLES, args);
};
