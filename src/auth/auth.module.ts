import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { PersonaModule } from "src/persona/persona.module";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    ConfigModule,
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
    PersonaModule,
  ],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
