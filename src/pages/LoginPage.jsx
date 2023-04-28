import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import doglogo from '../photos/cute-dog-puppy-public-domain.webp'
import { useState } from 'react'
import { useContext } from 'react'
import { myContext } from '../componants/helpanime/Context'
import Firebase,{auth} from '../componants/helpanime/Firebase'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import LoadAnimate from '../componants/helpanime/LoadAnimate'
const LoginPage = () => {

 const navigate = useNavigate();

const {isLoggedin,setIsLoggedin,isLoading,setisLoading}=useContext(myContext);




const [email,setEmail]=useState('');
const [password,setPassword]=useState('');


const handleSignin=(e)=>{
  setisLoading(true);
  e.preventDefault();
  signInWithEmailAndPassword(auth,email,password)
  .then((cred)=>{
    console.log('user logged in ',cred.user)
    setIsLoggedin(true);

    setEmail('');
    setPassword('');
    navigate('/');
    setisLoading(false);
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
        
        <form className='bright_onhover formm' onSubmit={handleSignin}>
        <h3>Login Here</h3>

        <label htmlFor="email">email</label>
        <input type="text" placeholder="Email or Phone" id="username" className='new_input' value={email} onChange={handleEmailchange} required/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" className='new_input' value={password} onChange={handlePasswordchange} required/>
    
       <button className='btn_text'>Log In</button>
      
       
    
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
