import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './client/components/baseComponent/app.component';

import { WelcomeComponent } from './client/components/welcomecomponent/welcome.component';

import { AboutComponent } from './client/components/aboutComponent/about.component';


import {routing} from './client/router/app.router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
