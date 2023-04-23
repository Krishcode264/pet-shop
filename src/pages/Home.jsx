import React from 'react'
import Tag from '../componants/tags/Tag'
import NavBar from '../componants/navbar/NavBar'
import PetCard from '../componants/petcards/PetCard'
import PetCardTemplate from '../componants/petcardtemplate/PetCardTemplate'
import PetTemplate from '../componants/petcards/PetTemplate'
import './Home.css'
import Onloadpetcard from '../componants/helpanime/Onloadpetcard'
const Home = () => {
  return (
    <>

      <NavBar/>
      <div className='space_create'></div>
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
