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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonasEstrategicaController = void 0;
const common_1 = require("@nestjs/common");
const zonas_estrategica_service_1 = require("./zonas_estrategica.service");
const create_zonas_estrategica_dto_1 = require("./dto/create-zonas_estrategica.dto");
const update_zonas_estrategica_dto_1 = require("./dto/update-zonas_estrategica.dto");
const decorators_1 = require("../auth/decorators");
const interface_1 = require("../auth/interface");
const ciudad_guard_1 = require("../persona/guards/ciudad.guard");
const ciudad_decorator_1 = require("../persona/decorators/ciudad.decorator");
let ZonasEstrategicaController = exports.ZonasEstrategicaController = class ZonasEstrategicaController {
    constructor(zonasEstrategicaService) {
        this.zonasEstrategicaService = zonasEstrategicaService;
    }
    create(createZonasEstrategicaDto, ciudad) {
        return this.zonasEstrategicaService.create(createZonasEstrategicaDto, ciudad);
    }
    update(id, updateZonasEstrategicaDto, ciudad) {
        return this.zonasEstrategicaService.update(+id, updateZonasEstrategicaDto, ciudad);
    }
    findAll() {
        return this.zonasEstrategicaService.findAll();
    }
    findOne(id) {
        return this.zonasEstrategicaService.findOne(+id);
    }
    remove(id) {
        return this.zonasEstrategicaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    (0, common_1.UseGuards)(ciudad_guard_1.CiudadGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, ciudad_decorator_1.CiudadDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_zonas_estrategica_dto_1.CreateZonasEstrategicaDto, Object]),
    __metadata("design:returntype", void 0)
], ZonasEstrategicaController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    (0, common_1.UseGuards)(ciudad_guard_1.CiudadGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, ciudad_decorator_1.CiudadDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_zonas_estrategica_dto_1.UpdateZonasEstrategicaDto, Object]),
    __metadata("design:returntype", void 0)
], ZonasEstrategicaController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZonasEstrategicaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ZonasEstrategicaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ZonasEstrategicaController.prototype, "remove", null);
exports.ZonasEstrategicaController = ZonasEstrategicaController = __decorate([
    (0, common_1.Controller)("zonas-estrategica"),
    __metadata("design:paramtypes", [zonas_estrategica_service_1.ZonasEstrategicaService])
], ZonasEstrategicaController);
//# sourceMappingURL=zonas_estrategica.controller.js.map