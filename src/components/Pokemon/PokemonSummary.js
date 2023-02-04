import classes from './PokemonSummary.module.css';

const PokemonSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Zostań Mistrzem Pokemon</h2>
            <p>
                Wybierz ulubioną Kartę pokemon z naszej szerokiej oferty dostępnych kart i ciesz się ...
            </p>
            <p>
                Zbieraj i kolekcjonuj unikatowe karty Pokemon.
            </p>
        </section>
    );
};

export default PokemonSummary;