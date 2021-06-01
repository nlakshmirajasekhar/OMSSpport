import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {ClientComponent} from './client/client.component';
import {SignupComponent} from './signup/signup.component';
import {VendorComponent} from './vendor/vendor.component';
import {ItemsComponent} from './items/items.component';
import {CreateorderComponent} from './createorder/createorder.component';

const routes: Routes = [
  {
    path:'' ,component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'clients',component:ClientComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'vendor',component:VendorComponent
  },
  {
    path:'items',component:ItemsComponent
  },
  {
    path:'create',component:CreateorderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
