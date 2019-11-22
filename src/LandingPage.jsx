import React from 'react';
import './css/HomePage.css';
import { 
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

const LandingPage = () => {
    const []
    return (
        <div className="landing-background">
            <div className='content'>
        
                <p className='words'>
                Answers, you seek....
                </p>
                <form>
                <input type='text' placeholder='Find your Kan-Yoda'></input> <br />
                <button type="submit"><Link to='/quotes'>Submit</Link></button>
                
                </form>


            </div>
    
    </div>


    )

}

export default LandingPage;