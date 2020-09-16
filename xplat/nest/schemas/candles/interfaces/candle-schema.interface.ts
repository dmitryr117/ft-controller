
export class ICandleSchema {
  open_time: number;
  ticker: string;
  price: IPrice;
  volume: number;
}

class IPrice {
  open: number;
  high: number;
  low: number;
  close: number;
}
