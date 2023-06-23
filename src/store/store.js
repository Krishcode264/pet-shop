import { Store } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { fetchPetDataReducer } from "./petDataSlice";
import { userReducer } from "./petDataSlice";
import { updateFilterPetReducer } from "./petDataSlice";
const store = configureStore({
  reducer: {
    userReducer,
    fetchPetDataReducer,
    updateFilterPetReducer,
  },
});
export default store;