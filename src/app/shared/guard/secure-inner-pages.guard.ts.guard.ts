import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuardTsGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn) {
      window.alert("No tienes acceso a esta URL!");
       this.router.navigate(['pantalla-principal'])
    }
    return true;
  }
  
}
