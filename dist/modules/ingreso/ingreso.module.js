"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresoModule = void 0;
const common_1 = require("@nestjs/common");
const ingreso_service_1 = require("./ingreso.service");
const ingreso_controller_1 = require("./ingreso.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ingreso_entity_1 = require("./entities/ingreso.entity");
const auth_module_1 = require("../auth/auth.module");
const persona_module_1 = require("../persona/persona.module");
const zonas_estrategica_module_1 = require("../zonas_estrategica/zonas_estrategica.module");
let IngresoModule = class IngresoModule {
};
exports.IngresoModule = IngresoModule;
exports.IngresoModule = IngresoModule = __decorate([
    (0, common_1.Module)({
        controllers: [ingreso_controller_1.IngresoController],
        providers: [ingreso_service_1.IngresoService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ingreso_entity_1.Ingreso]),
            auth_module_1.AuthModule,
            persona_module_1.PersonaModule,
            zonas_estrategica_module_1.ZonasEstrategicaModule,
        ],
        exports: [typeorm_1.TypeOrmModule, ingreso_service_1.IngresoService],
    })
], IngresoModule);
//# sourceMappingURL=ingreso.module.js.map