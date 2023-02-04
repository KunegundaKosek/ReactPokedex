import React from 'react';
import Modal from '../UI/Modal';
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
        <Modal onClose={props.onClose}>
            {cartItems}

            <div className={classes.total}>
                <span>Kwota do zapłaty</span>
                <span>12.99</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

        </Modal>
    );
};

export default Cart;