import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import yoda from './img/Yoda_Cloud.png';
import Login from './Login';
import Signup from './Signup';
import axios from 'axios';

const Favorites = ({user, setToken, history}) => {
  const [ faves, setFaves ] = useState([])

  useEffect(() => {
    if (user) {
      axios.get(`/api/favorites/${user._id}`)
        .then(res => {
          setFaves(res.data.favorites)
        })
    }
  }, [user])


  var contents;
  if (user) {
    contents = faves.map((fave, index) => {
      return (
        <div key={index} className='favorite' style={{backgroundImage:`url(${fave.photo})`}}>
          <img src={yoda} className='yoda' alt='yodas wisdom' />
          <p className='quote'>{fave.quote}</p>
        </div>
      )
    })
  } else {
    contents = (
      <>
        <Login setToken={setToken} history={history}/>
        <Signup setToken={setToken} history={history}/>
      </>
    )
  }

  return(
    <div>
      <button type='button' style={{position: 'fixed', top: '5px', left: '5px', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} ><Link to='/' className='click' ><i className="fas fa-angle-left" /></Link></button>
      {contents}
    </div>
  )

}

export default Favorites;