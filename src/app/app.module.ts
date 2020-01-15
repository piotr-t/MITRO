import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SvgComponent } from './svg/svg.component';
import { BanerComponent } from './header/baner/baner.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgComponent,
    BanerComponent,
    AsideComponent,
    FooterComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [/* {provide: LocationStrategy, useClass: HashLocationStrategy} */],
  bootstrap: [AppComponent]
})
export class AppModule { }
