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
exports.UbicacionController = void 0;
const common_1 = require("@nestjs/common");
const ubicacion_service_1 = require("./ubicacion.service");
const create_ubicacion_dto_1 = require("./dto/create-ubicacion.dto");
const update_ubicacion_dto_1 = require("./dto/update-ubicacion.dto");
const interface_1 = require("../auth/interface");
const decorators_1 = require("../auth/decorators");
const persona_guard_1 = require("../ingreso/guards/persona.guard");
const ingreso_decorators_1 = require("./decorators/ingreso.decorators");
const ingreso_entity_1 = require("../ingreso/entities/ingreso.entity");
const persona_decorator_1 = require("../ingreso/decorators/persona.decorator");
const entities_1 = require("../persona/entities");
const ingreso_guard_1 = require("./guards/ingreso.guard");
let UbicacionController = exports.UbicacionController = class UbicacionController {
    constructor(ubicacionService) {
        this.ubicacionService = ubicacionService;
    }
    create(createUbicacionDto, ingreso, persona) {
        return this.ubicacionService.create(createUbicacionDto, ingreso, persona);
    }
    update(id, updateUbicacionDto, ingreso, persona) {
        return this.ubicacionService.update(+id, updateUbicacionDto, ingreso, persona);
    }
    findAll() {
        return this.ubicacionService.findAll();
    }
    findPersona(id, fecha) {
        return this.ubicacionService.findPerson(+id, fecha);
    }
    findOne(id) {
        return this.ubicacionService.findOne(+id);
    }
    remove(id) {
        return this.ubicacionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    (0, common_1.UseGuards)(persona_guard_1.PersonaGuard, ingreso_guard_1.IngresoGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, ingreso_decorators_1.IngresoDecorator)()),
    __param(2, (0, persona_decorator_1.PersonaDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ubicacion_dto_1.CreateUbicacionDto,
        ingreso_entity_1.Ingreso,
        entities_1.Persona]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    (0, common_1.UseGuards)(persona_guard_1.PersonaGuard, ingreso_guard_1.IngresoGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, ingreso_decorators_1.IngresoDecorator)()),
    __param(3, (0, persona_decorator_1.PersonaDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ubicacion_dto_1.UpdateUbicacionDto,
        ingreso_entity_1.Ingreso,
        entities_1.Persona]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("persona/:id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Query)("fecha")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "findPersona", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "remove", null);
exports.UbicacionController = UbicacionController = __decorate([
    (0, common_1.Controller)("ubicacion"),
    __metadata("design:paramtypes", [ubicacion_service_1.UbicacionService])
], UbicacionController);
//# sourceMappingURL=ubicacion.controller.js.map