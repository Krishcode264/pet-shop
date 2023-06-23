import React from 'react'
import './PetCardTemplate.css'
import PetCard from '../petcards/PetCard'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const PetCardTemplate = ({tag}) => {
  
let petdata=useSelector((state)=>state.fetchPetDataReducer.pets)

  // {
  //     "id": "p001",
  //     "name": "Fluffy",
  //     "price": 500,
  //     "image_url": "https://example.com/pet_images/fluffy.jpg",
  //     "tags": [
  //       "#cute",
  //       "#fluffy",
  //       "#happy"
  //     ],




    const renderPetCards = () => {
      let filterPets=petdata.filter((petobj)=>petobj.tags.includes(`#${tag.toLowerCase()}`))
    
      return filterPets.map(pet => (
        <PetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          breed={pet.breed}
          price={pet.price}
          gender={pet.gender}
          petphoto={pet.pet_url}
          isLiked={pet.isLiked}
        />
      ));
    };

        

  return (
    <div className='pet_card_template_rapper'>
       <div className="grid_info">
        <span>{tag}</span>
      </div>
      <div className="pet_card_grid">
    

      {petdata.length ? (
      renderPetCards()
      ) : (
        <h3 className='loading_animate'>pet cards are being rendered<span className='loading_dots'>...</span></h3>
      )}   

      
  
      </div>
    </div>
  )
}

export default PetCardTemplate
