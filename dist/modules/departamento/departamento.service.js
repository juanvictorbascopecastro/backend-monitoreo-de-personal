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
exports.DepartamentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const departamento_entity_1 = require("./entities/departamento.entity");
let DepartamentoService = class DepartamentoService {
    constructor(departamentoRepository) {
        this.departamentoRepository = departamentoRepository;
        this.logger = new common_1.Logger("DepartamentoService");
    }
    async create(createDepartamentoDto) {
        try {
            const departamento = this.departamentoRepository.create(createDepartamentoDto);
            await this.departamentoRepository.save(departamento);
            return departamento;
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    findAll() {
        return this.departamentoRepository.find({});
    }
    async findOne(id) {
        const data = await this.departamentoRepository.findOneBy({ id });
        if (!data)
            throw new common_1.NotFoundException(`El departamento con el id ${id} no existe!`);
        return data;
    }
    async update(id, updateDepartamentoDto) {
        const data = await this.departamentoRepository.preload({
            id: id,
            ...updateDepartamentoDto,
        });
        if (!data)
            throw new common_1.NotFoundException(`El departamento con el id ${id} no existe!`);
        return await this.departamentoRepository.save(data);
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data)
            throw new common_1.NotFoundException(`El departamento con el id ${id} no existe!`);
        this.departamentoRepository.remove(data);
        return data;
    }
    handleExceptions(err) {
        if (err.code === "23505")
            throw new common_1.InternalServerErrorException(err.detail);
        this.logger.error(err);
        console.log(err);
        throw new common_1.InternalServerErrorException("Error con el servidor");
    }
};
exports.DepartamentoService = DepartamentoService;
exports.DepartamentoService = DepartamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(departamento_entity_1.Departamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartamentoService);
//# sourceMappingURL=departamento.service.js.map