import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import NavBar from "./components/NavBar/NavBar";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./utilitas/ProtectedRoute";
import PuplicRoute from "./utilitas/PuplicRoute";
import ImportUserData from "./utilitas/ImportUserData";



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
      <ImportUserData />
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PuplicRoute>  <Login />  </PuplicRoute> }/>
          <Route path="/shop" element={<ProtectedRoute>  <Shop />  </ProtectedRoute> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
