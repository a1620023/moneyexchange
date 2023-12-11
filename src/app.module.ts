import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoneyExchangeModule } from './modules/moneyexchange/moneyexchange.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import TypeORMConfig from './shared/config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeORMConfig),
    MoneyExchangeModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
