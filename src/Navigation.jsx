import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [ hamburger, setHamburger ] = useState(false)

  function openMenu() {
    hamburger ? setHamburger(false) : setHamburger(true)
  }

  var contents;
  if (!hamburger) {
    contents = <button type='button' className='burger' onClick={openMenu}><i className="fas fa-bars" /></button>
  } else {
    contents = (
      <div className='menu' onClick={openMenu}>
        <Link to='/favorites' className='menulink' ><button className='menubutton'>Favorites</button></Link>
      </div>
    )
  }

  return(
    <>
      {contents}
    </>
  )
}

export default Navigation;