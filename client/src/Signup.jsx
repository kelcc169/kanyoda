import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({setToken, history}) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/signup', {
      name: name,
      email: email,
      password: password
    }).then(res => {
      if (res.data.type === 'error') {
        console.log('nope!')
        setName('');
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
    <div className="Signup">
      <h3>Create a new account:</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter your name..."
          onChange={handleNameChange}
          value={name} /><br />
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
        <input type="submit" value="Sign Up!" />
      </form>
    </div>
  )
}

export default Signup;