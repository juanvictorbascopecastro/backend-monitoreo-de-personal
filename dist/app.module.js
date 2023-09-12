"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const typeorm_1 = require("@nestjs/typeorm");
const departamento_module_1 = require("./modules/departamento/departamento.module");
const ciudad_module_1 = require("./modules/ciudad/ciudad.module");
const persona_module_1 = require("./modules/persona/persona.module");
const reportarse_module_1 = require("./modules/reportarse/reportarse.module");
const auth_module_1 = require("./modules/auth/auth.module");
const ingreso_module_1 = require("./modules/ingreso/ingreso.module");
const seed_module_1 = require("./modules/seed/seed.module");
const zonas_estrategica_module_1 = require("./modules/zonas_estrategica/zonas_estrategica.module");
const ubicacion_module_1 = require("./modules/ubicacion/ubicacion.module");
const salida_module_1 = require("./modules/salida/salida.module");
const files_module_1 = require("./files/files.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME_DEVELOPMENT,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                autoLoadEntities: true,
                synchronize: Boolean(process.env.DB_SYNC),
                retryAttempts: 10,
                retryDelay: 3000,
                entities: [__dirname + "src/modules/**/*.entity.{ts,js}"],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "public"),
            }),
            persona_module_1.PersonaModule,
            auth_module_1.AuthModule,
            departamento_module_1.DepartamentoModule,
            ciudad_module_1.CiudadModule,
            reportarse_module_1.ReportarseModule,
            ingreso_module_1.IngresoModule,
            seed_module_1.SeedModule,
            zonas_estrategica_module_1.ZonasEstrategicaModule,
            ubicacion_module_1.UbicacionModule,
            salida_module_1.SalidaModule,
            files_module_1.FilesModule,
        ],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map