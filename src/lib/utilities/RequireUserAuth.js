import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { Navigate, useLocation } from "react-router-dom";

const RequireUserAuth = ({ children }) => {
  const { user } = useContext(GlobalContext);
  const location = useLocation();
  if (user.role === "ROLE_USER") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireUserAuth;
