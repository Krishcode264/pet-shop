import "./LikedPets.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PetCard from "../componants/petcards/PetCard";

const LikedPets = () => {
  const likedpets = useSelector((state) =>
    state.fetchPetDataReducer.pets.filter((pet) => pet.isLiked === true)
  );
  return (
    <div className= "liked_pet_wrapper" >
      <h3 className="liked_pets">Liked Pets</h3>

      <div className={likedpets.length ? "liked_pet_grid" : "no_grid"}>
        {likedpets.length ? (
          likedpets.map((lipet) => {
            return (
              <PetCard
                key={lipet.id}
                price={lipet.price}
                id={lipet.id}
                name={lipet.breed}
                gender={lipet.gender}
                petphoto={lipet.url}
                isLiked={lipet.isLiked}
              />
            );
          })
        ) : (
          <h2 className="pet_not_found">you dont have any liked pets..</h2>
        )}
      </div>
    </div>
  );
};

export default LikedPets;
