"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadSeeder = void 0;
const ciudad_entity_1 = require("../../modules/ciudad/entities/ciudad.entity");
class CiudadSeeder {
    async run(dataSource, factoryManager) {
        const departamentoRepository = dataSource.getRepository(ciudad_entity_1.Ciudad);
        const userData = [{ nombre: "Sucre" }];
        const newUser = departamentoRepository.create(userData);
        await departamentoRepository.save(newUser);
    }
}
exports.CiudadSeeder = CiudadSeeder;
//# sourceMappingURL=ciudad.seed.js.map