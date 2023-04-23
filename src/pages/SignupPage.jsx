import React from 'react'
import doglogo from '../photos/cute-dog-puppy-public-domain.webp'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'
import {
  getAuth,createUserWithEmailAndPassword
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const SignupPage = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyCqSaV1bs0bcz_Xv5aYElCQo82x5eGX1HQ",
    authDomain: "my-first-firebase-projec-82a5d.firebaseapp.com",
    projectId: "my-first-firebase-projec-82a5d",
    storageBucket: "my-first-firebase-projec-82a5d.appspot.com",
    messagingSenderId: "927476580212",
    appId: "1:927476580212:web:8e59c27596c84a3f987621",
    measurementId: "G-ERY4M7PPSP"
  };


  initializeApp(firebaseConfig);




  const auth =getAuth();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const handleUserSignup=(e)=>{
e.preventDefault();
createUserWithEmailAndPassword(auth,email,password)
.then((cred)=>{
  console.log("user created",cred.user);
  setEmail('');
  setPassword('')
})
.catch((err)=>{
  console.log(err.message);
})
}


const handleEmailChange=(e)=>{
  setEmail(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
    }

  return (
    <div className='login_div'>
    <img src={doglogo} alt="" className='back_dog_photo' />


       <div className="background ">

        <div className="shape"></div>
        
        <form  className='bright_onhover' onSubmit={handleUserSignup}>
        <h3>Signup here</h3>

        <label htmlFor="email">Email</label>
        <input type="text"
         placeholder="Email or Phone" 
         name='email' 
         id="email" 
         className='new_input'
         value={email}
         onChange={handleEmailChange}
         required
         />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name='password' className='new_input' required value={password}
            onChange={handlePasswordChange}
        />

      
        
        <button type='submit'>    Signup
       </button>
       
    
       <h5 className='navigate_to_login'>Already customer <Link to='/login' className='click_to_navigate'>click here </Link> to login </h5> 
        <div className="social">
          <a  href="https://www.google.co.in/?client=safari">
            <div className="go"><i className="fab fa-google"></i>  Google</div></a>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>

    </form>
    <div className="shape"></div>
    </div>

    
    

   </div>
  )

  }
export default SignupPage
