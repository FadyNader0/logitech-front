import { FaTimes } from 'react-icons/fa';
import './Cart.css';
import { useCartData } from '../../utilitas/getCartData';
import { useSelector } from 'react-redux';
import LoadingShop from '../LoadinShop/LoadinShop'
import { useState } from 'react';
import {updateQuantityCart} from '../../utilitas/updateQuantityCart'
import {removeFromCart} from '../../utilitas/removeFromCart'
import { toast } from 'react-toastify';

export default function Cart({showCart, onClose}){
  const [isLoadin2 , setIsLoading2] = useState(false)
  const { isLoading, fetchCart } = useCartData();
  const cart = useSelector(state => state.cart.info);
  const CartTotal = cart.reduce((sum, item) => sum + Number(item.total), 0);
  const formattedTotal = CartTotal.toFixed(2);
  // const { allcart , fetchCart } = useCartData(); 
  const handleUpdate = async (rowID , quantity) => {
    setIsLoading2(true)
    await updateQuantityCart(rowID, quantity);
    fetchCart(); 
    setIsLoading2(false)
  };
  const handleRemove = async (rowID ) => {
    setIsLoading2(true)
    await removeFromCart(rowID);
    fetchCart(); 
    setIsLoading2(false)
  };
  const handleCheckout = () => {
    toast.info("Processing payment... ⏳");
    setTimeout(() => {
        toast.error("Payment failed ❌ (This is only a Demo)");
    }, 5000);
  };


  return (
    <>
      <div className={`cart-sidebar ${showCart ? 'show' : ''}`}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button 
            className="close-cart"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
      {isLoading === true || isLoadin2 === true ? (
          <LoadingShop />
          ) : cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h4>Your cart is empty</h4>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.productImage}
                      alt={item.product[0].value}
                      className="cart-item-image"
                    />
                    <div className="cart-item-info">
                      <h4>{item.product[0].value}</h4>
                      <p className="cart-item-price flex justify-between">
                        <span>$ {item.priceProduct}</span>
                        {item.quantity !== "1" && <span>total : $ {item.total}</span>}
                      </p>
                      <div className= "quantity-controls">
                        <button className={`btn-increase ${item.quantity <= 1 ? ("disabled") : ""}`} 
                          onClick={() => handleUpdate(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1} 
                        >-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleUpdate(item.id, Number(item.quantity) + 1)}>+</button>
                      </div>
                    </div>
                    <button className="remove-item" onClick={() => handleRemove(item.id)}>
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>{formattedTotal}</span>
                </div>
                <button className="checkout-btn" onClick={() =>{handleCheckout()}}>Proceed to Checkout</button>
              </div>
            </>
      )}
      </div>

      {/* Overlay */}
      {showCart && (
        <div 
          className="cart-overlay"
          onClick={() => onClose()}
        />
      )}
    </>
  );
}