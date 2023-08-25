import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateIngresoDto } from "./dto/create-ingreso.dto";
import { UpdateIngresoDto } from "./dto/update-ingreso.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Ingreso } from "./entities/ingreso.entity";
import { DataSource, Repository } from "typeorm";
import { Persona } from "../persona/entities";
import { ZonasEstrategica } from "../zonas_estrategica/entities/zonas_estrategica.entity";

@Injectable()
export class IngresoService {
  private readonly logger = new Logger("CiudadService");
  constructor(
    @InjectRepository(Ingreso)
    private readonly ingresoRepository: Repository<Ingreso>,
    private readonly dataSource: DataSource
  ) {}

  async create(
    createIngresoDto: CreateIngresoDto,
    persona: Persona,
    zona: ZonasEstrategica
  ) {
    try {
      const data = this.ingresoRepository.create({
        ...createIngresoDto,
        persona,
        zona,
      });
      await this.ingresoRepository.save(data);
      return await this.findOne(data.id);
    } catch (err) {
      this.handleExceptions(err);
    }
  }
  async update(
    id: number,
    updateIngresoDto: UpdateIngresoDto,
    persona: Persona,
    zona: ZonasEstrategica
  ) {
    const { id_zona, id_persona, ...params } = updateIngresoDto;
    const data = await this.ingresoRepository.preload({
      id: id,
      ...params,
    });
    if (!data)
      throw new NotFoundException(`La zona con el id ${id} no existe!`);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      data.persona = persona;
      data.zona = zona;

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
  findAll() {
    return this.ingresoRepository
      .createQueryBuilder("ingreso")
      .leftJoinAndSelect("ingreso.persona", "persona")
      .leftJoinAndSelect("persona.usuario", "usuario")
      .leftJoinAndSelect("ingreso.zona", "zona")
      .select([
        "ingreso.id",
        "ingreso.fecha",
        "ingreso.detalles",
        "ingreso.id_zona",
        "persona.id",
        "persona.nombre",
        "persona.apellido",
        "persona.ci",
        "persona.telefono",
        "persona.email",
        "usuario.id",
        "usuario.rol",
        "zona.id",
        "zona.nombre",
        "zona.longitud",
        "zona.latitud",
        "zona.radio",
      ])
      .getMany();
  }

  async findOne(id: number) {
    const data = await this.ingresoRepository
      .createQueryBuilder("ingreso")
      .leftJoinAndSelect("ingreso.persona", "persona")
      .leftJoinAndSelect("persona.usuario", "usuario")
      .leftJoinAndSelect("ingreso.zona", "zona")
      .select([
        "ingreso.id",
        "ingreso.fecha",
        "ingreso.detalles",
        "ingreso.id_zona",
        "persona.id",
        "persona.nombre",
        "persona.apellido",
        "persona.ci",
        "persona.telefono",
        "persona.email",
        "usuario.id",
        "usuario.rol",
        "zona.id",
        "zona.nombre",
        "zona.longitud",
        "zona.latitud",
        "zona.radio",
      ])
      .where("ingreso.id = :id", { id })
      .getOne();
    if (!data)
      throw new NotFoundException(`El ingreso con el id ${id} no existe!`);
    return data;
  }

  async remove(id: number) {
    const data = await this.ingresoRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(`El ingreso con el id ${id} no existe!`);
    try {
      this.ingresoRepository.remove(data);
      return this.findOne(id);
    } catch (err) {
      this.handleExceptions(err);
    }
  }
  private handleExceptions(err: any) {
    this.logger.error(err);
    throw new InternalServerErrorException("Error con el servidor!");
  }
}
