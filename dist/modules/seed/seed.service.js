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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const departamento_service_1 = require("../departamento/departamento.service");
const ciudad_service_1 = require("../ciudad/ciudad.service");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../persona/entities");
const typeorm_2 = require("typeorm");
const user_data_1 = require("./data/user.data");
let SeedService = class SeedService {
    constructor(departamentoService, ciudadService, userRepository) {
        this.departamentoService = departamentoService;
        this.ciudadService = ciudadService;
        this.userRepository = userRepository;
    }
    async runSeed() {
        const departamento = await this.insertDepartamento();
        const ciudad = await this.insertCiudad(departamento);
        const usuarios = await this.insertUsers(ciudad);
        console.log(usuarios);
        return "SEED EXECUTED";
    }
    async insertDepartamento() {
        const dptos = user_data_1.initialData.departamento;
        const insertPromises = [];
        dptos.forEach((dpto) => {
            insertPromises.push(this.departamentoService.create(dpto));
        });
        const datas = await Promise.all(insertPromises);
        return datas[0];
    }
    async insertCiudad(departamento) {
        const ciudades = user_data_1.initialData.ciudad;
        const insertPromises = [];
        ciudades.forEach((ciudad) => {
            insertPromises.push(this.ciudadService.create(ciudad, departamento));
        });
        const datas = await Promise.all(insertPromises);
        return datas[0];
    }
    async insertUsers(ciudad) {
        const seedUsers = user_data_1.initialData.usuarios;
        const users = [];
        seedUsers.forEach((user) => {
            user.ciudad = ciudad;
            users.push(this.userRepository.create(user));
        });
        const dbUsers = await this.userRepository.save(seedUsers);
        return dbUsers;
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Persona)),
    __metadata("design:paramtypes", [departamento_service_1.DepartamentoService,
        ciudad_service_1.CiudadService,
        typeorm_2.Repository])
], SeedService);
//# sourceMappingURL=seed.service.js.map