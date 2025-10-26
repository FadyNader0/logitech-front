import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    info: false 
  },
  reducers: {
    setloading: (state, action) => {
      state.info = action.payload; 
      
    }
  }
});

export const { setloading } = loadingSlice.actions;
export default loadingSlice.reducer;
