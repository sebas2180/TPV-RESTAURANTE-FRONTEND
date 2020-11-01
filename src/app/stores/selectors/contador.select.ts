
import { createFeatureSelector , createSelector } from '@ngrx/store'; 
import  * as contadorReducer  from '../reducers/contador.reducer';

export const getCountState = createFeatureSelector<contadorReducer.State>('count');

export const getCount = createSelector(
    getCountState,
    (state: contadorReducer.State) => state.count
);

export const pages = createSelector(
    getCountState,
    (state: contadorReducer.State) => state.pages
);

