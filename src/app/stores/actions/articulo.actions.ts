import { Action  } from '@ngrx/store';
import { ErrorData } from 'src/app/models/error-data/error-data.module';
import { ArticuloModule } from '../../models/articulo/articulo.module';

export enum articulosTypes{
     GET_Articulos = '[ALL] Articulos',
     GET_Articulos_SUCCESS = '[ALL] Articulos Success',
     GET_Articulos_ERROR = '[ALL] Articulos Error',
}
enum articuloTypes{
      GET_Articulo = '[GET] Articulo',
      GET_Articulo_SUCCESS = '[GET] Articulo Success',
      GET_Articulo_ERROR = '[GET] Articulo Error'
}
 


export class getArticulos  implements Action  {
    readonly type = articulosTypes.GET_Articulos;
}
export class GETArticulosSuccess  implements Action  {
    readonly type= articulosTypes.GET_Articulos_SUCCESS ;
    constructor(public articulos: ArticuloModule[]) {
    }
}
export class getArticulosError implements Action  {
    readonly type = articulosTypes.GET_Articulos_ERROR;
    constructor(public payload: ErrorData) {
    }
}

export type Actionn = getArticulos  | getArticulosError |  GETArticulosSuccess ;