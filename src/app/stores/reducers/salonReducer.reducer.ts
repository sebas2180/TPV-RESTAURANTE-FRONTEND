import { InitialState } from '@ngrx/store/src/models';
import { SalonModule } from 'src/app/models/salon/salon.module';
import  * as salonAction  from '../actions/salon.actions'



export const initialState : SalonModule ={
        id:0,
        capacidad: 0,
        nombre:null
}

export function salonReducer( state = initialState,action : salonAction.Actionn ){
    switch(action.type){
       case  salonAction.salonesTypes.get_salon :
        return {
            ...state,
            
        }
        case  salonAction.salonesTypes.get_salon_success :
            return {
                ...state,
                salones : action.payload
            }
    }
}