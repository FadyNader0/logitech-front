import { createSlice } from "@reduxjs/toolkit";

const favouritesRowsSlice = createSlice({
  name: "favouritesRows",
  initialState: {
    info: [] 
  },
  reducers: {
    setfavouritesRows: (state, action) => {
      state.info = action.payload; 
      
    }
  }
});

export const { setfavouritesRows } = favouritesRowsSlice.actions;
export default favouritesRowsSlice.reducer;
