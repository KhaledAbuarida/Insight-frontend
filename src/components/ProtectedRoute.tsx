import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../contexts/DataContext/DataContext";

const ProtectedRoute = () => {
  const { isDataUploaded } = useData();

  if (!isDataUploaded) {
    return <Navigate to="/upload" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
