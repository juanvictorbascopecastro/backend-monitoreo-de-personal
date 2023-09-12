"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoSeeder = void 0;
const departamento_entity_1 = require("../../modules/departamento/entities/departamento.entity");
class DepartamentoSeeder {
    async run(dataSource, factoryManager) {
        const departamentoRepository = dataSource.getRepository(departamento_entity_1.Departamento);
        const userData = [
            { nombre: "Chuquisaca" },
            { nombre: "Santa Cruz" },
            { nombre: "Cochabamba" },
            { nombre: "La Paz" },
            { nombre: "Oruro" },
            { nombre: "Potosi" },
            { nombre: "Tarija" },
            { nombre: "Beni" },
            { nombre: "Pando" },
        ];
        const newUser = departamentoRepository.create(userData);
        await departamentoRepository.save(newUser);
    }
}
exports.DepartamentoSeeder = DepartamentoSeeder;
//# sourceMappingURL=departamento.seed.js.map