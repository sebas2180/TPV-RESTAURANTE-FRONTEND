import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { MesaModule } from 'src/app/models/mesa/mesa.module';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }


  public getMesas() {
    return this.http.get<MesaModule[]>(`${environment.rutaBackEnd}mesa/listAll`)
  }
  public addMesa(mesa: MesaModule) {
    return this.http.post(`${environment.rutaBackEnd}mesa/add`,mesa);
  }
}
