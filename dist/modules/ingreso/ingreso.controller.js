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
exports.IngresoController = void 0;
const common_1 = require("@nestjs/common");
const ingreso_service_1 = require("./ingreso.service");
const create_ingreso_dto_1 = require("./dto/create-ingreso.dto");
const update_ingreso_dto_1 = require("./dto/update-ingreso.dto");
const decorators_1 = require("../auth/decorators");
const persona_guard_1 = require("./guards/persona.guard");
const entities_1 = require("../persona/entities");
const persona_decorator_1 = require("./decorators/persona.decorator");
const zona_guard_1 = require("./guards/zona.guard");
const zona_decorator_1 = require("./decorators/zona.decorator");
const zonas_estrategica_entity_1 = require("../zonas_estrategica/entities/zonas_estrategica.entity");
let IngresoController = exports.IngresoController = class IngresoController {
    constructor(ingresoService) {
        this.ingresoService = ingresoService;
    }
    create(createIngresoDto, persona, zona) {
        return this.ingresoService.create(createIngresoDto, persona, zona);
    }
    update(id, updateIngresoDto, persona, zona) {
        return this.ingresoService.update(+id, updateIngresoDto, persona, zona);
    }
    findAll() {
        return this.ingresoService.findAll();
    }
    findOne(id) {
        return this.ingresoService.findOne(+id);
    }
    remove(id) {
        return this.ingresoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(),
    (0, common_1.UseGuards)(persona_guard_1.PersonaGuard, zona_guard_1.ZonaGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, persona_decorator_1.PersonaDecorator)()),
    __param(2, (0, zona_decorator_1.ZonaDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ingreso_dto_1.CreateIngresoDto,
        entities_1.Persona,
        zonas_estrategica_entity_1.ZonasEstrategica]),
    __metadata("design:returntype", void 0)
], IngresoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, decorators_1.Auth)(),
    (0, common_1.UseGuards)(persona_guard_1.PersonaGuard, zona_guard_1.ZonaGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, persona_decorator_1.PersonaDecorator)()),
    __param(3, (0, zona_decorator_1.ZonaDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ingreso_dto_1.UpdateIngresoDto,
        entities_1.Persona,
        zonas_estrategica_entity_1.ZonasEstrategica]),
    __metadata("design:returntype", void 0)
], IngresoController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IngresoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngresoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, decorators_1.Auth)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngresoController.prototype, "remove", null);
exports.IngresoController = IngresoController = __decorate([
    (0, common_1.Controller)("ingreso"),
    __metadata("design:paramtypes", [ingreso_service_1.IngresoService])
], IngresoController);
//# sourceMappingURL=ingreso.controller.js.map