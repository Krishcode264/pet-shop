import React from "react";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import "./SearchPage.css";

import { updateFilterPets } from "../store/petDataSlice";

import { useDispatch } from "react-redux";

import SearchItem from "../componants/searchItem";
const SearchPage = () => {
  const searchInfo = useSelector((state) => state.updateFilterPetReducer);
  let petdata = useSelector((state) => state.fetchPetDataReducer.pets);

  const dispatch = useDispatch();

  // {
  //   "id": "p001",
  //   "name": "Fluffy",
  //   "price": 500,
  //   "image_url": "https://example.com/pet_images/fluffy.jpg",
  //   "tags": [
  //     "#cute",
  //     "#fluffy",
  //     "#happy"
  //   ],
  //   "owner": {
  //     "name": "John Smith",
  //     "address": "123 Main St, Anytown USA"
  //   },
  //   "gender": "female",
  //   "breed": "Persian cat",
  //   "age": 2
  // },
  let filterpets = [];

  const handleInputChange = async (e) => {
    let value = e.target.value.toLowerCase();
    console.log(value);
    if (value === "") {
      filterpets = [];
    } else {
      filterpets = await petdata.filter(
        (pet) =>
          pet.name
            .toLowerCase()
            .split(" ")
            .some((name) => name.startsWith(value)) ||
          pet.gender.toLowerCase() === value ||
          pet.breed.toLowerCase().split(" ").includes(value) ||
          pet.tags.some((tag) => tag.startsWith(`#${value}`))
      );
    }

    dispatch(updateFilterPets(filterpets));
  };

  return (
    <>
    <button></button>
      <div className="search_page_wrapper">
        <input
          type="text"
          className="search_bar"
          placeholder="Search"
          value={searchInfo.value}
          onChange={handleInputChange}
        ></input>

        <div className="filtered_pet_wrapper">
          {searchInfo.filterPets.length > 0 ? (
            searchInfo.filterPets.map((pet) => {
              return (
                <SearchItem
                  name={pet.name}
                  price={pet.price}
                  id={pet.id}
                  key={pet.id}
                  gender={pet.gender}
                  breed={pet.breed}
                  isLiked={pet.isLiked}
                />
              );
            })
          ) : (
            <h4 style={{ color: "white", marginTop: "32px" }}>
              NO match found ...
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
