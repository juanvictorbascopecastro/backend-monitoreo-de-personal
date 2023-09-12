"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonaDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.ZonaDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.zona;
});
//# sourceMappingURL=zona.decorator.js.map