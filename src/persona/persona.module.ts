import { Module } from "@nestjs/common";
import { PersonaService } from "./persona.service";
import { PersonaController } from "./persona.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona } from "./entities/persona.entity";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { Usuario } from "./entities/usuarios.entity";

@Module({
  controllers: [PersonaController],
  providers: [PersonaService, JwtStrategy],
  imports: [
    // ConfigModule,
    TypeOrmModule.forFeature([Persona, Usuario]),
    // PassportModule.register({ defaultStrategy: "jwt" }),
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => {
    //     return {
    //       secret: configService.get("JWR_SECRET") || "jwt_secret",
    //       signOptions: {
    //         expiresIn: "2h",
    //       },
    //     };
    //   },
    // }),
  ],
  exports: [TypeOrmModule /*, JwtStrategy, JwtModule*/],
})
export class PersonaModule {}
