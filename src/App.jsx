import React from 'react'
import './App.css'
import PetTemplate from './componants/petcards/PetTemplate'
import { BrowserRouter as Router,Routes,Route, json } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import LikedPets from './pages/LikedPets'
import SignupPage from './pages/SignupPage'
import HotstarNav from './componants/test_react/HotstarNav'
import Onloadpetcard from './componants/helpanime/Onloadpetcard'
function App() {
  

  return (
    <Router>
    <div className="App">
   
 
    <Routes>
    <Route path="/" element={<Home/>}/> 

    <Route path="/petdetail" element={<PetTemplate/>} />

    <Route path="/signup" element={<SignupPage/>}/>

    <Route path="/liked" element={<LikedPets/>}/>
  

    <Route path="/login" element={<LoginPage/>}/> 
    <Route path="/onload" element={<Onloadpetcard/>}/> 
    </Routes>
    </div>
    </Router>

  )
}

export default App
