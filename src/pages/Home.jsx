import React from 'react'
import Tag from '../componants/tags/Tag'
import NavBar from '../componants/navbar/NavBar'
import PetCardTemplate from '../componants/petcardtemplate/PetCardTemplate'
import './Home.css'

const Home = () => {

  return (
    <>

      <NavBar/>
     
      <div className='space_create'>    </div>
   
    <Tag/>

    <div>
    <PetCardTemplate tag='Dog' />
    <PetCardTemplate tag='Cat'/>
    <PetCardTemplate tag='Cute'/>

    </div>
    
   
    </>
      
     

  )
}

export default Home
