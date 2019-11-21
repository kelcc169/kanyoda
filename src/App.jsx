import './App.css';
import React, { useEffect, useState } from 'react';
import Unsplash from 'unsplash-js';
import dotenv from 'dotenv';
import './css/HomePage.css';
dotenv.config()

const unsplash = new Unsplash({ accessKey: process.env.ACCESS_KEY });

const App = () => {
  // const [ background, setBackground ] = useState('https://images.unsplash.com/photo-1572567062309-247d330e3f7a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMzAyNX0')

  // var img;
  // if (background) {
  //   console.log('woo')
  //   img = <div className='background' style={{ backgroundImage:'' }}/>
  // } else {
  //   console.log('boo')
  //   img = <p>nothing yet!</p>
  // }

  return (

    <div className="landing-background">
      <header className="App-header">
        {/* {img} */}
        {/* <img src={} className="background" /> */}
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
