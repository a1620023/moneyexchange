import { Body, Controller, Get, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { CreateUserDTO } from "./create-user.dto"
import { User } from "./user.entity"
import { UserService } from "./user.service"


@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}
    //
    @Post('createuser')
    createUserMaintenance(@Body() createCurrencyDTO: CreateUserDTO): Promise<User> {
        return this.userService.createUser(createCurrencyDTO)
   }

    @Post('login')
    autenticate(@Body('email') email){
        return this.userService.findOneByEmail(email)
   }

   @Get('list')
    getallUser():Promise<User[]> {
        return this.userService.userList()//id, amount, originCuID, destinationCuID, convertedA)
   }
}