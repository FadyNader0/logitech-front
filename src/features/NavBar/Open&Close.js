import { createSlice } from '@reduxjs/toolkit'

export const openClose = createSlice({
  name: 'openClose',
    initialState: {
    isOpen: false,
  },
    reducers: {
    toggleOpenClose: (state) => {
      state.isOpen = !state.isOpen;
    }
    },
    });
export const { toggleOpenClose } = openClose.actions;
export default openClose.reducer;    