"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleGuard = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const role_protected_decorator_1 = require("../decorators/role-protected.decorator");
let UserRoleGuard = class UserRoleGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const validRoles = this.reflector.get(role_protected_decorator_1.METADATA_ROLES, context.getHandler());
        const req = context.switchToHttp().getRequest();
        const user = req.user;
        if (!user)
            throw new common_1.BadRequestException("User not found!");
        if (user) {
            if (!validRoles)
                return true;
            if (validRoles.length <= 0)
                return true;
        }
        if (user && !user.usuario)
            throw new common_1.ForbiddenException(`¡El usuario ${user.nombre} ${user.apellido || ""} debe ser el rol '${validRoles.join(", ")}' para realizar esta acción!`);
        if (validRoles.includes(user.usuario.rol))
            return true;
        else
            throw new common_1.ForbiddenException(`¡El usuario ${user.nombre} ${user.apellido || ""} debe ser el rol '${validRoles.join(", ")}' para realizar esta acción!`);
    }
};
exports.UserRoleGuard = UserRoleGuard;
exports.UserRoleGuard = UserRoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], UserRoleGuard);
//# sourceMappingURL=user-role.guard.js.map