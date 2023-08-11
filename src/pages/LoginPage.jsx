import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import doglogo from '../photos/cute-dog-puppy-public-domain.webp'
import { useState } from 'react'
import { useContext } from 'react'
import { myContext } from '../componants/helpanime/Context'
import {auth} from '../componants/helpanime/Firebase'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

 const navigate = useNavigate();

const {setIsLoggedin,setisLoading}=useContext(myContext);




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

            <div className="go"> Google</div>
          <div className="fb"> Facebook</div>
        </div>

    </form>

    <div className="shape"></div>
  
    </div>

    
    

   </div>
  )
}

export default LoginPage
