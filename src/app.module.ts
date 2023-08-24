import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartamentoModule } from "./modules/departamento/departamento.module";
import { CiudadModule } from "./modules/ciudad/ciudad.module";
import { PersonaModule } from "./modules/persona/persona.module";
import { ReportarseModule } from "./modules/reportarse/reportarse.module";
import { AuthModule } from "./modules/auth/auth.module";
import { IngresoModule } from "./modules/ingreso/ingreso.module";
import { SeedModule } from "./modules/seed/seed.module";

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
      entities: [__dirname + "src/modules/**/*.entity.{ts,js}"],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
    PersonaModule,
    AuthModule,
    DepartamentoModule,
    CiudadModule,
    ReportarseModule,
    IngresoModule,
    SeedModule,
  ],
  controllers: [],
})
export class AppModule {}
