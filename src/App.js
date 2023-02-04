import React from "react";
import Header from "./components/Layout/Header";
import AvailablePokemon from "./components/Pokemon/AvailablePokemon";
import PokemonSummary from "./components/Pokemon/PokemonSummary";

function App() {
  return (
    <div>
      <Header />
      <PokemonSummary />
      <AvailablePokemon />
    </div>
  );
}

export default App;
