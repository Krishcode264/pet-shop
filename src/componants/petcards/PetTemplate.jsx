import React from 'react'
import './PetTemplate.css'
import dogphoto from '../../photos/cute-dog-puppy-public-domain.webp'
const PetTemplate = () => {
  return (
    
         
<div className="animal_template">
  
  <div className="animal_photos">

  <img src={dogphoto} alt="" />

  </div>

  <div className="animal_info">
    <h1 className='head'>animal details</h1>
    

  </div>
</div>
    
  )
}

export default PetTemplate
