import { Ciudad } from "src/modules/ciudad/entities/ciudad.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export class CiudadSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const departamentoRepository = dataSource.getRepository(Ciudad);

    const userData = [{ nombre: "Sucre" }];

    const newUser = departamentoRepository.create(userData);
    await departamentoRepository.save(newUser);
  }
}
