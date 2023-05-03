import React, { useContext } from 'react'
import './LikedPets.css'
import PetCard from '../componants/petcards/PetCard'
import { myContext } from '../componants/helpanime/Context'

const LikedPets = () => {

const{likedpets,setIsClicked}=useContext(myContext);

  return (
    <div className='liked_pet_wrapper'>
      <h3 className='liked_pets'>Liked Pets</h3>
      <div className="liked_pet_grid">
   

         {likedpets.length ? 
         likedpets.map((lipet)=>{
       
          console.log(lipet);
           return(
            <PetCard price={lipet.price} id={lipet.id} name={lipet.breed} gender ={lipet.gender}petphoto={lipet.url} pet={lipet} />
           )
         }) :
         (
          <h2 className='pet_not_found'>you dont have any liked pets..</h2>
         ) 
      } 
       

      </div>
    </div>
  )
}

export default LikedPets
