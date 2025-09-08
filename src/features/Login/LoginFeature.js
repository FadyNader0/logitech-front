import { createSlice } from '@reduxjs/toolkit'

export const login = createSlice({
  name: 'login',
    initialState: {
    isLogin: false,
  },
  reducers: {
     setLogin: (state, action) => {
      state.isLogin = action.payload; 
    },
  },
});
export const { setLogin } = login.actions;
export default login.reducer; 
