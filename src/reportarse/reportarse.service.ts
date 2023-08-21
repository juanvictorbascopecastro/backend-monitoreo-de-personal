import {
  Injectable,
  Logger,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { CreateReportarseDto } from "./dto/create-reportarse.dto";
import { UpdateReportarseDto } from "./dto/update-reportarse.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReportarseImagen, Reportarse } from "./entities";

@Injectable()
export class ReportarseService {
  private readonly logger = new Logger("ReportarseService");
  constructor(
    @InjectRepository(Reportarse)
    private readonly reportarseRepository: Repository<Reportarse>,
    @InjectRepository(ReportarseImagen)
    private readonly reportarseRepositoryImage: Repository<ReportarseImagen>
  ) {}

  async create(createReportarseDto: CreateReportarseDto) {
    try {
      const { imagenes = [], ...datas } = createReportarseDto;
      const reportarse = this.reportarseRepository.create({
        ...datas,
        fecha: new Date(),
        imagenes: imagenes.map((image) =>
          this.reportarseRepositoryImage.create({ url: image })
        ),
      });
      await this.reportarseRepository.save(reportarse);
      return { ...reportarse, imagenes };
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  async findAll() {
    const datas = await this.reportarseRepository.find({
      relations: { imagenes: true },
    });

    return datas.map((item) => ({
      ...item,
      imagenes: item.imagenes.map((img) => img.url),
    }));
  }

  async findOne(id: number) {
    const data = await this.reportarseRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(`El reportarse con el id ${id} no existe!`);
    return data;
  }

  async findOnePlain(id: number) {
    const { imagenes, ...res } = await this.findOne(id);
    return { ...res, imagenes: imagenes.map((img) => img.url) };
  }

  async update(id: number, updateReportarseDto: UpdateReportarseDto) {
    const { imagenes = [], ...datas } = updateReportarseDto;
    const data = await this.reportarseRepository.preload({
      id: id,
      ...datas,
      imagenes: imagenes.map((image) =>
        this.reportarseRepositoryImage.create({ url: image })
      ),
    });
    if (!data)
      throw new NotFoundException(`El reportarse con el id ${id} no existe!`);
    return await this.reportarseRepository.save(data);
  }

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data)
      throw new NotFoundException(`El reportarse con el id ${id} no existe!`);
    this.reportarseRepository.remove(data);
    return data;
  }

  private handleExceptions(err: any) {
    this.logger.error(err);
    console.log(err);
    throw new InternalServerErrorException("Error con el servidor");
  }
}
