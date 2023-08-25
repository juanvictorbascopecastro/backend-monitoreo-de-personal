import {
  Injectable,
  Logger,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from "@nestjs/common";
import { CreateZonasEstrategicaDto } from "./dto/create-zonas_estrategica.dto";
import { UpdateZonasEstrategicaDto } from "./dto/update-zonas_estrategica.dto";
import { Ciudad } from "../ciudad/entities/ciudad.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ZonasEstrategica } from "./entities/zonas_estrategica.entity";
import { DataSource, QueryFailedError, Repository } from "typeorm";

@Injectable()
export class ZonasEstrategicaService {
  private readonly logger = new Logger("CiudadService");
  constructor(
    @InjectRepository(ZonasEstrategica)
    private readonly zonasEstrategicaRepository: Repository<ZonasEstrategica>,
    private readonly dataSource: DataSource
  ) {}

  async create(
    createZonasEstrategicaDto: CreateZonasEstrategicaDto,
    ciudad: Ciudad
  ) {
    try {
      const data = this.zonasEstrategicaRepository.create({
        ...createZonasEstrategicaDto,
        ciudad,
      });
      await this.zonasEstrategicaRepository.save(data);
      return data;
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  findAll() {
    return this.zonasEstrategicaRepository
      .createQueryBuilder("zonas_estrategica")
      .leftJoinAndSelect("zonas_estrategica.ciudad", "ciudad")
      .select([
        "zonas_estrategica.id",
        "zonas_estrategica.nombre",
        "zonas_estrategica.latitud",
        "zonas_estrategica.longitud",
        "zonas_estrategica.radio",
        "ciudad.nombre",
        "ciudad.id",
        "ciudad.descripcion",
      ])
      .getMany();
  }

  async findOne(id: number) {
    const data = await this.zonasEstrategicaRepository
      .createQueryBuilder("zonas_estrategicas")
      .leftJoinAndSelect("zonas_estrategicas.ciudad", "ciudad")
      .select([
        "zonas_estrategicas.id",
        "zonas_estrategicas.nombre",
        "zonas_estrategicas.latitud",
        "zonas_estrategicas.longitud",
        "zonas_estrategicas.radio",
        "ciudad.nombre",
        "ciudad.id",
        "ciudad.descripcion",
      ])
      .where("zonas_estrategicas.id = :id", { id })
      .getOne();
    if (!data)
      throw new NotFoundException(`La zona con el id ${id} no existe!`);
    return data;
  }

  async update(
    id: number,
    updateZonasEstrategicaDto: UpdateZonasEstrategicaDto,
    ciudad: Ciudad
  ) {
    const { id_ciudad, ...params } = updateZonasEstrategicaDto;
    const data = await this.zonasEstrategicaRepository.preload({
      id: id,
      ...params,
    });
    if (!data)
      throw new NotFoundException(`La zona con el id ${id} no existe!`);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (ciudad) {
        data.ciudad = ciudad;
      }
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

  async remove(id: number) {
    const data = await this.zonasEstrategicaRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(`La zona con el id ${id} no existe!`);
    try {
      this.zonasEstrategicaRepository.remove(data);
      return data;
    } catch (err) {
      this.handleExceptions(err);
    }
  }
  private handleExceptions(err: any) {
    this.logger.error(err);
    if (
      err instanceof QueryFailedError &&
      err.message.includes("violates foreign key constraint")
    ) {
      throw new BadRequestException(
        "¡No puede eliminar esta zona porque se está utilizando en otros registros!"
      );
    }
    throw new InternalServerErrorException("Error con el servidor!");
  }
}
