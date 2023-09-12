import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
export declare class DepartamentoSeeder implements Seeder {
    run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void>;
}
