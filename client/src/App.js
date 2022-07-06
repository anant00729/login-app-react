import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'
import Login from './components/Login/Login'
import { useState } from 'react';
import PrivateRoute from './PrivateRoute'
import { setToken, getToken, clearToken } from './utils'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'

function App() {

  const [tokenn, setTokenn] = useState(() => getToken())

  const clearTokenAtApp = () => {
    setTokenn('')
    clearToken()
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <h1>My Application</h1>  
          <Header token={tokenn}/>
          <Routes>
            <Route path='*' caseSensitive={false} element={<PageNotFound/>} />
            <Route exact path="/" caseSensitive={false} element={<Dashboard clearToken={clearTokenAtApp}/>} />
            <Route exact path="/pref" caseSensitive={false} element={<Preferences/>} />
            <Route exact path="/login" caseSensitive={false} element={<Login setToken={setToken}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
