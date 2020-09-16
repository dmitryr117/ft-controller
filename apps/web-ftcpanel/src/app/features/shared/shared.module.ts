import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@nx-trading/web';

@NgModule({
  imports: [UIModule],
  exports: [UIModule],
})
export class SharedModule {}
