import { Controller, Get } from "@nestjs/common";
import { CandleService } from './candle.service';

@Controller('candle')
export class CandleController {

  constructor(
    private candleService: CandleService
  ) {}

  @Get()
  getSomething() {
    return { 'hello': 'hello' }
  }

  @Get('files')
  loadData() {
    // trigger freqtrade download.
    // upon completion - push downloaded files into database
    return this.candleService.getCandleFilesList();
  }

}
