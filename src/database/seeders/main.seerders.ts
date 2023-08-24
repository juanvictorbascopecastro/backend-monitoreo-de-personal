import { DataSource } from "typeorm";
import { runSeeder, Seeder, SeederFactoryManager } from "typeorm-extension";
import { UserSeeder } from "./usuarios.seed";
import { DepartamentoSeeder } from "./departamento.seed";
import { CiudadSeeder } from "./ciudad.seed";

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    await runSeeder(dataSource, DepartamentoSeeder);
    // await runSeeder(dataSource, CiudadSeeder);
    await runSeeder(dataSource, UserSeeder);
  }
}
