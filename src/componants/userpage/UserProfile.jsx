import { Avatar } from '@mui/material'
import React from 'react'
import './UserProfile.css'
import SignUp from '../navbar/SignUp'
import { auth } from '../helpanime/Firebase'
import { signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/petDataSlice'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { handleOppositeAction } from '../../store/petDataSlice'
const UserProfile = () => {
 const dispatch=useDispatch();
  const user=useSelector(state=>state.userReducer.user)
    const HandleLogout=()=>{
        console.log('hello')
        
        signOut(auth).then(()=>{
            console.log('sign out successful');
            dispatch(handleOppositeAction())
             dispatch(setUser({
              name:"",
              email:"",
              islogged:false
             }))
              
         }).catch((err)=>{
            console.log(err);
         })
    }
  return (
    <div className={` user_profile_  `}>
      <Avatar className="user_profile_icon" />
            <>
          <h2 className="user_name">{user.name}</h2>
          <h3>{user.email}</h3>

          <div className="logout place_below">
            <SignUp content="log out" type="submit" onClick={HandleLogout} />
          </div>
        </>
      
    </div>
  );
}

export default UserProfile
