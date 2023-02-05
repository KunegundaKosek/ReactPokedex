import React from 'react';
import classes from './AvailablePokemon.module.css';
import POKEMON_DATA from '../../assets/POKEMON_DATA';
import Card from '../UI/Card';
import PokemonItem from './PokemonItem/PokemonItem';

const AvailablePokemon = () => {

    const pokemonList = POKEMON_DATA.map((pokemon) => {
        return (
            <PokemonItem
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                src={pokemon.image}
                price={pokemon.price}
            />
        )
    })

    return (
        <section className={classes.pokemon}>
            <Card>
                <ul>
                    {pokemonList}
                </ul>
            </Card >
        </section>
    );
};

export default AvailablePokemon;