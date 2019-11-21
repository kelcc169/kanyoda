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
    <div className="landing-background">
      <header className="App-header">
        <QuoteDisplay />
        <p>
          Answers, you seek....
        </p>
        <form>
          <input type='text' placeholder='Find your Kan-Yoda'></input> <br />
          <input type='submit'></input>
        </form>
      </header>
    </div>
  );
}

export default App;