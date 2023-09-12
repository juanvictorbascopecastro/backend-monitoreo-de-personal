"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSeeder = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const usuarios_seed_1 = require("./usuarios.seed");
const departamento_seed_1 = require("./departamento.seed");
class MainSeeder {
    async run(dataSource, factoryManager) {
        await (0, typeorm_extension_1.runSeeder)(dataSource, departamento_seed_1.DepartamentoSeeder);
        await (0, typeorm_extension_1.runSeeder)(dataSource, usuarios_seed_1.UserSeeder);
    }
}
exports.MainSeeder = MainSeeder;
//# sourceMappingURL=main.seerders.js.map