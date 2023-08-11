import React, { useState } from "react";
import "./App.css";
import PetTemplate from "./componants/petcards/PetTemplate";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import LikedPets from "./pages/LikedPets";
import { myContext } from "./componants/helpanime/Context";
import SignupPage from "./pages/SignupPage";
import { useEffect } from "react";
import { auth } from "./componants/helpanime/Firebase";
import SearchPage from "./pages/SearchPage";
import {  setPetData } from "./store/petDataSlice";
import { setUser } from "./store/petDataSlice";
import { useDispatch } from "react-redux";


function App() {
  const [isLoading, setisLoading] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const dispatch = useDispatch();

  
  // Parse the string back to an array

  useEffect(() => {
    fetch("http://localhost:8001/pets")
      .then((res) => res.json())
      .then((data) => {
        let newdata=data.map((pet)=>{
          return {...pet,isLiked:false}
        })
        dispatch(setPetData(newdata));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.userName,
            email: user.email,
            islogged: true,
          })
        );
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <myContext.Provider
        value={{
          isLoggedin,
          setIsLoggedin,
          isProfileHovered,
          setIsProfileHovered,
          isLoading,
          setisLoading,
        }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/pet/:id" element={<PetTemplate />} />

            <Route path="/signup" element={<SignupPage />} />

            <Route path="/liked" element={<LikedPets />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/liked" element={<LikedPets />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </myContext.Provider>
    </Router>
  );
}

export default App;
