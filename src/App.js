import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailablePokemon from "./components/Pokemon/AvailablePokemon";
import Pokemon from "./components/Pokemon/Pokemon";
import PokemonSummary from "./components/Pokemon/PokemonSummary";

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <main>
        <Pokemon />
      </main>
    </div>
  );
}

export default App;
