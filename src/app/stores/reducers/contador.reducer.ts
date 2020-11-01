import { on } from '@ngrx/store';
import * as countActions   from '../actions/contador.actions';

 
export interface State{
     count : number,
     pages: number
}
 const initialState: State = {
     count : 1,
     pages : 0
}
 
export function contReducer (state =  initialState, action: countActions.Actionn) : State   {
     switch(action.type){
          case countActions.countActions.inc:
               return Object.assign({}, state, { count: state.count + 1 });

          case countActions.countActions.decr:
               return Object.assign({}, state, { count: state.count - 1  });
          case countActions.countActions.pages:
               return Object.assign({}, state, {  pages : action.payload });
           default: {
               return state;
             }
     }
}