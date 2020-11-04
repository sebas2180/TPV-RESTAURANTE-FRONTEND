import { OnInit } from '@angular/core';
import { InitialState } from '@ngrx/store/src/models';
import * as itemActions from '../actions/items.actions';


export interface State   {
    count_items : number ;
}

const initiaState : State = {
    count_items : 0
}

export function itemReducer(state =  initiaState, action : itemActions.Actionn) : State{

    switch(action.type){
        case itemActions.itemActions.dec :
            return Object.assign({},state,{count_items : state.count_items -1});
        case itemActions.itemActions.inc :
            return Object.assign({},state,{count_items :state.count_items +1})
        case itemActions.itemActions.cantidad:
            return Object.assign({}, state, {  cantidad : action.payload });
        default: {
                return state;
            }
    }
}