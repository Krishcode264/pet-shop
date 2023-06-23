import React, { useEffect } from 'react'
import './NavBar.css'
import TopNav from './TopNav'
import SignUp from './SignUp'
import Search from './Search'
import { Avatar } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import UserProfile from '../userpage/UserProfile'
import { setUser } from '../../store/petDataSlice'
import { Link } from 'react-router-dom'
import { handleOppositeAction } from '../../store/petDataSlice'
import { useDispatch, useSelector } from 'react-redux'
const NavBar = () => {

 const dispatch=useDispatch()
 const profileStates=useSelector((state)=>state.userReducer)
  const HandleUsercard=()=>{
             dispatch(handleOppositeAction())
  }
  return (
    <div className="main_nav">
        <div className="right_nav">
        <TopNav />
      <Search/>
        </div>
        <div className='auth_btns'> 
        {!profileStates.user.islogged ? (
          <>    
     
           <SignUp content="login" route="/login" />
           <SignUp content="Signup" route="/signup" />
          </>
        ):(
          <>
          
          <Link to='/liked'> <FavoriteIcon title='check your wishlist' className='wishlist_icon'/></Link>
          <Avatar className='user_profile' onClick={HandleUsercard} />
          </>
        )

        }
      
      </div>

           { profileStates.profileCard.showProfile? (<UserProfile/>) : null}
      
      </div>
  )
}

export default NavBar
