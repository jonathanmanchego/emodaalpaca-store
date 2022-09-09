import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicServicesService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
  ) { 
    this.baseUrl = environment.backendApi;
  }

  obtenerCategorias(params: any) {
    return this.http.get(`${this.baseUrl}/public/categories-on-publications`).toPromise();
  }
  obtenerPulicaciones(params: any) {
    return this.http.get(`${this.baseUrl}/public/publicaciones/${params}`).toPromise();
  }
  obtenerProducto(params: any) {
    return this.http.get(`${this.baseUrl}/public/product/${params}`).toPromise();
  }
}
