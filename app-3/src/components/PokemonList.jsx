import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

const PokemonList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setList(res.data.results))
      .catch((err) => console.log("error on fetch pokemon", err));
  }, []);
  return (
    <div>
      {list.map((poke) => {
        return (
          <Link key={poke.url} to={`/pokemon/${poke.name}`}>
            <h2>{poke.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
