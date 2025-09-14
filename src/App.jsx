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
import Favourites from "./pages/Favourites/Favourites"
import Support from "./pages/Support/Support";
import {getAllMessages} from "./utilitas/getMessagesFunction";
import { useSelector , useDispatch} from 'react-redux'
import { setIsNew } from "./features/Messages";
import {getUser} from "./utilitas/apiService";




function App() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userSlice.info);

  
  const checkMessages = async() => {
    try {
      const msgs = await getAllMessages(userData?.id);
      const newDataUser = await getUser();
      const users = newDataUser.data.results;
      const currentUser = users.find(u => u.id === userData?.id);
      const unReadMessages = currentUser?.unReadMassages || 0; 
      if(Number(unReadMessages) < msgs.length){
        dispatch(setIsNew(true));
      }   
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      checkMessages();
    }, 5000);
    return () => clearInterval(interval);
  }, [userData?.id]);





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
          <Route path="/favourites" element={<ProtectedRoute>  <Favourites />  </ProtectedRoute> }/>
          <Route path="/support" element={<ProtectedRoute>  <Support />  </ProtectedRoute> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
