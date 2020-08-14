import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxBarcodeModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  public c: string = "";
}
