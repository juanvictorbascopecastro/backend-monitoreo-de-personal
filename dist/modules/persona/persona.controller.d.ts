/// <reference types="multer" />
import { Response } from "express";
import { CreatePersonaDto, UpdatePersonaDto } from "./dto/index";
import { FilesService } from "src/files/files.service";
import { PersonaService } from "./persona.service";
export declare class PersonaController {
    private readonly personaService;
    private readonly filesService;
    constructor(personaService: PersonaService, filesService: FilesService);
    cargarArchivos(ciudad: any, files: Array<Express.Multer.File>, createPersonaDto: CreatePersonaDto): Promise<import("./entities").Persona>;
    update(id: string, updatePersonaDto: UpdatePersonaDto, ciudad: any, file: Express.Multer.File): Promise<import("./entities").Persona>;
    updateStatus(id: string, data: any): Promise<import("./entities").Persona>;
    findAll(): Promise<import("./entities").Persona[]>;
    findOne(id: string): Promise<import("./entities").Persona>;
    remove(id: string): Promise<import("./entities").Persona>;
    findFoto(res: Response, imageName: string): void;
}
