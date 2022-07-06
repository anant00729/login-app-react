import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { getToken } from '../../utils'

function Dashboard({clearToken}) {

  const navigate =  useNavigate()
  const token = getToken()

  if(!token) {
    return <Navigate to="/login"></Navigate>
  }

  const handleLogout = () => {
    clearToken()
    navigate("/login")
  }

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}

export default Dashboard
