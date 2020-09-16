import { Module } from "@nestjs/common";
import { BinanceApiDraftController} from "./controllers";
import { BinanceApiService } from "@nx-trading/nest/apis";

@Module({
  imports: [],
  controllers: [
    BinanceApiDraftController
  ],
  providers: [
    BinanceApiService
  ],
  exports: []
})
export class DraftsModule {}
