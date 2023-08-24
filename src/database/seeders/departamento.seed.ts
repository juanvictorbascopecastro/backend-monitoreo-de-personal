import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Departamento } from "src/modules/departamento/entities/departamento.entity";

export class DepartamentoSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const departamentoRepository = dataSource.getRepository(Departamento);

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
