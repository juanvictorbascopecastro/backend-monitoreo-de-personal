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
exports.PersonaGuard = void 0;
const common_1 = require("@nestjs/common");
const persona_service_1 = require("../../persona/persona.service");
let PersonaGuard = class PersonaGuard {
    constructor(personaService) {
        this.personaService = personaService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { id_persona } = request.body;
        const persona = await this.personaService.findOne(id_persona);
        if (!persona)
            throw new common_1.NotFoundException(`La persona con el id ${id_persona} no existe!`);
        request.persona = persona;
        return true;
    }
};
exports.PersonaGuard = PersonaGuard;
exports.PersonaGuard = PersonaGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [persona_service_1.PersonaService])
], PersonaGuard);
//# sourceMappingURL=persona.guard.js.map