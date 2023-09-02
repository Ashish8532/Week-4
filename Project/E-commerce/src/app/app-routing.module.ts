import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './Guard/auth.guard';
import { cartGuard } from './Guard/cart.guard';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'cart-list', component: CartListComponent, canActivate: [authGuard]},
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard, cartGuard], },
  { path: 'order-confirmation', component: OrderConfirmationComponent, canActivate: [authGuard, cartGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/product', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
