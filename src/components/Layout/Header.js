import React from 'react';
import backgroundImage from '../../assets/background.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Pokedex</h1>
                <HeaderCartButton />
            </header>

            <div className={classes['main-image']}>
                <img src={backgroundImage} alt='pokedex' />
            </div>
        </>
    );
};

export default Header;