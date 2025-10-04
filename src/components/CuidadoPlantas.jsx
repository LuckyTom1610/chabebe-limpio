import React, { useState } from "react";
import plantasInspiracion from "../data/plantasInspiracion"; 

const cuidadoPlantas = {
  // === INTERIOR ===
  "planta-1": {
    nombre: "Calatea",
    cuidados: [
      "Luz: sombra total o luz muy filtrada (evita sol directo).",
      "Riego: mantener el sustrato húmedo, regar 2–3 veces por semana en clima seco.",
      "Ambiente: alta humedad, pulverizar hojas regularmente.",
      "Tip: hojas enrolladas indican falta de agua."
    ],
  },
"planta-2": {
    nombre: "Cheflera",
    cuidados: [
      "Luz: indirecta brillante o sol parcial.",
      "Riego: cada 5–7 días, dejar secar capa superior.",
      "Ambiente: adaptable, resistente.",
      "Tip: se puede guiar como arbolito pequeño."
    ],
  },
  "planta-4": {
    nombre: "Costilla de Adán",
    cuidados: [
      "Luz: brillante indirecta, tolera media sombra.",
      "Riego: 1 vez por semana, dejando secar los 2–3 cm superiores del sustrato.",
      "Ambiente: temperatura templada, buena ventilación.",
      "Tip: usar tutor para guiar su crecimiento."
    ],
  },
  "planta-6": {
    nombre: "Drácena",
    cuidados: [
      "Luz: media a brillante indirecta.",
      "Riego: moderado; deja secar 2–3 cm superiores.",
      "Ambiente: evita corrientes y exceso de agua.",
      "Tip: rota la maceta para crecimiento uniforme."
    ],
  },
  "planta-7": {
    nombre: "Ficus caucho",
    cuidados: [
      "Luz: brillante indirecta (tolera algo de sol suave).",
      "Riego: moderado; buen drenaje.",
      "Ambiente: sin cambios bruscos de temperatura.",
      "Tip: limpia hojas para mantener brillo."
    ],
  },
  "planta-8": {
    nombre: "Ficus lira o violín",
    cuidados: [
      "Luz: muy brillante indirecta, cerca de ventanas.",
      "Riego: moderado, solo cuando la capa superior del sustrato esté seca.",
      "Ambiente: evitar corrientes de aire frío.",
      "Tip: limpiar hojas con paño húmedo para mantener brillo."
    ],
  },
  "planta-9": {
    nombre: "Filodendro hoja grande",
    cuidados: [
      "Luz: brillante indirecta.",
      "Riego: cuando la capa superior esté seca.",
      "Ambiente: humedad media–alta.",
      "Tip: tutor si crece pesado; evita encharque."
  ],
},
  "planta-11": {
    nombre: "Mini calatea",
    cuidados: [
      "Luz: sombra/luz muy filtrada.",
      "Riego: frecuente en pequeñas dosis; sustrato húmedo.",
      "Ambiente: alta humedad.",
      "Tip: agua sin mucha cal para evitar manchas."
    ],
  },
  "planta-13": {
    nombre: "Peperomia",
    cuidados: [
      "Luz: media a brillante indirecta.",
      "Riego: ligero; prefiere sustrato aireado.",
      "Ambiente: tolera interior seco.",
      "Tip: mejor quedarse corto que excederse en riego."
    ],
  },
  "planta-14": {
    nombre: "Planta china del dinero",
    cuidados: [
      "Luz: brillante indirecta.",
      "Riego: 1 vez/semana; drenar bien.",
      "Ambiente: templado; rota la maceta para forma simétrica.",
      "Tip: retira hijuelos para propagar."
    ],
  },
    // === EXTERIOR ===

  "planta-3": {
    nombre: "Clavelón--Marigold",
    cuidados: [
      "Luz: pleno sol.",
      "Riego: 3–4 veces por semana, no encharcar.",
      "Ambiente: muy resistente, repele insectos.",
      "Tip: eliminar flores marchitas para alargar la floración."
    ],
  },
  "planta-5": {
    nombre: "Croto",
    cuidados: [
      "Luz: requiere sol directo para mantener colores vivos.",
      "Riego: moderado, 1–2 veces por semana.",
      "Ambiente: sensible al frío.",
      "Tip: podar hojas secas para estimular brotes nuevos."
    ],
  },
  "planta-10": {
    nombre: "Lavanda",
    cuidados: [
      "Luz: pleno sol (6+ horas diarias).",
      "Riego: moderado, suelo seco entre riegos.",
      "Ambiente: suelo drenado y aireado.",
      "Tip: podar flores secas para estimular floración continua."
    ],
  },
  "planta-12": {
    nombre: "Palma cica",
    cuidados: [
      "Luz: sol parcial a pleno sol.",
      "Riego: moderado; deja secar entre riegos.",
      "Ambiente: muy buen drenaje; crecimiento lento.",
      "Tip: abona en temporada cálida."
    ],
  },
  "planta-15": {
    nombre: "Trébol morado",
    cuidados: [
      "Luz: sol suave o brillante indirecta.",
      "Riego: moderado; sustrato ligeramente húmedo.",
      "Ambiente: puede entrar en reposo; reduce riego si amarillea.",
      "Tip: se cierran las hojas por la noche; es normal."
    ],
  },
  };

export default function CuidadoPlantas() {
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);
console.log("CuidadoPlantas montado. pathname:", window.location.pathname);
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
        🌱 Cuidado de Plantas
      </h2>

      {/* Grid de plantas */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plantasInspiracion.map((planta) => (
          <div
            key={planta.id}
            className="cursor-pointer transform hover:scale-105 transition duration-300"
            onClick={() => setPlantaSeleccionada(planta)}
          >
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={planta.imagen}
                alt={planta.nombre}
                className="w-full h-40 object-contain p-2 bg-gray-50"
              />
              <h3 className="text-center py-2 text-lg font-medium text-gray-800">
                {planta.nombre}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de cuidados */}
      {plantaSeleccionada && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setPlantaSeleccionada(null)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold text-green-600 mb-4 text-center">
              {plantaSeleccionada.nombre}
            </h3>

            <img
              src={plantaSeleccionada.imagen}
              alt={plantaSeleccionada.nombre}
              className="mx-auto mb-4 max-h-48 object-contain"
            />

            {/* Renderizado seguro de cuidados */}
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              {Array.isArray(cuidadoPlantas[plantaSeleccionada.id]?.cuidados)
                ? cuidadoPlantas[plantaSeleccionada.id].cuidados.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))
                : <li>⚠️ Información de cuidados aún no disponible.</li>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}