import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getImage } from "../utils/cloudinary";

// ========== Helpers ==========
function safeSrc(path) {
  if (!path) return getImage("images/placeholder.jpg");
  try {
    return encodeURI(path);
  } catch {
    return path;
  }
}

/** Genera candidatos de nombre de archivo por convención */
function buildColorImagePath({ baseId, varianteDesc, colorCode }) {
  const v = (varianteDesc || "").replace(/\s+/g, ""); // sin espacios
  const c = (colorCode || "").trim();
  const b = (baseId || "").trim();

    return [
    getImage(`${b}-${v}-${c}.jpg`),
    getImage(`${b}-${c}.jpg`),
    getImage(`${b}_${c}.jpg`),
    getImage(`${b}${v ? "-" + v : ""}_${c}.jpg`),
  ];
}

const macetaColorImages = {
  
   ORO: {
    "S449": getImage("Oro_DBOE600_S449.jpg"),
    "443U": getImage("Oro_DBOE600_443U_m.jpg"),
    "2411U": getImage("Oro_DBOE600_2411U.jpg"),
    "419U": getImage("Oro_DBOE600_419U.jpg"),
  },
  LEXOROUND: {
    "S449": getImage("DLR_S449 LEXO.jpg"),
  },

  GRACIACASEBETONEFFECT: {
    "422U": getImage("Gracia_Case_Beton_Effect_DGCL600E_422U.jpg"),
    "CY700": getImage("Gracia_Case_Beton_Effect_DGCL600E_CY700.jpg"),
    "S433": getImage("Gracia_Case_Beton_Effect_DGCL600E_S433.jpg"),
  },

      GRACIACASEECOWOOD: {
     "S449W": getImage("Gracia_Case_ECO_Wood_DGCL600W_S449W.jpg"),
      "4665W": getImage("Gracia_Case_ECO_Wood_DGCL600W_4665W.jpg"),
      "S433W": getImage("Gracia_Case_ECO_Wood_DGCL600W_S433W.jpg"),
      "4625W": getImage("Gracia_Case_ECO_Wood_DGCL600W_4625W.jpg"),
  },
      GRACIACASE: {
    "S449": getImage("Gracia_Case_DGCL400_S449.jpg"),
    "443U": getImage("Gracia_Case_DGCL400_443U_m.jpg"),
    "5615C": getImage("Gracia_Case_DGCL400_5615C.jpg"),
    "S433": getImage("Gracia_Case_DGCL400_S433_m.jpg"),
  },
  CASCADEGRADENWALL: {
     "S433": getImage("Garden_Long_Wall_IO3W800_2 modulowy_S433.jpg"),
  },
     BLOMA: {
     "405U": getImage("DBLO600.jpg"),
  },

    URBICASEBETOMEFFECT: {
     "422U": getImage("Urbi_Case_Beton_Effect_DUC800TE_wklad_separator_422U.jpg"),
  "CY700": getImage("Urbi_Case_Beton_Effect_DUC800TE_wklad_separator_CY700.jpg"),
  "S433": getImage("Urbi_Case_Beton_Effect_DUC800TE_wklad_separator_S433.jpg"),
  },

     HEOS: {
    variantes: {
      DLHEN470: {
         S449: getImage("Heos_DLHEN470_S449.jpg"),
         S433: getImage("Heos_DLHEN400_S433.jpg"),
      },
      DBHEN470: {
        S449: getImage("Heos_DBHEN470_S449.jpg"),
        S433: getImage("Heos_DBHEN470_S433_m.jpg"),
      },
      DBHER470: {
        S449: getImage("Heos_DBHER_S449.jpg"),
        S433: getImage("Heos_DBHER_S433.jpg"),
      },
    },
  },
      RESPANAPLANTERWOODHIGHSET: {
    "405U": getImage("ISEW780H.jpg"),
  },
      ARIAOVAL: {
    variantes: {
      TAO40: {
         "7529U": getImage("Aria_Oval_TAO40_101GR_sand_m.jpg"),
         "443U": getImage("Aria_Oval_TAO40_105GR_tiny_granite.jpg"),
         "405U": getImage("Aria_Oval_TAO40_107GR_graphite.jpg"),
      },
      TAO60: {
         "7529U": getImage("Aria_Oval_TAO60_101GR_sand_m.jpg"),
         "443U": getImage("Aria_Oval_TAO60_105GR.jpg"),
         "405U": getImage("Aria_Oval_TAO60_107GR_graphite.jpg"),
      },
      },
  },    
        CORObowlhigh: {
      variantes: {
        TCB40H: {
         "7529U": getImage("Coro_Bowl_High_TCB40H_101GR.jpg"),
         "443U": getImage("Coro_Bowl_High_TCB40H_107GR_graphite.jpg"),
         "405U": getImage("Coro_Bowl_High_TCB40H_109GR_m.jpg"),
      },
        TCB48: {
        "7529U": getImage("Coro_Bowl_TCB48_101GR.jpg"),
        "443U": getImage("Coro_Bowl_TCB48_107GR_graphite.jpg"),
        "405U": getImage("Coro_Bowl_TCB48_109GR.jpg"),
      },
      },
      },
          EVOLIA: {
         "7529U": getImage("Evolia_TEV60_101GR_sand.jpg"),
         "443U": getImage("Evolia_TEV60_105GR.jpg"),
         "405U": getImage("Evolia_TEV60_107GR_graphite.jpg"),
          },

          YEKE: {
         "7529U": getImage("Yeke_TY50_101GR_sand_m.jpg"),
         "443U": getImage("Yeke_TY50_105GR_tiny_granite.jpg"),
         "405U": getImage("Yeke_TY50_107GR_graphite.jpg"),
           },

           MOLTA: {
        "7529U": getImage("Molta_Round_Foot_TMRF60_101GR.jpg"),
        "443U": getImage("Molta_Round_Foot_TMRF60_105GR.jpg"),
        "405U": getImage("Molta_Round_Foot_TMRF60_107GR.jpg"),
            },


  // ...agrega más según tus imágenes disponibles
};

