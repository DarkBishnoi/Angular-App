import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  // Check login status from localStorage
    
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
   
    
    // If not logged in, allow access to the route (login page)
    return true;
  }
}
