import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const session = await authService.getSession();
  
  if(session) {
    return true;
  }
  else {
    router.navigate(['/']);
    return false;
  }
};
