import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './PokemonItem.module.css';
import PokemonItemForm from './PokemonItemForm';

const PokemonItem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `${props.price.toFixed(2)}zł`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };
    return (
        <li className={classes.pokemon} key={props.id}>
            <div>
                <h3>{props.name}</h3>
                <p className={props.type}>{props.type}</p>
                <img src={props.src} alt={props.name} />
                <p className={props.price}>{price}</p>
                <PokemonItemForm onAddToCart={addToCartHandler} />
            </div>

        </li>
    );
};

export default PokemonItem;