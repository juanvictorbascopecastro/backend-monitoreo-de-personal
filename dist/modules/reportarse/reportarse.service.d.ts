import { CreateReportarseDto } from "./dto/create-reportarse.dto";
import { UpdateReportarseDto } from "./dto/update-reportarse.dto";
import { Repository } from "typeorm";
import { ReportarseImagen, Reportarse } from "./entities";
export declare class ReportarseService {
    private readonly reportarseRepository;
    private readonly reportarseRepositoryImage;
    private readonly logger;
    constructor(reportarseRepository: Repository<Reportarse>, reportarseRepositoryImage: Repository<ReportarseImagen>);
    create(createReportarseDto: CreateReportarseDto): Promise<{
        imagenes: string[];
        id: number;
        id_persona: number;
        comentario?: string;
        fecha: Date;
    }>;
    findAll(): Promise<{
        imagenes: string[];
        id: number;
        id_persona: number;
        comentario?: string;
        fecha: Date;
    }[]>;
    findOne(id: number): Promise<Reportarse>;
    findOnePlain(id: number): Promise<{
        imagenes: string[];
        id: number;
        id_persona: number;
        comentario?: string;
        fecha: Date;
    }>;
    update(id: number, updateReportarseDto: UpdateReportarseDto): Promise<Reportarse>;
    remove(id: number): Promise<Reportarse>;
    private handleExceptions;
}
