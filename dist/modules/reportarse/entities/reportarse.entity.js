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
exports.Reportarse = void 0;
const typeorm_1 = require("typeorm");
const reportarse_imagen_entity_1 = require("./reportarse.imagen.entity");
let Reportarse = class Reportarse {
};
exports.Reportarse = Reportarse;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reportarse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Reportarse.prototype, "id_persona", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Reportarse.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp with time zone",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Reportarse.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reportarse_imagen_entity_1.ReportarseImagen, (rI) => rI.reportarse, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Reportarse.prototype, "imagenes", void 0);
exports.Reportarse = Reportarse = __decorate([
    (0, typeorm_1.Entity)()
], Reportarse);
//# sourceMappingURL=reportarse.entity.js.map