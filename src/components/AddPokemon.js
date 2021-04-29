import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../redux/actions/typeActions";
import { getPokemons, addPokemon } from "../redux/actions/pokemonActions";

const AddPokemon = (props) => {
  const typesState = useSelector((state) => state.types);
  const pokemonsState = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [types, setTypes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (types.length == 0) {
      console.log("types can't be empty");
    } else {
      const pokemonIds = pokemonsState.pokemons.map((pokemon) => {
        return parseInt(pokemon.id);
      });
      const biggerId = Math.max(...pokemonIds);
      const newPokemon = {
        id: `${biggerId + 1}`,
        name,
        image: imgURL,
        height: 0,
        weight: 0,
        hp,
        attack,
        defense,
        speed,
        type_ids: types,
      };
      //console.log(newPokemon);
      dispatch((dispatch) => addPokemon(dispatch, newPokemon));
      props.history.push("/");
    }
  };
  const handleCheck = (e) => {
    if (!types.includes(e.target.id)) {
      //console.log(e.target.id);
      setTypes([...types, e.target.id]);
    } else {
      const filteredTypes = types.filter((type) => {
        if (type != e.target.id) {
          return true;
        }
      });
      setTypes(filteredTypes);
    }
  };
  const clean = () => {
    setName("");
    setImgURL("");
    setHp(0);
    setAttack(0);
    setDefense(0);
    setSpeed(0);
    setTypes([]);
  };
  useEffect(() => {
    dispatch(getTypes);
    dispatch(getPokemons);
  }, []);

  return (
    <div className="container mt-3 add">
      {typesState.fetched && pokemonsState.fetched ? (
        <div className="add-form">
          <div className="detail-header">
            <h2>Add Pokemon</h2>
          </div>
          <div className="add-form-cover">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="pokemon-name" className="form-label">
                  Pokemon Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pokemon-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pokemon-image" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pokemon-image"
                  required
                  value={imgURL}
                  onChange={(e) => setImgURL(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pokemon-hp" className="form-label">
                  HP
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pokemon-hp"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pokemon-attack" className="form-label">
                  Attack
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pokemon-attack"
                  value={attack}
                  onChange={(e) => setAttack(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pokemon-defense" className="form-label">
                  Defense
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pokemon-defense"
                  value={defense}
                  onChange={(e) => setDefense(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pokemon-speed" className="form-label">
                  Speed
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="pokemon-speed"
                  value={speed}
                  onChange={(e) => setSpeed(e.target.value)}
                />
              </div>
              <div className="type-checks-cover">
                <div className="types-header">Select Type(s)</div>
                <div className="type-checks">
                  {typesState.types.map((type) => {
                    return (
                      <div className="form-check" key={type.id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={type.id}
                          id={type.id}
                          onChange={(e) => {
                            handleCheck(e);
                          }}
                        />
                        <label className="form-check-label" htmlFor={type.id}>
                          {type.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="reset"
                  className="btn btn-outline-danger"
                  onClick={() => clean()}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default AddPokemon;
