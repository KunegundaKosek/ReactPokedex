import React from 'react';
import Input from '../../UI/Input';
import classes from './PokemonItemForm.module.css';

const PokemonItemForm = (props) => {
  return (
    <form>
      <Input input={{
        id: 'amount' + props.id,
        typ: 'number',
        min: 1,
        max: 5,
        step: 1,
        defaultValue: 1,
      }} />
      <button>+ Add</button>
    </form>
  );
};

export default PokemonItemForm;