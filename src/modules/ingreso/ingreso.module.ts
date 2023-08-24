import { Module } from "@nestjs/common";
import { IngresoService } from "./ingreso.service";
import { IngresoController } from "./ingreso.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingreso } from "./entities/ingreso.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [IngresoController],
  providers: [IngresoService],
  imports: [TypeOrmModule.forFeature([Ingreso]), AuthModule],
  exports: [TypeOrmModule, IngresoService],
})
export class IngresoModule {}
