import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import yoda from './img/Yoda_Cloud.png'
dotenv.config()

const unsplash = new Unsplash({ accessKey: '', secret: process.env.SECRET_KEY });

const QuoteDisplay = () => {
  const [ photo, setPhoto ] = useState('');
  const [ yodaQuote, setYodaQuote ] = useState();
  const [ next, setNext ] = useState(false);

  function getNext() {
    next ? setNext(false) : setNext(true)
  }

  useEffect(() => {
    axios.get('https://api.kanye.rest')
      .then(response => {
        axios.get(`http://yoda-api.appspot.com/api/v1/yodish?text=${response.data.quote}`)
          .then(res => {
            setYodaQuote(res.data.yodish)
          }).catch(error => {
            setYodaQuote(response.data.quote)
            console.log('yoda error')
          })
      }).catch(error => {
        console.log('kanye error')
      })

    // unsplash.photos.getRandomPhoto({ query: 'what is the meaning of life' })
    //   .then(toJson)
    //   .then(json => {
    //     setPhoto(json.urls.full)
    //   })
  },[next])

  return(
    <div className='display' >
      <div className='quoteImage' style={{backgroundImage:`url(${photo})`}}></div>
      <img src={yoda} className='yoda' alt='yodas wisdom' />
      {yodaQuote ? <p className='quote' >{yodaQuote}</p> : <p></p> }
      <button className='click'><Link to='/' >back</Link></button>
      <button onClick={getNext} className='click'>next</button>
    </div>
  )
}

export default QuoteDisplay;