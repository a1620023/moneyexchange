import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class MoneyExchange {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('decimal')
    amount: number

    @Column('text')
    fromCurrency: string

    @Column('text')
    toCurrency: string

    @Column('decimal')
    exchangeRate: number

    @Column('decimal')
    convertedAmount: number

}