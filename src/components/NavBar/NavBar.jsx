import { AiFillHeart } from "react-icons/ai"; 
import { BsFillCartCheckFill } from "react-icons/bs"; 
import { IoIosPeople } from "react-icons/io"; 
import { RiLogoutBoxRLine } from "react-icons/ri"; 
import { AiFillHome } from "react-icons/ai"; 
import { AiFillShopping } from "react-icons/ai"; 
import { MdAccountCircle } from "react-icons/md"; 
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './NavBar.css';
export default function NavBar() {
  const location = useLocation(); 
  return (
    <nav className="navbar h-[100%<MdAccountCircle />] w-fit bg-gray-800 p-5 me-10" data-aos="zoom-in-right" data-aos-delay="700">
      <div className="brand mb-30 ">
        <Link to="/"><Logo /></Link> 
      </div>
      <div className="icons flex justify-center ">
          <ul >
            <li className={`icon ${location.pathname === '/account' ? 'active' : ''}`}>
              <Link to="account" className="link"><MdAccountCircle /></Link>
              <h6>account</h6>
            </li>
            <li className={`icon ${location.pathname === '/settings' ? 'active' : ''}`}>
              <Link to="/settings"><BsFillCartCheckFill /></Link>
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
            <li className={`icon ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about"><IoIosPeople /></Link>
                <h6>AboutUS</h6>
            </li>
            <li className={`icon ${location.pathname === '/favourites' ? 'active' : ''}`}>
                <Link to="/favourites"><AiFillHeart /></Link>
                <h6>Favourites</h6>
            </li>
            <li className={`icon ${location.pathname === '/logout' ? 'active' : ''}`}>
                <Link><RiLogoutBoxRLine /></Link>
                <h6>Logout</h6>
            </li>
          </ul>
      </div>
    </nav>
  );
}