import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './mycomponent/navebar/navebar.component';
import { CardsComponent } from './mycomponent/cards/cards.component';
import { CarosulComponent } from './mycomponent/carosul/carosul.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    CardsComponent,
    CarosulComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
