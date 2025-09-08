import { BiSupport } from "react-icons/bi"; 
import { AiFillHeart } from "react-icons/ai"; 
import { RiLogoutBoxRLine } from "react-icons/ri"; 
import { AiFillHome } from "react-icons/ai"; 
import { AiFillShopping } from "react-icons/ai"; 
import { MdAccountCircle } from "react-icons/md"; 
import { Link, useLocation } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import { toggleOpenClose } from '../../features/NavBar/Open&Close';
import {clearUser} from '../../features/UserDataFeature';
import { toast } from 'react-toastify';
import { setLogin } from '../../features/Login/LoginFeature';
import Logo from '../Logo/Logo';
import './NavBar.css';
import { BsFillCartCheckFill } from "react-icons/bs";
import Cart from '../Cart/Cart'
import { useState } from "react";
import {useCartData} from '../../utilitas/getCartData'
import {removeCart} from '../../features/GetCart'




export default function NavBar() {
  const dispatch = useDispatch();
  const location = useLocation(); 
  const navIsOpen = useSelector(state => state.openClose.isOpen);
  const IsLogin = useSelector(state => state.login.isLogin);
  const userData = useSelector(state => state.userSlice.info);
  const cart= useSelector(state => state.cart.info);
  const [showCart, setShowCart] = useState(false);
  useCartData()
  const Logout = () =>{
    dispatch(clearUser());
    toast.info("Logout successful!");
    dispatch(setLogin(false));
    dispatch(removeCart())
  };
  return (
    <>
    <nav className={`navbar h-full w-fit bg-gray-800 p-5 me-10 ${navIsOpen ? "" : "disactive"}`} >
      <div className="brand mb-30 " data-aos="zoom-in-right" data-aos-delay="700">
        <Link to="/"><Logo /></Link> 
      </div>
      <div className="icons flex justify-center " data-aos="zoom-in-right" data-aos-delay="700">
          <ul >
            <li className={`icon ${location.pathname === '/account' ? 'active' : ''}`}>
              <Link to={`${IsLogin ? '' : '/login'}`} className="link">
                
                {IsLogin ? <img src={userData.profileImage} alt="Logo" width={'25px'} height={'25px'} className="userDataImage" /> : <MdAccountCircle /> }
              </Link>
              <h6>account</h6>
            </li>
            <li className={`icon ${location.pathname === '/Cart' ? 'active' : ''}`}>
              <Link  className="cart-link" onClick={() => setShowCart(true)}>
                  <BsFillCartCheckFill />
                  <p className="number-cart">{cart.length}</p>
              </Link>
              <h6>Cart</h6>
            </li>
            <li className={`icon ${location.pathname === '/shop' ? 'active' : ''}`}>
              <Link to="/shop"><AiFillShopping /></Link>
              <h6>Shop</h6>
            </li>
            <li className={`icon ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/"><AiFillHome /></Link>
                <h6>Home</h6>
            </li>
            <li className={`icon ${location.pathname === '/favourites' ? 'active' : ''}`}>
                <Link to="/favourites"><AiFillHeart /></Link>
                <h6>Favourites</h6>
            </li>
            <li className={`icon ${location.pathname === '/Support' ? 'active' : ''}`}>
              <Link to="/Support"><BiSupport /></Link>
              <h6>Support</h6>
            </li>
            <li className="icon">
                <Link onClick={()=>{Logout()}}><RiLogoutBoxRLine /></Link>
                <h6>Logout</h6>
            </li>
          </ul>
      </div>
    </nav>
    {navIsOpen && <div className="backdrop" onClick={() => dispatch(toggleOpenClose())}></div>}
    {showCart && <Cart showCart={showCart} onClose={() => setShowCart(false)} />}
    </>
  );
}