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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ciudad = void 0;
const entities_1 = require("../../persona/entities");
const departamento_entity_1 = require("../../departamento/entities/departamento.entity");
const typeorm_1 = require("typeorm");
const zonas_estrategica_entity_1 = require("../../zonas_estrategica/entities/zonas_estrategica.entity");
let Ciudad = class Ciudad {
};
exports.Ciudad = Ciudad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ciudad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Ciudad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar", length: 200 }),
    __metadata("design:type", String)
], Ciudad.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departamento_entity_1.Departamento, (dpto) => dpto.ciudad, {
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", departamento_entity_1.Departamento)
], Ciudad.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.Persona, (c) => c.ciudad, { cascade: false }),
    __metadata("design:type", entities_1.Persona)
], Ciudad.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => zonas_estrategica_entity_1.ZonasEstrategica, (c) => c.ciudad, { cascade: false }),
    __metadata("design:type", zonas_estrategica_entity_1.ZonasEstrategica)
], Ciudad.prototype, "zonas", void 0);
exports.Ciudad = Ciudad = __decorate([
    (0, typeorm_1.Entity)()
], Ciudad);
//# sourceMappingURL=ciudad.entity.js.map