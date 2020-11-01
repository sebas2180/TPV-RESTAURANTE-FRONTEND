import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError,switchMap,map } from 'rxjs/operators';
import { CategoriaModule } from 'src/app/models/categoria/categoria.module';

import {  CategoriaService } from '../../services/categoriaService/categoria.service'

import { GET_CATEGORIAS, categoriasTypes, GET_CATEGORIAS_SUCCESS, GET_CATEGORIAS_ERROR} from '../actions/categorias.actions';
@Injectable()
export class categoriaEffects{

    constructor(private action$: Actions, private CategoriaService : CategoriaService){

    }


    @Effect() getAllCategorias$ = this.action$.pipe(
        ofType<GET_CATEGORIAS>(categoriasTypes.GET_Categorias),
        switchMap( 
            ()=> this.CategoriaService.getCategorias().pipe(
                map((categorias: CategoriaModule[]) => 
            {return new GET_CATEGORIAS_SUCCESS(categorias)
            })
        
        )),
        catchError(error => of(new GET_CATEGORIAS_ERROR(error)))
    );
}