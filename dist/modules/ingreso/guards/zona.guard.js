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
exports.ZonaGuard = void 0;
const common_1 = require("@nestjs/common");
const zonas_estrategica_service_1 = require("../../zonas_estrategica/zonas_estrategica.service");
let ZonaGuard = exports.ZonaGuard = class ZonaGuard {
    constructor(zonaEstrategicaService) {
        this.zonaEstrategicaService = zonaEstrategicaService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { id_zona } = request.body;
        const zona = await this.zonaEstrategicaService.findOne(id_zona);
        if (!zona)
            throw new common_1.NotFoundException(`La zona con el id ${id_zona} no existe!`);
        request.zona = zona;
        return true;
    }
};
exports.ZonaGuard = ZonaGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [zonas_estrategica_service_1.ZonasEstrategicaService])
], ZonaGuard);
//# sourceMappingURL=zona.guard.js.map