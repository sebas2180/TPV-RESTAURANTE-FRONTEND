import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

    getArticulos(): Observable<any> {
      return this.http.get(`${environment.rutaBackEnd}articulo/listAll`);
    }

    add(): Observable<any> {
      return this.http.get(`${environment.rutaBackEnd}articulo/add`);
    }
}
