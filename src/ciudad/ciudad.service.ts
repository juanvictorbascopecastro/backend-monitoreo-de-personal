import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateCiudadDto } from "./dto/create-ciudad.dto";
import { UpdateCiudadDto } from "./dto/update-ciudad.dto";
import { Repository } from "typeorm";
import { Ciudad } from "./entities/ciudad.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CiudadService {
  private readonly logger = new Logger("CiudadService");
  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>
  ) {}

  async create(createCiudadDto: CreateCiudadDto) {
    try {
      const data = this.ciudadRepository.create(createCiudadDto);
      await this.ciudadRepository.save(data);
      return data;
    } catch (err) {
      this.handleExceptions(err);
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

  async update(id: number, updateCiudadDto: UpdateCiudadDto) {
    const data = await this.ciudadRepository.preload({
      id: id,
      ...updateCiudadDto,
    });
    if (!data)
      throw new NotFoundException(`La ciudad con el id ${id} no existe!`);
    return await this.ciudadRepository.save(data);
  }

  async remove(id: number) {
    const data = await this.findOne(id);
    if (!data)
      throw new NotFoundException(`La ciudad con el id ${id} no existe!`);
    this.ciudadRepository.remove(data);
    return data;
  }
  private handleExceptions(err: any) {
    this.logger.error(err);
    throw new InternalServerErrorException("Error con el servidor");
  }
}
