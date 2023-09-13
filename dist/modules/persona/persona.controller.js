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
exports.PersonaController = void 0;
const common_1 = require("@nestjs/common");
const persona_service_1 = require("./persona.service");
const index_1 = require("./dto/index");
const interface_1 = require("../auth/interface");
const decorators_1 = require("../auth/decorators");
const ciudad_decorator_1 = require("./decorators/ciudad.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const helpers_1 = require("../../files/helpers");
const files_service_1 = require("../../files/files.service");
const guards_1 = require("./guards/");
let PersonaController = exports.PersonaController = class PersonaController {
    constructor(personaService, filesService) {
        this.personaService = personaService;
        this.filesService = filesService;
    }
    create(ciudad, file, createPersonaDto) {
        return this.personaService.create(createPersonaDto, ciudad, file);
    }
    update(id, updatePersonaDto, ciudad, file) {
        return this.personaService.update(+id, updatePersonaDto, ciudad, file);
    }
    findAll() {
        return this.personaService.findAll();
    }
    findOne(id) {
        return this.personaService.findOne(+id);
    }
    remove(id) {
        return this.personaService.remove(+id);
    }
    findFoto(res, imageName) {
        const path = this.filesService.getStaticPersonaFoto(imageName);
        res.sendFile(path);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    (0, common_1.UseGuards)(guards_1.CiudadGuard, guards_1.EmailSaveGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("foto", {
        fileFilter: helpers_1.fileFilter,
    })),
    __param(0, (0, ciudad_decorator_1.CiudadDecorator)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, index_1.CreatePersonaDto]),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    (0, common_1.UseGuards)(guards_1.CiudadGuard, guards_1.EmailUpdateGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("foto", {
        fileFilter: helpers_1.fileFilter,
    })),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, ciudad_decorator_1.CiudadDecorator)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, index_1.UpdatePersonaDto, Object, Object]),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin, interface_1.ValidRoles.usuario),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, decorators_1.Auth)(interface_1.ValidRoles.admin),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)("persona/:imageName"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("imageName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PersonaController.prototype, "findFoto", null);
exports.PersonaController = PersonaController = __decorate([
    (0, common_1.Controller)("usuarios"),
    __metadata("design:paramtypes", [persona_service_1.PersonaService,
        files_service_1.FilesService])
], PersonaController);
//# sourceMappingURL=persona.controller.js.map