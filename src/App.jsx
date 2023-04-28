import React, { useState } from 'react'
import './App.css'
import PetTemplate from './componants/petcards/PetTemplate'
import { BrowserRouter as Router,Routes,Route, json } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import LikedPets from './pages/LikedPets';
import { myContext } from './componants/helpanime/Context'
import SignupPage from './pages/SignupPage'

function App() {
  const[isLoading,setisLoading]=useState(false)
   const [isLoggedin,setIsLoggedin]=useState(false);
   const [isProfileHovered,setIsProfileHovered]=useState(false);
  return (

    <Router>
      <myContext.Provider value={{
        isLoggedin,
        setIsLoggedin,
        isProfileHovered,
        setIsProfileHovered,
         isLoading,
         setisLoading
        
        }}>
    <div className="App">
   
 
    <Routes>
    <Route path="/" element={<Home/>}/> 

    <Route path="/petdetail" element={<PetTemplate/>} />

    <Route path="/signup" element={<SignupPage/>}/>

    <Route path="/liked" element={<LikedPets/>}/>
  

    <Route path="/login" element={<LoginPage/>}/> 

    </Routes>
    </div>
    </myContext.Provider>
    </Router>

  )
}

export default App
