import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DraftsModule } from './drafts';
import { PairLoaderModule } from './pair-loader';

@Module({
  imports: [
    DraftsModule,
    PairLoaderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
