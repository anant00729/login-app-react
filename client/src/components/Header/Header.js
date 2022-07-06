import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getToken } from '../../utils'

function Header({token}) {
  if(token) {
    return (
      <div style={{display: 'flex'}}> 
        <div style={{marginLeft: '10px'}}>
          <NavLink to="/">Dash</NavLink>
        </div>
        <div style={{marginLeft: '10px'}}>
          <NavLink to="/pref">Preferences</NavLink>
        </div>
      </div>
    )
  }else {
    return <div
    style={{marginLeft: '10px'}}
    > 
        <NavLink to="/login">Login</NavLink>
    </div>
  }
  
}

export default Header