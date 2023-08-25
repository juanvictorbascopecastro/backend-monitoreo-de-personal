import { Module } from "@nestjs/common";
import { IngresoService } from "./ingreso.service";
import { IngresoController } from "./ingreso.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingreso } from "./entities/ingreso.entity";
import { AuthModule } from "../auth/auth.module";
import { PersonaModule } from "../persona/persona.module";
import { ZonasEstrategicaModule } from "../zonas_estrategica/zonas_estrategica.module";

@Module({
  controllers: [IngresoController],
  providers: [IngresoService],
  imports: [
    TypeOrmModule.forFeature([Ingreso]),
    AuthModule,
    PersonaModule,
    ZonasEstrategicaModule,
  ],
  exports: [TypeOrmModule, IngresoService],
})
export class IngresoModule {}
