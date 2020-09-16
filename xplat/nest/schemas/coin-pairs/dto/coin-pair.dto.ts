import { IsString } from 'class-validator';

export class CoinPairDto {
  @IsString()
  pair: string;
}
