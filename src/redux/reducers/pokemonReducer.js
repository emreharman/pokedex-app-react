import {
  POKEMONS_FETCH_STARTED,
  POKEMONS_FETCH_SUCCESS,
  POKEMONS_FETCH_FAIL,
  ADD_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from "../actions/actionTypes";
const initialState = {
  pokemons: [],
  fetching: false,
  fetched: false,
  add: false,
  delete: false,
  update: false,
  error: null,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMONS_FETCH_STARTED:
      return {
        ...state,
        fetching: true,
      };
    case POKEMONS_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        pokemons: action.payload,
      };
    case POKEMONS_FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        fetching: false,
        error: action.payload,
      };
    case ADD_POKEMON:
      return {
        ...state,
        add: true,
        pokemons: [...state.pokemons, action.payload],
      };
    case UPDATE_POKEMON:
      const filteredPokemons = state.pokemons.filter((pokemon) => {
        if (pokemon.id != action.payload.id) {
          return true;
        }
      });
      return {
        ...state,
        update: true,
        pokemons: [...filteredPokemons, action.payload],
      };
    case DELETE_POKEMON:
      const filteredPokemons_ = state.pokemons.filter((pokemon) => {
        if (pokemon.id != action.payload.id) {
          return true;
        }
      });
      return {
        ...state,
        delete: true,
        pokemons: filteredPokemons_,
      };
    default:
      return state;
  }
};
