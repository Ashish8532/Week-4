import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { CartService } from '../Service/cart.service';

export const cartGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cartService = inject(CartService);
  if (cartService.isCartEmpty()) {
    router.navigate(['/cart-list']);
    return false;
  } else {
    // If the cart is not empty, allow access to the checkout page
    return true;
  }
};
