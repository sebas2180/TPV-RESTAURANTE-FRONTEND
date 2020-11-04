import { Action } from '@ngrx/store';
import { SalonModule } from 'src/app/models/salon/salon.module';

 


export enum salonesTypes   {
    get_salon = '[SALON] GET SALON',
    get_salon_success = '[SALON] GET SALON SUCCESS'
}

export class GET_SALONES implements Action {
    readonly type = salonesTypes.get_salon
    constructor(){}
}
export class GET_SALONES_SUCCESS implements Action {
    readonly type = salonesTypes.get_salon_success
    constructor(public payload: SalonModule[]){}
}


export type   Actionn = GET_SALONES_SUCCESS |
                GET_SALONES       ;