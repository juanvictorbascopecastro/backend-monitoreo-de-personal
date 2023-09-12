"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.DepartamentoDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.departamento;
});
//# sourceMappingURL=departamento.decorator.js.map