import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './assets/pages/Home'
import Signin from './assets/pages/Signin'
import SignOut from './assets/pages/SignOut'
import Profile from './assets/pages/Profile'
import About from './assets/pages/About'
import Header from './components/Header'

function App() {
  return (  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signout" element={<SignOut/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App