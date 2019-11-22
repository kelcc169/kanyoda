import './App.css';
import './css/HomePage.css';
import React, { useState } from 'react';
import QuoteDisplay from './QuoteDisplay';
import LandingPage from './LandingPage';
import Favorites from './Favorites';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const [ favorites, setFavorites ] = useState([{quote: 'I leave my emojis bart Simpson color', photo: 'https://images.unsplash.com/photo-1550753158-4081db073c9c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMzAyNX0'}, 
    {quote: 'stuff goes here', photo: 'https://images.unsplash.com/photo-1550753158-4081db073c9c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMzAyNX0'}])
  const [ text, setText ] = useState('');


  function addFave(quote, photo) {
    let faves = Array.from(favorites);
    console.log(faves);
    faves.push({quote: quote, photo: photo})
    setFavorites(faves)
  }

  return (
    <Router>
      <Route exact path='/' render={() => <LandingPage setText={setText}/> } />
      <Route path='/quotes' render={ () => <QuoteDisplay addFave={addFave} text={text} setText={setText} /> } />
      <Route path='/favorites' render={ () => <Favorites favorites={favorites} text={text} /> } />
    </Router>
  );
}

export default App;