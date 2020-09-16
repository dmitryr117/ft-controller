import { Injectable } from "@nestjs/common";
import * as fse from 'fs-extra';
import * as path from 'path';

@Injectable()
export class CandleService {

  private pathToCandleFiles = '/home/dmitryr117/dev/trading/data/binance';

  // consider using SocketIO to communicate to client-side about upload progress.
  async getCandleFilesList() {
    const dirPath = path.join(this.pathToCandleFiles);
    console.log('loading files');
    const items = await fse.readdir( dirPath );
    console.log('items', items.length);
    const pairTimes = [];
    items.forEach( item => {
      const pairTime = item.split('.')[0].split('-');
      pairTimes.push({
        pair: pairTime[0].replace('_', ''),
        timefr: pairTime[1]
      });
    });
    return pairTimes;
  }

  queryLastEntry() {
    // get the last database entry for ticker and timeframe
  }

  scanCandleFile() {
    // open and scan candle file till a spot where the last entry was downloaded.
  }

  loadCandles() {
    // load candle file into database.
  }

}
