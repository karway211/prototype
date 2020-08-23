import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <h1 className={s.title}>Ты сегодня покормил кота?</h1>
    </header>
  )
}

export default Header;
