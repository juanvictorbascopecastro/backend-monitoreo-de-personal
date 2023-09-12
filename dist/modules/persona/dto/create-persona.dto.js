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
exports.CreatePersonaDto = void 0;
const class_validator_1 = require("class-validator");
const validador_1 = require("./validador");
const interface_1 = require("./../../auth/interface");
class CreatePersonaDto {
}
exports.CreatePersonaDto = CreatePersonaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "ci", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({}, { message: "El correo electrónico debe ser un correo electrónico!" }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.Matches)(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "La contraseña debe tener mayúsculas, minúsculas y un número",
    }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({ message: "¡La fecha de nacimiento debe ser una fecha válida!" }),
    (0, class_validator_1.Validate)(validador_1.IsBeforeToday),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario], {
        message: "¡El rol no es válido!",
    }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "rol", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "El id_ciudad es requerido!" }),
    __metadata("design:type", Number)
], CreatePersonaDto.prototype, "id_ciudad", void 0);
//# sourceMappingURL=create-persona.dto.js.map