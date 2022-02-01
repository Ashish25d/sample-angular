import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { ErrorComponent } from './feature/error/error.component';
import { NextComponent } from './feature/next/next.component';
import { PrevComponent } from './feature/prev/prev.component';
import { MatomoModule } from 'ngx-matomo';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NextComponent,
    PrevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatomoModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
