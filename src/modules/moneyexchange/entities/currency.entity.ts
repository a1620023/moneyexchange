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
    purchase: number

    @Column('decimal')
    sale: number

    @Column()
    state: boolean

    @Column('text')
    destineCCode: string

}