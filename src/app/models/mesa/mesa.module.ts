import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonModule } from '../salon/salon.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class MesaModule { 

  id: number;
  comensales: number;
  salon : SalonModule;
  fecha: Date;
  numero: number;


  
}
