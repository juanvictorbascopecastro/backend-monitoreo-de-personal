import { Module } from '@nestjs/common';
import { DepartamentoController } from './departamento.controller';

@Module({
  controllers: [DepartamentoController]
})
export class DepartamentoModule {}
