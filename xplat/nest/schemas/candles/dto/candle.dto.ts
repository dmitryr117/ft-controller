import { IsString, IsNumber } from 'class-validator';

export class CandleDto {
  @IsNumber()
  open_time: number;
  @IsString()
  ticker: string;
  price: CandleVals;
  @IsNumber()
  volume: number;
}

class CandleVals {
  @IsNumber()
  open: number;
  @IsNumber()
  high: number;
  @IsNumber()
  low: number;
  @IsNumber()
  close: number;
}
