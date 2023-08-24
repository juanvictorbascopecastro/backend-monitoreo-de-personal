import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./seeders/main.seerders";

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME_DEVELOPMENT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  entities: [__dirname + "src/modules/**/*.entity.{ts,js}"],
  migrations: [`${__dirname}src/modules/**/migrations/*.migrations.{ts,js}`],
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
