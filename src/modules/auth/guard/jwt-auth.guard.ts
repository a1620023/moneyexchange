import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import * as dotenv from 'dotenv';
dotenv.config();



@Injectable()
export class MEAuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        console.log(request.headers.authorization)

        const token = this.tokenFromHeader(request)

        if (!token) {
            throw new UnauthorizedException()
        }

        try {
            const payload = await this.jwtService.signAsync(token, {
                secret: "" + process.env.JWT_SECRET_KEY,
            })
            request.user = payload
        } catch(error) {
            throw new UnauthorizedException();            
        }

        return true
    }

    private tokenFromHeader(request: Request): string | undefined {
        console.log("Sabado")
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        console.log("----> ver token: ", token)
        return type === "Bearer" ? token : undefined
    }
}
