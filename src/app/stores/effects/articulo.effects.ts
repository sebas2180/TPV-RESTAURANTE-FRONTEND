
import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {  Actions } from '@ngrx/effects';
import { ArticuloService } from 'src/app/services/articuloService/articulo.service';
import {GETArticulosSuccess , getArticulosError , GET_ARTICULOS , articulosTypes} from '../actions/articulo.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';

@Injectable()
export class articulosEffects {

    constructor( private Actions$ : Actions, 
        private articuloService : ArticuloService ){}

    @Effect() getAllArticulos$ = this.Actions$.pipe(
        ofType<GET_ARTICULOS>(articulosTypes.GET_Articulos),
        switchMap(
            () => this.articuloService.getArticulos().pipe(
                map((articulos: ArticuloModule[]) => 
            {return new GETArticulosSuccess(articulos)
            })
        )),
       
        catchError(error => of(new getArticulosError(error)))
    );
}