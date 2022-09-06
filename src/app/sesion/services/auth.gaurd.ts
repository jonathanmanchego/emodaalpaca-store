import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private store: LocalStoreService) {}

  canActivate() {
    const authentication = this.store.getItem('token');
    // console.log(authentication);
    
    if (this.auth.authenticated) {
      if (authentication.passSameToUser) {
        this.router.navigateByUrl('/seguridad/cambiarContraeña');
      }


      return true;
    } else {
      this.router.navigateByUrl('/sesion');
      this.auth.signout();
    }

    return false;
  }
}
