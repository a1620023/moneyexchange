import { Transform, Type } from "class-transformer"
import { IsDate, IsEmail, IsOptional, IsString, MinLength } from "class-validator"


export class CreateUserDTO {
    public id: number

    @IsString()
    @MinLength(3)
    public username: string

    @IsEmail()
    public email: string

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    public password: string

    
    @IsOptional()
    @IsString()
    rol!: string

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    deletedAt!: Date
}