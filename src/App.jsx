import './App.css';
import './css/HomePage.css';
import React from 'react';
import QuoteDisplay from './QuoteDisplay';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage'

const App = () => {

  return (
    <Router>
      <Route exact path='/' render={() => <LandingPage /> } />
      <Route path='/quotes' render={() => <QuoteDisplay />} />
    </Router>
  );
}

export default App;