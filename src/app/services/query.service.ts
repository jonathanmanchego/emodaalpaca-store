import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../sesion/services/api.service';
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
    private ls: LocalStoreService
  ) {
    this.baseUrl = environment.backendApi;
  }

  /***
   * CATEGORIAS
   */
  guardarCategoria(data:any) {
    this.api.insertHead();
    return this.http.post(`${this.baseUrl}/admin/categoria`, data,this.api.httpOptions).toPromise();
  }
  obtenerCategorias(params: any) {
    this.api.insertHead();
    return this.http.get(`${this.baseUrl}/admin/categoria`,this.api.httpOptions).toPromise();
  }
  editarCategoria(id: any,data:any) {
    this.api.insertHead();
    return this.http.put(`${this.baseUrl}/admin/categoria/${id}`,data,this.api.httpOptions).toPromise();
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
  // 
  // 
  // 

  // obtenerDatosAccesoExamen() {
  //   const sessionData:any = this.ls.getItem('unamToken');
  //   const params = {
  //     iAccesoId: sessionData['user']
  //   };
  //   console.log(params);
  //   this.api.insertHead();
  //   this.api.httpOptions.params = params;
  //   return this.http.get(`${this.baseUrl}/ceidPublic/examen/obtenerDatosUsuario`, this.api.httpOptions).toPromise();
  // }

  // obtenerExamenesPendientes() {
  //   const sessionData:any = this.ls.getItem('unamToken');
  //   const params = {
  //     iPersId: sessionData['iPersId']
  //   };
  //   console.log(params);
  //   this.api.insertHead();
  //   this.api.httpOptions.params = params;
  //   return this.http.get(`${this.baseUrl}/ceidPublic/examen/obtenerExamenesPendientes`, this.api.httpOptions).toPromise();
  
  // }
  // obtenerExamenesPasados() {
  //   const sessionData:any = this.ls.getItem('unamToken');
  //   const params = {
  //     iPersId: sessionData['iPersId']
  //   };
  //   console.log(params);
  //   this.api.insertHead();
  //   this.api.httpOptions.params = params;
  //   return this.http.get(`${this.baseUrl}/ceidPublic/examen/obtenerExamenesPasados`, this.api.httpOptions).toPromise();
  // }

  // veryficarFechaHoraExamen(params: any) {
  //   console.log(params);
  //   this.api.insertHead();
  //   this.api.httpOptions.params = params;
  //   return this.http.get(`${this.baseUrl}/ceidPublic/examen/veryficarFechaHoraExamen`, this.api.httpOptions).toPromise();
  // }
  // obtenerBalotarioByExamen(params: any) {
  //   console.log(params);
  //   this.api.insertHead();
  //   this.api.httpOptions.params = params;
  //   return this.http.get(`${this.baseUrl}/ceidPublic/examen/obtenerBalotarioByExamen`, this.api.httpOptions).toPromise();
  // }
  // obtenerExamenById(params: any) {
  //   console.log(params);
  //   this.api.insertHead();
  //   this.api.httpOptions.params = params;
  //   return this.http.get(`${this.baseUrl}/ceidPublic/examen/obtenerExamenById`, this.api.httpOptions).toPromise();
  // }
  // obtenerExamenTerminado(params: any) {
  //   console.log(params);
  //   this.api.insertHead();
  //   this.api.httpOptions.params = params;
  //   return this.http.get(`${this.baseUrl}/ceidPublic/examen/obtenerExamenTerminado`, this.api.httpOptions).toPromise();
  // }
  // obtenerTests(params: any) {
  //   return this.http.get(`${this.baseUrl}/ceidPublic/obtenerTests`).toPromise();
  // }
  // insertarActualizarExamenesPreguntas(data: any) {
  //   console.log(data);
  //   this.api.insertHead();
  //   return this.http.post(`${this.baseUrl}/ceidPublic/examen/insertarActualizarExamenesPreguntas`, data,this.api.httpOptions).toPromise();
  // }
  // terminarExamen(data: any) {
  //   console.log(data);
  //   this.api.insertHead();
  //   return this.http.post(`${this.baseUrl}/ceidPublic/examen/terminarExamen`, data,this.api.httpOptions).toPromise();
  // }
}
