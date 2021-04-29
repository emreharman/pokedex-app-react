import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { pokemonReducer } from "./reducers/pokemonReducer";
import { typesReducer } from "./reducers/typesReducer";

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  types: typesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
