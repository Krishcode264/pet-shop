import { Avatar } from '@mui/material'
import React from 'react'
import './UserProfile.css'
import SignUp from '../navbar/SignUp'
import { auth } from '../helpanime/Firebase'
import { signOut } from 'firebase/auth'
import { myContext } from '../helpanime/Context'
import { useContext } from 'react'
const UserProfile = () => {
   const{isLoggedin , setIsLoggedin,isProfileHovered,setIsProfileHovered,userEmail,user,userName}=useContext(myContext);

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
     <h2 className='user_name'>{user.displayName}</h2>
      <h3>{user.email}</h3>
    
                <div className="logout place_below">
                    <SignUp content='log out' type='submit' onClick={HandleLogout} />
                </div>
            
    </div>
  )
}

export default UserProfile
