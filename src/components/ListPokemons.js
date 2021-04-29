import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, deletePokemon } from "../redux/actions/pokemonActions";
import { getTypes } from "../redux/actions/typeActions";

const ListPokemons = () => {
  const pokemonsState = useSelector((state) => state.pokemons);
  const typesState = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const handleDelete = (pokemon) => {
    dispatch((dispatch) => deletePokemon(dispatch, pokemon));
  };
  useEffect(() => {
    dispatch(getPokemons);
    dispatch(getTypes);
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        {pokemonsState.fetched && typesState.fetched ? (
          <>
            {pokemonsState.pokemons.map((pokemon) => {
              const types = typesState.types.filter((type) => {
                if (pokemon.type_ids.includes(type.id)) {
                  return true;
                }
              });
              return (
                <div key={pokemon.id} className="col col-sm-2">
                  <div>
                    <div className="card text-center">
                      <Link
                        to={{
                          pathname: `/pokemon-detail/${pokemon.id}`,
                          pokemon: pokemon,
                          types: types,
                        }}
                      >
                        <img
                          src={pokemon.image}
                          className="card-img-top"
                          alt="..."
                        />
                      </Link>
                      <div className="card-body">
                        <Link
                          to={{
                            pathname: `/pokemon-detail/${pokemon.id}`,
                            pokemon: pokemon,
                            types: types,
                          }}
                        >
                          <h5 className="card-title">{pokemon.name}</h5>
                        </Link>
                      </div>
                      <div>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <span>
                            <b>Types: </b>
                          </span>
                          {types.map((type) => (
                            <span
                              className="badge bg-info text-dark"
                              key={type.id}
                            >
                              {type.name}
                            </span>
                          ))}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          paddingBottom: "1rem",
                        }}
                      >
                        <Link
                          className="btn btn-warning"
                          to={{
                            pathname: `/update-pokemon/${pokemon.id}`,
                            pokemon: pokemon,
                          }}
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(pokemon)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default ListPokemons;
