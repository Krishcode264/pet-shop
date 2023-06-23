import React from 'react'
import Tag from '../componants/tags/Tag'
import NavBar from '../componants/navbar/NavBar'
import PetCard from '../componants/petcards/PetCard'
import PetCardTemplate from '../componants/petcardtemplate/PetCardTemplate'
import PetTemplate from '../componants/petcards/PetTemplate'
import { signOut } from 'firebase/auth'
import Firebase ,{auth} from '../componants/helpanime/Firebase'
import './Home.css'
import LoadAnimate from '../componants/helpanime/LoadAnimate'
import UserProfile from '../componants/userpage/UserProfile'
const Home = () => {

  return (
    <>
<p>hi</p>
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
