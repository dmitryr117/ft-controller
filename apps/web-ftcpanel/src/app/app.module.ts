import { NgModule } from '@angular/core';

// libs
import { environment } from '@nx-trading/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { DraftModules } from "./features/drafts";

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    DraftModules
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
