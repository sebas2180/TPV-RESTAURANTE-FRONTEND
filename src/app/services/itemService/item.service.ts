import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemModule } from 'src/app/models/item/item.module';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { 
     
  }
  add(item: ItemModule)  {
    return this.http.post(`${environment.rutaBackEnd}item/add`,item);   
  }
  findBy_nroMesa(numero: number)  {
    return this.http.get<ItemModule[]>(`${environment.rutaBackEnd}item/findBy_nroMesa/${numero}`);   
  }
}
