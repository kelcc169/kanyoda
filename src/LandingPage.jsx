import React,{ useState}from 'react';
import {Link } from 'react-router-dom';
import QuoteDisplay from './QuoteDisplay'
import './css/HomePage.css';

const LandingPage = () => {
    const [ text, setText ] = useState({
        input: ''
    });

    const handleOnChange = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value})
    }
    return (
        <div className="landing-background">
            <div className='content'>
        
                <p className='words'>
                Answers, you seek....
                </p>
                <form>
                <input type='text' onChange={handleOnChange} name="input" value={text.input} placeholder='Please type text'></input> <br />
                <button type="submit"><Link to='/quotes'>KAN-YODA</Link></button>
                
                </form>

                <QuoteDisplay input={text} />
            </div>
    
    </div>


    )

}

export default LandingPage;