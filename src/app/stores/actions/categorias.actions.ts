import { Action  } from '@ngrx/store';
import { ErrorData } from 'src/app/models/error-data/error-data.module';
import { CategoriaModule} from '../../../app/models/categoria/categoria.module';


export enum categoriasTypes{
    GET_Categorias = '[ALL] Articulos',
    GET_Categorias_SUCCESS = '[ALL] Categorias Success',
    GET_Categorias_ERROR = '[ALL] Categorias Error',
}

enum articuloTypes{
    GET_Categorias = '[GET] Categorias',
    GET_Categorias_SUCCESS = '[GET] Categorias Success',
    GET_Categorias_ERROR = '[GET] Categorias Error'
}

export class GET_CATEGORIAS implements Action{
   readonly type = categoriasTypes.GET_Categorias;
   constructor(){

   }
}

export class GET_CATEGORIAS_SUCCESS implements Action{
    readonly type = categoriasTypes.GET_Categorias_SUCCESS;
    constructor(public categorias: CategoriaModule[]){

    }
}

export class GET_CATEGORIAS_ERROR implements Action {
    readonly type = categoriasTypes.GET_Categorias_ERROR;
    constructor(public payload : ErrorData){

    }
}

export type Actionn = GET_CATEGORIAS  |  GET_CATEGORIAS_ERROR  |  GET_CATEGORIAS_SUCCESS;

