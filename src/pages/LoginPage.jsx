import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import doglogo from '../photos/cute-dog-puppy-public-domain.webp'
import { useState } from 'react'
import Firebase from '../componants/helpanime/Firebase'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const LoginPage = () => {

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


const handleSignin=(e)=>{
  e.preventdefault();
  signInWithEmailAndPassword(auth,email,password)
  .then((cred)=>{
    console.log('user logged in ',cred.user)
    setEmail('');
    setPassword('');
  })
  .catch((err)=>{
    console.log(err.message);
  })

}

const handleEmailchange=(e)=>{
setEmail(e.target.value)
}
const handlePasswordchange=(e)=>{
  setPassword(e.target.value)
}
  return (
   <div className='login_div'>
    <img src={doglogo} alt="" className='back_dog_photo' />


       <div className="background ">

        <div className="shape"></div>
        
        <form className='bright_onhover' onSubmit={handleSignin}>
        <h3>Login Here</h3>

        <label htmlFor="email">email</label>
        <input type="text" placeholder="Email or Phone" id="username" className='new_input' value={email} onChange={handleEmailchange} required/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" className='new_input' value={password} onChange={handlePasswordchange} required/>
    
       <button>Log In</button>
       <h5 className='navigate_to_login'>New user  <Link to='/signup' className='click_to_navigate'>click here </Link> to signup </h5> 

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

export default LoginPage
