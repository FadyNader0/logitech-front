import {deleteFavourite} from './apiService';
export const deleteFavouriteFunction = async (favouriteId) => {
    try {
        const response = await deleteFavourite(favouriteId);    
        return response;
    } catch (error) {
        console.error("Error deleting favourite:", error);
    }   
};