"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.PersonaDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.persona;
});
//# sourceMappingURL=persona.decorator.js.map