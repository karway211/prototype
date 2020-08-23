import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import { getFoods } from './redux/cats-reducers';
import MainContainer from './components/Main/MainContainer';

const App = ({getFoods}) => {
  useEffect(() => {
    getFoods();
  })
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default connect(null, {getFoods})(App);
