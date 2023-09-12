/// <reference types="multer" />
import { Response } from "express";
import { FilesService } from "./files.service";
import { ConfigService } from "@nestjs/config";
export declare class FilesController {
    private readonly filesService;
    private readonly configService;
    constructor(filesService: FilesService, configService: ConfigService);
    uploadFoto(file: Express.Multer.File): {
        secureUrl: string;
    };
    findFoto(res: Response, imageName: string): void;
}
