import { AuthService } from "./auth.service";
import { LoginAuthDto } from "./dto/login-auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginAuthDto: LoginAuthDto): Promise<{
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
    findOne(): string;
    update(): string;
    remove(): string;
}
