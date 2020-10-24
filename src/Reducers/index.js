
import { ADD_POKEMONS_REQUEST, 
          ADD_POKEMONS_SUCCESS,  
          ADD_POKEMONS_FAILED
       } from '../Constants/pokemon.types';

const initialState = {
  status: status.IDLE_STATUS,
  data: [],
  error: null,
};

export default function pokemos(state = initialState, action) {
  switch (action.type) {
    case ADD_POKEMONS_REQUEST:
      return {
        ...state,
        status: status.LOADING_STATUS,
      };
    case ADD_POKEMONS_SUCCESS:
      return {
        ...state,
        data: action.data,
        status: status.SUCCESS_STATUS,
      };
    case ADD_POKEMONS_FAILED:
      return {
        ...state,
        status: status.FAILURE_STATUS,
        error: action.error,
      };

    default:
      return state;
  }
}