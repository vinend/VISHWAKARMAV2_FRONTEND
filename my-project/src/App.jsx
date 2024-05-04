import { useState } from 'react'
import HomePage from './component/homepage/HomePage'
import Cont from './component/contatct/Cont'
import Achieve from './component/achievement/Achieve'
import Profile from './component/profile/Profile'
import './App.css'
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/achievment" element={<Achieve/>}/>
      <Route path="/contact" element={<Cont/>}/>
    </Routes>
  )
}

export default App
