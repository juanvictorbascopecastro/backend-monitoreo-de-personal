"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoModule = void 0;
const common_1 = require("@nestjs/common");
const departamento_service_1 = require("./departamento.service");
const departamento_controller_1 = require("./departamento.controller");
const typeorm_1 = require("@nestjs/typeorm");
const departamento_entity_1 = require("./entities/departamento.entity");
const auth_module_1 = require("../auth/auth.module");
let DepartamentoModule = class DepartamentoModule {
};
exports.DepartamentoModule = DepartamentoModule;
exports.DepartamentoModule = DepartamentoModule = __decorate([
    (0, common_1.Module)({
        controllers: [departamento_controller_1.DepartamentoController],
        providers: [departamento_service_1.DepartamentoService],
        imports: [typeorm_1.TypeOrmModule.forFeature([departamento_entity_1.Departamento]), auth_module_1.AuthModule],
        exports: [typeorm_1.TypeOrmModule, departamento_service_1.DepartamentoService],
    })
], DepartamentoModule);
//# sourceMappingURL=departamento.module.js.map