import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import * as dotenv from 'dotenv';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
          global:true,
          secret: process.env.AUTHSECRETKEY,
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
