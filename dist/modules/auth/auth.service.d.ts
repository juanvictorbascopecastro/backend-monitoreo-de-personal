import { LoginAuthDto } from "./dto/login-auth.dto";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { Persona } from "../persona/entities";
export declare class AuthService {
    private readonly personaRepository;
    private readonly jwtService;
    private readonly logger;
    constructor(personaRepository: Repository<Persona>, jwtService: JwtService);
    login(loginPersonDto: LoginAuthDto): Promise<{
        token: string;
        id: number;
        nombre: string;
        apellido?: string;
        direccion?: string;
        ci: string;
        telefono?: string;
        email: string;
        password: string;
        fecha_nacimiento: string;
        foto?: string;
        estado: boolean;
        usuario: import("../persona/entities").Usuario;
        ciudad: import("../ciudad/entities/ciudad.entity").Ciudad;
        ingreso: import("../ingreso/entities/ingreso.entity").Ingreso[];
        ubicacion: import("../ubicacion/entities/ubicacion.entity").Ubicacion[];
    }>;
    getProfile(): string;
    updateProfile(): string;
    deleteProfile(): string;
    private getJwtToken;
}
