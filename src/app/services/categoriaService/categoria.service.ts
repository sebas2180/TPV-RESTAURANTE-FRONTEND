import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModule } from 'src/app/models/categoria/categoria.module';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {


    
}


  getCategorias(){
    console.log('EJECUTANDO SERVICE CATEGORIAS')
    return this.http.get<CategoriaModule[]>(`${environment.rutaBackEnd}categoria/listall`);
  }
}