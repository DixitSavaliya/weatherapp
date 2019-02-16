import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {WhetherComponent} from './whether/whether.component';
import {HeaderComponent} from './header/header.component';
import {CityComponent} from './city/city.component';
 


const routes: Routes = [
{path:"", pathMatch:"full", redirectTo:"logIn"},
{path: 'logIn', component:LoginComponent},
{path: 'signUp', component:SignupComponent},
{path: 'whether', component:WhetherComponent},
{path:'header',component:HeaderComponent},
{path:'city',component:CityComponent}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
