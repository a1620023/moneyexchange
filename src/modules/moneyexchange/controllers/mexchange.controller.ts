import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MoneyExchange } from "src/modules/moneyexchange/entities/mexchange.entity";
import { MoneyExchangeService } from "src/modules/moneyexchange/services/mexchange.service";
import { CreateMoneyExchangeDTO } from "../dtos/create-exchangerate.dto";


@Controller('exchangerate')
export class MoneyExchangeController {
    constructor(
        private readonly moneyExchangeService: MoneyExchangeService
    ){}
    //

    @Post('price')
    getExchangeRate(
        @Body('amount') amount: number,
        @Body('fromCurrency') fromCurrency: string, 
        @Body('toCurrency') toCurrency: string) {
        return this.moneyExchangeService.getPrice(amount, fromCurrency, toCurrency)
   }

   @Post('createmexchange')
    createExchangeRate(@Body() createMoneyExchangeDTO: CreateMoneyExchangeDTO): Promise<MoneyExchange> {
        return this.moneyExchangeService.createMoneyExchangeRate(createMoneyExchangeDTO)
   }

   @Get('getprice')
    getAllExchangeRate() {
        //
        return this.moneyExchangeService.selectMoneyExchangeRate()
   }
}