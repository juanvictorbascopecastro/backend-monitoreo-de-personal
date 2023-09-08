import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { LoginAuthDto } from "./dto/login-auth.dto";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { JwtPayload } from "./interface/jwt-payload.interface";
import * as bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";
import { Persona } from "../persona/entities";

@Injectable()
export class AuthService {
  private readonly logger = new Logger("AuthService");
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    private readonly jwtService: JwtService
  ) {}

  async login(loginPersonDto: LoginAuthDto) {
    const { password, email } = loginPersonDto;
    const user = await this.personaRepository
      .createQueryBuilder("persona")
      .leftJoinAndSelect("persona.usuario", "usuario")
      .where("persona.email = :email", { email })
      .select([
        "persona.id",
        "persona.nombre",
        "persona.apellido",
        "persona.email",
        "persona.password",
        "persona.estado",
        "persona.fecha_nacimiento",
        "persona.ci",
        "persona.telefono",
        "persona.foto",
        "persona.direccion",
        "usuario.id",
        "usuario.rol",
      ])
      .getOne();
    if (!user) throw new UnauthorizedException("Datos Incorrecto!");
    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException("Datos Incorrecto!");
    delete user.password;
    return {
      ...user,
      token: this.getJwtToken({
        id: user.id,
        rol: user.usuario ? user.usuario.rol : "promotor",
      }),
    };
  }

  getProfile() {
    return `Obtener el perfil de usuario`;
  }

  updateProfile() {
    return `Editar el perfil de usuario`;
  }

  deleteProfile() {
    return `Eliminar su cuenta de usuario`;
  }
  // generar el token
  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
