import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloModule } from '../articulo/articulo.module';
import { MesaModule } from '../mesa/mesa.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ItemModule { 

  id : number;
  articulo: ArticuloModule;
  mesa: MesaModule;
  comentario: string;
  cantidad: number;
  
}
