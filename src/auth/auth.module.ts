import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Persona, Usuario } from "src/persona/entities";

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Persona, Usuario]),
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
  exports: [PassportModule, JwtModule, JwtStrategy],
})
export class AuthModule {}