/**
* Devuelve la imagen de maceta por color (y variante si existe en el mapa).
 * Si no encuentra por variante, intenta por maceta+color; si no, null.
 */
function getMacetaColorImage(macetaId, selectedColor, varianteDesc) {
  if (!macetaId || !selectedColor?.codigo) return null;

  // 1) si el color trae su propia imagen de maceta (opcional)
  if (selectedColor.imagenMaceta) return selectedColor.imagenMaceta;

  // 2) buscar en el mapa
  const byMaceta = macetaColorImages[macetaId];
  if (!byMaceta) return null;

  // 2a) si hay variantes mapeadas, intenta usar la descripción como key
  if (byMaceta.variantes && varianteDesc) {
    const vKey = String(varianteDesc).replace(/\s+/g, ""); // ej. "DLHEN470"
    const byVar = byMaceta.variantes[vKey];
    if (byVar && byVar[selectedColor.codigo]) return byVar[selectedColor.codigo];
  }

  // 2b) fallback: imagen por maceta + color
  if (byMaceta[selectedColor.codigo]) return byMaceta[selectedColor.codigo];

  return null;
}

function getDisplayImage({ principal, varianteActual, selectedColor }) {
  const baseSrc = getImage(
    varianteActual?.imagenesCatalogo?.[0] ??
    principal?.imagen ??
    "images/placeholder.jpg");

  // Si el color trae una imagen directa para maceta, úsala
  if (selectedColor?.imagenMaceta) {
    return { src: safeSrc(selectedColor.imagenMaceta), fallback: baseSrc };
  }

  // Si hay color, construimos candidatos por convención
  if (selectedColor?.codigo && principal?.id) {
    // 1) intenta con el mapa
    const mapped = getMacetaColorImage(
      principal.id,
      selectedColor,
      varianteActual?.descripcion
    );
    if (mapped) return { src: safeSrc(mapped), fallback: baseSrc };

    // 2) intenta convención
    const candidates = buildColorImagePath({
      baseId: principal.id,
      varianteDesc: varianteActual?.descripcion,
      colorCode: selectedColor.codigo,
    });
    return { src: safeSrc(candidates[0]), fallback: baseSrc };
  }

  // 3) sin color seleccionado
  return { src: safeSrc(baseSrc), fallback: getImage("images/placeholder.jpg") };
}

// ========== UI Cards ==========

