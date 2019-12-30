import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SvgComponent } from './svg/svg.component';
import { BanerComponent } from './header/baner/baner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgComponent,
    BanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [/* {provide: LocationStrategy, useClass: HashLocationStrategy} */],
  bootstrap: [AppComponent]
})
export class AppModule { }
