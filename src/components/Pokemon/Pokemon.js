import React from 'react';
import AvailablePokemon from './AvailablePokemon';
import PokemonSummary from './PokemonSummary';

const Pokemon = () => {
    return (
        <>
            <PokemonSummary />
            <AvailablePokemon />
        </>
    );
};

export default Pokemon;