import  { createFeatureSelector ,createSelector} from '@ngrx/store'

import { State } from '../reducers/articulo.reducer';

export const getArticulosState = createFeatureSelector<State>('articulos');

export const getArticulos= createSelector(
    getArticulosState,
    (state: State) => state.articulos
)