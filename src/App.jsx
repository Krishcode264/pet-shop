import React, { useState } from 'react'
import './App.css'
import PetTemplate from './componants/petcards/PetTemplate'
import { BrowserRouter as Router,Routes,Route, json } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import LikedPets from './pages/LikedPets';
import { myContext } from './componants/helpanime/Context'
import SignupPage from './pages/SignupPage'
import { useEffect } from 'react'
import { auth } from './componants/helpanime/Firebase'
import SearchPage from './pages/SearchPage'
function App() {




  const[isLoading,setisLoading]=useState(false)
   const [isLoggedin,setIsLoggedin]=useState(false);
   const [isProfileHovered,setIsProfileHovered]=useState(false);
   const [pets, setPets] = useState([]);
  const [likedpets,setLikedpets ]=useState([]);





   // Parse the string back to an array

   const[user,setUser]=useState(null);


 useEffect(()=>{

  fetch('http://localhost:8001/pets')
  .then((res) => res.json() )
  .then((data) => {
  
   
     setPets(data)
  
  
  })
  .catch((err) => console.log(err));

 },[])


useEffect(()=>{
  const myLikedPets = window.localStorage.getItem('likedpets');
  if (myLikedPets) {
    // If there is data in Local Storage, parse it into an array
    setLikedpets(JSON.parse(myLikedPets));
  } else {
    // Otherwise, initialize the state with an empty array
    setLikedpets([]);
  }
},[]);


useEffect(()=>{
  window.localStorage.setItem('likedpets',JSON.stringify(likedpets));

 },[likedpets])

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);

      
    });

    return () => {
      unsubscribe();
    };
  }, []);

 
  return (

    <Router>
      <myContext.Provider value={{
        isLoggedin,
        setIsLoggedin,
        isProfileHovered,
        setIsProfileHovered,
        isLoading,
        setisLoading,
        pets,
        setPets,
         user,
         likedpets,
         setLikedpets,
     
        

      
       
      
        
        }}>
    <div className="App">
   
 
    <Routes>
    <Route path="/" element={<Home/>}/> 

    <Route path="/petdetail" element={<PetTemplate/>} />

    <Route path="/signup" element={<SignupPage/>}/>

    <Route path="/liked" element={<LikedPets/>}/>
  

    <Route path="/login" element={<LoginPage/>}/> 

    <Route path="/liked" element={<LikedPets/>}/> 
    <Route path="/search" element={<SearchPage/>}/> 
    </Routes>
    </div>
    </myContext.Provider>
    </Router>

  )
}

export default App
