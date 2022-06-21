import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");

const Pokemon = () => {
  let pokemonParam = useParams();
  pokemonParam = pokemonParam.name;
  const [poke, setPoke] = useState({});
  console.log(pokemonParam);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonParam}`)
      .then((res) => setPoke(res.data))
      .catch((err) => console.log("error on fetch pokemon", err));
  }, [pokemonParam]);

  return (
    <div>
      <h1>{poke.name}</h1>
      <img src={poke.sprites?.front_default} alt={poke.name} />
    </div>
  );
};

export default Pokemon;
