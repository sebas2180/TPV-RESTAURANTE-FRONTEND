import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ArticuloModule {

    public  title : string ;
    public description : string;
    public created_at : Date;
    public price : number;
    public id : number;
    public id_usuario : number;
    public category: string;
    public status: string;


    deserialize(input: any): this {
      // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
      return Object.assign(this, input);
    }

 }
