import { NgModule } from "@angular/core";

import {
  BarChartComponent,
  LineChartComponent
} from "./components";

@NgModule({
  imports: [],
  declarations: [
    BarChartComponent,
    LineChartComponent
  ],
  exports: [
    BarChartComponent,
    LineChartComponent
  ]
})
export class DraftModules {}
