import React from 'react'
import './NavBar.css'
import TopNav from './TopNav'
import SignUp from './SignUp'
import Search from './Search'
const NavBar = () => {
  return (
    <div className="main_nav">
        <div className="right_nav">
        <TopNav />
      <Search/>
        </div>
        <div className='auth_btns'> 
       <SignUp content="login" route="/login" />
      <SignUp content="Signup" route="/signup"/>
      </div>
      
      </div>
  )
}

export default NavBar
