import { CategoriaModule} from '../../../app/models/categoria/categoria.module';
import  * as categoriasActions from '../actions/categorias.actions';

export interface State {
    categorias : CategoriaModule[];
    loading: boolean;
    loaded: boolean
}


const initialState : State =  {
    categorias : [],
    loading: false,
    loaded: false
}

export function categoriasReducer (state =  initialState,action : categoriasActions.Actionn): State{
    switch(action.type){

        case categoriasActions.categoriasTypes.GET_Categorias_SUCCESS :
            console.log('GET_CATEGORIAS SUCCESS');
            {return {
                ...state,
                categorias: action.categorias,
                loading: false,
                loaded: true
            }
        }
        break;
        case categoriasActions.categoriasTypes.GET_Categorias_ERROR:{
            return{
                ...state,
                loading: false,
                loaded: false
            }
        }
        break;
        case categoriasActions.categoriasTypes.GET_Categorias: {
            console.log('GET_CATEGORIAS');
            return {
                ...state,
                loading: true
            }

        }
        break;
    }
}