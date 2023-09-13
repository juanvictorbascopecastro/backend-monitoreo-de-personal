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
exports.PersonaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const persona_entity_1 = require("./entities/persona.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const entities_1 = require("./entities");
const files_1 = require("./helpers/files");
let PersonaService = exports.PersonaService = class PersonaService {
    constructor(personaRepository, dataSource) {
        this.personaRepository = personaRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger("PersonaService");
    }
    async create(createPersonaDto, ciudad, file) {
        try {
            const foto = await (0, files_1.saveFiles)(file, "profiles");
            const { password, ...params } = createPersonaDto;
            const data = this.personaRepository.create({
                ...params,
                foto,
                password: bcrypt.hashSync(password, 10),
            });
            let user = null;
            if (params.rol) {
                user = new entities_1.Usuario();
                user.rol = params.rol;
                data.usuario = user;
            }
            data.ciudad = ciudad;
            await this.personaRepository.save(data);
            delete data.password;
            return data;
        }
        catch (err) {
            this.handleExceptions(err, createPersonaDto.email);
        }
    }
    async update(id, updatePersonaDto, ciudad, file) {
        try {
            const { id_ciudad, ...params } = updatePersonaDto;
            const values = { id: id, ...params };
            const userData = await this.personaRepository.findOneBy({ id });
            if (!userData) {
                throw new common_1.NotFoundException(`La persona con el id ${id} no existe!`);
            }
            if (file) {
                if (userData.foto)
                    await (0, files_1.removeFiles)(userData.foto);
                const foto = await (0, files_1.saveFiles)(file, "profiles");
                values.foto = foto;
            }
            Object.assign(userData, values);
            return await this.personaRepository.save(userData);
        }
        catch (error) {
            this.handleExceptions(error, updatePersonaDto.email);
        }
    }
    findAll() {
        try {
            return this.personaRepository.find({});
        }
        catch (err) {
            this.handleExceptions(err, null);
        }
    }
    async findOne(id) {
        const data = await this.personaRepository.findOneBy({ id });
        if (!data)
            throw new common_1.NotFoundException(`El usuario con el id ${id} no existe!`);
        return data;
    }
    async findByEmail(email) {
        const data = await this.personaRepository.findOne({ where: { email } });
        return data;
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data)
            throw new common_1.NotFoundException(`El usuario con el id ${id} no existe!`);
        this.personaRepository.remove(data);
        return data;
    }
    handleExceptions(err, val) {
        this.logger.error(err);
        if (err.code === "23505" && val) {
            throw new common_1.InternalServerErrorException(`Ya existe el correo ${val}!`);
        }
        if (err.message)
            throw new common_1.InternalServerErrorException(err.message);
        throw new common_1.InternalServerErrorException("Error con el servidor");
    }
};
exports.PersonaService = PersonaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(persona_entity_1.Persona)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], PersonaService);
//# sourceMappingURL=persona.service.js.map