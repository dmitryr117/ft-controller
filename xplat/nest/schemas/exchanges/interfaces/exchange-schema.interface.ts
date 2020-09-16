import { Document } from "mongoose";
import { ExchangeSetupDto } from '../dto'

export interface IExchangeSchema extends Document {
  exchange_name: string;
  exchange_url: string;
  exchange_key: string;
  setup( exchangeSetupDto: ExchangeSetupDto ): Promise<IExchangeSchema>;
}
