import React from 'react'
import doglogo from '../photos/cute-dog-puppy-public-domain.webp'
import { Link } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import { useRef } from 'react'
import {
  createUserWithEmailAndPassword, updateProfile
} from 'firebase/auth'
import {auth} from  '../componants/helpanime/Firebase'
import { useContext } from 'react'
import { myContext } from '../componants/helpanime/Context'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const SignupPage = () => {

  const {isAuthenticated,setIsAuthenticated}=useContext(myContext);
const {isLoggedin,setIsLoggedin,setName}=useContext(myContext);

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [inputName,setInputName]=useState('');
const navigate=useNavigate();





const  handleUserSignup=(e)=>{

e.preventDefault();
const {user}=createUserWithEmailAndPassword(auth,email,password)
.then((cred)=>{
  console.log("user created",cred.user.email);

}).then(()=>{
  setEmail('');
  setPassword('')
  setName('')
  setIsLoggedin(true);
  navigate('/');
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
    const handleNameChange=(e)=>{
      setInputName(e.target.value)
    }

  return (
    <div className='login_div'>

    <img src={doglogo} alt="" className='back_dog_photo' />


       <div className="background ">

        <div className="shape"></div>
        
        <form  className='bright_onhover formm' onSubmit={handleUserSignup}>
        <h3>Signup here</h3>
        <label htmlFor="name">Your Name</label>
        <input type="text"
         placeholder="Enter your name " 
         name='name' 
         id="name" 
         className='new_input'
         value={inputName}
         onChange={handleNameChange}
         required
         />

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

      
        
        <button type='submit' className='btn_text'>    Signup
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
