import { ValidRoles } from "../interface";
export declare const METADATA_ROLES = "roles";
export declare const RoleProtected: (...args: ValidRoles[]) => import("@nestjs/common").CustomDecorator<string>;
