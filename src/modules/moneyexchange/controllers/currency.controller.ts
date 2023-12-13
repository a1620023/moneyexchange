import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators"
import { ApiTags } from "@nestjs/swagger"
import { Currency } from "../entities/currency.entity"
import { CurrencyService } from "../services/currency.service"

@ApiTags('currency')
@Controller('currency')
export class CurrencyController {
    constructor(
        private readonly curencyService: CurrencyService
    ){}
    //

    @Get('price')
    getCurrencyPurchaseSalePrice(
    @Body('amount') amount:number,
    @Body('originCCode') originCCode:string,
    @Body('currencyCCode') currencyCCode:string,
    ){
        return this.curencyService.getCurrencyPrice(amount, originCCode, currencyCCode)
   }

   @Post(':id')
    getCurrencyByID(@Param('id') id: number): Promise<Currency>{
        //
        return this.curencyService.seachCurrencyByID(id)
   }
}