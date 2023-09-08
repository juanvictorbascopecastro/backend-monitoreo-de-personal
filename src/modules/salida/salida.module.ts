import { Module } from "@nestjs/common";
import { SalidaService } from "./salida.service";
import { SalidaController } from "./salida.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Salida } from "./entities/salida.entity";
import { IngresoModule } from "../ingreso/ingreso.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [SalidaController],
  providers: [SalidaService],
  imports: [AuthModule, TypeOrmModule.forFeature([Salida]), IngresoModule],
  exports: [TypeOrmModule, SalidaService],
})
export class SalidaModule {}
