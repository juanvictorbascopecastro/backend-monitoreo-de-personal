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
exports.CiudadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const ciudad_entity_1 = require("./entities/ciudad.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CiudadService = exports.CiudadService = class CiudadService {
    constructor(ciudadRepository, dataSource) {
        this.ciudadRepository = ciudadRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger("CiudadService");
    }
    async create(createCiudadDto, departamento) {
        try {
            const data = this.ciudadRepository.create({
                ...createCiudadDto,
                departamento,
            });
            await this.ciudadRepository.save(data);
            return data;
        }
        catch (err) {
            this.handleExceptions(err, createCiudadDto.nombre);
        }
    }
    async update(id, updateCiudadDto, departamento) {
        const { id_departamento, ...params } = updateCiudadDto;
        const data = await this.ciudadRepository.preload({
            id: id,
            ...params,
        });
        if (!data)
            throw new common_1.NotFoundException(`La ciudad con el id ${id} no existe!`);
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            if (departamento) {
                data.departamento = departamento;
            }
            await queryRunner.manager.save(data);
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return this.findOne(id);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            this.handleExceptions(error, updateCiudadDto.nombre);
        }
    }
    findAll() {
        return this.ciudadRepository.find({});
    }
    async findOne(id) {
        const data = await this.ciudadRepository.findOneBy({ id });
        if (!data)
            throw new common_1.NotFoundException(`La ciudad con el id ${id} no existe!`);
        return data;
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data)
            throw new common_1.NotFoundException(`La ciudad con el id ${id} no existe!`);
        try {
            await this.ciudadRepository.remove(data);
            return data;
        }
        catch (err) {
            this.handleExceptions(err, null);
        }
    }
    handleExceptions(err, nombre) {
        this.logger.error(err);
        if (err instanceof typeorm_1.QueryFailedError &&
            err.message.includes("violates foreign key constraint")) {
            throw new common_1.BadRequestException("¡No puede eliminar esta ciudad porque se está utilizando en otros registros!");
        }
        if (err.code === "23505" && nombre) {
            throw new common_1.InternalServerErrorException(`¡Ya esta registrado la ciudad de ${nombre}!`);
        }
        console.log(err);
        throw new common_1.InternalServerErrorException("Error con el servidor!");
    }
};
exports.CiudadService = CiudadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(ciudad_entity_1.Ciudad)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], CiudadService);
//# sourceMappingURL=ciudad.service.js.map