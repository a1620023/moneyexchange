import { Injectable } from '@nestjs/common';
import { Double } from 'typeorm';

@Injectable()
export class AppService {
  
  getPrices(amount: number, currency: String): string {
    const purchaseExchangeRate = 3.75
    const sellingExchangeRate = 3.8

    const exchangeValue = amount*sellingExchangeRate
    return exchangeValue.toString();
  }
}
