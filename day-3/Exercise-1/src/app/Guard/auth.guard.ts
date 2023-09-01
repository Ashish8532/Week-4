import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../Service/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  console.log('I am in auth guard.');

  const isLoggedIn = authService.isloggedInUser();

  if(isLoggedIn) {
    return true;
  }
 else {
  router.createUrlTree(['/login']);
  return false;
 }
};
