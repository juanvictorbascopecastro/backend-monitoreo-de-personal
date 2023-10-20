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
exports.UbicacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ubicacion_entity_1 = require("./entities/ubicacion.entity");
const typeorm_2 = require("typeorm");
let UbicacionService = class UbicacionService {
    constructor(ubicacionRepository, dataSource) {
        this.ubicacionRepository = ubicacionRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger("UbicacionService");
    }
    async create(createUbicacionDto, ingreso, persona) {
        try {
            const data = this.ubicacionRepository.create({
                ...createUbicacionDto,
                persona,
                ingreso,
            });
            await this.ubicacionRepository.save(data);
            return await this.findOne(data.id);
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    findAll() {
        return this.ubicacionRepository.find({});
    }
    async findPerson(id, fecha) {
        let whereQuery = "persona.id = :id";
        const paramsQuery = { id };
        if (fecha) {
            whereQuery = whereQuery + " AND DATE(ubicacion.fecha) = DATE(:fecha)";
            paramsQuery.fecha = fecha;
        }
        return await this.ubicacionRepository
            .createQueryBuilder("ubicacion")
            .leftJoinAndSelect("ubicacion.persona", "persona")
            .leftJoinAndSelect("persona.usuario", "usuario")
            .select([
            "ubicacion.id AS id",
            "ubicacion.fecha AS fecha",
            "ubicacion.detalles AS detalles",
            "ubicacion.longitud AS longitud",
            "ubicacion.latitud AS latitud",
            "ubicacion.bateria AS bateria",
            "persona.id AS id_persona",
        ])
            .where(whereQuery, paramsQuery)
            .orderBy("ubicacion.fecha", "DESC")
            .getRawMany();
    }
    async findOne(id) {
        const data = await this.ubicacionRepository.findOneBy({ id });
        if (!data)
            throw new common_1.NotFoundException(`El registro de ubicacion con el id ${id} no existe!`);
        return data;
    }
    async update(id, updateUbicacionDto, ingreso, persona) {
        const { id_ingreso, id_persona, ...params } = updateUbicacionDto;
        const data = await this.ubicacionRepository.preload({
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
            data.ingreso = ingreso;
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
    async remove(id) {
        const data = await this.findOne(id);
        if (!data)
            throw new common_1.NotFoundException(`El registro de ubicacion con el id ${id} no existe!`);
        this.ubicacionRepository.remove(data);
        return data;
    }
    handleExceptions(err) {
        this.logger.error(err);
        throw new common_1.InternalServerErrorException("Error con el servidor!");
    }
};
exports.UbicacionService = UbicacionService;
exports.UbicacionService = UbicacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ubicacion_entity_1.Ubicacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], UbicacionService);
//# sourceMappingURL=ubicacion.service.js.map