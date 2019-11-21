import './App.css';
import React, { useEffect, useState } from 'react';
import Unsplash from 'unsplash-js';
import QuoteDisplay from './QuoteDisplay';
import './css/HomePage.css';
import dotenv from 'dotenv';
dotenv.config()

const unsplash = new Unsplash({ accessKey: process.env.ACCESS_KEY });

const App = () => {

  return (
    <Router>
      <div className="landing-background">
        <header className="App-header">
          <p>
            Answers, you seek....
          </p>
          <form>
            <input type='text' placeholder='Find your Kan-Yoda'></input> <br />
            <Link to='/quotedisplay'><input type='submit'></input></Link>
            
          </form>
          <QuoteDisplay />
        </header>
      </div>


    </Router>
  );
}

export default App;