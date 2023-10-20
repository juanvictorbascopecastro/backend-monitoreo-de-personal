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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const typeorm_2 = require("@nestjs/typeorm");
const entities_1 = require("../persona/entities");
let AuthService = class AuthService {
    constructor(personaRepository, jwtService) {
        this.personaRepository = personaRepository;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger("AuthService");
    }
    async login(loginPersonDto) {
        const { password, email } = loginPersonDto;
        const user = await this.personaRepository
            .createQueryBuilder("persona")
            .leftJoinAndSelect("persona.usuario", "usuario")
            .where("persona.email = :email", { email })
            .select([
            "persona.id",
            "persona.nombre",
            "persona.apellido",
            "persona.email",
            "persona.password",
            "persona.estado",
            "persona.fecha_nacimiento",
            "persona.ci",
            "persona.telefono",
            "persona.foto",
            "persona.direccion",
            "usuario.id",
            "usuario.rol",
        ])
            .getOne();
        if (!user)
            throw new common_1.UnauthorizedException("Datos Incorrecto!");
        if (!bcrypt.compareSync(password, user.password))
            throw new common_1.UnauthorizedException("Datos Incorrecto!");
        delete user.password;
        return {
            ...user,
            token: this.getJwtToken({
                id: user.id,
                rol: user.usuario ? user.usuario.rol : "promotor",
            }),
        };
    }
    getProfile() {
        return `Obtener el perfil de usuario`;
    }
    updateProfile() {
        return `Editar el perfil de usuario`;
    }
    deleteProfile() {
        return `Eliminar su cuenta de usuario`;
    }
    getJwtToken(payload) {
        const token = this.jwtService.sign(payload);
        return token;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.Persona)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map