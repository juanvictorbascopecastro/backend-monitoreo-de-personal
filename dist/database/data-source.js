"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const main_seerders_1 = require("./seeders/main.seerders");
const options = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME_DEVELOPMENT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [__dirname + "src/modules/**/*.entity.{ts,js}"],
    migrations: [`${__dirname}src/modules/**/migrations/*.migrations.{ts,js}`],
    seeds: [main_seerders_1.MainSeeder],
};
exports.AppDataSource = new typeorm_1.DataSource(options);
//# sourceMappingURL=data-source.js.map