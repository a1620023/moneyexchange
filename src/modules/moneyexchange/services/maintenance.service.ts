import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { CreateCurrencyDTO } from "../dtos/create-currency.dto"
import { UpdateCurrencyDTO } from "../dtos/update-currency.dto"
import { Currency } from "../entities/currency.entity"

@Injectable()
export class MaintenanceService {
    constructor(
        @InjectRepository(Currency)
        private readonly mCurrencyRespository: Repository<Currency>
    ){}
    //

    async createCurrency(createCurrencyDTO: CreateCurrencyDTO){
        return await this.mCurrencyRespository.save(createCurrencyDTO)
    }

    async updateCurrency(id, updateCurrencyDTO: UpdateCurrencyDTO){
        const toUpdate = await this.mCurrencyRespository.findOne({ where: {id}})
        console.log("ver tu update: ",toUpdate)
        const updated = Object.assign(toUpdate, updateCurrencyDTO)

        return await this.mCurrencyRespository.save(updated)
    }

    findCurrencyByID(id){
        const toFind = this.mCurrencyRespository.findOne({ where: { id }})
        console.log("ver tofind: ",toFind)
        return "currency ID: "+id
    }

    async findAllCurrency(){
        return await this.mCurrencyRespository.find()
    }
}