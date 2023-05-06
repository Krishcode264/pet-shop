import React, { useEffect } from "react";
import "./Petcard.css";
import { useState } from "react";
import { useContext } from "react";
import { myContext } from "../helpanime/Context";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import dogphoto from '../../photos/cute-dog-puppy-public-domain.webp'

const PetCard = ({id,name,price,gender,petphoto,pet}) => {

  const[isLiked,setIsLiked]=useState(false)
  const {pets,setPets}=useContext(myContext);
  const{likedpets,setLikedpets}=useContext(myContext);

  const handleLikeClick = (e,pet) => {
    let likedpets_=[...likedpets];
    
    e.preventDefault();
    console.log(likedpets_);


     if (likedpets_.some(eachpet=>eachpet.id===pet.id)) {

      console.log('pet is alreay there ')
      setIsLiked(false)
      const newArray = likedpets_.filter((element) => element !== pet);

          likedpets_=newArray;
         setLikedpets(likedpets_);
         console.log(likedpets)
    } else {
    
      console.log("adding pet")
      setIsLiked(true)
      likedpets_.push(pet);
      setLikedpets(likedpets_)
      console.log(likedpets)
    }
     
        
      



    
  };

  const showPetDetails=(e)=>{
    
  }
  return (
    <>
      <div className="pet_card" onClick={showPetDetails} id={id}>
        <div className="pet_img">
          <img className="pet_image"
            src={dogphoto}
            alt=""
          />
        </div>
        <div className="per_info">
          <h4 className="pet_name">{pet.name}</h4>
          <h4 className="pet_breed">{pet.breed}</h4>
          <div className="gender_price_rapper">
            <div className="pet_gender_likes_div">
              <span className="pet_gender">{gender}</span>
              <FavoriteIcon sx={{ fontSize: 28 }}  className={ !isLiked ? "unliked_icon" : "unliked_icon  liked_icon" } onClick={(e)=>{handleLikeClick(e,pet)}} />
            </div>
            <span className="pet_price">
              Price:<span className="pet_pricenum">₹{price}</span>
            </span>
          </div>
          <button className="addto_wish" onClick={()=>{}}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default PetCard;
