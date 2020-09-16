import { Schema } from 'mongoose';
import { CandleDto } from './dto';
import { ICandleSchema } from './interfaces';

export const CandleSchema = new Schema({
  open_time: Number,
  ticker: String,
  timeframe: String,
  price: {
    open: Number,
    high: Number,
    low: Number,
    close: Number
  },
  volume: Number
}).index({ ticker: 1, timeframe: 1 });
