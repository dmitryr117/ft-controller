import { Injectable } from "@nestjs/common";
import * as ccxt from "ccxt";

@Injectable()
export class BinanceApiService {

  private exchange: any;
  private btc_incompatrible_pairs = [
    'BTC/USDT', 'BTC/TUSD', 'BTC/PAX', 'BTC/USDC', 'BTC/USDS',
    'BTC/BUSD', 'BTC/NGN', 'BTC/RUB', 'BTC/TRY',   'BTC/EUR',
    'BTC/ZAR', 'BTC/BKRW', 'BTC/IDRT', 'BTCUP/USDT', 'BTCDOWN/USDT',
    'BTC/GBP', 'BTC/UAH', 'BTC/BIDR', 'BTC/AUD', 'BTC/DAI', 'WBTC/ETH'
  ];

  constructor() {
    this.exchange = new ccxt.binance();
    this.exchange.loadMarkets();
  }

  async getBinanceInfo(): Promise<any> {

  }

  async loadMarkets(): Promise<any> {
    return await this.exchange.loadMarkets();
  }

  async getMarketSymbols( stake: string = 'BTC' ): Promise<any> {
    const markets = await this.exchange.loadMarkets();

    //const markets = JSON.parse(markets_str);
    const market_list_draft: string[] = [];
    let market_list: string[] = [];
    if ( !!stake ) {
      for ( let key in markets ) {
        if ( key.includes( stake ) ){
          market_list_draft.push( key );
        }
      }
      market_list = market_list_draft.filter( x => !this.btc_incompatrible_pairs.includes(x) );
    } else {
      for ( let key in markets ) {
          market_list.push( key );
      }
    }
    return market_list;
  }

  async getMarketSymbolsJson(): Promise<any> {
    const market_symbols = await this.getMarketSymbols();
    console.log('Market symbols: ', market_symbols);
    return JSON.stringify(market_symbols);
  }

}
