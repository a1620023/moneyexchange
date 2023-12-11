import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Currency } from "../entities/currency.entity"


@Injectable()
export class CurrencyService {
    constructor(
        @InjectRepository(Currency)
        private currencyRepository: Repository<Currency>
    ){}
    //
    getCurrencyPrice(country, origen, currency) {
        console.log("Precio de divisa")
        let inst = origen
        const price = {"compra":3.711,"venta":3.719,"origen":inst,"moneda":"USD","fecha":"2023-05-01"}
        return price
    }

    seachCurrencyByID(id){
        const toFind = this.currencyRepository.findOne({ where: { id }})
        console.log("to Find: ",toFind.then(a=>{
            console.log("codigo: ",a.destineCCode)
        }))
        return toFind
    }

    seachCurrencyCODE(id){
        const toFind = this.currencyRepository.findOne({ where: { id }})
        console.log("to Find: ",toFind.then(a=>{
            console.log("codigo: ",a.destineCCode)
        }))
        let code
        toFind.then(res=>{
            console.log("codigo: ",res.destineCCode)
            code = res.destineCCode
        })
        return code
    }

    async getAllCurrency(){
        return await this.currencyRepository.find()
    }
}