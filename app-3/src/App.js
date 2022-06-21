import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
