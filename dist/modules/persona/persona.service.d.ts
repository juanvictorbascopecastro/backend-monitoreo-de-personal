import { CreatePersonaDto } from "./dto/create-persona.dto";
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { Persona } from "./entities/persona.entity";
import { DataSource, Repository } from "typeorm";
import { Ciudad } from "../ciudad/entities/ciudad.entity";
export declare class PersonaService {
    private readonly personaRepository;
    private readonly dataSource;
    private readonly logger;
    constructor(personaRepository: Repository<Persona>, dataSource: DataSource);
    create(createPersonaDto: CreatePersonaDto, ciudad: Ciudad, foto: string): Promise<Persona>;
    update(id: number, updatePersonaDto: UpdatePersonaDto, ciudad: Ciudad, foto: string): Promise<Persona>;
    findAll(): Promise<Persona[]>;
    findOne(id: number): Promise<Persona>;
    remove(id: number): Promise<Persona>;
    private handleExceptions;
}
