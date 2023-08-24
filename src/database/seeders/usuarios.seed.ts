import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import bcrypt from "bcrypt";
import { Persona } from "../../modules/persona/entities";

export class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(Persona);

    const userData = {
      nombre: "Victor",
      apellido: "Bascope",
      telefono: "+59172874590",
      ci: "12345678",
      usuario: {
        rol: "admin",
      },
      password: bcrypt.hashSync("123456", 10),
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
