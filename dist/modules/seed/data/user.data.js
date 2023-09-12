"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialData = void 0;
const bcrypt = require("bcrypt");
exports.initialData = {
    departamento: [
        { nombre: "Chuquisaca" },
        { nombre: "Santa Cruz" },
        { nombre: "Cochabamba" },
        { nombre: "La Paz" },
        { nombre: "Oruro" },
        { nombre: "Potosi" },
        { nombre: "Tarija" },
        { nombre: "Beni" },
        { nombre: "Pando" },
    ],
    ciudad: [{ nombre: "Sucre" }, { nombre: "Monteagudo" }],
    usuarios: [
        {
            nombre: "Victor",
            apellido: "Bascope",
            telefono: "+59172874590",
            ci: "12345678",
            usuario: {
                rol: "admin",
            },
            password: bcrypt.hashSync("User123", 10),
            email: "user@gmail.com",
        },
    ],
};
//# sourceMappingURL=user.data.js.map