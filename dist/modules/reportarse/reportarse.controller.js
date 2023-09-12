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
exports.ReportarseController = void 0;
const common_1 = require("@nestjs/common");
const reportarse_service_1 = require("./reportarse.service");
const create_reportarse_dto_1 = require("./dto/create-reportarse.dto");
const update_reportarse_dto_1 = require("./dto/update-reportarse.dto");
let ReportarseController = exports.ReportarseController = class ReportarseController {
    constructor(reportarseService) {
        this.reportarseService = reportarseService;
    }
    create(createReportarseDto) {
        return this.reportarseService.create(createReportarseDto);
    }
    findAll() {
        return this.reportarseService.findAll();
    }
    findOne(id) {
        return this.reportarseService.findOnePlain(+id);
    }
    update(id, updateReportarseDto) {
        return this.reportarseService.update(+id, updateReportarseDto);
    }
    remove(id) {
        return this.reportarseService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reportarse_dto_1.CreateReportarseDto]),
    __metadata("design:returntype", void 0)
], ReportarseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportarseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportarseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reportarse_dto_1.UpdateReportarseDto]),
    __metadata("design:returntype", void 0)
], ReportarseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportarseController.prototype, "remove", null);
exports.ReportarseController = ReportarseController = __decorate([
    (0, common_1.Controller)("reportarse"),
    __metadata("design:paramtypes", [reportarse_service_1.ReportarseService])
], ReportarseController);
//# sourceMappingURL=reportarse.controller.js.map