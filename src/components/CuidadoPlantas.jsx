import React, { useState } from "react";
import plantasInspiracion from "../data/plantasInspiracion"; 

const cuidadosPlantas = {
  // === INTERIOR ===
  "Calathea": {
    nombre: "Calathea (Calathea orbifolia / roseopicta)",
    cuidados: [
      "Luz: sombra total o luz muy filtrada (evita sol directo).",
      "Riego: mantener el sustrato húmedo, regar 2–3 veces por semana en clima seco.",
      "Ambiente: alta humedad, pulverizar hojas regularmente.",
      "Tip: hojas enrolladas indican falta de agua."
    ],
  },
  "Costilla de Adán": {
    nombre: "Monstera deliciosa (Costilla de Adán)",
    cuidados: [
      "Luz: brillante indirecta, tolera media sombra.",
      "Riego: 1 vez por semana, dejando secar los 2–3 cm superiores del sustrato.",
      "Ambiente: temperatura templada, buena ventilación.",
      "Tip: usar tutor para guiar su crecimiento."
    ],
  },
  "Ficus lira o violín": {
    nombre: "Ficus lyrata (Ficus lira o violín)",
    cuidados: [
      "Luz: muy brillante indirecta, cerca de ventanas.",
      "Riego: moderado, solo cuando la capa superior del sustrato esté seca.",
      "Ambiente: evitar corrientes de aire frío.",
      "Tip: limpiar hojas con paño húmedo para mantener brillo."
    ],
  },
  "Lirio de Paz": {
    nombre: "Spathiphyllum wallisii (Lirio de paz)",
    cuidados: [
      "Luz: sombra parcial, tolera baja luz.",
      "Riego: 2 veces por semana; no dejar que se seque completamente.",
      "Ambiente: alta humedad, florece en interiores.",
      "Tip: hojas caídas = falta de agua inmediata."
    ],
  },
  "ZZ Plant": {
    nombre: "Zamioculca zamiifolia (ZZ Plant)",
    cuidados: [
      "Luz: baja a media, muy adaptable.",
      "Riego: escaso, cada 10–15 días.",
      "Ambiente: tolera sequía y descuido.",
      "Tip: perfecta para principiantes."
    ],
  },
  "Lengua de Suegra": {
    nombre: "Sansevieria trifasciata (Lengua de suegra)",
    cuidados: [
      "Luz: desde baja hasta sol directo.",
      "Riego: cada 15–20 días, muy poca agua.",
      "Ambiente: extremadamente resistente.",
      "Tip: evita exceso de riego para prevenir pudrición."
    ],
  },

  // === EXTERIOR ===
  "Palma Areca": {
    nombre: "Dypsis lutescens (Palma areca)",
    cuidados: [
      "Luz: brillante indirecta o sol parcial.",
      "Riego: frecuente, mantener el sustrato húmedo.",
      "Ambiente: cálido y húmedo.",
      "Tip: abonar en verano para follaje denso."
    ],
  },
  "Croto": {
    nombre: "Codiaeum variegatum (Croto)",
    cuidados: [
      "Luz: requiere sol directo para mantener colores vivos.",
      "Riego: moderado, 1–2 veces por semana.",
      "Ambiente: sensible al frío.",
      "Tip: podar hojas secas para estimular brotes nuevos."
    ],
  },
  "Cheflera": {
    nombre: "Schefflera arboricola (Cheflera)",
    cuidados: [
      "Luz: indirecta brillante o sol parcial.",
      "Riego: cada 5–7 días, dejar secar capa superior.",
      "Ambiente: adaptable, resistente.",
      "Tip: se puede guiar como arbolito pequeño."
    ],
  },
  "Lavanda": {
    nombre: "Lavandula angustifolia (Lavanda)",
    cuidados: [
      "Luz: pleno sol (6+ horas diarias).",
      "Riego: moderado, suelo seco entre riegos.",
      "Ambiente: suelo drenado y aireado.",
      "Tip: podar flores secas para estimular floración continua."
    ],
  },
  "Clavelón--Marigold": {
    nombre: "Tagetes erecta (Clavelón / Marigold)",
    cuidados: [
      "Luz: pleno sol.",
      "Riego: 3–4 veces por semana, no encharcar.",
      "Ambiente: muy resistente, repele insectos.",
      "Tip: eliminar flores marchitas para alargar la floración."
    ],
  }
};

export default function CuidadoPlantas() {
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);

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
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              {(cuidadosPlantas[plantaSeleccionada.nombre]?.cuidados || []).map(
                (tip, i) => (
                  <li key={i}>{tip}</li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}