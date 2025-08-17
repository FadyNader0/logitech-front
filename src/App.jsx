import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import logo from "./assets/images/logo2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import NavBar from "./components/NavBar/NavBar";

function SplashScreen() {
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
    }, 80); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="splash">
      <img src={logo} alt="Logo" className="logo" />
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

function App() {
    useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,     
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading ) {
    return <SplashScreen />;
  }

  return (
    <div className="flex">
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
