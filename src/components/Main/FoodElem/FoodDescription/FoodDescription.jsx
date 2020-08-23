import React from 'react';
import s from '../FoodElem.module.css';

const FoodDescription = ({available, ingredients, choise, description, changeSelect}) => {
  if(!available) {
    return (
      <div className={`${s.description} ${s.accent}`}>
        {`Печалька, ${ingredients} закончился.`}
      </div>
    )
  } else if(choise === 'sel' || choise === 'selHover') {
    return (
      <div className={s.description}>
        {description}
      </div>
    )
  } else if(choise === 'def' || choise === 'defHover') {
    return (
      <div className={s.description}>
        Чего сидишь? Порадуй котэ, <span onClick={changeSelect}>купи.</span>
      </div>
    )
  }
}

export default FoodDescription;
