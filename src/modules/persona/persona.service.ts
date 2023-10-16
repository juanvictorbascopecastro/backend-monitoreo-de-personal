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
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly dataSource: DataSource
  ) {}

  async create(createPersonaDto: CreatePersonaDto, ciudad: Ciudad, file: any) {
    try {
      let foto = null;
      if (file) foto = await saveFiles(file, "profiles");
      const { password, id_ciudad, ...params } = createPersonaDto;
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
      console.log(ciudad);
      console.log(id_ciudad);
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
      const { id_ciudad, rol, ...params } = updatePersonaDto;
      const values: any = { id: id, ...params };
      const userData = await this.personaRepository.findOneBy({ id });
      if (!userData) {
        throw new NotFoundException(`La persona con el id ${id} no existe!`); // El usuario no existe
      }
      if (values.nombre) userData.nombre = values.nombre;
      if (values.apellido) userData.apellido = values.apellido;
      if (values.telefono) userData.telefono = values.telefono;
      if (values.ci) userData.ci = values.ci;
      if (values.direccion) userData.direccion = values.direccion;
      if (values.fecha_nacimiento)
        userData.fecha_nacimiento = values.fecha_nacimiento;
      userData.ciudad = ciudad;
      if (file) {
        if (userData.foto) await removeFiles(userData.foto); // eliminar la foto anterior
        const foto = await saveFiles(file, "profiles");
        userData.foto = foto;
      }
      if (rol === null && userData.usuario !== null) {
        userData.usuario = null;
        Object.assign(userData, userData);
        // await this.usuarioRepository.remove(userData.usuario); // elimina el registro
        return await this.personaRepository.save(userData);
      } else if (userData.usuario !== null && userData.usuario.rol !== rol) {
        userData.usuario.rol = rol;
        Object.assign(userData, userData);
        return await this.personaRepository.save(userData);
      } else if (userData.usuario === null && rol !== null) {
        const newUsuario = await this.usuarioRepository.create({
          rol: rol,
        });
        await this.usuarioRepository.save(newUsuario);
        userData.usuario = newUsuario;
        return await this.personaRepository.save(userData);
      } else {
        Object.assign(userData, userData);
        return await this.personaRepository.save(userData);
      }
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

  // private async updateRol(usuario, rol) {
  //   if (rol == null && usuario != null)
  //     await this.usuarioRepository.remove(usuario.id); // elimina el registro
  //   else if (usuario != null && usuario.rol != rol) {
  //     // edita el registro
  //     await this.usuarioRepository.update(usuario.id, { rol });
  //   } else {
  //     const newUsuario = await this.usuarioRepository.create({ rol });
  //     await this.usuarioRepository.save(newUsuario);
  //     return newUsuario.id;
  //   }
  //   return null;
  // }
}
