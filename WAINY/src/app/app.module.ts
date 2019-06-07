import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SplashComponent } from './Container/splash/splash.component';
import { ChatbotComponent } from './Container/chatbot/chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
