import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  console.log('AuthGuard canActivate invoked');
  if (authService.isAuthenticated()) {
    return true;
  } else {
    console.log('User is not authenticated. Redirecting to login page.');
    return router.createUrlTree(['/login']);
  }

};
