import React from 'react';
import {Link} from 'react-router-dom';
import './css/HomePage.css';

const LandingPage = ({text,setText}) => {
    
    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="landing-background">
            <div className='content'>
        
                <p className='words'>
                Answers, you seek....
                </p>
                <form>
                <input type='text' value={text} onChange={handleOnChange} name="input" placeholder='Please type text'></input> <br />
                
                <button type="button"><Link to='/quotes'>KAN-YODA</Link></button>
                </form>

            </div>
    
    </div>


    )

}

export default LandingPage;