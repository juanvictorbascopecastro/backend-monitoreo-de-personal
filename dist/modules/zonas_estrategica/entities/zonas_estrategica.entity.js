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
exports.ZonasEstrategica = void 0;
const ciudad_entity_1 = require("../../ciudad/entities/ciudad.entity");
const ingreso_entity_1 = require("../../ingreso/entities/ingreso.entity");
const typeorm_1 = require("typeorm");
let ZonasEstrategica = exports.ZonasEstrategica = class ZonasEstrategica {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ZonasEstrategica.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], ZonasEstrategica.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0 }),
    __metadata("design:type", String)
], ZonasEstrategica.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0 }),
    __metadata("design:type", String)
], ZonasEstrategica.prototype, "latitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", default: 0 }),
    __metadata("design:type", String)
], ZonasEstrategica.prototype, "radio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ciudad_entity_1.Ciudad, (dpto) => dpto.zonas, {
        nullable: false,
        eager: false,
    }),
    __metadata("design:type", ciudad_entity_1.Ciudad)
], ZonasEstrategica.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ingreso_entity_1.Ingreso, (ing) => ing.zona, { cascade: true }),
    __metadata("design:type", Array)
], ZonasEstrategica.prototype, "ingreso", void 0);
exports.ZonasEstrategica = ZonasEstrategica = __decorate([
    (0, typeorm_1.Entity)()
], ZonasEstrategica);
//# sourceMappingURL=zonas_estrategica.entity.js.map