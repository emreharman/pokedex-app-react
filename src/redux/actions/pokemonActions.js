import axios from "axios";
import {
  POKEMONS_FETCH_STARTED,
  POKEMONS_FETCH_SUCCESS,
  POKEMONS_FETCH_FAIL,
  ADD_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from "../actions/actionTypes";
const pokemonsURL = "http://localhost:8000/pokemons";

export const getPokemons = (dispatch) => {
  dispatch({ type: POKEMONS_FETCH_STARTED });
  axios
    .get(pokemonsURL)
    .then((res) => {
      dispatch({ type: POKEMONS_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: POKEMONS_FETCH_FAIL, payload: err }));
};
export const addPokemon = (dispatch, pokemon) => {
  axios
    .post(pokemonsURL, pokemon)
    .then((res) => dispatch({ type: ADD_POKEMON, payload: pokemon }))
    .catch((err) => dispatch({ type: POKEMONS_FETCH_FAIL, payload: err }));
};
export const deletePokemon = (dispatch, pokemon) => {
  axios
    .delete(pokemonsURL + "/" + pokemon.id)
    .then((res) => dispatch({ type: DELETE_POKEMON, payload: pokemon }))
    .catch((err) => dispatch({ type: POKEMONS_FETCH_FAIL, payload: err }));
};
export const updatePokemon = (dispatch, pokemon) => {
  axios
    .put(pokemonsURL + "/" + pokemon.id, pokemon)
    .then((res) => dispatch({ type: UPDATE_POKEMON, payload: pokemon }))
    .catch((err) => dispatch({ type: POKEMONS_FETCH_FAIL, payload: err }));
};
