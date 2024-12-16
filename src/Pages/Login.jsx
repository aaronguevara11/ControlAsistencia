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
    <section className="h-screen w-full flex flex-col lg:flex-row items-center justify-center bg-black">
      {/* Imagen */}
      <div className="w-full h-1/2 lg:w-1/2 lg:h-screen relative">
        <img
          className="w-full h-full object-cover"
          src={backgroundImage}
          alt="Fondo"
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          }}
        ></div>
      </div>

      {/* Formulario */}
      <div className="w-full h-1/2 lg:w-1/2 lg:h-screen flex items-center justify-center bg-white">
        <div className="rounded-2xl p-8 w-full max-w-md">
          <h1 className="font-montserrat text-5xl text-center mb-3 sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl">
            ACCEDER
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Nombre de usuario */}
            <div className="relative">
              <PersonIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                style={{ fontSize: 28 }}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="w-full pl-12 pr-4 py-2 border-b-2 border-gray-400 focus:outline-none text-lg placeholder-gray-600"
                placeholder="Nombre de usuario"
              />
            </div>

            {/* Contraseña */}
            <div className="relative">
              <PasswordIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                style={{ fontSize: 28 }}
              />
              <input
                type="password"
                name="password"
                id="password"
                className="w-full pl-12 pr-4 py-2 border-b-2 border-gray-400 focus:outline-none text-lg placeholder-gray-600"
                placeholder="Contraseña"
              />
            </div>

            {/* Checkbox Administrador */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-gray-400"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-gray-600 text-lg font-montserrat"
              >
                Administrador
              </label>
            </div>

            {/* Botón de enviar */}
            <button
              type="submit"
              className="w-full bg-[#363636] text-white rounded-xl py-3 text-xl font-semibold mt-2"
            >
              CONTINUAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
