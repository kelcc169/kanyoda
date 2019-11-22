import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import axios from 'axios';
import dotenv from 'dotenv';
import yoda from './img/Yoda_Cloud.png'
dotenv.config()

const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_ACCESS_KEY, secret: process.env.REACT_APP_SECRET_KEY });

const QuoteDisplay = ({addFave, text}) => {
  const [ photo, setPhoto ] = useState('');
  const [ yodaQuote, setYodaQuote ] = useState();
  const [ next, setNext ] = useState(false);

  function getNext() {
    next ? setNext(false) : setNext(true)
  }

  useEffect(() => {
    console.log("hi")
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

    unsplash.photos.getRandomPhoto({ query: text })
      .then(toJson)
      .then(json => {
        setPhoto(json.urls.full)
      })
  },[next, text])

  return(
    <div className='quotedisplay' >
      <Navigation />
      <div className='quoteImage' style={{backgroundImage:`url(${photo})`}}></div>
      <img src={yoda} className='yoda' alt='yodas wisdom' />
      {yodaQuote ? <p className='quote' >{yodaQuote}</p> : <p></p> }
      <div className='bottomNav' >
        <button type='button'><Link to='/' className='click' ><i className="fas fa-angle-left" /></Link></button>
        <i className="far fa-heart click" onClick={() => addFave(yodaQuote, photo)}/>
        <button type='button' className='click' onClick={getNext}><i className="fas fa-angle-right" /></button>
      </div>
    </div>
  )
}

export default QuoteDisplay;