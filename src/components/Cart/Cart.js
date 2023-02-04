import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {

    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: '1', name: "Fish", amount: 2, price: 13.99 }].map((item) => {
                <li>{props.name}</li>
            })}
        </ul>
    )

    return (
        <div>
            {cartItems}

            <div className={classes.total}>
                <span>Kwota do zapłaty</span>
                <span>12.99</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        
        </div>
    );
};

export default Cart;