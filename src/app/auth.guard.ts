import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private router :Router,
    private auth:AuthService

  ){}
  canActivate():boolean{
    if(this.auth.loggedIn())
    return true
    else{
      this.router.navigate(["auth/login"])
      return false
    }

}
}
