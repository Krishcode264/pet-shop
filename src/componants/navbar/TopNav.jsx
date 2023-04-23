import React from 'react'
import './TopNav.css'
import logo from '../../photos/logo192.png'
import { Link } from 'react-router-dom'
const TopNav = () => {
  return (
    <div className='top_nav'>
      <Link to="/">
      <img src={logo} alt="logo" className='logo' />
 
      </Link>
      <span className='head pethead'>
    Pet Store
    </span>
    </div>
  )
}

export default TopNav
