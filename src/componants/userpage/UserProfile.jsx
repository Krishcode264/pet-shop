import { Avatar } from '@mui/material'
import React from 'react'
import './UserProfile.css'
import SignUp from '../navbar/SignUp'
import { auth } from '../helpanime/Firebase'
import { signOut } from 'firebase/auth'
import { myContext } from '../helpanime/Context'
import { useContext } from 'react'
const UserProfile = () => {
   const{isLoggedin , setIsLoggedin,isProfileHovered,setIsProfileHovered}=useContext(myContext);
    const HandleLogout=()=>{
        console.log('hello')
        
        signOut(auth).then(()=>{
            console.log('sign out successful');
              setIsLoggedin(false);
              setIsProfileHovered(false)
              
         }).catch((err)=>{
            console.log(err);
         })
    }
  return (
    <div className={` user_profile_  `}>
      <Avatar className='user_profile_icon'/>
      <h3>krishnazade99@gmail.com</h3>
    
                <div className="logout">
                    <SignUp content='log out' type='submit' onClick={HandleLogout} />
                </div>
            
    </div>
  )
}

export default UserProfile
