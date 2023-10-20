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
exports.SalidaService = void 0;
const common_1 = require("@nestjs/common");
const salida_entity_1 = require("./entities/salida.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SalidaService = class SalidaService {
    constructor(salidaRepository, dataSource) {
        this.salidaRepository = salidaRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger("SalidaService");
    }
    async create(createSalidaDto, ingreso) {
        try {
            const dataIngreso = await this.findByIngreso(ingreso.id);
            if (dataIngreso) {
                return await this.update(dataIngreso.id, {
                    id_ingreso: createSalidaDto.id_ingreso,
                    detalles: createSalidaDto.detalles,
                }, ingreso);
            }
            const data = this.salidaRepository.create({
                ...createSalidaDto,
                ingreso,
            });
            await this.salidaRepository.save(data);
            return await this.findOne(data.id);
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    async update(id, updateSalidaDto, ingreso) {
        const { id_ingreso, ...params } = updateSalidaDto;
        const data = await this.salidaRepository.preload({
            id: id,
            ...params,
        });
        if (!data)
            throw new common_1.NotFoundException(`La salida con el id ${id} no existe!`);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
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
    async findOne(id) {
        const data = await this.salidaRepository
            .createQueryBuilder("salida")
            .innerJoinAndSelect("salida.ingreso", "ingreso")
            .select([
            "salida.id AS id",
            "salida.fecha AS fecha",
            "salida.detalles AS detalles",
            "ingreso.id AS id_ingreso",
        ])
            .where("salida.id = :id", { id })
            .getRawOne();
        if (!data)
            throw new common_1.NotFoundException(`El registro de salida con el id ${id} no existe!`);
        return data;
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data)
            throw new common_1.NotFoundException(`El registro de salida con el id ${id} no existe!`);
        this.salidaRepository.remove(data);
        return data;
    }
    async findByIngreso(id) {
        return await this.salidaRepository
            .createQueryBuilder("salida")
            .innerJoinAndSelect("salida.ingreso", "ingreso")
            .select([
            "salida.id AS id",
            "salida.fecha AS fecha",
            "salida.detalles AS detalles",
            "ingreso.id AS id_ingreso",
        ])
            .where("ingreso.id = :id", { id })
            .getRawOne();
    }
    handleExceptions(err) {
        this.logger.error(err);
        throw new common_1.InternalServerErrorException("Error con el servidor!");
    }
};
exports.SalidaService = SalidaService;
exports.SalidaService = SalidaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(salida_entity_1.Salida)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], SalidaService);
//# sourceMappingURL=salida.service.js.map