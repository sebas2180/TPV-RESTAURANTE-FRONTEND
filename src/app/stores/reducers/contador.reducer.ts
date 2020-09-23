import { on } from '@ngrx/store';
import * as countActions   from '../actions/contador.actions';
 
export interface State{
     count : number
}
 const initialState: State = {
     count : 1
}
 
export function contReducer (state =  initialState, action: countActions.Actionn) : State   {
     switch(action.type){
          case countActions.countActions.inc:
               return Object.assign({}, state, { count: state.count + 1 });
          // case countActions.countActions.incSuccess:
          //      return {  count: state.count +1,  loaded: true}
          // case countActions.countActions.incFail:
          //      return {  ...state, loaded: false}
          case countActions.countActions.decr:
               return Object.assign({}, state, { count: state.count - 1 });
          // case countActions.countActions.decrSuccess:
          //      return {  ...state, count: state.count -1, loaded: true}
          // case countActions.countActions.decrFail:
          //      return {  ...state, loaded: false}
           default: {
               return state;
             }
     }
}