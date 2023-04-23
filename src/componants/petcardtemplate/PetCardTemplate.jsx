import React from 'react'
import './PetCardTemplate.css'
import PetCard from '../petcards/PetCard'
import { useState ,useEffect} from 'react'
const PetCardTemplate = ({tag}) => {
  
  const [filteredPets, setFilteredPets] = useState([]);

    const[fetched,setfetched]=useState(false)
    

    useEffect(() => {
      fetch('http://localhost:8000/pets')
        .then((res) => res.json() )
        .then((data) => {
          console.log(data)
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
          name={pet.name}
          price={pet.price}
          gender={pet.gender}
          petphoto={pet.pet_url}
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
        <h3 className='loading_animate'>pet cards are being rendered...</h3>
      )}   

      
  
      </div>
    </div>
  )
}

export default PetCardTemplate
