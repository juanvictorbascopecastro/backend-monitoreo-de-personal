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
exports.UpdatePersonaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_persona_dto_1 = require("./create-persona.dto");
const class_validator_1 = require("class-validator");
const validador_1 = require("./validador");
const interface_1 = require("./../../auth/interface");
class UpdatePersonaDto extends (0, mapped_types_1.PartialType)(create_persona_dto_1.CreatePersonaDto) {
}
exports.UpdatePersonaDto = UpdatePersonaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePersonaDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePersonaDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePersonaDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePersonaDto.prototype, "ci", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePersonaDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: "¡La fecha de nacimiento debe ser una fecha válida!" }),
    (0, class_validator_1.Validate)(validador_1.IsBeforeToday),
    __metadata("design:type", String)
], UpdatePersonaDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsIn)([interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario], {
        message: "¡El rol no es válido!",
    }),
    __metadata("design:type", String)
], UpdatePersonaDto.prototype, "rol", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdatePersonaDto.prototype, "id_ciudad", void 0);
//# sourceMappingURL=update-persona.dto.js.map