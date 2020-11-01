import {props, createAction, Action} from '@ngrx/store';
import { ErrorData } from '../../models/error-data/error-data.module';
 


export enum countActions   {
    inc = '[COUNT] increment ',
    decr = '[COUNT] decrement ',
    pages = '[COUNT] pages'
}


export class IncrementCount implements Action{
    readonly type = countActions.inc;
}

export class DecrementCount implements Action{
    readonly type = countActions.decr;
    
}
export class Pages implements Action{
    readonly type = countActions.pages;
    constructor(public payload : any) { }
}
    
 

export type Actionn =       IncrementCount
                        |   DecrementCount
                        |   Pages
                        ;