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
import { Home } from "./Pages/Home/Home";

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

  useEffect(() => {
    localStorage.setItem("jwtdata", jwtDataLocal);
  }, [jwtDataLocal]);

  const Layout = ({ children }) => {
    return (
      <div className="relative flex h-screen">
        {/* Sidebar siempre visible en móviles */}
        <div className="top-0 left-0 h-full w-auto ">
          <Sidebar />
        </div>

        {/* Contenido principal */}
        <main className="h-full flex-1 w-auto z-0">{children}</main>
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
