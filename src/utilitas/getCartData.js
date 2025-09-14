import { useSelector, useDispatch } from "react-redux";
import { getFromCart } from "./apiService";
import { useEffect, useState, useCallback } from "react";
import { setCart } from "../features/GetCart";

export function useCartData() {
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector((state) => state.userSlice.info);
  const dispatch = useDispatch();

  const fetchCart = useCallback(async () => {
    if (!userData?.id) return;
    try {
      setIsLoading(true);
      const allCart = await getFromCart();
      const dataCart = allCart.data.results;
      const filtered = dataCart.filter(
        (item) => item.customer?.[0]?.id === userData.id
      );
      dispatch(setCart(filtered));
    } catch (err) {
      console.log("Error in get all cart", err);
    } finally {
      setIsLoading(false);
    }
  }, [userData?.id, dispatch]);

  useEffect(() => {
    if (userData?.id) {
      fetchCart();
    } else {
      setIsLoading(false);
    }
  }, [userData?.id, fetchCart]);

  return { isLoading, fetchCart };
}
