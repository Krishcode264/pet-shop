import React from 'react'
import './Tag.css'
const Tag = () => {


  return (
   
 <div className="headtag">
    <h3 className='head'>search by tag names</h3>
      <div className="tags">
        
      <span className='tag_dog' id='dog'><p className='tag_name'>#Dog</p></span>
      <span className='tag_dog' id='dog'><p className='tag_name'>#Cat</p></span>
      <span className='tag_dog' id='dog'><p className='tag_name'>#cute</p></span>
      <span className='tag_dog' id='dog'><p className='tag_name'>#loyal</p></span>
      <span className='tag_dog' id='dog'><p className='tag_name'>#happy</p></span>
      <span className='tag_dog' id='dog'><p className='tag_name'>#Bird</p></span>
     </div>
 </div>

    
  )
}

export default Tag
