import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("You must be logged in to access this page.", {
        toastId: "auth-error"  // prevents duplicate toasts
      });
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
