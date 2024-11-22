import { Controller, Get } from '@nestjs/common';
import { eventos } from 'core';

@Controller('eventos')
export class EventosController {
  @Get('eventos')
  async buscarEventos() {
    return eventos;
  }
}
