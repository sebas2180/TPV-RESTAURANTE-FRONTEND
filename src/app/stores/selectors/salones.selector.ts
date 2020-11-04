import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SalonModule } from 'src/app/models/salon/salon.module';
import { initialState,salonReducer} from '../../stores/reducers/salonReducer.reducer';



export const getNombreSalonesState =  createFeatureSelector<SalonModule>('salon');

export const getNombreSalones  = createSelector(
    getNombreSalonesState,
    (state :SalonModule ) => state.nombre
)