import React from 'react';
import {Link} from 'react-router-dom';
import './css/HomePage.css';

const LandingPage = ({text,setText}) => {
    
    
    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    var displayButton;
    if(!handleOnChange){
        displayButton = (
        <div className="landing-background">
            <div className='content'>
                <p className='words'>
                Answers, you seek....
                </p>
                <form>
                <textarea type='textarea' value={text} onChange={handleOnChange} name="input" placeholder='Type something...'></textarea> <br />
                </form>
            </div>
        </div>
        )
        
    } else {
        displayButton = (
        <div className="landing-background">
            <div className='content'>
                <p className='words'>
                Answers, you seek....
                </p>
                <form>
                <textarea type='textarea' value={text} onChange={handleOnChange} name="input" placeholder='Type something...'></textarea> <br />
                <button type="button"><Link to='/quotes'> ASK</Link></button>
                </form>
            </div>
        </div>
        )
    }
    return (
        <>
        {displayButton}
        </>
    )

}

export default LandingPage;