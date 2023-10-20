"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalidaModule = void 0;
const common_1 = require("@nestjs/common");
const salida_service_1 = require("./salida.service");
const salida_controller_1 = require("./salida.controller");
const typeorm_1 = require("@nestjs/typeorm");
const salida_entity_1 = require("./entities/salida.entity");
const ingreso_module_1 = require("../ingreso/ingreso.module");
const auth_module_1 = require("../auth/auth.module");
let SalidaModule = class SalidaModule {
};
exports.SalidaModule = SalidaModule;
exports.SalidaModule = SalidaModule = __decorate([
    (0, common_1.Module)({
        controllers: [salida_controller_1.SalidaController],
        providers: [salida_service_1.SalidaService],
        imports: [auth_module_1.AuthModule, typeorm_1.TypeOrmModule.forFeature([salida_entity_1.Salida]), ingreso_module_1.IngresoModule],
        exports: [typeorm_1.TypeOrmModule, salida_service_1.SalidaService],
    })
], SalidaModule);
//# sourceMappingURL=salida.module.js.map