import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalonModule } from 'src/app/models/salon/salon.module';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  constructor( private http: HttpClient) { }

  getSalon() {
    return this.http.get<SalonModule[]>(`${environment.rutaBackEnd}salon/listAll`)
  }
}
