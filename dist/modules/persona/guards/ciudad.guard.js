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
exports.CiudadGuard = void 0;
const common_1 = require("@nestjs/common");
const ciudad_service_1 = require("../../ciudad/ciudad.service");
let CiudadGuard = class CiudadGuard {
    constructor(ciudadService) {
        this.ciudadService = ciudadService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { id_ciudad } = request.body;
        const ciudad = await this.ciudadService.findOne(id_ciudad);
        if (!ciudad) {
            throw new common_1.NotFoundException(`La ciudad con el id ${id_ciudad} no existe!`);
        }
        request.ciudad = ciudad;
        return true;
    }
};
exports.CiudadGuard = CiudadGuard;
exports.CiudadGuard = CiudadGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ciudad_service_1.CiudadService])
], CiudadGuard);
//# sourceMappingURL=ciudad.guard.js.map