import { createSlice } from "@reduxjs/toolkit";
const fetchPetDataSLice = createSlice({
  name: "petdata",
  initialState: {
    pets: [],
  },
  reducers: {
    toggleLike: (state, action) => {
      state.pets.map((pet) => {
        return pet.id === action.payload
          ? pet.isLiked === false
            ? (pet.isLiked = true)
            : (pet.isLiked = false)
          : null;
      });
    },
    setPetData: (state, action) => {
      state.pets = action.payload;
    },
  },
});
const userSlice = createSlice({
  name: "petdata",
  initialState: {
    user: {
      name: "",
      email: "",
      islogged: false,
    },
    profileCard: {
      showProfile: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.islogged = action.payload.islogged;
    },
    handleOppositeAction: (state, action) => {
      state.profileCard.showProfile = !state.profileCard.showProfile;
    },
  },
  
});

const updateFilterPetSlice=createSlice({
  name:'updateinput',
  initialState:{
    filterPets:[],
  
  },
  reducers:{
    updateFilterPets:(state,action)=>{
     state.filterPets=[...action.payload]
     
     

    }
  }
})
export const { toggleLike, setPetData } = fetchPetDataSLice.actions;
export const { setUser, handleOppositeAction } = userSlice.actions;
export const {updateFilterPets}=updateFilterPetSlice.actions
export const fetchPetDataReducer = fetchPetDataSLice.reducer;
export const userReducer = userSlice.reducer;
export const updateFilterPetReducer=updateFilterPetSlice.reducer
