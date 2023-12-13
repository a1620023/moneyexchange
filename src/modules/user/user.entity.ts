import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    username: string

    @Column('text', {unique:true, nullable:false})
    email: string

    @Column('text', {nullable:false})
    password: string

    @Column({default:'user'})
    rol: string

    @DeleteDateColumn({nullable:true})
    deletedAt: Date

}