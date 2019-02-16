import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { WhetherComponent } from './whether/whether.component';
import { HeaderComponent } from './header/header.component';
import { CityComponent } from './city/city.component';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  SignupComponent,
  UserComponent,
  WhetherComponent,
  HeaderComponent,
  CityComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
