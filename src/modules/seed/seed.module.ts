import { Module } from "@nestjs/common";
import { SeedService } from "./seed.service";
import { SeedController } from "./seed.controller";
import { AuthModule } from "../auth/auth.module";
import { CiudadModule } from "../ciudad/ciudad.module";
import { DepartamentoModule } from "../departamento/departamento.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona } from "../persona/entities";

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    AuthModule,
    CiudadModule,
    DepartamentoModule,
    TypeOrmModule.forFeature([Persona]),
  ],
})
export class SeedModule {}
