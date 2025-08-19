import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import NavBar from "./components/NavBar/NavBar";
import SplashScreen from "./components/SplashScreen/SplashScreen";


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
    <>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
