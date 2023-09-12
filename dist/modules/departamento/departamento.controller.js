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
exports.DepartamentoController = void 0;
const common_1 = require("@nestjs/common");
const departamento_service_1 = require("./departamento.service");
const create_departamento_dto_1 = require("./dto/create-departamento.dto");
const update_departamento_dto_1 = require("./dto/update-departamento.dto");
const decorators_1 = require("../auth/decorators");
const interface_1 = require("../auth/interface");
let DepartamentoController = exports.DepartamentoController = class DepartamentoController {
    constructor(departamentoService) {
        this.departamentoService = departamentoService;
    }
    create(createDepartamentoDto) {
        return this.departamentoService.create(createDepartamentoDto);
    }
    findAll() {
        return this.departamentoService.findAll();
    }
    findOne(id) {
        return this.departamentoService.findOne(+id);
    }
    update(id, updateDepartamentoDto) {
        return this.departamentoService.update(+id, updateDepartamentoDto);
    }
    remove(id) {
        return this.departamentoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_departamento_dto_1.CreateDepartamentoDto]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_departamento_dto_1.UpdateDepartamentoDto]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "remove", null);
exports.DepartamentoController = DepartamentoController = __decorate([
    (0, common_1.Controller)("departamentos"),
    __metadata("design:paramtypes", [departamento_service_1.DepartamentoService])
], DepartamentoController);
//# sourceMappingURL=departamento.controller.js.map