import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: {}  
  },
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload; 
      
    },
    clearUser: (state) => {
      state.info = {};
      localStorage.removeItem("user");  
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
