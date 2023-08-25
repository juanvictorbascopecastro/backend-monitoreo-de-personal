import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateCiudadDto } from "./dto/create-ciudad.dto";
import { UpdateCiudadDto } from "./dto/update-ciudad.dto";
import { DataSource, QueryFailedError, Repository } from "typeorm";
import { Ciudad } from "./entities/ciudad.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Departamento } from "../departamento/entities/departamento.entity";

@Injectable()
export class CiudadService {
  private readonly logger = new Logger("CiudadService");
  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
    private readonly dataSource: DataSource
  ) {}

  async create(createCiudadDto: CreateCiudadDto, departamento: Departamento) {
    try {
      const data = this.ciudadRepository.create({
        ...createCiudadDto,
        departamento,
      });
      await this.ciudadRepository.save(data);
      return data;
    } catch (err) {
      this.handleExceptions(err, createCiudadDto.nombre);
    }
  }
  async update(
    id: number,
    updateCiudadDto: UpdateCiudadDto,
    departamento: Departamento
  ) {
    const { id_departamento, ...params } = updateCiudadDto;
    const data = await this.ciudadRepository.preload({
      id: id,
      ...params,
    });
    if (!data)
      throw new NotFoundException(`La ciudad con el id ${id} no existe!`);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (departamento) {
        data.departamento = departamento;
      }
      await queryRunner.manager.save(data);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOne(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleExceptions(error, updateCiudadDto.nombre);
    }
  }

  findAll() {
    return this.ciudadRepository.find({});
  }

  async findOne(id: number) {
    const data = await this.ciudadRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(`La ciudad con el id ${id} no existe!`);
    return data;
  }

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data)
      throw new NotFoundException(`La ciudad con el id ${id} no existe!`);
    try {
      await this.ciudadRepository.remove(data);
      return data;
    } catch (err) {
      this.handleExceptions(err, null);
    }
  }
  private handleExceptions(err: any, nombre: string) {
    this.logger.error(err);
    if (
      err instanceof QueryFailedError &&
      err.message.includes("violates foreign key constraint")
    ) {
      throw new BadRequestException(
        "¡No puede eliminar esta ciudad porque se está utilizando en otros registros!"
      );
    }
    if (err.code === "23505" && nombre) {
      throw new InternalServerErrorException(
        `¡Ya esta registrado la ciudad de ${nombre}!`
      );
    }
    console.log(err);
    throw new InternalServerErrorException("Error con el servidor!");
  }
}
