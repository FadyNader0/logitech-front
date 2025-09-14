import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "message",
  initialState: {
    isNew: false,
    number: 0,  
  },
  reducers: {
    setNumberMessages: (state, action) => {
      state.number = action.payload; 
      
    },
    setIsNew: (state, action) => {
      state.isNew = action.payload; 
    }

  }
});

export const { setNumberMessages , setIsNew} = messagesSlice.actions;
export default messagesSlice.reducer;
