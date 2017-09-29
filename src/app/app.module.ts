import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsToolBarComponent } from './as-tool-bar/as-tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AsToolBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
