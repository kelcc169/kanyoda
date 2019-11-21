import './App.css';
import './css/HomePage.css';
import React from 'react';
import QuoteDisplay from './QuoteDisplay';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
<<<<<<< HEAD
      <div className="landing-background">
        <header className="App-header">
          <p>
            Answers, you seek....
          </p>
          <form>
            <input type='text' placeholder='Find your Kan-Yoda'></input> <br />
            <Link to='/quotedisplay'><input type='submit'></input></Link>
            
          </form>
          <QuoteDisplay />
        </header>
      </div>


=======
      {/* <Route exact path='/' render={<LandingPage /> } /> */}
      <Route path='/quotes' render={<QuoteDisplay />} />
>>>>>>> cedadea7accfc9692ca427b30519c3504a09748b
    </Router>
  );
}

export default App;