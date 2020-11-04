
import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {  Actions } from '@ngrx/effects';
import {  MesaService } from 'src/app/services/mesaService/mesa.service';
import {Actionn,salonesTypes,GET_SALONES,GET_SALONES_SUCCESS} from '../actions/salon.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticuloModule } from 'src/app/models/articulo/articulo.module';
import { SalonService } from 'src/app/services/salonService/salon.service';
import { SalonModule } from 'src/app/models/salon/salon.module';

@Injectable()
export class salonEffects {

    constructor( private Actions$ : Actions, 
        private articuloService : SalonService ){}

    @Effect() getSalones$ = this.Actions$.pipe(
        ofType<GET_SALONES>(salonesTypes.get_salon),
        switchMap(
            () => this.articuloService.getSalon().pipe(
                map((salones: SalonModule[]) => 
            {return new GET_SALONES_SUCCESS(salones)
            })
        )),
    );
}