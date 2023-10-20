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
exports.ZonasEstrategicaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const zonas_estrategica_entity_1 = require("./entities/zonas_estrategica.entity");
const typeorm_2 = require("typeorm");
let ZonasEstrategicaService = class ZonasEstrategicaService {
    constructor(zonasEstrategicaRepository, dataSource) {
        this.zonasEstrategicaRepository = zonasEstrategicaRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger("CiudadService");
    }
    async create(createZonasEstrategicaDto, ciudad) {
        try {
            const data = this.zonasEstrategicaRepository.create({
                ...createZonasEstrategicaDto,
                ciudad,
            });
            await this.zonasEstrategicaRepository.save(data);
            return data;
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    findAll() {
        return this.zonasEstrategicaRepository
            .createQueryBuilder("zonas_estrategica")
            .leftJoinAndSelect("zonas_estrategica.ciudad", "ciudad")
            .select([
            "zonas_estrategica.id",
            "zonas_estrategica.nombre",
            "zonas_estrategica.latitud",
            "zonas_estrategica.longitud",
            "zonas_estrategica.radio",
            "ciudad.nombre",
            "ciudad.id",
            "ciudad.descripcion",
        ])
            .getMany();
    }
    async findOne(id) {
        const data = await this.zonasEstrategicaRepository
            .createQueryBuilder("zonas_estrategicas")
            .leftJoinAndSelect("zonas_estrategicas.ciudad", "ciudad")
            .select([
            "zonas_estrategicas.id",
            "zonas_estrategicas.nombre",
            "zonas_estrategicas.latitud",
            "zonas_estrategicas.longitud",
            "zonas_estrategicas.radio",
            "ciudad.nombre",
            "ciudad.id",
            "ciudad.descripcion",
        ])
            .where("zonas_estrategicas.id = :id", { id })
            .getOne();
        if (!data)
            throw new common_1.NotFoundException(`La zona con el id ${id} no existe!`);
        return data;
    }
    async update(id, updateZonasEstrategicaDto, ciudad) {
        const { id_ciudad, ...params } = updateZonasEstrategicaDto;
        const data = await this.zonasEstrategicaRepository.preload({
            id: id,
            ...params,
        });
        if (!data)
            throw new common_1.NotFoundException(`La zona con el id ${id} no existe!`);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            if (ciudad) {
                data.ciudad = ciudad;
            }
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
        const data = await this.zonasEstrategicaRepository.findOneBy({ id });
        if (!data)
            throw new common_1.NotFoundException(`La zona con el id ${id} no existe!`);
        try {
            this.zonasEstrategicaRepository.remove(data);
            return data;
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    handleExceptions(err) {
        this.logger.error(err);
        if (err instanceof typeorm_2.QueryFailedError &&
            err.message.includes("violates foreign key constraint")) {
            throw new common_1.BadRequestException("¡No puede eliminar esta zona porque se está utilizando en otros registros!");
        }
        throw new common_1.InternalServerErrorException("Error con el servidor!");
    }
};
exports.ZonasEstrategicaService = ZonasEstrategicaService;
exports.ZonasEstrategicaService = ZonasEstrategicaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(zonas_estrategica_entity_1.ZonasEstrategica)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], ZonasEstrategicaService);
//# sourceMappingURL=zonas_estrategica.service.js.map