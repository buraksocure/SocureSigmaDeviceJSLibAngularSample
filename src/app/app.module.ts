import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocureDeviceRiskComponent } from './socure-device-risk/socure-device-risk.component';

@NgModule({
  declarations: [
    AppComponent,
    SocureDeviceRiskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
