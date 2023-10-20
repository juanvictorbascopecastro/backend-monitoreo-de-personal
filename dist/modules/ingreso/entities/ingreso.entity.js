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
exports.Ingreso = void 0;
const zonas_estrategica_entity_1 = require("../../zonas_estrategica/entities/zonas_estrategica.entity");
const entities_1 = require("../../persona/entities");
const typeorm_1 = require("typeorm");
const ubicacion_entity_1 = require("../../ubicacion/entities/ubicacion.entity");
const salida_entity_1 = require("../../salida/entities/salida.entity");
let Ingreso = class Ingreso {
};
exports.Ingreso = Ingreso;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ingreso.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp with time zone",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Ingreso.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Ingreso.prototype, "detalles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Persona, (per) => per.ingreso, {
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", entities_1.Persona)
], Ingreso.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zonas_estrategica_entity_1.ZonasEstrategica, (per) => per.ingreso, {
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", zonas_estrategica_entity_1.ZonasEstrategica)
], Ingreso.prototype, "zona", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ubicacion_entity_1.Ubicacion, (ing) => ing.ingreso, { cascade: true }),
    __metadata("design:type", Array)
], Ingreso.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => salida_entity_1.Salida, (sal) => sal.ingreso, { cascade: true }),
    __metadata("design:type", salida_entity_1.Salida)
], Ingreso.prototype, "salida", void 0);
exports.Ingreso = Ingreso = __decorate([
    (0, typeorm_1.Entity)()
], Ingreso);
//# sourceMappingURL=ingreso.entity.js.map