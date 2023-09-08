import { Module } from "@nestjs/common";
import { UbicacionService } from "./ubicacion.service";
import { UbicacionController } from "./ubicacion.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ubicacion } from "./entities/ubicacion.entity";
import { PersonaModule } from "../persona/persona.module";
import { IngresoModule } from "../ingreso/ingreso.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [UbicacionController],
  providers: [UbicacionService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Ubicacion]),
    PersonaModule,
    IngresoModule,
  ],
  exports: [TypeOrmModule, UbicacionService],
})
export class UbicacionModule {}
