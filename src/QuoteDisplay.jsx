import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

const unsplash = new Unsplash({ accessKey: process.env.ACCESS_KEY, secret: process.env.SECRET_KEY });

const QuoteDisplay = () => {
  const [ photo, setPhoto ] = useState();
  const [ yodaQuote, setYodaQuote ] = useState();

  // useEffect(() => {
  //   axios.get('https://api.kanye.rest')
  //     .then(response => {
  //       console.log(response.data.quote)
  //       axios.get(`http://yoda-api.appspot.com/api/v1/yodish?text=${response.data.quote}`)
  //         .then(response => {
  //           console.log(response.data.yodish)
  //           setYodaQuote(response.data.yodish)
  //         }).catch(error => {
  //           console.log('yoda error')
  //         })
  //     }).catch(error => {
  //       console.log('kanye error')
  //     })

  //   unsplash.photos.getRandomPhoto()
  //     .then(toJson)
  //     .then(json => {
  //       console.log(json.urls.full)
  //     })
  // },[])

  return(
    <div>
      {yodaQuote ? <p>{yodaQuote}</p> : <p></p> }
    </div>
  )
}

export default QuoteDisplay;