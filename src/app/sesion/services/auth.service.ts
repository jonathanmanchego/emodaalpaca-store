import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from './../../../environments/environment';
import { Sw2Service } from './sw2.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Only for demo purpose
  authenticated = false;
  private baseUrl: string;
  filial: number = 1;

  constructor(
    private store: LocalStoreService,
    private router: Router,
    private http: HttpClient,
    private api: ApiService,
    private toastr: ToastrService,
    private sw2Service: Sw2Service,
  ) {
    this.baseUrl = environment.backendApi;
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = this.store.getItem('token');
    if (this.authenticated) {
      this.api.verificarLoggued().subscribe(
        (data:any) => {
          if (!data['valid']) {
            this.signout();
          }
        },
        (error) => {
          this.signout();
        }
      );
    }
  }

  getuser() {
    const data = this.store.getItem('token');
    return data.user;
  }

  signin(credentials:any) {
    // console.log(credentials);
    this.api.getUser(credentials).subscribe(
      (data:any) => {
        if (data['access_token']) {
          this.authenticated = true;
          this.store.setItem('token', data);
          this.store.setItem('user', data);
          this.router.navigateByUrl('/admin');
        } else {
          this.authenticated = false;
          this.store.setItem('token', true);
        }
      },
      (error) => {
        if (error.status == 401) {
          this.sw2Service.mostrarAlertaToast(error.error.error, '¡Acceso Denegado!', 'error');
        }
        if (error.status == 403) {
          this.sw2Service.mostrarAlertaToast(error.error.error, '¡Acceso Prohibido!', 'error');
        }
      }
    );
    return of({});
  }

  signout() {
    this.authenticated = false;
    this.store.clear();
    this.router.navigateByUrl('/sesion');
  }
}
