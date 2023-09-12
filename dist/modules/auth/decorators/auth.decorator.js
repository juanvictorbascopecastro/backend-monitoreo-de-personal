"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("./index");
const passport_1 = require("@nestjs/passport");
const user_role_guard_1 = require("../guards/user-role.guard");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, index_1.RoleProtected)(...roles), (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map