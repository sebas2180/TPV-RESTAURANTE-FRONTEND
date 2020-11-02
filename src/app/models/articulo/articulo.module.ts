import { CategoriaModule } from '../categoria/categoria.module';

export interface ArticuloModule {

    title : string ;
   description : string;
   created_at : Date;
   price_neto : number;
   id : number;
   id_usuario : number;
   categoria: CategoriaModule;
   status: string;

}