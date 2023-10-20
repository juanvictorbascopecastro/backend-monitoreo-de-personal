"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaModule = void 0;
const common_1 = require("@nestjs/common");
const persona_controller_1 = require("./persona.controller");
const typeorm_1 = require("@nestjs/typeorm");
const persona_entity_1 = require("./entities/persona.entity");
const usuarios_entity_1 = require("./entities/usuarios.entity");
const auth_module_1 = require("./../auth/auth.module");
const ciudad_module_1 = require("../ciudad/ciudad.module");
const files_module_1 = require("../../files/files.module");
const persona_service_1 = require("./persona.service");
let PersonaModule = class PersonaModule {
};
exports.PersonaModule = PersonaModule;
exports.PersonaModule = PersonaModule = __decorate([
    (0, common_1.Module)({
        controllers: [persona_controller_1.PersonaController],
        providers: [persona_service_1.PersonaService],
        imports: [
            files_module_1.FilesModule,
            typeorm_1.TypeOrmModule.forFeature([persona_entity_1.Persona, usuarios_entity_1.Usuario]),
            auth_module_1.AuthModule,
            ciudad_module_1.CiudadModule,
        ],
        exports: [typeorm_1.TypeOrmModule, persona_service_1.PersonaService],
    })
], PersonaModule);
//# sourceMappingURL=persona.module.js.map