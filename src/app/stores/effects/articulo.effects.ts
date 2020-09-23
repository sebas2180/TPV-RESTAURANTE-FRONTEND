
import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {  Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ArticuloService } from 'src/app/services/articuloService/articulo.service';
import * as articuloActions from '../actions/articulo.actions';
import { GETArticulosSuccess,getArticulos,getArticulosError } from '../actions/articulo.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class articulosEffects {

    constructor( private Actions$ : Actions, private articuloService : ArticuloService ){}

    @Effect()
    getAllArticulos$ = this.Actions$.pipe(
        ofType(articuloActions.getArticulos),
        switchMap(() => this.articuloService.getArticulos()),
        map(title => new GETArticulosSuccess(title)),
        catchError((err) => [new getArticulosError(err)])
    );
}