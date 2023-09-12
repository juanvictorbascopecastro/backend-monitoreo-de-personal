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
exports.IngresoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ingreso_entity_1 = require("./entities/ingreso.entity");
const typeorm_2 = require("typeorm");
let IngresoService = exports.IngresoService = class IngresoService {
    constructor(ingresoRepository, dataSource) {
        this.ingresoRepository = ingresoRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger("IngresoService");
    }
    async create(createIngresoDto, persona, zona) {
        try {
            const data = this.ingresoRepository.create({
                ...createIngresoDto,
                persona,
                zona,
            });
            await this.ingresoRepository.save(data);
            return await this.findOne(data.id);
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    async update(id, updateIngresoDto, persona, zona) {
        const { id_zona, id_persona, ...params } = updateIngresoDto;
        const data = await this.ingresoRepository.preload({
            id: id,
            ...params,
        });
        if (!data)
            throw new common_1.NotFoundException(`El ingreso con el id ${id} no existe!`);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            data.persona = persona;
            data.zona = zona;
            await queryRunner.manager.save(data);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return this.findOne(id);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            this.handleExceptions(error);
        }
    }
    findAll() {
        return this.ingresoRepository
            .createQueryBuilder("ingreso")
            .leftJoinAndSelect("ingreso.persona", "persona")
            .leftJoinAndSelect("persona.usuario", "usuario")
            .leftJoinAndSelect("ingreso.zona", "zona")
            .leftJoinAndSelect("ingreso.salida", "salida")
            .select([
            "ingreso.id",
            "ingreso.fecha",
            "ingreso.detalles",
            "salida.id",
            "salida.fecha",
            "salida.detalles",
            "persona.id",
            "persona.nombre",
            "persona.apellido",
            "persona.ci",
            "persona.telefono",
            "persona.email",
            "usuario.id",
            "usuario.rol",
            "zona.id",
            "zona.nombre",
            "zona.longitud",
            "zona.latitud",
            "zona.radio",
        ])
            .getMany();
    }
    async findOne(id) {
        const data = await this.ingresoRepository
            .createQueryBuilder("ingreso")
            .leftJoinAndSelect("ingreso.persona", "persona")
            .leftJoinAndSelect("persona.usuario", "usuario")
            .leftJoinAndSelect("ingreso.zona", "zona")
            .select([
            "ingreso.id",
            "ingreso.fecha",
            "ingreso.detalles",
            "persona.id",
            "persona.nombre",
            "persona.apellido",
            "persona.ci",
            "persona.telefono",
            "persona.email",
            "usuario.id",
            "usuario.rol",
            "zona.id",
            "zona.nombre",
            "zona.longitud",
            "zona.latitud",
            "zona.radio",
        ])
            .orderBy("ingreso.fecha", "DESC")
            .where("ingreso.id = :id", { id })
            .getOne();
        if (!data)
            throw new common_1.NotFoundException(`El ingreso con el id ${id} no existe!`);
        return data;
    }
    async remove(id) {
        const data = await this.ingresoRepository.findOneBy({ id });
        if (!data)
            throw new common_1.NotFoundException(`El ingreso con el id ${id} no existe!`);
        try {
            this.ingresoRepository.remove(data);
            return this.findOne(id);
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    handleExceptions(err) {
        this.logger.error(err);
        throw new common_1.InternalServerErrorException("Error con el servidor!");
    }
};
exports.IngresoService = IngresoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ingreso_entity_1.Ingreso)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], IngresoService);
//# sourceMappingURL=ingreso.service.js.map