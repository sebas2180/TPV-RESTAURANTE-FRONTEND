import {  Selector,StateObservable, Action } from '@ngrx/store';
 
import { ArticuloModule } from '../../models/articulo/articulo.module';
import * as articuloActions from '../actions/articulo.actions';
 
export interface State{
    articulos: ArticuloModule[];
    loading: boolean;
    loaded: boolean

}
const initialState: State = {
    articulos:null,
    loading: false,
    loaded: false
}


export function articulosReducer (state =  initialState, action: articuloActions.Actionn) : State   {
        switch(action.type){
            case articuloActions.articulosTypes.GET_Articulos_SUCCESS:
              {  return {
                    ...state,
                    articulos: action.articulos,
                    loading: false,
                    loaded: true
                    };}
            case articuloActions.articulosTypes.GET_Articulos_ERROR:
             {   return {
                ...state,
                loading: false,
                loaded: false
                };}
            case articuloActions.articulosTypes.GET_Articulos:
              {  return {
                    ...state,
                    loading: true,
                };}
            default: {
                return state;
                }
        }
    }

