import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta.jsx";
import Login from "./paginas/Login.jsx";
import NuevoPassword from "./paginas/NuevoPassword";
import OlvidoPassword from "./paginas/OlvidoPassword";
import Registrar from "./paginas/Registrar";

import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Registrar />} />
              <Route path="login" element={<Login />} />
              <Route path="olvido-password" element={<OlvidoPassword />} />
              <Route
                path="olvido-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
