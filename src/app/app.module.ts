import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { VendorComponent } from './vendor/vendor.component';
import { ItemsComponent } from './items/items.component';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { CreateorderComponent } from './createorder/createorder.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    NavbarcomponentComponent,
    HomeComponent,
    ClientComponent,
    VendorComponent,
    ItemsComponent,
    CreateorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
