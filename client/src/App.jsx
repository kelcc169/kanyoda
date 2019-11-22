import './App.css';
import './css/HomePage.css';
import React, { useState, useEffect } from 'react';
import QuoteDisplay from './QuoteDisplay';
import LandingPage from './LandingPage';
import Favorites from './Favorites';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const [ user, setUser ] = useState(null);
  const [ token, setToken] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ text, setText ] = useState('');

  function addFave(quote, photo) {
    console.log('click')
    if (user)
    axios.post(`/api/favorites/${user._id}`, {quote, photo})
      .then(response => {
        console.log(response.data)
      })
  }

  useEffect(() => {
    var token = localStorage.getItem('mernToken');
    if (!token || token === 'undefined') {
      localStorage.removeItem('mernToken');
      setToken('');
      setUser(null);
    } else {
      axios.post('/auth/me/from/token', {token})
        .then(res => {
          if (res.data.type === 'error') {
            localStorage.removeItem('mernToken');
            setToken('');
            setUser(null);
            setErrorMessage(res.data.message);
            console.log(errorMessage)
          } else {
            localStorage.setItem('mernToken', res.data.token);
            setToken(res.data.token);
            setUser(res.data.user);
          }
        })
    }
  }, [token, errorMessage])

  return (
    <Router>
      <Route exact path='/' render={() => <LandingPage text={text} setText={setText} /> } />
      <Route path='/quotes' render={ () => <QuoteDisplay addFave={addFave} text={text} /> } />
      <Route path='/favorites' render={ (props) => <Favorites user={user} setToken={setToken} {...props} /> } />
    </Router>
  );
}

export default App;