import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ReportarseService } from "./reportarse.service";
import { CreateReportarseDto } from "./dto/create-reportarse.dto";
import { UpdateReportarseDto } from "./dto/update-reportarse.dto";

@Controller("reportarse")
export class ReportarseController {
  constructor(private readonly reportarseService: ReportarseService) {}

  @Post()
  create(@Body() createReportarseDto: CreateReportarseDto) {
    return this.reportarseService.create(createReportarseDto);
  }

  @Get()
  findAll() {
    return this.reportarseService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.reportarseService.findOnePlain(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateReportarseDto: UpdateReportarseDto
  ) {
    return this.reportarseService.update(+id, updateReportarseDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.reportarseService.remove(+id);
  }
}
