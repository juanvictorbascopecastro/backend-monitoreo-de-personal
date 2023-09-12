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
exports.Ubicacion = void 0;
const ingreso_entity_1 = require("../../ingreso/entities/ingreso.entity");
const entities_1 = require("../../persona/entities");
const typeorm_1 = require("typeorm");
let Ubicacion = exports.Ubicacion = class Ubicacion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ubicacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp with time zone",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Ubicacion.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0, nullable: false }),
    __metadata("design:type", String)
], Ubicacion.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "double precision", default: 0, nullable: false }),
    __metadata("design:type", String)
], Ubicacion.prototype, "latitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float", nullable: true }),
    __metadata("design:type", String)
], Ubicacion.prototype, "bateria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Ubicacion.prototype, "detalles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ingreso_entity_1.Ingreso, (ubi) => ubi.ubicacion, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", ingreso_entity_1.Ingreso)
], Ubicacion.prototype, "ingreso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.Persona, (ubi) => ubi.ubicacion, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", entities_1.Persona)
], Ubicacion.prototype, "persona", void 0);
exports.Ubicacion = Ubicacion = __decorate([
    (0, typeorm_1.Entity)()
], Ubicacion);
//# sourceMappingURL=ubicacion.entity.js.map