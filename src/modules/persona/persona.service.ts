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
import { removeFiles, saveFiles } from "./helpers/files";

@Injectable()
export class PersonaService {
  private readonly logger = new Logger("PersonaService");
  private diskStorage: any;
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    private readonly dataSource: DataSource
  ) {}

  async create(createPersonaDto: CreatePersonaDto, ciudad: Ciudad, file: any) {
    try {
      const foto = await saveFiles(file, "profiles");
      const { password, ...params } = createPersonaDto;
      const data = this.personaRepository.create({
        ...params,
        foto,
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
  async update(
    id: number,
    updatePersonaDto: UpdatePersonaDto,
    ciudad: Ciudad,
    file: any
  ) {
    try {
      // si existe una imagen se debe eliminar
      const { id_ciudad, ...params } = updatePersonaDto;
      const values: any = { id: id, ...params };
      const userData = await this.personaRepository.findOneBy({ id });
      if (!userData) {
        throw new NotFoundException(`La persona con el id ${id} no existe!`); // El usuario no existe
      }
      if (file) {
        if (userData.foto) await removeFiles(userData.foto); // eliminar la foto anterior
        const foto = await saveFiles(file, "profiles");
        values.foto = foto;
      }
      // Actualiza los campos proporcionados
      Object.assign(userData, values);
      // Guarda los cambios en la base de datos
      return await this.personaRepository.save(userData);
    } catch (error) {
      this.handleExceptions(error, updatePersonaDto.email);
    }

    // if (file) {
    //   const foto = await saveFiles(file, "profiles");
    //   values.foto = foto;
    // }
    // const data = await this.personaRepository.preload(values);
    // if (!data)
    //   throw new NotFoundException(`La persona con el id ${id} no existe!`);
    // const queryRunner = this.dataSource.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();

    // try {
    //   if (file && data.foto) await removeFiles(data.foto); // eliminar la foto anterior
    //   let user;
    //   if (params.rol) {
    //     user = new Usuario();
    //     user.rol = params.rol;
    //     data.usuario = user;
    //   }
    //   if (ciudad) {
    //     data.ciudad = ciudad;
    //   }
    //   await queryRunner.manager.save(data);
    //   await queryRunner.commitTransaction();
    //   await queryRunner.release();

    //   return this.findOne(id);
    // } catch (error) {
    //   await queryRunner.rollbackTransaction();
    //   await queryRunner.release();
    //   // if (error.message) this.handleExceptions(error, null);
    //   this.handleExceptions(error, updatePersonaDto.email);
    // }
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
      throw new NotFoundException(`El usuario con el id ${id} no existe!`);
    return data;
  }

  async findByEmail(email: string) {
    const data = await this.personaRepository.findOne({ where: { email } });
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
    if (err.message) throw new InternalServerErrorException(err.message);
    throw new InternalServerErrorException("Error con el servidor");
  }
}
