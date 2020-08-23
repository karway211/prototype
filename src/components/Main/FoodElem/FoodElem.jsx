import React, { useState } from 'react';
import s from './FoodElem.module.css';
import Frame from './Frame/Frame';
import FrameBckgr from './FrameBckgr/FrameBckgr';
import FoodDescription from './FoodDescription/FoodDescription';
import NameDescription from './NameDescription/NameDescription';

const FoodElem = ({name, nameDescription, ingredients, portions, gift, customer, description, cont, available}) => {

  let [choise, setChoise] = useState('def');

  const changeSelect = (e) => {
    const curentElem = e.currentTarget;
    curentElem.onmouseout = (e) => {
      e.preventDefault();
    }
    if (available) {
      setChoise(choise === 'def' || choise === 'defHover' ? choise='sel' : choise='def');
    }
  }
  const changeHover = (e) => {
    if (available) {
      const curentElem = e.currentTarget;
      curentElem.onmouseout = () => {
        if (choise === 'def' || choise==='defHover') setChoise(choise='defHover')
        if (choise === 'sel' || choise==='selHover') setChoise(choise='selHover')
      }
    }
  }
  let circleStyle;
  if (choise === 'sel') {
    circleStyle = `${s.circle} ${s.active}`;
  } else if (choise === 'def') {
    circleStyle = s.circle
  } else if (choise === 'defHover') {
    circleStyle = `${s.circle} ${s.circleHover}`
  } else if (choise === 'selHover') {
    circleStyle = `${s.circle} ${s.activeHover}`
  }

  return (
    <div className={s.mainWrap}>
      <div className={s.elem} onClick={changeSelect} onMouseOver={changeHover} >
        <FrameBckgr />
        <NameDescription nameDescription={nameDescription} choise={choise} />
        <h2 className={s.name}>{name}</h2>
        <div className={s.ingredients}>{ingredients}</div>
        <div className={s.portions}>{`${portions} порций`}</div>
        <div className={s.gift}>{gift}</div>
        <div className={s.customer}>{customer}</div>
        <div className={!available ? `${s.circle} ${s.disabled}` : circleStyle}>
          <div className={s.cont}>{cont}</div>
          <div className={s.unit}>кг</div>
        </div>
        <Frame flag={'frame1'} choise={choise} />
        <Frame available={available} />
      </div>
      <FoodDescription available={available} 
                                  ingredients={ingredients} 
                                  choise={choise} 
                                  description={description} 
                                  changeSelect={changeSelect} />
    </div>
  )
}

export default FoodElem;
