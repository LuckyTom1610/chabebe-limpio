import { getImage } from "../utils/cloudinary";

export const cuidadoPlantasData = [
  {
    id: "planta-1", 
    nombre: "Calatea",
    tipo: "interior",
    imagen: getImage("Calatea.png"),
    cuidados: [
      "Luz: sombra total o luz muy filtrada (evita sol directo).",
      "Riego: mantener el sustrato húmedo, regar 2–3 veces por semana en clima seco.",
      "Ambiente: alta humedad, pulverizar hojas regularmente.",
      "Tip: hojas enrolladas indican falta de agua."
 ],
  },
  {
    id: "planta-2",
    nombre: "Cheflera",
    tipo: "interior",
    imagen: getImage("Cheflera.png"),
    cuidados: [
      "Luz: indirecta brillante o sol parcial.",
      "Riego: cada 5–7 días, dejar secar capa superior.",
      "Ambiente: adaptable, resistente.",
      "Tip: se puede guiar como arbolito pequeño."
   ],
  },
  {
    id: "planta-4",
    nombre: "Costilla de Adán",
    tipo: "interior",
    imagen: getImage("Costilla de Adán.png"),
    cuidados: [
      "Luz: brillante indirecta, tolera media sombra.",
      "Riego: 1 vez por semana, dejando secar los 2–3 cm superiores del sustrato.",
      "Ambiente: temperatura templada, buena ventilación.",
      "Tip: usar tutor para guiar su crecimiento."
   ],
  },
  {
    id: "planta-6",
    nombre: "Drácena",
    tipo: "interior",
    imagen: getImage("Drácena.png"),
    cuidados: [
      "Luz: media a brillante indirecta.",
      "Riego: moderado; deja secar 2–3 cm superiores.",
      "Ambiente: evita corrientes y exceso de agua.",
      "Tip: rota la maceta para crecimiento uniforme."
  ],
  },
  {
    id: "planta-7",
    nombre: "Ficus caucho",
    imagen: getImage("Ficus caucho.png"),
    tipo: "interior",
    cuidados: [
      "Luz: brillante indirecta (tolera algo de sol suave).",
      "Riego: moderado; buen drenaje.",
      "Ambiente: sin cambios bruscos de temperatura.",
      "Tip: limpia hojas para mantener brillo."
   ],
  },
  {
    id: "planta-8",
    nombre: "Ficus lira o violín",
    imagen: getImage("Ficus lira o violín.png"),
    tipo: "interior",
    cuidados: [
      "Luz: muy brillante indirecta, cerca de ventanas.",
      "Riego: moderado, solo cuando la capa superior del sustrato esté seca.",
      "Ambiente: evitar corrientes de aire frío.",
      "Tip: limpiar hojas con paño húmedo para mantener brillo."
   ],
  },
  {
    id: "planta-9",
    nombre: "Filodendro hoja grande",
    tipo: "interior",
    imagen: getImage("Filodendro hoja grande.png"),
    cuidados: [
      "Luz: brillante indirecta.",
      "Riego: cuando la capa superior esté seca.",
      "Ambiente: humedad media–alta.",
      "Tip: tutor si crece pesado; evita encharque."
  ],
  },
  {
    id: "planta-11",
    nombre: "Mini calatea",
    tipo: "interior",
    imagen: getImage("Mini calatea.png"),
    cuidados: [
      "Luz: sombra/luz muy filtrada.",
      "Riego: frecuente en pequeñas dosis; sustrato húmedo.",
      "Ambiente: alta humedad.",
      "Tip: agua sin mucha cal para evitar manchas."
   ],
  },
  {
    id: "planta-13",
    nombre: "Peperomia",
    tipo: "interior",
    imagen: getImage("Peperomia.png"),
    cuidados: [
      "Luz: media a brillante indirecta.",
      "Riego: ligero; prefiere sustrato aireado.",
      "Ambiente: tolera interior seco.",
      "Tip: mejor quedarse corto que excederse en riego."
  ],
  },
  {
    id: "planta-14",
    nombre: "Planta china del dinero",
    tipo: "interior",
    imagen: getImage("Planta china del dinero.png"),
    cuidados: [
      "Luz: brillante indirecta.",
      "Riego: 1 vez/semana; drenar bien.",
      "Ambiente: templado; rota la maceta para forma simétrica.",
      "Tip: retira hijuelos para propagar."
    ],
  },
  {
    
    id: "planta-3",
    nombre: "Clavelón--Marigold",
    tipo: "exterior",
    imagen: getImage("Clavelón--Marigold.png"),
    cuidados: [
      "Luz: pleno sol.",
      "Riego: 3–4 veces por semana, no encharcar.",
      "Ambiente: muy resistente, repele insectos.",
      "Tip: eliminar flores marchitas para alargar la floración."
    ],
  },
  {
    id: "planta-5",
    nombre: "Croto",
    tipo: "exterior",
    imagen: getImage("Croto.png"),
    cuidados: [
      "Luz: requiere sol directo para mantener colores vivos.",
      "Riego: moderado, 1–2 veces por semana.",
      "Ambiente: sensible al frío.",
      "Tip: podar hojas secas para estimular brotes nuevos."
   ],
  },
  {
    id: "planta-10",
    nombre: "Lavanda",
    tipo: "exterior",
    imagen: getImage("Lavanda.png"),
    cuidados: [
      "Luz: pleno sol (6+ horas diarias).",
      "Riego: moderado, suelo seco entre riegos.",
      "Ambiente: suelo drenado y aireado.",
      "Tip: podar flores secas para estimular floración continua."
   ],
  },
  {
    id: "planta-12",
    nombre: "Palma cica",
    tipo: "exterior",
    imagen: getImage("Palma cica.png"),
    cuidados: [
      "Luz: sol parcial a pleno sol.",
      "Riego: moderado; deja secar entre riegos.",
      "Ambiente: muy buen drenaje; crecimiento lento.",
      "Tip: abona en temporada cálida."
   ],
  },
  {
    id: "planta-15",
    nombre: "Trébol morado",
    tipo: "exterior",
    imagen: getImage("Trébol_morado.png"),
    cuidados: [
      "Luz: sol suave o brillante indirecta.",
      "Riego: moderado; sustrato ligeramente húmedo.",
      "Ambiente: puede entrar en reposo; reduce riego si amarillea.",
      "Tip: se cierran las hojas por la noche; es normal."
   ],
  },
];

export default cuidadoPlantasData;