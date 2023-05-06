import React from 'react'
import './PetCardTemplate.css'
import PetCard from '../petcards/PetCard'
import { useContext } from 'react'
import { myContext } from '../helpanime/Context'
import { useState ,useEffect} from 'react'
const PetCardTemplate = ({tag}) => {
  


    const[fetched,setfetched]=useState(false)
    const [filteredPets,setFilteredPets]=useState([]);
       const {pets,setPets}=useContext(myContext);
    useEffect(() => {
      fetch('http://localhost:8001/pets')
        .then((res) => res.json() )
        .then((data) => {
        
         
           
         const filtered = data.filter(pet => pet.tags.includes(`#${tag.toLowerCase()}`));
          setFilteredPets(filtered);
        })
        .catch((err) => console.log(err));
    }, [tag]);
   
    const renderPetCards = () => {
      return filteredPets.map(pet => (
        <PetCard
          key={pet.id}
          id={pet.id}
          name={pet.breed}
          price={pet.price}
          gender={pet.gender}
          petphoto={pet.pet_url}
          pet={pet}
        />
      ));
    };
        

  return (
    <div className='pet_card_template_rapper'>
       <div className="grid_info">
        <span>{tag}</span>
      </div>
      <div className="pet_card_grid">
    

      {filteredPets.length ? (
        renderPetCards()
      ) : (
        <h3 className='loading_animate'>pet cards are being rendered<span className='loading_dots'>...</span></h3>
      )}   

      
  
      </div>
    </div>
  )
}

export default PetCardTemplate
