import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { MoneyExchange } from "../../modules/moneyexchange/entities/mexchange.entity";
import { Currency } from "../../modules/moneyexchange/entities/currency.entity";


const TypeORMConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: ':memory:',
    entities: [
        MoneyExchange,
        Currency,
    ],
    synchronize: true
}

export default TypeORMConfig