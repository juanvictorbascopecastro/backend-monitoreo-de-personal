import { Module } from "@nestjs/common";
import { ZonasEstrategicaService } from "./zonas_estrategica.service";
import { ZonasEstrategicaController } from "./zonas_estrategica.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ZonasEstrategica } from "./entities/zonas_estrategica.entity";
import { AuthModule } from "../auth/auth.module";
import { CiudadModule } from "../ciudad/ciudad.module";

@Module({
  controllers: [ZonasEstrategicaController],
  providers: [ZonasEstrategicaService],
  imports: [
    TypeOrmModule.forFeature([ZonasEstrategica]),
    AuthModule,
    CiudadModule,
  ],
  exports: [TypeOrmModule, ZonasEstrategicaService],
})
export class ZonasEstrategicaModule {}
