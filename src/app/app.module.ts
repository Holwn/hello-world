import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';
import { ComponentOverViewByManual } from './component-overview-by-manual/component-overview-by-manual';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewByCliComponent,
    ComponentOverViewByManual
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
