import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators"
import { Currency } from "../entities/currency.entity"
import { CurrencyService } from "../services/currency.service"


@Controller('currency')
export class CurrencyController {
    constructor(
        private readonly curencyService: CurrencyService
    ){}
    //

    @Get('price')
    getCurrencyPurchaseSalePrice(
    @Body('amount') amount,
    @Body('originCCode') originCCode,
    @Body('currencyCCode') currencyCCode,
    ){
        return this.curencyService.getCurrencyPrice(amount, originCCode, currencyCCode)
   }

   @Post(':id')
    getCurrencyByID(@Param('id') id: number): Promise<Currency>{
        //
        return this.curencyService.seachCurrencyByID(id)
   }
}