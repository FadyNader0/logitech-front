import { deleteFavourite } from "./apiService";

export const deleteFavouriteFunction = async (favouritesRows) => {
    try {
        for (let favRow of favouritesRows) {
            await deleteFavourite(favRow.id);
        }
    } catch (error) {
        console.error("Error in deleteFavouriteFunction:", error);
    }

};