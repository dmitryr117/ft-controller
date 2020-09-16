import { Controller, Get } from "@nestjs/common";
import { BinanceApiService } from "@nx-trading/nest/apis";


@Controller('binance-api-draft')
export class BinanceApiDraftController {

  constructor( private binanceApiService: BinanceApiService ) {}

  @Get('markets')
  getMarkets() {
    return this.binanceApiService.loadMarkets();
  }

  @Get('symbols')
  getSymbols() {
    return this.binanceApiService.getMarketSymbols();
  }

  @Get('symbols_json')
  getSymbolsJson() {
    return this.binanceApiService.getMarketSymbolsJson();
  }
}
