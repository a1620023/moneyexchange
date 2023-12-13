import { Body, Controller, Request, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDTO } from "../user/create-user.dto";
import { User } from "../user/user.entity";
import { AuthLoginDTO } from "./auth-login.dto";
import { AuthService } from "./auth.service";
import { MEAuthGuard } from "./guard/jwt-auth.guard";


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('signin')
    register(@Body() createCurrencyDTO: CreateUserDTO): Promise<User> {
        return this.authService.signin(createCurrencyDTO)
    }

    @Post('login')
    login(@Body() authLoginDTO: AuthLoginDTO) {
        return this.authService.loginWithCredentials(authLoginDTO)
    }

    
    @Get('list')
    @UseGuards(MEAuthGuard)
    authList(@Request() req) {
        return "AUTH - List"
    }
}