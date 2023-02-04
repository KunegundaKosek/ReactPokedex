import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailablePokemon from "./components/Pokemon/AvailablePokemon";
import Pokemon from "./components/Pokemon/Pokemon";
import PokemonSummary from "./components/Pokemon/PokemonSummary";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Pokemon />
      </main>
    </CartProvider>
  );
}

export default App;
