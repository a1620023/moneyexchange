import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { CreateUserDTO } from "./create-user.dto"
import { User } from "./user.entity"



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}
    //
    async createUser(createUserDTO: CreateUserDTO){
        return await this.userRepository.save(createUserDTO)
    }

    async findOneByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({where: {email}})
    }

    async userList(){
        return await this.userRepository.find()
    }
}