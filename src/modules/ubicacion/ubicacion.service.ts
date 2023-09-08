import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateUbicacionDto } from "./dto/create-ubicacion.dto";
import { UpdateUbicacionDto } from "./dto/update-ubicacion.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Ubicacion } from "./entities/ubicacion.entity";
import { DataSource, Repository } from "typeorm";
import { Ingreso } from "../ingreso/entities/ingreso.entity";
import { Persona } from "../persona/entities";

@Injectable()
export class UbicacionService {
  private readonly logger = new Logger("UbicacionService");
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepository: Repository<Ubicacion>,
    private readonly dataSource: DataSource
  ) {}

  async create(
    createUbicacionDto: CreateUbicacionDto,
    ingreso: Ingreso,
    persona: Persona
  ) {
    try {
      const data = this.ubicacionRepository.create({
        ...createUbicacionDto,
        persona,
        ingreso,
      });
      await this.ubicacionRepository.save(data);
      return await this.findOne(data.id);
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  findAll() {
    return this.ubicacionRepository.find({});
  }

  async findPerson(id: number, fecha: Date) {
    let whereQuery = "persona.id = :id";
    const paramsQuery: { id: number; fecha?: Date } = { id };
    if (fecha) {
      whereQuery = whereQuery + " AND DATE(ubicacion.fecha) = DATE(:fecha)";
      paramsQuery.fecha = fecha;
    }
    return await this.ubicacionRepository
      .createQueryBuilder("ubicacion")
      .leftJoinAndSelect("ubicacion.persona", "persona")
      .leftJoinAndSelect("persona.usuario", "usuario")
      .select([
        "ubicacion.id AS id",
        "ubicacion.fecha AS fecha",
        "ubicacion.detalles AS detalles",
        "ubicacion.longitud AS longitud",
        "ubicacion.latitud AS latitud",
        "ubicacion.bateria AS bateria",
        "persona.id AS id_persona",
      ])
      .where(whereQuery, paramsQuery)
      .getRawMany();
  }

  async findOne(id: number) {
    const data = await this.ubicacionRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(
        `El registro de ubicacion con el id ${id} no existe!`
      );
    return data;
  }

  async update(
    id: number,
    updateUbicacionDto: UpdateUbicacionDto,
    ingreso: Ingreso,
    persona: Persona
  ) {
    const { id_ingreso, id_persona, ...params } = updateUbicacionDto;
    const data = await this.ubicacionRepository.preload({
      id: id,
      ...params,
    });
    if (!data)
      throw new NotFoundException(`El ingreso con el id ${id} no existe!`);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      data.persona = persona;
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

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data)
      throw new NotFoundException(
        `El registro de ubicacion con el id ${id} no existe!`
      );
    this.ubicacionRepository.remove(data);
    return data;
  }

  private handleExceptions(err: any) {
    this.logger.error(err);
    throw new InternalServerErrorException("Error con el servidor!");
  }
}
