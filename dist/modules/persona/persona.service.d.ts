import { CreatePersonaDto } from "./dto/create-persona.dto";
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { Persona } from "./entities/persona.entity";
import { DataSource, Repository } from "typeorm";
import { Usuario } from "./entities";
import { Ciudad } from "../ciudad/entities/ciudad.entity";
export declare class PersonaService {
    private readonly personaRepository;
    private readonly usuarioRepository;
    private readonly dataSource;
    private readonly logger;
    private diskStorage;
    constructor(personaRepository: Repository<Persona>, usuarioRepository: Repository<Usuario>, dataSource: DataSource);
    create(createPersonaDto: CreatePersonaDto, ciudad: Ciudad, file: any): Promise<Persona>;
    update(id: number, updatePersonaDto: UpdatePersonaDto, ciudad: Ciudad, file: any): Promise<Persona>;
    updateStatus(id: number, estado: boolean): Promise<Persona>;
    findAll(): Promise<Persona[]>;
    findOne(id: number): Promise<Persona>;
    findByEmail(email: string): Promise<Persona>;
    remove(id: number): Promise<Persona>;
    private handleExceptions;
}
