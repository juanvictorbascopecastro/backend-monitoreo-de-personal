import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartamentoModule } from "./departamento/departamento.module";
import { CiudadModule } from "./ciudad/ciudad.module";
import { PersonaModule } from "./persona/persona.module";
import { ReportarseModule } from "./reportarse/reportarse.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot(), // para usar variables de entorno
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME_DEVELOPMENT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      synchronize: Boolean(process.env.DB_SYNC), // solo para desarrollo
      retryAttempts: 10,
      retryDelay: 3000,
      entities: [__dirname + "src/**/*.entity.{ts,js}"],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
    DepartamentoModule,
    CiudadModule,
    PersonaModule,
    ReportarseModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
