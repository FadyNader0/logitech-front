import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    info: [] 
  },
  reducers: {
    setfavourites: (state, action) => {
      state.info = action.payload; 
      
    },
    addTofavouritesNumber:(state, action) =>{
        state.info.push(action.payload)
    },
    removefavourites: (state) =>{
        state.info = []
    }
  }
});

export const { setfavourites , addTofavouritesNumber , removefavourites} = favouritesSlice.actions;
export default favouritesSlice.reducer;
