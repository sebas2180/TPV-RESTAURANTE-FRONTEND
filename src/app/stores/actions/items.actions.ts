import {props, createAction, Action} from '@ngrx/store';


export enum itemActions {
    inc = '[ITEM] incr',
    dec = '[ITEM] dec',
    cantidad = '[ITEM] cantidad'
}

export class INCREMENT_ITEM implements Action {
   readonly type= itemActions.inc;
}

export class DECREMENT_ITEM implements Action {
    readonly type = itemActions.dec;
}
export class CANTIDAD implements Action{
    readonly type = itemActions.cantidad;
    constructor(public payload: any){}
}

export type Actionn = 
                        INCREMENT_ITEM | 
                        DECREMENT_ITEM |
                        CANTIDAD     ;