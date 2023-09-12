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
exports.SalidaController = void 0;
const common_1 = require("@nestjs/common");
const salida_service_1 = require("./salida.service");
const create_salida_dto_1 = require("./dto/create-salida.dto");
const update_salida_dto_1 = require("./dto/update-salida.dto");
const interface_1 = require("../auth/interface");
const decorators_1 = require("../auth/decorators");
const ingreso_guard_1 = require("../salida/guards/ingreso.guard");
const ingreso_decorators_1 = require("../ubicacion/decorators/ingreso.decorators");
const ingreso_entity_1 = require("../ingreso/entities/ingreso.entity");
let SalidaController = exports.SalidaController = class SalidaController {
    constructor(salidaService) {
        this.salidaService = salidaService;
    }
    create(createSalidaDto, ingreso) {
        return this.salidaService.create(createSalidaDto, ingreso);
    }
    update(id, updateSalidaDto, ingreso) {
        return this.salidaService.update(+id, updateSalidaDto, ingreso);
    }
    findOne(id) {
        return this.salidaService.findOne(+id);
    }
    remove(id) {
        return this.salidaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    (0, common_1.UseGuards)(ingreso_guard_1.IngresoGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, ingreso_decorators_1.IngresoDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_salida_dto_1.CreateSalidaDto,
        ingreso_entity_1.Ingreso]),
    __metadata("design:returntype", void 0)
], SalidaController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    (0, common_1.UseGuards)(ingreso_guard_1.IngresoGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, ingreso_decorators_1.IngresoDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_salida_dto_1.UpdateSalidaDto,
        ingreso_entity_1.Ingreso]),
    __metadata("design:returntype", void 0)
], SalidaController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalidaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalidaController.prototype, "remove", null);
exports.SalidaController = SalidaController = __decorate([
    (0, common_1.Controller)("salida"),
    __metadata("design:paramtypes", [salida_service_1.SalidaService])
], SalidaController);
//# sourceMappingURL=salida.controller.js.map