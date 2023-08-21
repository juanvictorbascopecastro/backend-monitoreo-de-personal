import { Module } from "@nestjs/common";
import { CiudadService } from "./ciudad.service";
import { CiudadController } from "./ciudad.controller";
import { Ciudad } from "./entities/ciudad.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [CiudadController],
  providers: [CiudadService],
  imports: [TypeOrmModule.forFeature([Ciudad])],
})
export class CiudadModule {}
