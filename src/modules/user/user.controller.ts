import { Body, Controller, Get, Post } from "@nestjs/common"
import { User } from "./user.entity"
import { UserService } from "./user.service"


@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}
    //

    @Post('login')
    autenticate(@Body('username') username){
        return this.userService.findOne(username)
   }

   @Get('list')
    getallUser():Promise<User[]> {
        return this.userService.userList()//id, amount, originCuID, destinationCuID, convertedA)
   }
}