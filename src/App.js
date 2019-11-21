import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
require('dotenv').config();
function App() {
  const [quotes, setQuotes] = useState([])
  const [pics, setPics] = useState([])


  useEffect( () => {
    axios.get('https://api.kanye.rest/')
      .then(response => {
        setQuotes(response.data)
      })
  },[])
  
  

  return (
    <>
      {quotes.quote}
      {pics}

    </>
  )
}

export default App;
