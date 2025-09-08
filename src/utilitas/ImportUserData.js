import { useDispatch } from 'react-redux'
import { setUser } from '../features/UserDataFeature';
import { setLogin } from '../features/Login/LoginFeature';
import { useEffect } from 'react';
export default function ImportUserData() {
    const dispatch = useDispatch();
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const data = JSON.parse(user);
            dispatch(setUser(data));
            dispatch(setLogin(true));
        }
  }, []);
  
  
}