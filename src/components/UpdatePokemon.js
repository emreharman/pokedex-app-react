import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions/typeActions";
import { updatePokemon } from "../redux/actions/pokemonActions";

const UpdatePokemon = (props) => {
  const pokemon = props.location.pokemon;
  const typesState = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const [name, setName] = useState(pokemon.name);
  const [imgURL, setImgURL] = useState(pokemon.image);
  const [hp, setHp] = useState(pokemon.hp);
  const [attack, setAttack] = useState(pokemon.attack);
  const [defense, setDefense] = useState(pokemon.defense);
  const [speed, setSpeed] = useState(pokemon.speed);
  const [types, setTypes] = useState(pokemon.type_ids);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (types.length == 0) {
      console.log("types can't be empty");
    } else {
      //console.log(types);
      const updatedPokemon = {
        id: pokemon.id,
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
      dispatch((dispatch) => updatePokemon(dispatch, updatedPokemon));
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
  useEffect(() => {
    dispatch(getTypes);
  }, []);
  return (
    <div className="container mt-3 add">
      <div className="add-form">
        <div className="detail-header">
          <h2>Update {pokemon.name}</h2>
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
                        checked={types.includes(type.id) ? true : false}
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePokemon;
