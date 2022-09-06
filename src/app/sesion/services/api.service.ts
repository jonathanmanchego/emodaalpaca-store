import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStoreService } from './local-store.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string;
  private baseRecursos: string;
  headers: any;
  token: any;
  ls = window.localStorage;
  httpOptions: any;
  constructor(private http: HttpClient, private store: LocalStoreService) {
    this.baseUrl = environment.backendApi;
    this.baseRecursos = environment.backend;
  }
  insertHead() {
    this.ls.getItem('token');
    let data = this.store.getItem('token');
    this.token = data['access_token'];
    if (data['access_token']) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.token,
        }),
      };
    }
  }

  insertHeadFile() {
    const data = this.store.getItem('token');
    this.token = data.access_token;
    if (data.access_token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      };
    }
  }

  getUser(data:any) {
    return this.http.post(`${this.baseUrl}/users/login`, data);
  }
  
  getProfile() {
    this.insertHead();
    return this.http.get(`${this.baseUrl}/obtenerInfoCredencial`, this.httpOptions);
  }
  verificarLoggued() {
    this.insertHead();
    return this.http.get(`${this.baseUrl}/users/loginverify`, this.httpOptions);
  }
}
