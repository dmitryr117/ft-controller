import { Document } from 'mongoose';
import { CoinPairDto } from '../dto';

export interface ICoinPairSchema extends Document {
  pair: string;
  setup( coinPairDto: CoinPairDto ): Promise<ICoinPairSchema>;
}
