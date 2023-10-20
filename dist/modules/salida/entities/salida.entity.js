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
exports.Salida = void 0;
const ingreso_entity_1 = require("../../ingreso/entities/ingreso.entity");
const typeorm_1 = require("typeorm");
let Salida = class Salida {
};
exports.Salida = Salida;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Salida.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp with time zone",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Salida.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Salida.prototype, "detalles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ingreso_entity_1.Ingreso, (ubi) => ubi.salida, {
        eager: true,
        nullable: true,
    }),
    __metadata("design:type", ingreso_entity_1.Ingreso)
], Salida.prototype, "ingreso", void 0);
exports.Salida = Salida = __decorate([
    (0, typeorm_1.Entity)()
], Salida);
//# sourceMappingURL=salida.entity.js.map