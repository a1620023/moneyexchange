import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyController } from './controllers/currency.controller';
import { MaintenanceController } from './controllers/maintenance.controller';
import { MoneyExchangeController } from './controllers/mexchange.controller';
import { Currency } from './entities/currency.entity';
import { MoneyExchange } from './entities/mexchange.entity';
import { CurrencyService } from './services/currency.service';
import { MaintenanceService } from './services/maintenance.service';
import { MoneyExchangeService } from './services/mexchange.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Currency,
            MoneyExchange,
        ])
    ],
    controllers: [
        MoneyExchangeController,
        CurrencyController,
        MaintenanceController,
    ],
    providers: [
        MoneyExchangeService,
        CurrencyService,
        MaintenanceService,
    ],
    exports: [
        MoneyExchangeService,
        CurrencyService,
        MaintenanceService,
    ],
})
export class MoneyExchangeModule {
    constructor(
        private mExchangeService: MoneyExchangeService,
    ){}
}
