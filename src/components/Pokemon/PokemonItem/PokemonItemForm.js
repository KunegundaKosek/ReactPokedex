import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './PokemonItemForm.module.css';

const PokemonItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} input={{
        id: 'amount' + props.id,
        typ: 'number',
        min: 1,
        max: 5,
        step: 1,
        defaultValue: 1,
      }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Wpisz poprawną liczbą (1-5)</p>}
    </form>
  );
};

export default PokemonItemForm;