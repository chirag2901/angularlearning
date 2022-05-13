import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './customer/home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",component:LoginComponent
  },
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"calc",component:CalcComponent},
  {path:"listusers",component:ListUsersComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
