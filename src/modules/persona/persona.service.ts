import {
  Injectable,
  Logger,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { CreatePersonaDto } from "./dto/create-persona.dto";
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Persona } from "./entities/persona.entity";
import { DataSource, Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Usuario } from "./entities";
import { Ciudad } from "../ciudad/entities/ciudad.entity";

@Injectable()
export class PersonaService {
  private readonly logger = new Logger("PersonaService");
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    private readonly dataSource: DataSource
  ) {}

  async create(createPersonaDto: CreatePersonaDto, ciudad: Ciudad) {
    try {
      const { password, ...params } = createPersonaDto;
      const data = this.personaRepository.create({
        ...params,
        password: bcrypt.hashSync(password, 10),
      });
      let user = null;
      if (params.rol) {
        user = new Usuario();
        user.rol = params.rol;
        data.usuario = user;
      }
      data.ciudad = ciudad;
      await this.personaRepository.save(data);
      delete data.password;
      return data;
    } catch (err) {
      this.handleExceptions(err, createPersonaDto.email);
    }
  }
  async update(id: number, updatePersonaDto: UpdatePersonaDto, ciudad: Ciudad) {
    const { id_ciudad, ...params } = updatePersonaDto;
    const data = await this.personaRepository.preload({
      id: id,
      ...params,
    });
    if (!data)
      throw new NotFoundException(`La ciudad con el id ${id} no existe!`);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      let user;
      if (params.rol) {
        user = new Usuario();
        user.rol = params.rol;
        data.usuario = user;
      }
      if (ciudad) {
        data.ciudad = ciudad;
      }
      await queryRunner.manager.save(data);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOne(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleExceptions(error, updatePersonaDto.nombre);
    }
  }
  findAll() {
    try {
      return this.personaRepository.find({});
    } catch (err) {
      this.handleExceptions(err, null);
    }
  }

  async findOne(id: number) {
    const data = await this.personaRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(`El departamento con el id ${id} no existe!`);
    return data;
  }

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data)
      throw new NotFoundException(`El usuario con el id ${id} no existe!`);
    this.personaRepository.remove(data);
    return data;
  }

  private handleExceptions(err: any, val: string) {
    this.logger.error(err);
    if (err.code === "23505" && val) {
      throw new InternalServerErrorException(`Ya existe el correo ${val}!`);
    }
    throw new InternalServerErrorException("Error con el servidor");
  }
}