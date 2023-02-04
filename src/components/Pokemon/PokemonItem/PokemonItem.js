import React from 'react';
import classes from './PokemonItem.module.css';

const PokemonItem = (props) => {

    const price = `${props.price.toFixed(2)}zł`

    return (
        <li className={classes.pokemon} key={props.id}>
            <div>
                <h3>{props.name}</h3>
                <p className={props.type}>{props.type}</p>
                <img src={props.src} alt={props.name} />
                <p className={props.price}>{price}</p>
            </div>
        </li>
    );
};

export default PokemonItem;