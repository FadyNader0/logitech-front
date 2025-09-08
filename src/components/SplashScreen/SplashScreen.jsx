import './SplashScreen.css'
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo2.png";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2.8;
      if (current > 100) {
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 90); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="splash" data-aos="zoom-in-up" data-os-duration="1000">
      <img src={logo} alt="Logo" className="logo" />
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
