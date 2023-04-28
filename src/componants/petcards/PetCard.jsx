import React from "react";
import "./Petcard.css";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import dogphoto from '../../photos/cute-dog-puppy-public-domain.webp'

const PetCard = ({id,name,price,gender,petphoto}) => {
  const [iconColor, setIconColor] = useState('grey');
  const handlefaviconClick = () => {

    setIconColor('red');
  };
  return (
    <>
      <div className="pet_card">
        <div className="pet_img">
          <img className="pet_image"
            src={dogphoto}
            alt=""
          />
        </div>
        <div className="per_info">
          <h4 className="pet_name">{name}</h4>
          <div className="gender_price_rapper">
            <div className="pet_gender_likes_div">
              <span className="pet_gender">{gender}</span>
              <FavoriteIcon sx={{ fontSize: 28 }}  className="unliked_icon"   onClick={(e)=>{}}/>
            </div>
            <span className="pet_price">
              Price:<span className="pet_pricenum">₹{price}</span>
            </span>
          </div>
          <button className="addto_wish" onClick={(e)=>{}}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default PetCard;
