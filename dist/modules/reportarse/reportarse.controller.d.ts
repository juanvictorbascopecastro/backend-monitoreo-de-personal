import { ReportarseService } from "./reportarse.service";
import { CreateReportarseDto } from "./dto/create-reportarse.dto";
import { UpdateReportarseDto } from "./dto/update-reportarse.dto";
export declare class ReportarseController {
    private readonly reportarseService;
    constructor(reportarseService: ReportarseService);
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
    findOne(id: string): Promise<{
        imagenes: string[];
        id: number;
        id_persona: number;
        comentario?: string;
        fecha: Date;
    }>;
    update(id: string, updateReportarseDto: UpdateReportarseDto): Promise<import("./entities").Reportarse>;
    remove(id: string): Promise<import("./entities").Reportarse>;
}
