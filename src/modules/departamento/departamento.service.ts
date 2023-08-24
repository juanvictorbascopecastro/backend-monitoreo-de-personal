import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { CreateDepartamentoDto } from "./dto/create-departamento.dto";
import { UpdateDepartamentoDto } from "./dto/update-departamento.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Departamento } from "./entities/departamento.entity";

@Injectable()
export class DepartamentoService {
  private readonly logger = new Logger("DepartamentoService");
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>
  ) {}

  async create(createDepartamentoDto: CreateDepartamentoDto) {
    try {
      const departamento = this.departamentoRepository.create(
        createDepartamentoDto
      );
      await this.departamentoRepository.save(departamento);
      return departamento;
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  findAll() {
    return this.departamentoRepository.find({});
  }

  async findOne(id: number) {
    const data = await this.departamentoRepository.findOneBy({ id });
    if (!data)
      throw new NotFoundException(`El departamento con el id ${id} no existe!`);
    return data;
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    const data = await this.departamentoRepository.preload({
      id: id,
      ...updateDepartamentoDto,
    });
    if (!data)
      throw new NotFoundException(`El departamento con el id ${id} no existe!`);
    return await this.departamentoRepository.save(data);
  }

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data)
      throw new NotFoundException(`El departamento con el id ${id} no existe!`);
    this.departamentoRepository.remove(data);
    return data;
  }

  private handleExceptions(err: any) {
    if (err.code === "23505")
      throw new InternalServerErrorException(err.detail);
    this.logger.error(err);
    console.log(err);

    throw new InternalServerErrorException("Error con el servidor");
  }
}
