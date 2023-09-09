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
    private readonly dataSource: DataSource // private ingresoService: IngresoService
  ) {}

  async create(createSalidaDto: CreateSalidaDto, ingreso: Ingreso) {
    try {
      // verificamos si existe ya una salida registrada, debe modificarla
      const dataIngreso = await this.findByIngreso(ingreso.id);
      if (dataIngreso) {
        return await this.update(
          dataIngreso.id,
          {
            id_ingreso: createSalidaDto.id_ingreso,
            detalles: createSalidaDto.detalles,
          },
          ingreso
        );
      }
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
      .innerJoinAndSelect("salida.ingreso", "ingreso")
      .select([
        "salida.id AS id",
        "salida.fecha AS fecha",
        "salida.detalles AS detalles",
        "ingreso.id AS id_ingreso",
      ])
      .where("salida.id = :id", { id })
      .getRawOne();

    // const data = await this.salidaRepository.findOne({
    //   where: { id },
    //   // relations: [],
    //   select: ["id", "fecha", "detalles"],
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
  // buscamos por el ingreso
  private async findByIngreso(id: number) {
    return await this.salidaRepository
      .createQueryBuilder("salida")
      .innerJoinAndSelect("salida.ingreso", "ingreso")
      .select([
        "salida.id AS id",
        "salida.fecha AS fecha",
        "salida.detalles AS detalles",
        "ingreso.id AS id_ingreso",
      ])
      .where("ingreso.id = :id", { id })
      .getRawOne();
  }

  private handleExceptions(err: any) {
    this.logger.error(err);
    throw new InternalServerErrorException("Error con el servidor!");
  }
}
