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
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Usuario } from "./entities";

@Injectable()
export class PersonaService {
  private readonly logger = new Logger("PersonaService");
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>
  ) {}

  async create(createPersonaDto: CreatePersonaDto) {
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
      }
      if (user) data.usuario = user;
      await this.personaRepository.save(data);
      delete data.password;
      return data;
    } catch (err) {
      this.handleExceptions(err, createPersonaDto);
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

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data)
      throw new NotFoundException(`El usuario con el id ${id} no existe!`);
    this.personaRepository.remove(data);
    return data;
  }

  private handleExceptions(err: any, data: CreatePersonaDto) {
    this.logger.error(err);
    if (err.code === "23505") {
      throw new InternalServerErrorException(
        `Ya existe el correo ${data?.email}!`
      );
    }
    console.log(err);
    throw new InternalServerErrorException("Error con el servidor");
  }
}
