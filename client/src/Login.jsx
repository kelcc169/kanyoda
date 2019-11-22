import React, { useState } from 'react';
import axios from 'axios';

const Login = ({setToken, history}) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/login', {
      email: email,
      password: password
    }).then(res => {
      if (res.data.type === 'error') {
        console.log('nope!')
        setEmail('');
        setPassword('');
        setMessage(res.data.message);
        console.log(message)
      } else {
        console.log('i maked this')
        localStorage.setItem('mernToken', res.data.token);
        setMessage('')
        setToken(res.data.token);
      }
    }).catch(err => {
      setMessage('Maximum accounts exceeded. Please try again later')
    }).finally(() => {
      history.push('/')
    })
  }

  return(
    <div className="Login">
    <h3>Log into your account:</h3>
    <form onSubmit={handleSubmit}>
      <input type="email"
        name="email"
        placeholder="Enter your email..."
        onChange={handleEmailChange}
        value={email} /><br />
      <input type="password"
        name="password"
        placeholder="Enter your password..."
        onChange={handlePasswordChange}
        value={password} /><br />
      <input type="submit" value="Log In!" />
    </form>
  </div>
  )
}

export default Login;