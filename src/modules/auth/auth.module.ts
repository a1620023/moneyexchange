import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
    imports: [
        UserModule,
        JwtModule.register({
          global:true,
          secret: "" + process.env.JWT_SECRET_KEY,
          signOptions: {expiresIn: '60s'}
        })
      ],
      controllers: [
        AuthController,
      ],
      providers: [
        AuthService,
        JwtService,
      ],
      exports: [
        //AuthService,
      ],
})
export class AuthModule {}