const MacetaCard = ({ maceta, onClick }) => {
  const { addToCart } = useContext(CartContext);

  if (!maceta) return null; // 
  
  return (
    <div
      className="maceta-card" 
      onClick={onClick}
      style={{
        cursor: "pointer",
        width: 260,
        height: 260,
        flexShrink: 0,
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
       >
      <img
        src={maceta.imagen}
        alt={maceta.modelo}
        style={{ width: "100%", maxHeight: "80%", borderRadius: 8, objectFit: "contain" }}
      />
      <p
          style={{
          marginTop: 12,
          fontWeight: "bold",
          whiteSpace: "normal",
          wordBreak: "break-word",
          width: "100%",
          textAlign: "center",
        }}
      >
        {maceta.modelo}
      </p>
      
    </div>
  );
};

const macetasPrincipales = [ 
{
   id: "ORO",
  modelo: "ORO",
  imagen: getImage("Oro Oval.jpg"),
},
{
  id: "LEXOROUND",
  modelo: "LEXO ROUND",
  imagen: getImage("round_Lexo.jpg"),
},
{
  id: "GRACIACASEBETONEFFECT",
  modelo: "GRACIA CASE BETON EFFECT",
  imagen: getImage("Gracia_Case_Beton_Effect.jpg"),
},
{
  id: "GRACIACASEECOWOOD",
  modelo: "GRACIA LOW",
  imagen: getImage("Gracia_Case_ECO_Wood.jpg"),
},
{
  id: "GRACIACASE",
  modelo: "GRACIA CASE",
  imagen: getImage("Gracia_Case_ECO_Wood.jpg"),
},
{
  id: "CASCADEGRADENWALL",
  modelo: "CASCADE GRADEN WALL",
  imagen: getImage("Cascade Garden Wall.jpg"),
},
{
  id: "BLOMA",
  modelo: "BLOMA",
  imagen: getImage("Bloma.jpg"),
},
{
  id: "URBICASEBETOMEFFECT",
  modelo: "URBI CASE BETOM EFFECT",
  imagen: getImage("Urbi_Case_DUC.jpg"),
},
{
  id: "HEOS",
  modelo: "HEOS",
  imagen: getImage("Heos_DBHEN.jpg"),
},
{
  id: "RESPANAPLANTERWOODHIGHSET",
  modelo: "RESPANA PLANTER WOOD HIGH SET",
  imagen: getImage("Respana Planter Wood.jpg"),
},
{
  id: "ARIAOVAL",
  modelo: "ARIA OVAL",
  imagen: getImage("Aria_Oval.jpg"),
},
{
  id: "CORObowlhigh",
  modelo: "CORO BOWL HIGH",
  imagen: getImage("Coro_Bowl_Hig.jpg"),
},
{
  id: "EVOLIA",
  modelo: "EVOLIA",
  imagen: getImage("Evolia.jpg"),
},
{
  id: "YEKE",
  modelo: "YEKE",
  imagen: getImage("Yeke.jpg"),
},
{
  id: "MOLTA",
  modelo: "MOLTA",
  imagen: getImage("Molta_Round.jpg"),
},
];
const catalogosData = {
  ORO: {
  variantes: [
    {
      descripcion: "DBOE600",
      medidas: "Dimensiones: 595 mm x 395 mm X 380 mm",
      Capacidad: "2.3",
      Disponibilidad: "20 und",
      Precio: 21,
      imagenesCatalogo: [getImage("DBOE600.jpg")],
    },
    {
      descripcion: "DHOE600",
      medidas: "Dimensiones: 595 mm x 395 mm X 545 mm",
      Capacidad: "3.9",
      Disponibilidad: "20 und",
      Precio: 23.63,
      imagenesCatalogo: [getImage("DHOE600.jpg")],
    },
  ],
  colores: [
    {nombre: "Blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg"),},
    {nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg"),},
    {nombre: "pino verde", codigo: "2411U",imagen: getImage("2411U_zielona_pinia.jpg"),},
    {nombre: "gris medio oscuro", codigo: "419U", imagen: getImage("419U_ciemny_szary.jpg"),},
  ],
},

  LEXOROUND: {
    descripcion: "DLR1000",
    medidas: "Dimensiones: 1000 mm x 920 mm",
    Capacidad: "430",
    Disponibilidad: "1 und",
    Precio: 296.25,
    imagenesCatalogo: [getImage("DLR1000.jpg")],
    colores: [
      { nombre: "Blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg") }
    ]
  },

  GRACIACASEBETONEFFECT: {
    descripcion: "DGCL600E",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mmm",
    Capacidad: "19.5",
    Disponibilidad: "75 und",
    Precio: 14.53,
    imagenesCatalogo: [getImage("DGCL600E.jpg")],
    Accesorios: [
      { nombre: "base de drenaje interno", imagen: [getImage("base de drenaje interno1.jpg")] }
    ],
    colores: [
      { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg") },
      { nombre: "crema", codigo: "CY700", imagen: getImage("CY700_kremowy.jpg") },
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
    ]
  },

  GRACIACASEECOWOOD: {
    descripcion: "DGCL600W",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mm",
    Capacidad: "19.5",
    Disponibilidad: "100 und",
    Precio: 13.48,
    imagenesCatalogo: [getImage("DGCL600w.jpg")],
    Accesorios: [
      { nombre: "base de drenaje interno", imagen: [getImage("base de drenaje interno1.jpg")] }
    ],
    colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen: getImage("S449W_bialy_ECO.jpg") },
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg") },
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen: getImage("S433W_antracytowy_ECO.jpg") },
      { nombre: "café ECO", codigo: "4625W", imagen: getImage("4625W_kawa_ECO.jpg") }
    ]
  },

  GRACIACASE: {
    descripcion: "DGCL600",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mm",
    Capacidad: "19.5",
    Disponibilidad: "100 und",
    Precio: 12.85,
    imagenesCatalogo: [getImage("DGCL600.jpg")],
    Accesorios: [
      { nombre: "base de drenaje interno", imagen: [getImage("base de drenaje interno1.jpg")] }
    ],
    colores: [
      { nombre: "blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg") },
      { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
      { nombre: "verde terroso", codigo: "5615C", imagen: getImage("5615C_ziemisty_zielony.jpg") },
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
    ]
  },

  CASCADEGRADENWALL: {
    descripcion: "IO3W800",
    medidas: "Dimensiones: 780 mm x 190 mm x 350 mm",
    Capacidad: "2 x 12L",
    Disponibilidad: "10 und",
    Precio: 22.55,
    imagenesCatalogo: [getImage("IO3W800.jpg")],
    colores: [
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
    ]
  },

  BLOMA: {
    descripcion: "DBLO600",
    medidas: "Dimensiones: 580 mm x 288 mm x 780 mm",
    Capacidad: "-",
    Disponibilidad: "8 und",
    Precio: 18,
    imagenesCatalogo: [getImage("DBLO600.jpg")],
    colores: [
      { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
    ]
  },
    URBICASEBETOMEFFECT: {
  descripcion: "DUC800TE ",
  medidas: "Dimensiones: 770 mm x 235 mm x 687 mm",
  Capacidad: "27/100",
  Disponibilidad: "30 und",
  Precio: 77.33,
  imagenesCatalogo: [getImage("DUC800TE.jpg")],
  Accesorios: [
    {
      nombre: "estabilizadores plásticos",
      imagen: [getImage("estabilizadores plásticos.jpg")],
    }
  ],
  colores: [
    { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg") },
    { nombre: "crema", codigo: "CY700", imagen: getImage("CY700_kremowy.jpg") },
    { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
  ],
},

HEOS: {
  variantes: [
    {
      descripcion: "DLHEN470",
      medidas: "Dimensiones: 468 mm x 295 mm",
      Capacidad: "31/45",
      Disponibilidad: "20 und",
      Precio: 18.38,
      imagenesCatalogo: [getImage("DLHEN470.jpg")],
    },
    {
      descripcion: "DBHEN470",
      medidas: "Dimensiones: 468 mm x 440 mm",
      Capacidad: "31/69",
      Disponibilidad: "12 und",
      Precio: 22.28,
      imagenesCatalogo: [getImage("DBHEN470.jpg")],
    },
    {
      descripcion: "DBHER470",
      medidas: "Dimensiones: 468 mm x 450 mm",
      Capacidad: "31/74",
      Disponibilidad: "20 und",
      Precio: 22.28,
      imagenesCatalogo: [getImage("DBHER470.jpg")],
    },
  ],
  colores: [
    { nombre: "blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg") },
    { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
  ]
},

RESPANAPLANTERWOODHIGHSET: {
  descripcion: "ISEW780H",
  medidas: "Dimensiones: 770 mm x 380 mm x 795 mm",
  Capacidad: "55",
  Disponibilidad: "35 und",
  Precio: 70.50,
  imagenesCatalogo: [getImage("ISEW780H.jpg")],
  colores: [
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ]
},

ARIAOVAL: {
  variantes: [
    {
      descripcion: "TAO40",
      medidas: "Dimensiones: 400 mm X 200 mm X 160 mm",
      Capacidad: "5",
      Disponibilidad: "12 und",
      Precio: 24.63,
      imagenesCatalogo: [getImage("TAO40.jpg")],
    },
    {
      descripcion: "TAO60",
      medidas: "Dimensiones: 600 mm X 280 mm X 200 mm",
      Capacidad: "16",
      Disponibilidad: "15 und",
      Precio: 38.38,
      imagenesCatalogo: [getImage("TAO60.jpg")],
    }
  ],
  colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ]
},

CORObowlhigh: {
  variantes: [
    {
      descripcion: "TCB40H",
      medidas: "Dimensiones: 400 mm X 530 mm",
      Capacidad: "9",
      Disponibilidad: "9 und",
      Precio: 79.63,
      imagenesCatalogo: [getImage("TCB40H.jpg")],
    },
    {
      descripcion: "TCB48",
      medidas: "Dimensiones: 480 mm X 420 mm",
      Capacidad: "22",
      Disponibilidad: "9 und",
      Precio: 92.90,
      imagenesCatalogo: [getImage("TCB48.jpg")],
    }
  ],
  colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ]
},

EVOLIA: {
  descripcion: "TEV60",
  medidas: "Dimensiones: 600 mm X 500 mm X 380 mm",
  Capacidad: "23",
  Disponibilidad: "15 und",
  Precio: 92.90,
  imagenesCatalogo: [getImage("TEV60.jpg")],
  colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ]
},

