import React from "react";

export const Home = () => {
  const trabajadores = [
    {
      nombre: "Juan Pérez",
      puesto: "Ingeniero",
      unidad: "Desarrollo",
      hora: "8:00 AM",
      llegada: "Puntual",
    },
    {
      nombre: "María Gómez",
      puesto: "Analista",
      unidad: "Calidad",
      hora: "8:15 AM",
      llegada: "Tarde",
    },
    {
      nombre: "Carlos Ruiz",
      puesto: "Soporte",
      unidad: "Infraestructura",
      hora: "7:50 AM",
      llegada: "Puntual",
    },
    {
      nombre: "Lucía Fernández",
      puesto: "Gerente",
      unidad: "Administración",
      hora: "8:20 AM",
      llegada: "Tarde",
    },
    {
      nombre: "Miguel Torres",
      puesto: "Diseñador",
      unidad: "Creatividad",
      hora: "8:05 AM",
      llegada: "Puntual",
    },
    {
      nombre: "Ana Beltrán",
      puesto: "Desarrolladora",
      unidad: "Web",
      hora: "8:10 AM",
      llegada: "Tarde",
    },
    {
      nombre: "Roberto Mendez",
      puesto: "Consultor",
      unidad: "Negocios",
      hora: "7:55 AM",
      llegada: "Puntual",
    },
    {
      nombre: "Elena Rojas",
      puesto: "Especialista",
      unidad: "Marketing",
      hora: "8:17 AM",
      llegada: "Tarde",
    },
    {
      nombre: "Luis Vargas",
      puesto: "Técnico",
      unidad: "Soporte",
      hora: "8:02 AM",
      llegada: "Puntual",
    },
    {
      nombre: "Patricia López",
      puesto: "Analista",
      unidad: "Datos",
      hora: "8:22 AM",
      llegada: "Tarde",
    },
  ];

  // Función para convertir hora a minutos
  const convertirHora = (hora) => {
    const [time, modifier] = hora.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12; // Si es PM, sumamos 12 horas (excepto 12 PM)
    if (modifier === "AM" && hours === 12) hours = 0; // Si es 12 AM, convertimos a 0 horas

    return hours * 60 + minutes;
  };

  trabajadores.sort((a, b) => convertirHora(a.hora) - convertirHora(b.hora));

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-x-auto">
      <div className="w-full h-full p-1 sm:p-2 md:p-4 lg:p-5 xl:p-6 2xl:p-7">
        {/* Encabezados */}
        <div className="w-full flex flex-col">
          <h1 className="font-montserrat text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl 2xl:font-bold">
            BIENVENIDO, USUARIO!
          </h1>
          <h3 className="text-[#94832C] font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
            Ingeniero de Sistemas
          </h3>
        </div>

        {/* Botones */}
        <div className="w-full h-auto flex flex-wrap justify-center my-2">
          <button className="m-1 w-full h-32 md:h-32 lg:h-36 xl:h-40 2xl:h-52 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-[32.5%] rounded-xl bg-[#353535] text-white p-5 flex">
            <div className="w-2/3">
              <h1 className="font-montserrat text-lg md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl 2xl:font-semibold text-start">
                AGREGAR UN NUEVO TRABAJADOR
              </h1>
            </div>
          </button>
          <button className="m-1 w-full h-32 md:h-32 lg:h-36 xl:h-40 2xl:h-52 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-[32.5%] rounded-xl bg-[#353535] text-white p-5 flex">
            <div className="w-2/3">
              <h1 className="font-montserrat text-lg md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl 2xl:font-semibold text-start">
                LISTADO DE TRABAJADORES
              </h1>
            </div>
          </button>
          <button className="m-1 w-full h-32 md:h-32 lg:h-36 xl:h-40 2xl:h-52 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-[32.5%] rounded-xl bg-[#353535] text-white p-5 flex">
            <div className="w-2/3">
              <h1 className="font-montserrat text-lg md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl 2xl:font-semibold text-start">
                GENERAR QR DE ASISTENCIA
              </h1>
            </div>
          </button>
        </div>

        {/* Tabla */}
        <div className="w-96 md:w-full lg:w-full xl:w-full 2xl:w-full mt-8 overflow-x-auto overflow-y-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            {/* Encabezado de la tabla */}
            <thead>
              <tr className="bg-[#353535] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Nombre
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Puesto
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Unidad
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Hora de Llegada
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Tipo de Llegada
                </th>
              </tr>
            </thead>
            {/* Cuerpo de la tabla */}
            <tbody>
              {trabajadores.map(({ nombre, puesto, unidad, hora, llegada }) => (
                <tr key={nombre} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{nombre}</td>
                  <td className="border border-gray-300 px-4 py-2">{puesto}</td>
                  <td className="border border-gray-300 px-4 py-2">{unidad}</td>
                  <td className="border border-gray-300 px-4 py-2">{hora}</td>
                  <td
                    className={`border font-semibold border-gray-300 px-4 py-2 ${
                      llegada === "Puntual" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {llegada}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
