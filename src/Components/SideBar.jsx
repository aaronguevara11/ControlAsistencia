import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Person, Notifications, Menu, Close } from "@mui/icons-material";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", path: "/inicio", icon: <Home fontSize="large" /> },
    { name: "Perfil", path: "/perfil", icon: <Person fontSize="large" /> },
    {
      name: "Notificaciones",
      path: "/notificaciones",
      icon: <Notifications fontSize="large" />,
    },
  ];

  return (
    <aside
      className={`top-0 left-0 h-full bg-gray-800 text-white shadow-lg transform transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } md:translate-x-0`}
    >
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-semibold uppercase">
          Control de Asistencias
        </h1>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-4 px-4 py-3 rounded-lg transition-all ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
