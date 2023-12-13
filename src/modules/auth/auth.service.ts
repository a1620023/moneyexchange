import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDTO } from "../user/create-user.dto";
import { UserService } from "../user/user.service";
import *as bcrypt from 'bcrypt'
import { AuthLoginDTO } from "./auth-login.dto";


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService, 
        private readonly jwtTokenService: JwtService
        ){}

    async signin({id, username, email, password, rol, deletedAt}: CreateUserDTO) {
        const user =  await this.usersService.findOneByEmail(email)
        if (user) {
            throw new BadRequestException("User already exists");            
        }

        return await this.usersService.createUser({
            id,
            username,
            email,
            password: await bcrypt.hash(password, 10),
            rol,
            deletedAt
        })
    }

    async loginWithCredentials({email, password}: AuthLoginDTO) {
        const user = await this.usersService.findOneByEmail(email)
        if (!user) {
            throw new BadRequestException("Invalid Credentials");
            
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            throw new BadRequestException("Invalid Credentials");            
        }

        const payload = { email: user.email }
        const token = await this.jwtTokenService.signAsync(payload, { secret: `${process.env.AUTHSECRETKEY}` })
        return {email, token}
    }

    async validateUserCredentials(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(email);

        if (user && user.password === password) {
            const {password, ...result} = user
            return result
        }
        return null
    }
}