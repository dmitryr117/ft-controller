import { Module } from "@nestjs/common";
import { CandleController, CandleService } from './components';

@Module({
  imports: [],
  controllers: [
    CandleController
  ],
  providers: [
    CandleService
  ],
  exports: [ ]
})
export class PairLoaderModule {

}
