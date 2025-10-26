import { getFavourites } from "./apiService";
import { getProducts } from "./apiService";
import { setfavourites } from "../features/GetFavourites";
import { setfavouritesRows } from "../features/GetFavouritesRows";

export const getFavouritesFunction = async (userData , dispatch) => {
  if (!userData) return;
  const userId = userData?.id;  
  try {
    const responseFavourites = await getFavourites();
    const responseProducts = await getProducts();
    const productsData = responseProducts.data.results;
    
    const userFavouritesRows = responseFavourites.data.results.filter(
      (item) => item.customer?.[0]?.id === userId
    );
    // Map favourites to include full product details
    let favouritesProducts = [];
    for (let fav of userFavouritesRows) {
        for (let product of productsData) {
            if (fav.product?.[0]?.id === product.id) {
                favouritesProducts.push(product);
                break;
            }
        }
    }
    
    dispatch(setfavourites(favouritesProducts));
    dispatch(setfavouritesRows(userFavouritesRows));
    return { data: favouritesProducts };
  } catch (error) {
    console.error("Error fetching favourites:", error);
  }
};

