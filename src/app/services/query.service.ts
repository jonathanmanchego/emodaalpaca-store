import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../sesion/services/api.service';
import { AuthService } from '../sesion/services/auth.service';
import { LocalStoreService } from '../sesion/services/local-store.service';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  
  private baseUrl: string;
  headers: any;

  constructor(
    private api: ApiService,
    private http: HttpClient,
    private ls: LocalStoreService,
    private auth: AuthService
  ) {
    this.baseUrl = environment.backendApi;
    this.auth;
  }

  /***
   * CATEGORIAS
   */
  guardarCategoria(data:any) {
    this.api.insertHeadFile();
    return this.http.post(`${this.baseUrl}/admin/categoria`, data,this.api.httpOptions).toPromise();
  }
  obtenerCategorias(params: any) {
    this.api.insertHead();
    return this.http.get(`${this.baseUrl}/admin/categoria`,this.api.httpOptions).toPromise();
  }
  editarCategoria(id: any,data:any) {
    this.api.insertHeadFile();
    return this.http.post(`${this.baseUrl}/admin/categoria/update/${id}`,data,this.api.httpOptions).toPromise();
  }
  eliminarCategoria(id: any) {
    this.api.insertHead();
    return this.http.delete(`${this.baseUrl}/admin/categoria/${id}`,this.api.httpOptions).toPromise();
  }


  /***
   * PRODUCTOS
   */
  obtenerProductos(params: any) {
    this.api.insertHead();
    return this.http.get(`${this.baseUrl}/admin/producto`,this.api.httpOptions).toPromise();
  }
  obtenerProductosSinPublicar(params: any) {
    this.api.insertHead();
    return this.http.get(`${this.baseUrl}/admin/producto/not_in_publications`,this.api.httpOptions).toPromise();
  }
  obtenerProductosPublicados(params: any) {
    this.api.insertHead();
    return this.http.get(`${this.baseUrl}/admin/producto/in_publications`,this.api.httpOptions).toPromise();
  }
  guardarProducto(data:any) {
    this.api.insertHeadFile();
    return this.http.post(`${this.baseUrl}/admin/producto`, data,this.api.httpOptions).toPromise();
  }
  editarProducto(id:any,data:any) {
    this.api.insertHeadFile();
    return this.http.post(`${this.baseUrl}/admin/producto/update/${id}`, data,this.api.httpOptions).toPromise();
  }
  eliminarProducto(id: any) {
    this.api.insertHead();
    return this.http.delete(`${this.baseUrl}/admin/producto/${id}`,this.api.httpOptions).toPromise();
  }


  /***
   * PUBLICACIONES
   */
  obtenerPublicaciones(params: any) {
    this.api.insertHead();
    return this.http.get(`${this.baseUrl}/admin/publicacion`,this.api.httpOptions).toPromise();
  }
  guardarPublicaciones(data:any) {
    this.api.insertHead();
    return this.http.post(`${this.baseUrl}/admin/publicacion`, data,this.api.httpOptions).toPromise();
  }
  editarPublicaciones(id:any,data:any) {
    this.api.insertHead();
    return this.http.put(`${this.baseUrl}/admin/publicacion/${id}`, data,this.api.httpOptions).toPromise();
  }
  eliminarPublicaciones(id: any) {
    this.api.insertHead();
    return this.http.delete(`${this.baseUrl}/admin/publicacion/${id}`,this.api.httpOptions).toPromise();
  }

  /**
   * USUARIOS
   */
  getUsers(params: any) {
    this.api.insertHead();
    return this.http.get(`${this.baseUrl}/admin/users`,this.api.httpOptions).toPromise();
  }
  saveUser(data:any) {
    this.api.insertHead();
    return this.http.post(`${this.baseUrl}/admin/users`, data,this.api.httpOptions).toPromise();
  }
  updateUser(id:any,data:any) {
    this.api.insertHeadFile();
    return this.http.put(`${this.baseUrl}/admin/users/${id}`, data,this.api.httpOptions).toPromise();
  }
  deleteUser(id: any) {
    this.api.insertHead();
    return this.http.delete(`${this.baseUrl}/admin/users/${id}`,this.api.httpOptions).toPromise();
  }

  /***
   * IMAGENES
   */
  deleteImg(id: any) {
    this.api.insertHead();
    return this.http.delete(`${this.baseUrl}/admin/producto-imagen/${id}`,this.api.httpOptions).toPromise();
  }
  
}
