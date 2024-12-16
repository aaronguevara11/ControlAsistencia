import {
  Home,
  Person,
  Notifications,
  Menu,
  Close,
  ExitToApp,
} from "@mui/icons-material";
import { useContext, createContext, useState, useEffect } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false); // Inicialización como falso

  useEffect(() => {
    const handleResize = () => setExpanded(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-[#793333] text-white border-r shadow-sm">
        <div className="p-4 flex justify-between items-center">
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="rounded-lg bg-[#793333] hover:bg-[#632828]"
          >
            {expanded ? <Close fontSize="large" /> : <Menu fontSize="large" />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-1">
            <SidebarItem
              icon={<Home fontSize="large" style={{ color: "white" }} />}
              text="Inicio"
            />
            <SidebarItem
              icon={<Person fontSize="large" style={{ color: "white" }} />}
              text="Perfil"
            />
            <SidebarItem
              icon={
                <Notifications fontSize="large" style={{ color: "white" }} />
              }
              text="Notificaciones"
            />
          </ul>
        </SidebarContext.Provider>

        {expanded && (
          <div className="border-t flex p-3">
            <button
              onClick={() => console.log("Cerrar Sesión")}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-white hover:bg-[#632828] border-[#632828] transition-all`}
            >
              <ExitToApp fontSize="large" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        )}
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-3 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-[#632828] text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        } text-white`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6
          bg-[#984949] text-white text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
