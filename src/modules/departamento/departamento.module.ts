import { Module } from "@nestjs/common";
import { DepartamentoService } from "./departamento.service";
import { DepartamentoController } from "./departamento.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Departamento } from "./entities/departamento.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
  imports: [TypeOrmModule.forFeature([Departamento]), AuthModule],
  exports: [TypeOrmModule, DepartamentoService],
})
export class DepartamentoModule {}
