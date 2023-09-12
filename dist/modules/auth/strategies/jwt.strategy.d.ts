import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { JwtPayload } from "../interface/jwt-payload.interface";
import { Persona } from "src/modules/persona/entities";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly personaRepository;
    constructor(personaRepository: Repository<Persona>, configService: ConfigService);
    validate(payload: JwtPayload): Promise<Persona>;
}
export {};
