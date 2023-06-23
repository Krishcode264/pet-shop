import React, { useEffect } from "react";
import "./Petcard.css";
import { useState } from "react";
import { toggleLike } from "../../store/petDataSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import dogphoto from "../../photos/cute-dog-puppy-public-domain.webp";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
const PetCard = ({ id, name,breed, price, gender, petphoto ,isLiked}) => {
  const dispatch = useDispatch();
  const petdata = useSelector((state) => state.pets);
  // i have featched pets in my redux store and renderd it on my home page , i wanna add the like functionality of after liked the liked pets showed show in liked pets page and i wanna chnge color of liked icons i can do all these things just tell me , should i create another state for liked items in my redux store or should i add new property to pet object like liked: true/false    which is better way , i hope i am able to discribe it correctly

  const handleLikeClick = (e, id) => {
    e.preventDefault();
    dispatch(toggleLike(id))
    
  };

 
  return (
    <>
      <div className="pet_card"  id={id}>
        <div className="pet_img">
          <img className="pet_image" src={dogphoto} alt="" />
        </div>
        <div className="per_info">
          <h4 className="pet_name">{name}</h4>
          <h4 className="pet_breed">{breed}</h4>
          <div className="gender_price_rapper">
            <div className="pet_gender_likes_div">
              <span className="pet_gender">{gender}</span>
              {isLiked && <h6>true</h6>}
              <FavoriteIcon
                sx={{ fontSize: 28 }}
                className={
                  !isLiked ? "unliked_icon" : "unliked_icon  liked_icon"
                }
                onClick={(e) => {
                  handleLikeClick(e, id);
                }}
              />
            </div>
            <span className="pet_price">
              Price:<span className="pet_pricenum">₹{price}</span>
            </span>
          </div>
          <button className="addto_wish" onClick={() => {}}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default PetCard;
