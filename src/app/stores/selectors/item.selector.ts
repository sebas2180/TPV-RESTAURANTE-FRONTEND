import { createFeatureSelector, createReducerFactory, createSelector } from '@ngrx/store';

import  * as itemReducer  from '../reducers/item.reducer';

export const getCountItemState = createFeatureSelector<itemReducer.State>('item');

export const getCountItem = createSelector(
    getCountItemState,
    ( state : itemReducer.State ) => state.count_items
)
export const getCantidadItem = createSelector(
    getCountItemState,
    ( state: itemReducer.State)=> state.count_items
)