import React from 'react';
import { Link } from 'react-router-dom';
import yoda from './img/Yoda_Cloud.png';

const Favorites = ({favorites}) => {

  var contents = favorites.map((fave, index) => {
    return (
      <div key={index} className='favorite' style={{backgroundImage:`url(${fave.photo})`}}>
        <img src={yoda} className='yoda' alt='yodas wisdom' />
        <p className='quote'>{fave.quote}</p>
      </div>
    )
  })
  

  return(
    <div>
      <button type='button' style={{position: 'fixed', top: '5px', left: '5px', backgroundColor: 'rgba(0,0,0,0)', border: 'none'}} ><Link to='/' className='click' ><i className="fas fa-angle-left" /></Link></button>
      {contents}
    </div>
  )

}

export default Favorites;