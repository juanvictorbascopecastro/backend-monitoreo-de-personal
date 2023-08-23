import {
  Injectable,
  Logger,
  NotFoundException,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { CreatePersonaDto } from "./dto/create-persona.dto";
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Persona } from "./entities/persona.entity";
import { Repository } from "typeorm";
import { LoginPersonaDto } from "./dto/login-persona.dto";
import * as bcrypt from "bcrypt";
import { JwtPayload } from "./interface/jwt-payload.interface";
import { JwtService } from "@nestjs/jwt";
import { Usuario } from "./entities";

@Injectable()
export class PersonaService {
  private readonly logger = new Logger("PersonaService");
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    private readonly jwtService: JwtService
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

  // async login(loginPersonDto: LoginPersonaDto) {
  //   const { password, email } = loginPersonDto;
  //   const user = await this.personaRepository
  //     .createQueryBuilder("persona")
  //     .leftJoinAndSelect("persona.usuario", "usuario")
  //     .where("persona.email = :email", { email })
  //     .select([
  //       "persona.id",
  //       "persona.nombre",
  //       "persona.apellido",
  //       "persona.email",
  //       "persona.password",
  //       "persona.estado",
  //       "persona.fecha_nacimiento",
  //       "persona.ci",
  //       "persona.telefono",
  //       "persona.foto",
  //       "persona.direccion",
  //       "usuario.id",
  //       "usuario.rol",
  //     ])
  //     .getOne();
  //   if (!user) throw new UnauthorizedException("Datos Incorrecto!");
  //   if (!bcrypt.compareSync(password, user.password))
  //     throw new UnauthorizedException("Datos Incorrecto!");
  //   delete user.password;
  //   return {
  //     ...user,
  //     token: this.getJwtToken({
  //       id: user.id,
  //       rol: user.usuario ? user.usuario.rol : "promotor",
  //     }),
  //   };
  // }

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
  // generar el token
  // private getJwtToken(payload: JwtPayload) {
  //   const token = this.jwtService.sign(payload);
  //   return token;
  // }
}
