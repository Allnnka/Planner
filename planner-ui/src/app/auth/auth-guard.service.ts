import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) { }
    canActivate():boolean
    {
        const isAuthenticated = this.authService.isLoggedIn();
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigateByUrl('login');
        }
        return true;
    }
}
