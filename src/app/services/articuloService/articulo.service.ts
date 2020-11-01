import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';
import {  environment } from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
 
  constructor( private http : HttpClient) { }

    articuloCargado(articulo): boolean{
      if(articulo != null){
        return true;
      }
        return true;
   
    }

    getArticulos()  {
      // console.log('EJECUTANDO SERVICE');
      return this.http.get<ArticuloModule[]>(`${environment.rutaBackEnd}articulo/listAll`)
      
    }

    add(): Observable<any> {
      return this.http.get(`${environment.rutaBackEnd}articulo/add`);
    }
    getArticulosForIdCategoria(id_categoria)  {
      return this.http.get<ArticuloModule[]>(`${environment.rutaBackEnd}articulo/categoria/${id_categoria}`)   
    }
}
