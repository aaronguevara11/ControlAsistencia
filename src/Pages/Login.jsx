import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/img/upg.jpg";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";

export const Login = ({ setJwtDataLocal }) => {
  const [jwtdata, setJwtData] = useState("1");
  const navigate = useNavigate();

  useEffect(() => {
    if (jwtdata && jwtdata !== "1") {
      setJwtDataLocal(jwtdata);
      navigate("/Inicio");
    }
  }, [jwtdata, navigate, setJwtDataLocal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = "token_valido";
    if (token) {
      setJwtData(token);
    } else {
      console.log("Error en el login");
    }
  };

  return (
    <section
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="w-1/2 h-screen bg-[#ECECEC] rounded-r-3xl flex flex-col justify-center items-center">
        <div className="flex flex-col w-3/6 justify-center items-center h-2/6">
          <form
            className="w-full h-full flex flex-col justify-between"
            onSubmit={handleSubmit}
          >
            <h1 className="font-montserrat text-6xl font-medium">ACCEDER</h1>
            <div className="w-full relative">
              <PersonIcon
                className="text-[#181818] absolute left-1 transform -translate-y-1/2 top-1/2"
                style={{ fontSize: 34 }}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="bg-transparent border-b-[1px] border-[#181818] w-full pl-10 focus:outline-none font-montserrat placeholder-[#181818] placeholder-opacity-50 text-lg"
                placeholder="Nombre de usuario"
                style={{
                  lineHeight: "38px",
                }}
              />
            </div>

            <div className="w-full">
              <div className="w-full relative">
                <PasswordIcon
                  className="text-[#181818] absolute left-1 transform -translate-y-1/2 top-1/2"
                  style={{ fontSize: 32 }}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-transparent border-b-[1px] border-[#181818] w-full pl-10 focus:outline-none font-montserrat placeholder-[#181818] placeholder-opacity-50 text-lg"
                  placeholder="Contraseña"
                  style={{
                    lineHeight: "38px",
                  }}
                />
              </div>
              {/* Administrador */}
              <div className="flex items-center mt-2">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border-[#181818]"
                />
                <label
                  htmlFor="remember"
                  className="text-[#181818] text-lg pl-2 font-montserrat"
                >
                  Administrador
                </label>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-white text-2xl font-montserrat bg-[#363636] rounded-xl mt-4"
              >
                CONTINUAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
