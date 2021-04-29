import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListPokemons from "./components/ListPokemons";
import AddPokemon from "./components/AddPokemon";
import PokemonDetail from "./components/PokemonDetail";
import UpdatePokemon from "./components/UpdatePokemon";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ListPokemons} />
          <Route path="/add-pokemon" component={AddPokemon} />
          <Route path="/pokemon-detail/:id" component={PokemonDetail} />
          <Route path="/update-pokemon/:id" component={UpdatePokemon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
