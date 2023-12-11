import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Currency {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    country: string

    @Column('text')
    originCCode: string

    @Column('decimal')
    purchase: Double

    @Column('decimal')
    sale: Double

    @Column()
    state: boolean

    @Column('text')
    destineCCode: string

}