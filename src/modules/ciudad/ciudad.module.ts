import { Module } from "@nestjs/common";
import { CiudadService } from "./ciudad.service";
import { CiudadController } from "./ciudad.controller";
import { Ciudad } from "./entities/ciudad.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { DepartamentoModule } from "../departamento/departamento.module";

@Module({
  controllers: [CiudadController],
  providers: [CiudadService],
  imports: [TypeOrmModule.forFeature([Ciudad]), AuthModule, DepartamentoModule],
  exports: [TypeOrmModule, CiudadService],
})
export class CiudadModule {}
