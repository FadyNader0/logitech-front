import { configureStore } from '@reduxjs/toolkit'
import openCloseReducer from '../features/NavBar/Open&Close'
import loginReducer from '../features/Login/LoginFeature'
import userReducer from '../features/UserDataFeature'
import cartSlice from '../features/GetCart'
import NumberMessages from '../features/Messages'


export default configureStore({
  reducer: {
    openClose: openCloseReducer,
    login: loginReducer,
    userSlice: userReducer,
    cart: cartSlice,
    NumberMessages: NumberMessages,
  }
})