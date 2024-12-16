import React, { useState, useEffect } from "react";
import { Login } from "./Pages/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import Sidebar from "./Components/SideBar";
import { Home } from "./Pages/Home/Home"; // Importación corregida

const ProtectedRoute = ({ children, jwtDataLocal }) => {
  const location = useLocation();

  if (!jwtDataLocal || jwtDataLocal === "1") {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  const [jwtDataLocal, setJwtDataLocal] = useState(
    localStorage.getItem("jwtdata")
  );

  // Actualizar localStorage cuando cambie jwtDataLocal
  useEffect(() => {
    localStorage.setItem("jwtdata", jwtDataLocal);
  }, [jwtDataLocal]);

  // Componente de Layout con Sidebar
  const Layout = ({ children }) => {
    return (
      <div className="flex h-screen">
        <div className="w-2/12 md:w-1/6">
          <Sidebar />
        </div>
        <main className="w-10/12">{children}</main>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />

        <Route
          path="/Login"
          element={<Login setJwtDataLocal={setJwtDataLocal} />}
        />

        <Route
          path="/Inicio"
          element={
            <ProtectedRoute jwtDataLocal={jwtDataLocal}>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
