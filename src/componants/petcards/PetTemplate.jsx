import React from 'react'
import './PetTemplate.css'
import PetCard from './PetCard'
import store from '../../store/store'
import { useParams } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import dogphoto from '../../photos/cute-dog-puppy-public-domain.webp'
const PetTemplate = () => {
  const {id}=useParams();
  
  let pet = useSelector((state) => state.fetchPetDataReducer.pets).find((pet)=> pet.id===id);

  return (
    <>
      {

        <PetCard
         
          id={pet.id}
          name={pet.name}
          breed={pet.breed}
          price={pet.price}
          gender={pet.gender}
          petphoto={pet.pet_url}
          isLiked={pet.isLiked}
        />
      }
    </>
  );
}

export default PetTemplate
