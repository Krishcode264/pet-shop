import React, { useContext, useEffect, useState } from 'react'
import Search from '../componants/navbar/Search'
import { Form } from 'react-router-dom'
import './SearchPage.css'
import { myContext } from '../componants/helpanime/Context'
import PetCard from '../componants/petcards/PetCard'
const SearchPage = () => {
  const{pets,setPets}=useContext(myContext);
  const [value,setvalue]=useState('');
 
 const[filterSetter,setFilterSetter]=useState([])

  const handleinputChange=(e)=>{
setvalue(e.target.value)

  }
 let filterSetteradd;

  useEffect(()=>{
    console.log(pets)
   filterSetteradd=pets.filter((pet)=>{
      const normalizedTags=pet.tags.map((tag)=> tag.toLowerCase().replace('#',''));
        return(
          pet.name.toLowerCase().includes(value.toLowerCase()) ||
          pet.breed.toLowerCase().includes(value.toLowerCase()) ||
          normalizedTags.includes(value) ||
          pet.name.toLowerCase().indexOf(value) !== -1 ||
          pet.breed.toLowerCase().indexOf(value) !== -1 ||
          pet.gender.toLowerCase().includes(value.toLowerCase()) ||
          pet.gender.toLowerCase().indexOf(value) !==-1 ||
          normalizedTags.some((tag)=> tag.indexOf(value) !== -1)
        );
      
      
      
      })
      setFilterSetter(filterSetteradd);
    

  },[value])





  return (
    <div className='search_page_wrapper'>
        
       <input  type='text'  className="search_bar" placeholder='Search'value={value} onChange={handleinputChange} >
 
      

       </input>


       <div className="filtered_pet_wrapper">
        {
          filterSetter ? (
filterSetter.map((pet=>{
  
  return(
    <PetCard name={pet.name} price={pet.price} id={pet.id} gender={pet.gender}  pet={pet}/>
  )
}))

          ) : (
              <h4>NO pets found ...</h4>
          )
        }
       </div>
    </div>
  )
}

export default SearchPage
