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
exports.Persona = void 0;
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
const ingreso_entity_1 = require("../../ingreso/entities/ingreso.entity");
const ciudad_entity_1 = require("../../ciudad/entities/ciudad.entity");
const ubicacion_entity_1 = require("../../ubicacion/entities/ubicacion.entity");
let Persona = exports.Persona = class Persona {
    checkEmail() {
        if (!this.email) {
            this.email = "prueba";
        }
    }
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Persona.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Persona.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 150, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Persona.prototype, "ci", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 40, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Persona.prototype, "checkEmail", null);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100, unique: true }),
    __metadata("design:type", String)
], Persona.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 200, select: false }),
    __metadata("design:type", String)
], Persona.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bool", default: true }),
    __metadata("design:type", Boolean)
], Persona.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Persona.prototype, "checkFieldsBeforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Persona.prototype, "checkFieldsBeforeUpdate", null);
__decorate([
    (0, typeorm_1.OneToOne)(() => index_1.Usuario, (us) => us.persona, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", index_1.Usuario)
], Persona.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ciudad_entity_1.Ciudad, (dpto) => dpto.persona, {
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", ciudad_entity_1.Ciudad)
], Persona.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ingreso_entity_1.Ingreso, (ing) => ing.persona, { cascade: true }),
    __metadata("design:type", Array)
], Persona.prototype, "ingreso", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ubicacion_entity_1.Ubicacion, (ing) => ing.persona, { cascade: true }),
    __metadata("design:type", Array)
], Persona.prototype, "ubicacion", void 0);
exports.Persona = Persona = __decorate([
    (0, typeorm_1.Entity)()
], Persona);
//# sourceMappingURL=persona.entity.js.map