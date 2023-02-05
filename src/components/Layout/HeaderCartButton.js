import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${classes.bump}`;

    useEffect(() => {

        if (items.length === 0) {
            return;
        } else {
            setButtonIsHighlighted(true);

            const timer = setTimeout(() => {
                setButtonIsHighlighted(false);
            }, 300);

            return () => {
                clearTimeout(timer);
            };
        };

    }, [items]);

    return (
        <button className={buttonIsHighlighted ? btnClasses : classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>

            <span>Twój koszyk</span>

            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;