/// <reference types="multer" />
import { Response } from "express";
import { PersonaService } from "./persona.service";
import { CreatePersonaDto, UpdatePersonaDto } from "./dto/index";
import { FilesService } from "src/files/files.service";
export declare class PersonaController {
    private readonly personaService;
    private readonly filesService;
    constructor(personaService: PersonaService, filesService: FilesService);
    create(ciudad: any, file: Express.Multer.File, createPersonaDto: CreatePersonaDto): Promise<import("./entities").Persona>;
    update(id: string, updatePersonaDto: UpdatePersonaDto, ciudad: any, file: Express.Multer.File): Promise<import("./entities").Persona>;
    findAll(): Promise<import("./entities").Persona[]>;
    findOne(id: string): Promise<import("./entities").Persona>;
    remove(id: string): Promise<import("./entities").Persona>;
    findFoto(res: Response, imageName: string): void;
}
