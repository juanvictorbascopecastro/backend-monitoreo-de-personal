import {
  Injectable,
  Logger,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { CreateSalidaDto } from "./dto/create-salida.dto";
import { UpdateSalidaDto } from "./dto/update-salida.dto";
import { Salida } from "./entities/salida.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Ingreso } from "../ingreso/entities/ingreso.entity";

@Injectable()
export class SalidaService {
  private readonly logger = new Logger("SalidaService");
  constructor(
    @InjectRepository(Salida)
    private readonly salidaRepository: Repository<Salida>,
    private readonly dataSource: DataSource
  ) {}

  async create(createSalidaDto: CreateSalidaDto, ingreso: Ingreso) {
    try {
      const data = this.salidaRepository.create({
        ...createSalidaDto,
        ingreso,
      });
      await this.salidaRepository.save(data);
      return await this.findOne(data.id);
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  async update(id: number, updateSalidaDto: UpdateSalidaDto, ingreso: Ingreso) {
    const { id_ingreso, ...params } = updateSalidaDto;
    const data = await this.salidaRepository.preload({
      id: id,
      ...params,
    });
    if (!data)
      throw new NotFoundException(`La salida con el id ${id} no existe!`);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      data.ingreso = ingreso;

      await queryRunner.manager.save(data);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOne(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleExceptions(error);
    }
  }

  // findAll() {
  //   return `This action returns all salida`;
  // }

  async findOne(id: number) {
    const data = await this.salidaRepository
      .createQueryBuilder("salida")
      .leftJoinAndSelect("salida.ingreso", "ingreso")
      .select([
        "salida.id AS id",
        "salida.fecha AS fecha",
        "salida.detalles AS detalles",
        "ingreso.id AS id_ingreso",
      ])
      .where("ingreso.id = :id", { id })
      .getOne();

    // const data = await this.salidaRepository.findOne({
    //   where: { id },
    //   relations: [],
    //   select: ["fecha", "detalles"],
    // });
    if (!data)
      throw new NotFoundException(
        `El registro de salida con el id ${id} no existe!`
      );
    return data;
  }

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data)
      throw new NotFoundException(
        `El registro de salida con el id ${id} no existe!`
      );
    this.salidaRepository.remove(data);
    return data;
  }

  private handleExceptions(err: any) {
    this.logger.error(err);
    throw new InternalServerErrorException("Error con el servidor!");
  }
}
