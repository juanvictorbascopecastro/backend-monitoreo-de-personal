"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSeeder = void 0;
const bcrypt_1 = require("bcrypt");
const entities_1 = require("../../modules/persona/entities");
class UserSeeder {
    async run(dataSource, factoryManager) {
        const userRepository = dataSource.getRepository(entities_1.Persona);
        const userData = {
            nombre: "Victor",
            apellido: "Bascope",
            telefono: "+59172874590",
            ci: "12345678",
            usuario: {
                rol: "admin",
            },
            password: bcrypt_1.default.hashSync("123456", 10),
            email: "user@gmail.com",
        };
        const userExists = await userRepository.findOneBy({
            email: userData.email,
        });
        if (!userExists) {
            const newUser = userRepository.create(userData);
            await userRepository.save(newUser);
        }
    }
}
exports.UserSeeder = UserSeeder;
//# sourceMappingURL=usuarios.seed.js.map