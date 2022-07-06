import React, {useState} from 'react'
import './Login.css';
import PropTypes from 'prop-types';
import { BASE_URL } from '../constants'
import { useNavigate, Navigate } from "react-router-dom";
import { getToken } from '../../utils'

async function loginUser(username, password) {
  return fetch(`${BASE_URL}/login`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(password)
 })
   .then(data => data.json())
}

function Login({ setToken }) {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()


  const token = getToken()

  if(token) {
    return <Navigate to="/"></Navigate>
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!username.length) {
      console.log('username is required')
      return
    }

    if(!password.length){
      console.log('password is required')
      return
    }
    const token = await loginUser(username, password)
    setToken(token)
    navigate("/");
    // console.log('token', token)
  }
  
  return (
    <div className="login-wrapper">
       <h1>Please Log In</h1>
       <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text"
          onChange={e => {
            setUsername(e.target.value)
          }}
          />
        </label>
        <label>
          <p>Password</p>
          <input type="password" 
          onChange={e => {
            setPassword(e.target.value)
          }}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
       </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}

export default Login