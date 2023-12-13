import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { MoneyExchange } from "../../modules/moneyexchange/entities/mexchange.entity";
import { Currency } from "../../modules/moneyexchange/entities/currency.entity";
import { User } from "src/modules/user/user.entity";


const TypeORMConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: ':memory:',
    entities: [
        MoneyExchange,
        Currency,
        User
    ],
    synchronize: true
}

export default TypeORMConfig