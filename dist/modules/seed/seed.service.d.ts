import { DepartamentoService } from "../departamento/departamento.service";
import { CiudadService } from "../ciudad/ciudad.service";
import { Persona } from "../persona/entities";
import { Repository } from "typeorm";
export declare class SeedService {
    private readonly departamentoService;
    private readonly ciudadService;
    private readonly userRepository;
    constructor(departamentoService: DepartamentoService, ciudadService: CiudadService, userRepository: Repository<Persona>);
    runSeed(): Promise<string>;
    private insertDepartamento;
    private insertCiudad;
    private insertUsers;
}