YEKE: {
  descripcion: "TY50",
  medidas: "Dimensiones: 500 mm x 400 mm x 250 mm",
  Capacidad: "8",
  Disponibilidad: "15 und",
  Precio: 53.08,
  imagenesCatalogo: [getImage("TY50.jpg")],
  colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ]
},

MOLTA: {
  descripcion: "TMRF60",
  medidas: "Dimensiones: 600 mm x 500 mm",
  Capacidad: "45",
  Disponibilidad: "4 und",
  Precio: 125.23,
  imagenesCatalogo: [getImage("TMRF60.jpg")],
  colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") },
  ]
}
};

  function MacetasgrandesPage() {
  const [catalogoVisible, setCatalogoVisible] = useState(null);
  const [varianteIndex, setVarianteIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useContext(CartContext);

  const macetaSeleccionada = catalogoVisible ? catalogosData[catalogoVisible] : null;
  const varianteActual = macetaSeleccionada?.variantes
  ? macetaSeleccionada.variantes[varianteIndex]
  : macetaSeleccionada;
  const principal = macetasPrincipales.find((m) => m.id === catalogoVisible);

  const { src: displayImg, fallback: displayFallback } = getDisplayImage({
  principal,
  varianteActual,
  selectedColor,
});

   const location = useLocation();
  useEffect(() => {
  const params = new URLSearchParams(location.search);

  const openFromQuery = params.get("open");
  const varianteFromQuery = params.get("variante");

  const open = openFromQuery ?? location.state?.open ?? null;
  const varianteIdxRaw = varianteFromQuery ?? location.state?.variante ?? 0;

  if (open && catalogosData[open]) {
    setCatalogoVisible(open);

    const totalVariantes = Array.isArray(catalogosData[open].variantes)
      ? catalogosData[open].variantes.length
      : 0;

    if (totalVariantes > 0) {
      const idx = Number.parseInt(varianteIdxRaw, 10);
      const safeIdx = Number.isFinite(idx) ? Math.max(0, Math.min(idx, totalVariantes - 1)) : 0;
      setVarianteIndex(safeIdx);
    } else {
      setVarianteIndex(0);
    }

    // 🔑 Resetear color al abrir nueva maceta
    setSelectedColor(null);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [location.search, location.state]);

  return (
    <div style={{ maxWidth: '95vw', margin: '10px auto 0', textAlign: 'center' }}>
      {catalogoVisible ? (
          <div
          style={{
            position: 'fixed',
            top: '0%',
            left: '50%',
            transform: 'translateX(-50%)',
            maxHeight: '100vh',
            width: '50vw',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1000,
            padding: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: 40,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              width: '100vw',
              maxHeight: '93vh',
              overflowY: 'auto',
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              textAlign: 'left',
                          }}
          >
          <button
            onClick={() => setCatalogoVisible(null)}
            style={{
              marginBottom: 0,
              padding: "8px 16px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Volver a imágenes principales
          </button>
          
          {macetaSeleccionada?.variantes && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <button
                onClick={() => {
                  setVarianteIndex((prev) =>
                    prev === 0 ? macetaSeleccionada.variantes.length - 1 : prev - 1
                  );
                  setSelectedColor(null); // 🔑 resetear color
                }}
                style={{ cursor: 'pointer' }}
              >
                 ← Anterior
</button>
<button
  onClick={() => {
    setVarianteIndex((prev) =>
      prev === macetaSeleccionada.variantes.length - 1 ? 0 : prev + 1
    );
    setSelectedColor(null); // 🔑 resetear color
  }}
>
  Siguiente →
</button>
            </div>
          )}

          
{/* === NUEVO DISEÑO DEL MODAL === */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 520px) 1fr',
    gap: 24,
    alignItems: 'flex-start',
    marginTop: 10,
  }}
>
  {/* Columna Izquierda: Imagen + Detalles */}
  <div>
    {/* Tarjeta de Imagen */}
    <div
      style={{
        background: '#f8fafc',
        border: '1px solid #e5e7eb',
        borderRadius: 16,
        padding: 12,
        boxShadow: '0 10px 20px rgba(0,0,0,0.06)',
      }}
    >
     <img
  src={varianteActual?.imagenesCatalogo?.[0] ?? principal?.imagen}
  alt={principal?.modelo}
  style={{
    width: '100%',
    height: 480,
    objectFit: 'contain',
    borderRadius: 12,
    background: 'white',
  }}
  onError={(e) => { 
    e.currentTarget.src = displayFallback; 
    }}
/>
    </div>

    {/* Tarjeta de Características (debajo de la imagen) */}
    <div
      style={{
        marginTop: 14,
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 14,
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 6 }}>
        Características
      </div>

      {/* Una línea por característica */}
      <div style={{ display: 'grid', rowGap: 6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
          <span style={{ color: '#6b7280', minWidth: 110 }}>Descripción</span>
          <span style={{ color: '#111827', fontWeight: 500, textAlign: 'right' }}>
            {varianteActual?.descripcion ?? principal?.modelo ?? '-'}
          </span>
        </div>

        {(varianteActual?.medidas ?? macetaSeleccionada?.medidas) && (
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
            <span style={{ color: '#6b7280', minWidth: 110 }}>Medidas</span>
            <span style={{ color: '#111827', fontWeight: 500, textAlign: 'right' }}>
              {varianteActual?.medidas ?? macetaSeleccionada?.medidas}
            </span>
          </div>
        )}

        {(varianteActual?.Capacidad ?? macetaSeleccionada?.Capacidad) && (
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
            <span style={{ color: '#6b7280', minWidth: 110 }}>Capacidad</span>
            <span style={{ color: '#111827', fontWeight: 500, textAlign: 'right' }}>
              {(varianteActual?.Capacidad ?? macetaSeleccionada?.Capacidad) + ' L'}
            </span>
          </div>
        )}

        {(varianteActual?.Disponibilidad ?? macetaSeleccionada?.Disponibilidad) && (
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
            <span style={{ color: '#6b7280', minWidth: 110 }}>Disponibilidad</span>
            <span style={{ color: '#111827', fontWeight: 500, textAlign: 'right' }}>
              {varianteActual?.Disponibilidad ?? macetaSeleccionada?.Disponibilidad}
            </span>
          </div>
        )}

        {(varianteActual?.Precio ?? macetaSeleccionada?.Precio) && (
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
            <span style={{ color: '#6b7280', minWidth: 110 }}>Precio</span>
            <span style={{ color: '#16a34a', fontWeight: 700, textAlign: 'right' }}>
              {'$ ' + Number(varianteActual?.Precio ?? macetaSeleccionada?.Precio).toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Derecha: Colores + Vista por color + Accesorios */}
  <div style={{ display: 'grid', gap: 16 }}>
    {/* Colores */}
    {macetaSeleccionada?.colores && (
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          padding: 14,
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 15,
            color: '#111827',
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span>Colores disponibles</span>
          {selectedColor && (
            <span style={{ color: '#6b7280', fontWeight: 500, fontSize: 13 }}>
              · {selectedColor.nombre}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {macetaSeleccionada.colores.map((color, index) => (
            <div
              key={index}
              onClick={() => setSelectedColor(color)}
              title={color.nombre}
              style={{
                width: 55,
                height: 20,
                borderRadius: '8px',
                overflow: 'hidden',
                border:
                  selectedColor?.codigo === color.codigo
                    ? '3px solid #16a34a'
                    : '1px solid #e5e7eb',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={safeSrc(color.imagen)}
                alt={color.nombre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    )}

{/* Vista de maceta en el color seleccionado (NO reemplaza la imagen principal) */}

{selectedColor && (
  <div
    style={{
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      padding: 14,
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    }}
  >
    <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 8 }}>
      Vista en color seleccionado
      <span style={{ color: '#6b7280', fontWeight: 500, marginLeft: 6 }}>
        ({selectedColor.nombre})
      </span>
    </div>

     {(() => {
      const previewSrc = getMacetaColorImage(
        principal?.id,
        selectedColor,
        varianteActual?.descripcion
       );
       if (!previewSrc) {
        return (
          <div style={{ color: '#6b7280', fontSize: 13 }}>
            No hay imagen para <strong>{principal?.modelo}</strong> en el color{" "}
            <strong>{selectedColor?.nombre}</strong>.
            <br />
          Agrega la ruta en <code>macetaColorImages</code> o en{" "}
                            <code>selectedColor.imagenMaceta</code>.
                          </div>
                        );
                      }
      return (
        <img
           src={safeSrc(previewSrc)}
                          alt={`Vista ${principal?.modelo} - ${selectedColor?.nombre}`}
                          style={{
                            width: "100%",
                            height: 260,
                            objectFit: "contain",
                            borderRadius: 8,
                            background: "#fff",
                          }}
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      );
                    })()}
                  </div>
                )}


    {/* Accesorios */}
    {Array.isArray(varianteActual?.Accesorios) && 
      varianteActual.Accesorios.length > 0 && (
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          padding: 14,
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 8 }}>
          Incluye accesorios
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 12,
          }}
        >
          {varianteActual.Accesorios.filter((acc) => !!acc && !!acc.imagen).map((acc, i) => {
            const src = Array.isArray(acc.imagen) ? acc.imagen[0] : acc.imagen;
            return (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 10,
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
              >
                <img
                    src={safeSrc(src)}
                                alt={acc?.nombre ?? "Accesorio"}
                                style={{ width: "100%", height: 120, objectFit: "cover" }}
                              />
                <div
                  style={{
                    padding: '8px 10px',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#111827',
                    textAlign: 'center',
                  }}
                >
                  {acc?.nombre ?? 'Accesorio'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
</div>
{/* === FIN NUEVO DISEÑO DEL MODAL === */}

          <button
  onClick={() => {
    if (!selectedColor) {
      alert("Por favor, selecciona un color antes de agregar al carrito.");
      return;
    }
       
    
    addToCart({
      
      id: `${principal?.id ?? catalogoVisible}-${
        varianteActual?.descripcion ?? "base"
      }-${selectedColor?.codigo ?? "base"}`,
      modelo: principal?.modelo ?? catalogoVisible,
      imagen: displayImg, // usa la imagen según el color seleccionado (con fallback)
      imagenColor: selectedColor.imagen,
      colorNombre: selectedColor.nombre,
      medidas: varianteActual?.medidas ?? "",
      Capacidad: varianteActual?.Capacidad ?? "",
      Disponibilidad: varianteActual?.Disponibilidad ?? "",
      Precio: varianteActual?.Precio ?? 0,
      color: selectedColor,
    });
  }}
            style={{
              marginTop: 10,
              padding: "8px 16px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
            
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    ) : (
      <>
        <h1>Macetas grandes</h1>
        
        <div
          style={{
            marginTop: 12,
            maxWidth: '90vw',
            margin: '0 auto',
            padding: '20px 0',
            overflowX: 'auto',
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {macetasPrincipales.map((m) => (
             <MacetaCard key={m.id} maceta={m} onClick={() => setCatalogoVisible(m.id)} />
            ))}
            </div>
        <p style={{ marginTop: 20, fontStyle: "italic", color: "#666" }}>
          Haz clic en una maceta para ver su catálogo completo
        </p>
        </>
      )}
    </div>
  );
}
export { macetasPrincipales };
export { catalogosData as catalogoMacetasGrandes }; // <-- EXPORTA EL CATALOGO
export default MacetasgrandesPage;