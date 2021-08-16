import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WallpapperComponent } from './components/wallpapper/wallpapper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

// bootstrap //
@NgModule({
  declarations: [
    AppComponent,
    WallpapperComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [HashLocationStrategy, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
