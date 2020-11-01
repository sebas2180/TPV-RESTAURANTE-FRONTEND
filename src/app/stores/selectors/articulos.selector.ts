import  { createFeatureSelector ,createSelector} from '@ngrx/store'
import { State } from '../reducers/articulo.reducer';

export const getArticulosState = createFeatureSelector<State>('articulo');

export const getArticulos= createSelector(
    getArticulosState,
    (state: State) => state.articulos
)