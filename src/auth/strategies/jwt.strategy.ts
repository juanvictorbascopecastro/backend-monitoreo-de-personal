import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { JwtPayload } from "../interface/jwt-payload.interface";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import { Persona } from "src/persona/entities";

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

  async validate(payload: JwtPayload, accesos: string[]): Promise<Persona> {
    const { id } = payload;
    const user = await this.personaRepository.findOneBy({ id });
    if (!user) throw new UnauthorizedException("Token no válido!!");
    if (!user.estado)
      throw new UnauthorizedException(
        "El usuario está inactivo, ¡Habla con un administrador!"
      );
    return user;
  }
}
