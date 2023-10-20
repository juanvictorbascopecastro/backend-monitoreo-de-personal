"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonasEstrategicaModule = void 0;
const common_1 = require("@nestjs/common");
const zonas_estrategica_service_1 = require("./zonas_estrategica.service");
const zonas_estrategica_controller_1 = require("./zonas_estrategica.controller");
const typeorm_1 = require("@nestjs/typeorm");
const zonas_estrategica_entity_1 = require("./entities/zonas_estrategica.entity");
const auth_module_1 = require("../auth/auth.module");
const ciudad_module_1 = require("../ciudad/ciudad.module");
let ZonasEstrategicaModule = class ZonasEstrategicaModule {
};
exports.ZonasEstrategicaModule = ZonasEstrategicaModule;
exports.ZonasEstrategicaModule = ZonasEstrategicaModule = __decorate([
    (0, common_1.Module)({
        controllers: [zonas_estrategica_controller_1.ZonasEstrategicaController],
        providers: [zonas_estrategica_service_1.ZonasEstrategicaService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([zonas_estrategica_entity_1.ZonasEstrategica]),
            auth_module_1.AuthModule,
            ciudad_module_1.CiudadModule,
        ],
        exports: [typeorm_1.TypeOrmModule, zonas_estrategica_service_1.ZonasEstrategicaService],
    })
], ZonasEstrategicaModule);
//# sourceMappingURL=zonas_estrategica.module.js.map