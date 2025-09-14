import { FiHeart, FiShoppingCart,} from 'react-icons/fi'
import './ProductCard.css'
import { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux'
import { addToCartDB } from '../../utilitas/addToCart';
import { toast } from 'react-toastify';
import {addToCartNumber} from '../../features/GetCart'
import LoadinShop from '../LoadinShop/LoadinShop';

export default function ProductCard({ product }){
    const dispatch = useDispatch()
    const [favorites, setFavorites] = useState([]);
    const [isLoading , setIsLoading] = useState(false)
    const userData = useSelector(state => state.userSlice.info)
    let finalPrice
      // Toggle favorite status
    const toggleFavorite = (productId) => {
        if (favorites.includes(productId)) {
        setFavorites(favorites.filter(id => id !== productId));
        } else {
        setFavorites([...favorites, productId]);
        }
    };
    // Add to cart
    const addToCart = async (productId , productPrice ,productImage) => {
        setIsLoading(true)
        const response = await addToCartDB(userData.id , productId , productPrice , productImage)
        const data = await response.json();
        if(response.status === 200){
            dispatch(addToCartNumber(data))
            toast.success("Added to cart successfull")
            setIsLoading(false)
        }
    };
    if(product.sale !== "0.00"){

        const p = Math.max(0, Math.min(100, Number(product.sale) || 0));
        finalPrice = (product.price * (1 - p / 100)).toFixed(2);
    }else{
        finalPrice = product.price
    }
    return(
        <div className="productCard" data-aos="flip-left">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image"  />
                {product.sale !== "0.00" && <span className="product-badge">{`${product.sale} %`}</span>}
                <div className="product-actions">
                <button 
                    className={`action-button favorite-button ${favorites.includes(product.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(product.id)}
                    aria-label="Add to favorites"
                >
                    <FiHeart />
                </button>
                </div>
            </div>
            <div className="product-info">
                <div className="product-category">{product.category[0].value}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                <div className="product-price">
                        {product.sale !== "0.00" ? (
                            <>
                            <span className="line-through text-gray-500 decoration-red-500 decoration-1">$ {product.price}</span>
                            <span className="font-bold block">$ {finalPrice}</span>
                            </>
                        ) : (
                            <span>$ {product.price}</span>
                        )}
                </div> 
                {isLoading === false? (

                <button 
                    className="add-to-cart"
                    onClick={() => addToCart(product.id ,finalPrice , product.image)}
                    disabled={product.stock === "0"}
                >
                    <FiShoppingCart /> {product.stock !== "0" ? 'Add to Cart' : 'Out of Stock'}
                </button>
                ):
                    <LoadinShop />
                }               
                </div>
            </div>
            
        </div>
    )
}

 