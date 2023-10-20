import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';

import { UserService } from './user.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.userService.isloggedIn()) {
      return true;
    } else {
      this.router.navigate(['']); 
      return false;
    }
}
  
} 
    
    
