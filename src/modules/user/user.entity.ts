import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    username: string

    @Column('text')
    email: string

    @Column('text')
    password: string
}