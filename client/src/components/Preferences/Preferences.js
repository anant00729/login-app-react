import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../../utils'


function Preferences() {

  const token = getToken()

  if(!token) {
    return <Navigate to="/login"></Navigate>
  }

  return (
    <h2>Preferences</h2>
  )
}

export default Preferences