import React from 'react';
import s from '../FoodElem.module.css';

const NameDescription = ({nameDescription, choise}) => {
  if (choise === 'selHover') {
    return (
      <>
        <span className={`${s.nameDesc} ${s.nameDescHover}`}>Котэ не одобряет?</span>
      </>
    )
  } else {
    return (
      <>
        <span className={s.nameDesc}>{nameDescription}</span>
      </>
    )
  }
}

export default NameDescription;
