import { configureStore } from '@reduxjs/toolkit'
import openCloseReducer from '../features/NavBar/Open&Close'
import loginReducer from '../features/Login/LoginFeature'
import userReducer from '../features/UserDataFeature'
import cartSlice from '../features/GetCart'
import NumberMessages from '../features/Messages'
import favouritesSlice from '../features/GetFavourites'
import favouritesRowsSlice from '../features/GetFavouritesRows'
import loadingSlice from '../features/loading'


export default configureStore({
  reducer: {
    openClose: openCloseReducer,
    login: loginReducer,
    userSlice: userReducer,
    cart: cartSlice,
    NumberMessages: NumberMessages,
    favourites: favouritesSlice,
    favouritesRows: favouritesRowsSlice,
    loading: loadingSlice,
  }
})