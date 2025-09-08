import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PuplicRoute({children}) {
  const isLoggedIn = useSelector((state) => state.login.isLogin);
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
