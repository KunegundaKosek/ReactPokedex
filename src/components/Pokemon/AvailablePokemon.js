import React from 'react';
import classes from './AvailablePokemon.module.css';
import POKEMON_DATA from '../../assets/POKEMON_DATA';

const AvailablePokemon = () => {

    const pokemonList = POKEMON_DATA.map((pokemon) => {
        return (
            <li key={pokemon.id}>
                <h1>{pokemon.name}</h1>
                <p className={classes.text}>{pokemon.type}</p>
                <img src={pokemon.image} alt={pokemon.name} />
                <p>{pokemon.price.toFixed(2)}</p>
            </li>
        )
    })

    return (
            <section className={classes.pokemon}>
                <ul>
                    {pokemonList}
                </ul>
            </section>
    );
};

export default AvailablePokemon;