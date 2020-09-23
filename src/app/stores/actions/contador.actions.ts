import {props, createAction, Action} from '@ngrx/store';
import { ErrorData } from '../../models/error-data/error-data.module';
 


export enum countActions   {
     inc = '[COUNT] increment ',
    // incSuccess = '[COUNT] increment Success',
    // incFail = '[COUNT] increment Fail ',
      decr = '[COUNT] decrement ',
    // decrSuccess = '[COUNT] decrement Inc ',
    // decrFail = '[COUNT] decrement Fail'
}


export class IncrementCount implements Action{
    readonly type = countActions.inc;
}
// export class IncrementCountSuccess implements Action{
//     readonly type = countActions.incSuccess;
//     constructor(public payload : number){

//     }
// }
// export class IncrementCountFail implements Action{
//     readonly type = countActions.incFail;
//     constructor(public payload: ErrorData){

//     }
// }

// export class DecrementCountSuccess implements Action{
//     readonly type = countActions.decrSuccess;
//     constructor(public payload: number){

//     }
 
// }
// export class DecrementCountFail implements Action{
//     readonly type = countActions.decrFail;
//     constructor(public payload : ErrorData){
        
//     }
// }
export class DecrementCount implements Action{
    readonly type = countActions.decr;
    
}


export type Actionn =       IncrementCount
                        // |   IncrementCountSuccess
                        // |   IncrementCountFail
                        // |   DecrementCountSuccess
                        // |   DecrementCountFail
                        |   DecrementCount
                        ;