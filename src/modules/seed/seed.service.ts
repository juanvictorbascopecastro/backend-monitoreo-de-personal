import { Injectable } from "@nestjs/common";
import { DepartamentoService } from "../departamento/departamento.service";
import { CiudadService } from "../ciudad/ciudad.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Persona } from "../persona/entities";
import { Repository } from "typeorm";
import { initialData } from "./data/user.data";
import { Departamento } from "../departamento/entities/departamento.entity";
import { CreateCiudadDto } from "../ciudad/dto/create-ciudad.dto";
import { Ciudad } from "../ciudad/entities/ciudad.entity";

@Injectable()
export class SeedService {
  constructor(
    private readonly departamentoService: DepartamentoService,
    private readonly ciudadService: CiudadService,
    @InjectRepository(Persona)
    private readonly userRepository: Repository<Persona>
  ) {}

  async runSeed() {
    // await this.deleteTables();
    const departamento = await this.insertDepartamento();
    const ciudad = await this.insertCiudad(departamento);
    const usuarios = await this.insertUsers(ciudad);
    console.log(usuarios);
    return "SEED EXECUTED";
  }
  private async insertDepartamento() {
    const dptos = initialData.departamento;
    const insertPromises = [];
    dptos.forEach((dpto) => {
      insertPromises.push(this.departamentoService.create(dpto));
    });
    const datas = await Promise.all(insertPromises);
    return datas[0];
  }
  private async insertCiudad(departamento: Departamento) {
    const ciudades = initialData.ciudad;
    const insertPromises = [];
    ciudades.forEach((ciudad: CreateCiudadDto) => {
      insertPromises.push(this.ciudadService.create(ciudad, departamento));
    });
    const datas = await Promise.all(insertPromises);
    return datas[0];
  }
  private async insertUsers(ciudad: Ciudad) {
    const seedUsers = initialData.usuarios;
    const users: Persona[] = [];
    seedUsers.forEach((user: Persona) => {
      user.ciudad = ciudad;
      users.push(this.userRepository.create(user));
    });
    const dbUsers = await this.userRepository.save(seedUsers);
    return dbUsers;
  }
}
