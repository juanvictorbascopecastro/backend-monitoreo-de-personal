import { Module } from "@nestjs/common";
import { PersonaService } from "./persona.service";
import { PersonaController } from "./persona.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona } from "./entities/persona.entity";
import { Usuario } from "./entities/usuarios.entity";
import { AuthModule } from "./../auth/auth.module";
import { CiudadModule } from "../ciudad/ciudad.module";

@Module({
  controllers: [PersonaController],
  providers: [PersonaService],
  imports: [
    TypeOrmModule.forFeature([Persona, Usuario]),
    AuthModule,
    CiudadModule,
  ],
  exports: [TypeOrmModule],
})
export class PersonaModule {}