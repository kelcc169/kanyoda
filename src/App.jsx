import './App.css';
import React, { useEffect, useState } from 'react';
import Unsplash from 'unsplash-js';
import dotenv from 'dotenv';
dotenv.config()

// const unsplash = new Unsplash({ accessKey: process.env.ACCESS_KEY });

const App = () => {
  const [ background, setBackground ] = useState('https://images.unsplash.com/photo-1572567062309-247d330e3f7a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwMzAyNX0')

  // find a random photo
  // useEffect(() => {
  //   unsplash.photos.getRandomPhoto()
  //   .then(response => {
  //     return response.json()
  //   }).then(jsonData => {
  //     console.log(jsonData.urls.full)
  //     setBackground(jsonData.urls.full)
  //   }).catch(error => {
  //     console.log('oops!')
  //   })
  // }, []) 

  var img;
  if (background) {
    console.log('woo')
    img = <div className='background' style={{ backgroundImage:'' }}/>
  } else {
    console.log('boo')
    img = <p>nothing yet!</p>
  }

  return (

    <div className="App">
      <header className="App-header">
        {img}
        {/* <img src={} className="background" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
