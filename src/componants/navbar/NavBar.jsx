import React, { useEffect } from 'react'
import './NavBar.css'
import TopNav from './TopNav'
import SignUp from './SignUp'
import Search from './Search'
import { myContext   }     from '../helpanime/Context'
import { useContext } from 'react'
import { Avatar } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import UserProfile from '../userpage/UserProfile'
import { Link } from 'react-router-dom'
const NavBar = () => {

  const {isLoggedin,setIsLoggedin,isProfileHovered,setIsProfileHovered}=useContext(myContext);

  const HandleUsercard=()=>{
             setIsProfileHovered(!isProfileHovered);
  }
  return (
    <div className="main_nav">
        <div className="right_nav">
        <TopNav />
      <Search/>
        </div>
        <div className='auth_btns'> 
        {!isLoggedin ? (
          <>    
          
<Link to='/liked'> <FavoriteIcon title='check your wishlist' className='wishlist_icon'/></Link>     
           <SignUp content="login" route="/login" />
           <SignUp content="Signup" route="/signup" />
          </>
        ):(
          <>

          <Avatar className='user_profile' onClick={HandleUsercard} />
          </>
        )

        }
      
      </div>

           { isProfileHovered ? (<UserProfile/>) : null}
      
      </div>
  )
}

export default NavBar
