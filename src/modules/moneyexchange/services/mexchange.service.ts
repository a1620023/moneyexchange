import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateMoneyExchangeDTO } from "../dtos/create-exchangerate.dto";
import { Currency } from "../entities/currency.entity";
import { MoneyExchange } from "../entities/mexchange.entity";


@Injectable()
export class MoneyExchangeService {
    constructor(
        @InjectRepository(MoneyExchange)
        private readonly moneyExchangeRepository: Repository<MoneyExchange>,

        @InjectRepository(Currency)
        private readonly currencyRepository: Repository<Currency>
    ){}


    async getPrice(amount: number, fromCurrency: string, toCurrency: string){
        //

        let exchangeRate: number    
        let  exchangeValue: number

        await this.currencyRepository.findOne({where: [
            {originCCode:fromCurrency, destineCCode: toCurrency},
            {originCCode:toCurrency, destineCCode: fromCurrency}
        ]}).then((res)=>{
            const originCC=res.originCCode
            const destineCC=res.destineCCode
            if(originCC==fromCurrency && destineCC==toCurrency){
                exchangeRate=Number(res.sale)
                exchangeValue=amount/exchangeRate
                return exchangeValue
            }

            if (originCC==toCurrency && destineCC==fromCurrency) {
                exchangeRate =Number(res.purchase)      
                exchangeValue=amount*exchangeRate
                return exchangeValue
            }
        })
        
        exchangeValue = Number((exchangeValue).toFixed(2))

        const newMoneyExchage = {
            "amount": amount,
            "fromCurrency": fromCurrency,
            "toCurrency": toCurrency,
            "exchangeRate": exchangeRate,
            "convertedAmount": exchangeValue
        }

        return this.moneyExchangeRepository.save(newMoneyExchage)
       }

   createMoneyExchangeRate(createExchangeRateDTO: CreateMoneyExchangeDTO){
    return this.moneyExchangeRepository.save(createExchangeRateDTO)
   }

   selectMoneyExchangeRate(){
    return this.moneyExchangeRepository.find()
   }
}
