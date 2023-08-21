import { Module } from "@nestjs/common";
import { PersonaService } from "./persona.service";
import { PersonaController } from "./persona.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona } from "./entities/persona.entity";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
  controllers: [PersonaController],
  providers: [PersonaService, JwtStrategy],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Persona]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get("JWR_SECRET") || "jwt_secret",
          signOptions: {
            expiresIn: "2h",
          },
        };
      },
    }),
  ],
  exports: [TypeOrmModule, JwtStrategy, PassportModule, JwtModule],
})
export class PersonaModule {}
