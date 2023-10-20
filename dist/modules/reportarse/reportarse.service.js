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
exports.ReportarseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
let ReportarseService = class ReportarseService {
    constructor(reportarseRepository, reportarseRepositoryImage) {
        this.reportarseRepository = reportarseRepository;
        this.reportarseRepositoryImage = reportarseRepositoryImage;
        this.logger = new common_1.Logger("ReportarseService");
    }
    async create(createReportarseDto) {
        try {
            const { imagenes = [], ...datas } = createReportarseDto;
            const reportarse = this.reportarseRepository.create({
                ...datas,
                fecha: new Date(),
                imagenes: imagenes.map((image) => this.reportarseRepositoryImage.create({ url: image })),
            });
            await this.reportarseRepository.save(reportarse);
            return { ...reportarse, imagenes };
        }
        catch (err) {
            this.handleExceptions(err);
        }
    }
    async findAll() {
        const datas = await this.reportarseRepository.find({
            relations: { imagenes: true },
        });
        return datas.map((item) => ({
            ...item,
            imagenes: item.imagenes.map((img) => img.url),
        }));
    }
    async findOne(id) {
        const data = await this.reportarseRepository.findOneBy({ id });
        if (!data)
            throw new common_1.NotFoundException(`El reportarse con el id ${id} no existe!`);
        return data;
    }
    async findOnePlain(id) {
        const { imagenes, ...res } = await this.findOne(id);
        return { ...res, imagenes: imagenes.map((img) => img.url) };
    }
    async update(id, updateReportarseDto) {
        const { imagenes = [], ...datas } = updateReportarseDto;
        const data = await this.reportarseRepository.preload({
            id: id,
            ...datas,
            imagenes: imagenes.map((image) => this.reportarseRepositoryImage.create({ url: image })),
        });
        if (!data)
            throw new common_1.NotFoundException(`El reportarse con el id ${id} no existe!`);
        return await this.reportarseRepository.save(data);
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data)
            throw new common_1.NotFoundException(`El reportarse con el id ${id} no existe!`);
        this.reportarseRepository.remove(data);
        return data;
    }
    handleExceptions(err) {
        this.logger.error(err);
        console.log(err);
        throw new common_1.InternalServerErrorException("Error con el servidor");
    }
};
exports.ReportarseService = ReportarseService;
exports.ReportarseService = ReportarseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Reportarse)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.ReportarseImagen)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ReportarseService);
//# sourceMappingURL=reportarse.service.js.map