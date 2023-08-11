import React from 'react'
import './searchItem.css'
import { Link } from 'react-router-dom';
import dogPhoto from '../photos/cute-dog-puppy-public-domain.webp';
const SearchItem = ({name,price,id,gender,}) => {
  return (
    <Link  className="search_item_link"to={`/pet/${id}`}>
      <div className="item_card">
        <div>
          <img className="item_img" src={dogPhoto} alt="" />
        </div>
        <div className="info_wrapper">
          <h4>{name}</h4>
          <p>{gender}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
}

export default SearchItem