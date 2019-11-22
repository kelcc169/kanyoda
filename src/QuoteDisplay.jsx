import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import axios from 'axios';
import dotenv from 'dotenv';
import yoda from './img/Yoda_Cloud.png'
dotenv.config()

const unsplash = new Unsplash({ accessKey: 'a50a457eebd47cf427fcb3e1e23f2728eaeaf1b00b329dbe484df2242a670b0a', secret: process.env.SECRET_KEY });

const QuoteDisplay = ({text}) => {
  const [ photo, setPhoto ] = useState();
  const [ yodaQuote, setYodaQuote ] = useState();
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

    unsplash.photos.getRandomPhoto({ query: text })
      
      .then(toJson)
      .then(json => {
        setPhoto(json.urls.full)
      
      })
  },[text])

  return(
    <div className='display' >
      <div className='quoteImage' style={{backgroundImage:`url(${photo})`}}></div>
      <img src={yoda} className='yoda' alt='yodas wisdom' />
      {yodaQuote ? <p className='quote' >{yodaQuote}</p> : <p></p> }
    </div>
  )
}

export default QuoteDisplay;