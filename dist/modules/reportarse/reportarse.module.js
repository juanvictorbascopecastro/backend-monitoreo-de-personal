"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportarseModule = void 0;
const common_1 = require("@nestjs/common");
const reportarse_service_1 = require("./reportarse.service");
const reportarse_controller_1 = require("./reportarse.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
let ReportarseModule = exports.ReportarseModule = class ReportarseModule {
};
exports.ReportarseModule = ReportarseModule = __decorate([
    (0, common_1.Module)({
        controllers: [reportarse_controller_1.ReportarseController],
        providers: [reportarse_service_1.ReportarseService],
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Reportarse, entities_1.ReportarseImagen])],
    })
], ReportarseModule);
//# sourceMappingURL=reportarse.module.js.map