import React from 'react';
import s from './Main.module.css';
import FoodElem from './FoodElem/FoodElem';

const Main = ({foodsData}) => {

  const elements = foodsData.map(el => <FoodElem name={el.name}
                                                 id={el.id}
                                                 key={el.id}
                                                 nameDescription={el.nameDescription}
                                                 ingredients={el.ingredients}
                                                 portions={el.portions}
                                                 gift={el.gift}
                                                 customer={el.customer}
                                                 description={el.description}
                                                 cont={el.cont}
                                                 available={el.available} />)

  console.log(foodsData)
  return (
    <main className={s.main}>
      {elements}
    </main>
  )
}

export default Main;
