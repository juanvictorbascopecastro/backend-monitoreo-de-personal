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
exports.CiudadController = void 0;
const common_1 = require("@nestjs/common");
const ciudad_service_1 = require("./ciudad.service");
const create_ciudad_dto_1 = require("./dto/create-ciudad.dto");
const update_ciudad_dto_1 = require("./dto/update-ciudad.dto");
const decorators_1 = require("../auth/decorators");
const interface_1 = require("../auth/interface");
const departamento_decorator_1 = require("./decorators/departamento.decorator");
const departamento_guard_1 = require("./guards/departamento.guard");
let CiudadController = class CiudadController {
    constructor(ciudadService) {
        this.ciudadService = ciudadService;
    }
    create(createCiudadDto, dpto) {
        return this.ciudadService.create(createCiudadDto, dpto);
    }
    findAll() {
        return this.ciudadService.findAll();
    }
    findOne(id) {
        return this.ciudadService.findOne(+id);
    }
    update(id, updateCiudadDto, dpto) {
        console.log(updateCiudadDto);
        return this.ciudadService.update(+id, updateCiudadDto, dpto);
    }
    remove(id) {
        return this.ciudadService.remove(+id);
    }
};
exports.CiudadController = CiudadController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    (0, common_1.UseGuards)(departamento_guard_1.DepartamentoGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, departamento_decorator_1.DepartamentoDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ciudad_dto_1.CreateCiudadDto, Object]),
    __metadata("design:returntype", void 0)
], CiudadController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CiudadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CiudadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    (0, common_1.UseGuards)(departamento_guard_1.DepartamentoGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, departamento_decorator_1.DepartamentoDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ciudad_dto_1.UpdateCiudadDto, Object]),
    __metadata("design:returntype", void 0)
], CiudadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CiudadController.prototype, "remove", null);
exports.CiudadController = CiudadController = __decorate([
    (0, common_1.Controller)("ciudades"),
    __metadata("design:paramtypes", [ciudad_service_1.CiudadService])
], CiudadController);
//# sourceMappingURL=ciudad.controller.js.map