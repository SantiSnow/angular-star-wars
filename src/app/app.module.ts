import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { PersonajeComponent } from './personaje/personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [PersonajeComponent]
})
export class AppModule { }
