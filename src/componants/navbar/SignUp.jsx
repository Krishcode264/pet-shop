import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
const SignUp = ({content,margin_right,route}) => {

  const myStyle ={
    marginRight:margin_right
  }

  return (
    <Link to={route}>
      
   <button className='sign_up_btn' style={myStyle}>{content}</button>
    
    </Link>
  )
}

export default SignUp
