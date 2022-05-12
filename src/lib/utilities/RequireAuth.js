import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(GlobalContext);
  const location = useLocation();
  if (user.role === "ROLE_ADMIN") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuth;
