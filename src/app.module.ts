import { Module } from '@nestjs/common';
import { DepartamentoModule } from './departamento/departamento.module';
@Module({
  imports: [DepartamentoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
