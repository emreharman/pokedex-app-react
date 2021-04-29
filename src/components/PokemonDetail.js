import React from "react";

const PokemonDetail = (props) => {
  const pokemon = props.location.pokemon;
  const types = props.location.types;
  return (
    <div className="container pokemon-detail-cover">
      <div className="detail-header">
        <h1>{pokemon.name}</h1>
      </div>
      <div className="pokemon-detail">
        <div className="detail-img-cover">
          <div className="detail-img">
            <img src={pokemon.image} alt="" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="detail-center">
          <div className="detail-card">
            <h5>Height</h5>
            <p>{pokemon.height} meter</p>
          </div>
          <div className="detail-card">
            <h5>Weight</h5>
            <p>{pokemon.weight} kg</p>
          </div>
          <div className="detail-card">
            <h5>Types</h5>
            <ul>
              {types.map((type) => (
                <li key={type.id}>{type.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="detail-left">
          <div className="detail-card">
            <h5>HP</h5>
            <p>{pokemon.hp} </p>
          </div>
          <div className="detail-card">
            <h5>Attack</h5>
            <p>{pokemon.attack} </p>
          </div>
          <div className="detail-card">
            <h5>Defense</h5>
            <p>{pokemon.defense}</p>
          </div>
          <div className="detail-card">
            <h5>Speed</h5>
            <p>{pokemon.speed} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
