import { useSelector , useDispatch} from 'react-redux'
import {getFromCart} from './apiService'
import {useEffect, useState} from 'react';
import {setCart} from '../features/GetCart'

export function useCartData (){
    const [isLoading , setIsLoadin] = useState(true)
    const userData = useSelector(state => state.userSlice.info);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (!userData?.id){
            setIsLoadin(false);
            return;
        } 

        async function getAllCart() {
        try{
            const allCart = await getFromCart();
            const dataCart = allCart.data.results;
            const filtered = dataCart.filter((item) => item.customer?.[0]?.id === userData.id);
            dispatch(setCart(filtered))
        }catch(err){
            console.log("Error in get all cart" , err);
        }finally{
            setIsLoadin(false)
        }
        }
        if(userData?.id){
        getAllCart();
        }
    } ,[userData?.id])
      
return isLoading
}