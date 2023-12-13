import { IsString, IsNumber, IsOptional, IsBoolean } from "class-validator"

export class UpdateCurrencyDTO {
    public id: number
    
    @IsString()
    public country: string

    @IsString()
    public originCCode: string

    @IsNumber()
    public purchase: number

    @IsNumber()
    public sale: number

    @IsOptional()
    @IsBoolean()
    public isActive: boolean

    @IsString()
    public destineCCode: string
}