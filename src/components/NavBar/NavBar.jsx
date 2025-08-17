import { IoIosPeople } from "react-icons/io"; 
import { RiLogoutBoxRLine } from "react-icons/ri"; 
import { AiOutlineBell } from "react-icons/ai"; 
import { SiAboutdotme } from "react-icons/si"; 
import { AiFillHome } from "react-icons/ai"; 
import { AiFillShopping } from "react-icons/ai"; 
import { AiFillSetting } from "react-icons/ai"; 
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
              <Link to="account"><MdAccountCircle /></Link>
            </li>
            <li className={`icon ${location.pathname === '/settings' ? 'active' : ''}`}>
              <Link to="/settings"><AiFillSetting /></Link>
            </li>
            <li className={`icon ${location.pathname === '/shop' ? 'active' : ''}`}>
              <Link to="/shop"><AiFillShopping /></Link>
            </li>
            <li className={`icon ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/"><AiFillHome /></Link>
            </li>
            <li className={`icon ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about"><IoIosPeople /></Link>
            </li>
            <li className={`icon ${location.pathname === '/notf' ? 'active' : ''}`}>
                <Link to="/notf"><AiOutlineBell /></Link>
            </li>
            <li className={`icon ${location.pathname === '/logout' ? 'active' : ''}`}>
                <Link><RiLogoutBoxRLine /></Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}