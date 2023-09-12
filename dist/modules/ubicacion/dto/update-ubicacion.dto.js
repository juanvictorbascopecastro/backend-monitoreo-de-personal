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
exports.UpdateUbicacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ubicacion_dto_1 = require("./create-ubicacion.dto");
const class_validator_1 = require("class-validator");
class UpdateUbicacionDto extends (0, mapped_types_1.PartialType)(create_ubicacion_dto_1.CreateUbicacionDto) {
}
exports.UpdateUbicacionDto = UpdateUbicacionDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], UpdateUbicacionDto.prototype, "longitud", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], UpdateUbicacionDto.prototype, "latitud", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], UpdateUbicacionDto.prototype, "bateria", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateUbicacionDto.prototype, "id_ingreso", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateUbicacionDto.prototype, "id_persona", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUbicacionDto.prototype, "detalles", void 0);
//# sourceMappingURL=update-ubicacion.dto.js.map