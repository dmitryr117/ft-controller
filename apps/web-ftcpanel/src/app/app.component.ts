import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@nx-trading/web';

@Component({
  selector: 'nx-trading-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
