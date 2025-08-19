import { BiSupport } from "react-icons/bi"; 
import { AiOutlineMenuFold } from "react-icons/ai"; 
import { Link } from 'react-router-dom';
import { Card } from "flowbite-react";
import Image from "../../assets/images/stero.png";
import Image2 from "../../assets/images/control.png";
import './Home.css';
export default function Home() {
  return (
    <div className="home" data-aos="zoom-in" data-aos-duration="1500">
      <div className="homeProduct" data-aos="zoom-out">
        <div className="upContent flex justify-between">
          <div className="linksHome" data-aos="zoom-out">
            {/* <Link to="/products" className="linkHome">Contact US</Link> */}
            <Link to="/support" className="linkHome"><BiSupport /></Link>
          </div>
          <div className="nameBrand">
            <h1 className="brandName" data-aos="zoom-out-up" data-aos-delay="700">Logitech</h1>
          </div>
          <div className="buttonNav">
            <AiOutlineMenuFold className="button"/>
          </div>
        </div>
        <div className="downContent" data-aos="zoom-in-right" data-aos-delay="700">
          <Card className="max-w-[350px] card-content">
            <h5 className="text-lg font-bold tracking-tight ">
              Explore Logitech Speaker
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Discover premium sound for every setup.
            </p>
            <Link to="/shop" className="w-[100%] btn-shop flex items-center justify-center ">
                Shop Now
                <svg className="-mr-1 ml-5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
            </Link>

          </Card>
        </div>  

      </div>
      <div className="homeContent" data-aos="zoom-in-left" data-aos-delay="700">
        <Card className="max-w-sm card-content h-[50%] pt-[40px] w-[100%] first-card">
          <div className="content">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                Crystal-Clear Stereo Sound
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-400 ">
                Enjoy immersive audio with Logitech's high-performance speaker systems 
              </p>
          </div>
            <img src={Image} alt="Logitech Speaker" className="w-[100%] h-[180px] object-cover "/>
        </Card>
        <Card className="max-w-sm card-content h-[46%] mt-[20px]">
            <img src={Image2} alt="Logitech Speaker" className="w-[100%] h-[180px] object-cover rounded-lg mt-4" />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Easy Control 
            </h5>
            <h6 className="text-sm text-gray-700 dark:text-gray-400">
              Control your sound with ease using wireless dials, accessible buttons, and smart connectivity.
            </h6>
        </Card>

        
      </div>
    </div>
  );
}