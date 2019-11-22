import React from 'react';
import { Link } from 'react-router-dom';
import './css/HomePage.css';

const LandingPage = () => {
    return(
        <div>
            <p>landing page</p>
            <Link to='/quotes'>Button</Link>
        </div>
    )
}

export default LandingPage;