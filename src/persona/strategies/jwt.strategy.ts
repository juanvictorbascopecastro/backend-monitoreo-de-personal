import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Persona } from "../entities/persona.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { JwtPayload } from "../interface/jwt-payload.interface";
import { UnauthorizedException, Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    configService: ConfigService
  ) {
    super({
      secretOrKey: configService.get("JWR_SECRET"),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload): Promise<Persona> {
    const { email } = payload;
    const user = await this.personaRepository.findOneBy({ email });
    if (!user) throw new UnauthorizedException("Token no válido!!");
    if (!user.estado)
      throw new UnauthorizedException(
        "El usuario está inactivo, ¡Habla con un administrador!"
      );

    return user;
  }
}
