import { Controller, Get } from '@nestjs/common';
import { Double } from 'typeorm';
import { AppService } from './app.service';

@Controller('calculator')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('price')
  getExchangeRate(amount:number, currency:String): string {
    return this.appService.getPrices(amount, currency);
  }
}
