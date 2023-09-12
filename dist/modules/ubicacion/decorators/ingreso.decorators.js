"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresoDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.IngresoDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.ingreso;
});
//# sourceMappingURL=ingreso.decorators.js.map