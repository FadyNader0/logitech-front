import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    info: [] 
  },
  reducers: {
    setCart: (state, action) => {
      state.info = action.payload; 
      
    },
    addToCartNumber:(state, action) =>{
        state.info.push(action.payload)
    },
    removeCart: (state) =>{
        state.info = []
    }
  }
});

export const { setCart , addToCartNumber , removeCart} = cartSlice.actions;
export default cartSlice.reducer;
