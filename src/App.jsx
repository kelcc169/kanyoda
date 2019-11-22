import './App.css';
import './css/HomePage.css';
import React,{ useState} from 'react';
import QuoteDisplay from './QuoteDisplay';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  const [ text, setText ] = useState('');
  return (
    <Router>
      <Route exact path='/' render={() => <LandingPage text={text} setText={setText} /> } />
      <Route path='/quotes' render={ () => <QuoteDisplay text={text}/> } />
    </Router>
  );
}

export default App;