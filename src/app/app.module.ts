


import { AppComponent } from './app.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SvgComponent } from './header/svg/svg.component';
import { BanerComponent } from './header/baner/baner.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { SliderComponent } from './aside/slider/slider.component';
import { TelComponent } from './header/tel/tel.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './article/contact/contact.component';
import { UslugiComponent } from './article/uslugi/uslugi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Article1Component } from './article/article1/article1.component';
import { Article2Component } from './article/article2/article2.component';
import { Article3Component } from './article/article3/article3.component';
import { FormMitroComponent } from './form-mitro/form-mitro.component';
import { DownloadFileComponent } from './download-file/download-file.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgComponent,
    BanerComponent,
    AsideComponent,
    FooterComponent,
    ArticleComponent,
    SliderComponent,
    TelComponent,
     ContactComponent,
    UslugiComponent,
    HomeComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    FormMitroComponent,
    DownloadFileComponent,

  ],
  imports: [
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
