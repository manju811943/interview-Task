import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ShoppingComponent } from './shopping.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path : 'login' , component : LoginComponent},


  { path : 'shoppingcomp' , component : ShoppingComponent},
  { path: 'signup' , component: SignupComponent },
  {path : 'cart/:id' , component : CartComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
