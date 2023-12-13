import { IsNumber, IsString } from "class-validator"

export class CreateMoneyExchangeDTO {

    id: number

    @IsNumber()
    amount: number

    @IsString()
    fromCurrency: string

    @IsString()
    toCurrency: string

    @IsNumber()
    exchangeRate: number

    @IsNumber()
    convertedAmount: number

}