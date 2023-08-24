import { Module } from "@nestjs/common";
import { ReportarseService } from "./reportarse.service";
import { ReportarseController } from "./reportarse.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Reportarse, ReportarseImagen } from "./entities";

@Module({
  controllers: [ReportarseController],
  providers: [ReportarseService],
  imports: [TypeOrmModule.forFeature([Reportarse, ReportarseImagen])],
})
export class ReportarseModule {}
