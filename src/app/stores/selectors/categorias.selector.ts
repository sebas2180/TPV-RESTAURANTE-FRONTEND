import  { createFeatureSelector ,createSelector} from '@ngrx/store'
import * as categoriaReducer from '../reducers/categoria.reducer';

export const getCategoriasState = createFeatureSelector<categoriaReducer.State>('categoria');

export const getCategoria = createSelector(
    getCategoriasState,
    (state: categoriaReducer.State) => state.categorias
)