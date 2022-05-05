import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "cargando";
  return (
    <>
      {auth._id ? (
        <div>
          <Header />
          <div>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default RutaProtegida;
