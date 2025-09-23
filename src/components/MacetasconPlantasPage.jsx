import React, { useState, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { macetaColorImages } from "../utils/macetaColorImages";
import { motion } from "framer-motion";
// Importa los objetos completos de catálogos
import { catalogoMacetasMedianas } from "./MacetasMedianasPage";
import { catalogoMacetasGrandes } from "./MacetasGrandesPage";

// Usa tu helper actual para aplanar (id = key-index, modelo, medidas, Precio, imagen)
import { flattenMacetas } from "../utils/flattenMacetas";
import { getImage } from "../utils/cloudinary";
/**
 * NUEVO:
 * Mapa de overrides de imagen por variante.
 * - Clave = ID base del modelo (igual al key en los catálogos: p.ej. 'betonBowl', 'HEOS', 'ORO', etc.)
 * - Valor:
 *    - Array: una entrada por cada variante (por orden) => usa esa imagen
 *    - String: una sola imagen para todos los casos (si no manejas variantes)
 * Si NO encuentras override, se usará la imagen del catálogo (imagenesCatalogo[0]).
 */
const macetaComboImages = {
  
  betonBowl: [
    getImage("Beton_Bowl_DKB_150_422U_ex2hb0.png"), // variante 0
    getImage("Beton_Bowl_DKB_290_422U_m_yxcosw.png"),  // variante 1 (ajusta si tu nombre real difiere)
    getImage("Beton_Bowl_DKB_370_422U_m_ukkkrf.png"),  // variante 2
  ],
  GRACIASQUAREBETONEFFECT: getImage("Gracia_Square_Beton_Effect_DGQL400E_422U_bx3bev.png"),
  GraciaLowBetonEffect: getImage("Gracia_Low_Beton_Effect_DGRL400LE_422U_jg0q13.jpg"),
  GraciaLow: getImage("Gracia_Low_DGRL400L_S433_wlwcqv.jpg"),
  GRACIALOWECOWOOD: getImage("Gracia_Low_ECO_Wood_DGRL400LW_4665W_naturo_bvruye.jpg"),
  GRACIATUBUSSLIMECOWOOD: getImage("Gracia_Tubus_Slim_ECO_Wood_DGTL240W_4665W_rrbf1f.jpg"),
  GRACIASQUAREECOWOOD: getImage("Gracia_Square_ECO_Wood_DGQL400W_4665W_cznqep.jpg"),

  // TUBOPM tiene 3 variantes -> array
  TUBOPM: [
    getImage("Tubo_PM_DPOD240_2411U_klof57.jpg"), // 0
    getImage("Tubo_PM_DPOD350_2411U_nknmy3.jpg"), // 1 (ajústalo al nombre real si difiere)
    getImage("Tubo_PM_DPOD400_2411U_f7qu4i.jpg"), // 2
  ],

  GRACIASQUARE: getImage("Gracia_square_DGQL400_S433_qqmua9.png"),
  GRACIATUBUSSLIM: getImage("Gracia_Tubus_Slim_DGTL240_S433_g286xo.png"),

  // MILLY tiene casos con y sin variantes; si quieres específico por variante, usa array
  MILLYROUNDA: getImage("Milly_DMIG190_4985U_m_bfkdlm.png"),
  MILLYROUND: [
    getImage("Milly_Round_DMIL220_4985U_vjydi3.png"), // 0
    getImage("Milly_DMIN170_4985U_mbf6zf.png"), // 1
  ],

  SPLOFYBOWL: [
    getImage("DKSP180_7529U_SPLOFY_ikbfg9.png"), // 0
    getImage("DKSP290_7529U_SPLOFY_a50usw.jpg"), // 1
    getImage("DKSP370-7529U_SPLOFY_xrqwi6.png"), // 2
  ],

  RATOLLARallingSquare: [
    getImage("DRLB280_S433_RATOLLA_wkhbu1.png"), // 0
    getImage("DRLB400_S433_RATOLLA_nnibfp.png"), // 1
  ],

  HEOS: [
    getImage("Heos_DLHEN400_S433_jeejfb.png"),
    getImage("Heos_DBHEN470_S433_m_tsohyw.png"),
    getImage("Heos_DBHER_S433_hembyk.jpg"),
    ],

  PLANTI: [
    getImage("Planti_DMLR190_S429_w720vz.png"),
    getImage("Planti_DMLR230_S429_fq2nob.png"),
    ],
  GROWER: [
    getImage("Grower_DOGR180_S449_jspx7w.png"),
    getImage("Grower_DOGR200_S449_f99w1w.png"),
    getImage("Grower_DOGR240_S449_z6psgi.jpg"),
    ],

  RESPANARALLING: getImage("DREB290_S433_RESPANA_fqjxhe.png"),
  MillyWall: getImage("Milly_Wall_DMIW150_2411U_m_fmu2hv.png"),
  ARIAOVAL: getImage("Aria_Oval_TAO60_101GR_sand_m_qwww9w.png"),

  CORObowl: [
    getImage("Coro_Bowl_High_TCB40H_101GR_yo4tkz.jpg"), // 0
    getImage("Coro_Bowl_TCB48_101GR_yv4mgt.jpg"),  // 1
  ],

  MOLTAsquarefoot: [
     getImage("Molta_Square_Foot_TMSF40_101GR_ckej7k.jpg"),// 0
     getImage("Molta_Square_Foot_TMSF48_101GR_ae17cp.jpg"), // 1
  ],

  DUALAroundslim: [
    getImage("Duala_Round_Slim_TDR30S_107GR_urbqe8.jpg"), // 0
    getImage("Duala_Round_Slim_TDR40S_107GR_m_bdcusv.png"), // 1
  ],

  // ===== GRANDES =====
  ORO: [
    getImage("Oro_DBOE600_443U_m_rktgfb.png"), // 0
    getImage("Oro_DHOE600_443U_m_gubwss.png"), // 1
  ],
  LEXOROUND: getImage("DLR_S449_LEXO_k3qit0.png"),
  GRACIACASEBETONEFFECT: getImage("Gracia_Case_Beton_Effect_DGCL600E_422U_sx0llu.jpg"),
  GRACIACASEECOWOOD: getImage("Gracia_Case_ECO_Wood_DGCL600W_4665W_d5ho7c.jpg"),
  GRACIACASE: getImage("Gracia_Case_DGCL400_443U_m_lifpyt.png"),
  CASCADEGRADENWALL: getImage("Garden_Long_Wall_IO3W800_2_modulowy_S433_xvdlok.png"),
  BLOMA: getImage("DBLO600_k5el7j.png"),
  URBICASEBETOMEFFECT: getImage("Urbi_Case_Beton_Effect_DUC600TE_425U_e0scvk.png"),
  RESPANAPLANTERWOODHIGHSET: getImage("ISEW780H_t2t0sa.png"),
  CORObowlhigh: [
    getImage("Coro_Bowl_High_TCB40H_101GR_yo4tkz.jpg"), // 0
    getImage("Coro_Bowl_TCB48_101GR_yv4mgt.jpg"),  // 1
  ],

  EVOLIA: getImage("Evolia_TEV60_101GR_sand_iretdx.jpg"),
  YEKE: getImage("Yeke_TY50_101GR_sand_m_zhwph8.png"),
  MOLTA: getImage("Molta_Round_Foot_TMRF60_101GR_m_duwosc.png"),
};

// plantas
const plantas = [
  // 🌱 Interiores
  { id: "p1", nombre: "Calatea", precio: 1.0, imagen: getImage("Calatea_aybq5v.png"), categoria: "interior" },
  { id: "p2", nombre: "Cheflera", precio: 1.0, imagen: getImage("Cheflera_mrk9l3.png"), categoria: "interior" },
  { id: "p4", nombre: "Costilla de Adán", precio: 1, imagen: getImage("Costilla_de_Adán_mbbjel.png"), categoria: "interior" },
  { id: "p6", nombre: "Drácena", precio: 1, imagen: getImage("Drácena_ghxx8z.png"), categoria: "interior" },
  { id: "p7", nombre: "Ficus caucho", precio: 1, imagen: getImage("Ficus_caucho_p3jubh.png"), categoria: "interior" },
  { id: "p8", nombre: "Ficus lira o violín", precio: 1, imagen: getImage("Ficus_lira_o_violín_w7qn7t.png"), categoria: "interior" },
  { id: "p9", nombre: "Filodendro hoja grande", precio: 1, imagen: getImage("Filodendro_hoja_grande_we1ruu.png"), categoria: "interior" },
  { id: "p11", nombre: "Mini calatea", precio: 1, imagen: getImage("Mini_calatea_hjhdi7.png"), categoria: "interior" },
  { id: "p13", nombre: "Peperomia", precio: 1, imagen: getImage("Peperomia_jzi2y5.png"), categoria: "interior" },
  { id: "p14", nombre: "Planta china del dinero", precio: 1, imagen: getImage("Planta_china_del_dinero_mhicvh.png"), categoria: "interior" },

  // 🌿 Exteriores
  { id: "p3", nombre: "Clavelón--Marigold", precio: 1, imagen: getImage("Clavelón--Marigold_fhdxuf.png"), categoria: "exterior" },
  { id: "p5", nombre: "Croto", precio: 1, imagen: getImage("Croto_xecmto.png"), categoria: "exterior" },
  { id: "p10", nombre: "Lavanda", precio: 1, imagen: getImage("Lavanda_qgxrua.png"), categoria: "exterior" },
  { id: "p12", nombre: "Palma cica", precio: 1, imagen: getImage("Palma_cica_ok8fde.png"), categoria: "exterior" },
  { id: "p15", nombre: "Trébol morado", precio: 1, imagen: getImage("Trébol_morado_zosxka.png"), categoria: "exterior" },
];

function safeSrc(path) {
  if (!path) return "/images/placeholder.jpg";
  try {
    return encodeURI(path);
  } catch {
    return path;
  }
}

function parseMedida(medidas = "") {
  if (!medidas) return 0;

  // Busca todos los números (ej: "390 mm x 270 mm")
  const nums = medidas.match(/\d+/g)?.map(Number) || [];

  // Si hay al menos 2 dimensiones, multiplicamos las dos primeras
  if (nums.length >= 2) {
    return nums[0] * nums[1];
  }

  // Si solo hay 1 número, lo devolvemos
  if (nums.length === 1) {
    return nums[0];
  }

  return 0;
}
/**
 * Obtiene la imagen para la variante:
 * - Si hay override por variante en macetaComboImages -> úsalo.
 * - Si hay override string único -> úsalo.
 * - Si no -> usa la imagen de la variante (flattenMacetas) o placeholder.
 */
function getComboImageForVariant(item /* { id: 'key-index', imagen: fallback } */) {
  const id = item?.id ?? "";
  const [baseKey, indexStr] = id.split("-");
  const varIndex = parseInt(indexStr || "0", 10) || 0;

  const override = macetaComboImages[baseKey];
  if (Array.isArray(override)) {
    return override[varIndex] || item?.imagen || getImage("images/placeholder.jpg")
  }
  if (typeof override === "string") {
    return override;
  }
  return item?.imagen || getImage("images/placeholder.jpg");
}

export default function MacetasconPlantasPage() {
  const { addToCart } = useContext(CartContext);

   // === nuevo estado para filtro ===
  const [filtroPlantas, setFiltroPlantas] = useState("");
  const [filtro, setFiltro] = useState(""); // "" = nada seleccionado al inicio
  const [selectedColors, setSelectedColors] = useState({});
  const [orden, setOrden] = useState(""); // "", "dim-asc", "dim-desc"
const [macetaConfirmada, setMacetaConfirmada] = useState(false);
const [macetaWidth, setMacetaWidth] = useState(180); // px
const [mostrarControlesMaceta, setMostrarControlesMaceta] = useState(false);
const [hoveredPlantaIndex, setHoveredPlantaIndex] = useState(null);

  // sets para saber a qué catálogo mandar el botón "Más información"
 
 
  const medianasKeysLower = useMemo(
  () => new Set(Object.keys(catalogoMacetasMedianas).map((k) => k.toLowerCase())),
  []
);
const grandesKeysLower = useMemo(
  () => new Set(Object.keys(catalogoMacetasGrandes).map((k) => k.toLowerCase())),
  []
);
  


  // aplanamos TODOS los modelos a nivel variante
    const todasLasMacetas = useMemo(() => {
  const medianas = flattenMacetas(catalogoMacetasMedianas, "medianas");
  const grandes  = flattenMacetas(catalogoMacetasGrandes,  "grandes");
  return [...medianas, ...grandes].map((m) => ({
    ...m,
    imagen: getComboImageForVariant(m),
  }));
}, []);

   // Filtrar las macetas según el filtro seleccionado
  const macetasFiltradas = useMemo(() => {
  let base = [];
  if (filtro === "medianas") base = todasLasMacetas.filter(m => m.categoria === "medianas");
  else if (filtro === "grandes") base = todasLasMacetas.filter(m => m.categoria === "grandes");
  else if (filtro === "todas") base = todasLasMacetas;
  else return []; // nada seleccionado => no mostrar

  // Siempre clonar antes de ordenar
  const arr = [...base];

  if (orden === "dim-asc") {
    arr.sort((a, b) => parseMedida(a.medidas) - parseMedida(b.medidas));
  } else if (orden === "dim-desc") {
    arr.sort((a, b) => parseMedida(b.medidas) - parseMedida(a.medidas));
  }

  return arr;
}, [filtro, orden, todasLasMacetas]);

const plantasFiltradas = useMemo(() => {
  if (filtroPlantas === "interior") {
    return plantas.filter((p) => p.categoria === "interior");
  }
  if (filtroPlantas === "exterior") {
    return plantas.filter((p) => p.categoria === "exterior");
  }
  if (filtroPlantas === "todas") {
    return plantas;
  }
  return []; // nada seleccionado al inicio
}, [filtroPlantas]);
  

  const [macetaSeleccionada, setMacetaSeleccionada] = useState(null);
  const [plantasSeleccionadas, setPlantasSeleccionadas] = useState([]);
 
   const precioMaceta = macetaSeleccionada?.Precio ?? 0;
  const precioPlantasTotal = plantasSeleccionadas.reduce((acc, p) => acc + p.precio, 0);
const precioTotal = (precioMaceta + precioPlantasTotal).toFixed(2);

  function buildCatalogLink(item) {
  const [, idxStr] = (item?.id ?? "").split("-");
  const variante = parseInt(idxStr ?? "0", 10) || 0;
  const baseExact = item?.baseKeyExact;

  if (item?.categoria === "medianas") {
    const search = `?open=${encodeURIComponent(baseExact)}&variante=${variante}`;
    return { to: { pathname: "/catalogos/macetas-medianas", search }, state: { open: baseExact, variante } };
  }
  if (item?.categoria === "grandes") {
    const search = `?open=${encodeURIComponent(baseExact)}&variante=${variante}`;
    return { to: { pathname: "/catalogos/macetas-grandes", search }, state: { open: baseExact, variante } };
  }
  // fallback
  return { to: { pathname: "/catalogos/macetas-medianas" } };
}


function getCatalogoData(baseKeyMaybeMixed) {
  if (!baseKeyMaybeMixed) return null;

  // 1) intenta exacto
  if (catalogoMacetasMedianas[baseKeyMaybeMixed]) {
    return catalogoMacetasMedianas[baseKeyMaybeMixed];
  }
  if (catalogoMacetasGrandes[baseKeyMaybeMixed]) {
    return catalogoMacetasGrandes[baseKeyMaybeMixed];
  }

  // 2) intenta insensible a mayúsculas
  const lower = baseKeyMaybeMixed.toLowerCase();

  const medianasMatch = Object.keys(catalogoMacetasMedianas).find(
    (k) => k.toLowerCase() === lower
  );
  if (medianasMatch) return catalogoMacetasMedianas[medianasMatch];

  const grandesMatch = Object.keys(catalogoMacetasGrandes).find(
    (k) => k.toLowerCase() === lower
  );
  if (grandesMatch) return catalogoMacetasGrandes[grandesMatch];

  return null;
}



  const handleAddToCart = () => {
  if (!macetaSeleccionada || !plantasSeleccionadas) {
    alert("Selecciona una maceta y una planta primero");
    return;
  }

  const colorSeleccionado = selectedColors[macetaSeleccionada.id];
  if (!colorSeleccionado) {
    alert("Selecciona un color para la maceta antes de agregar al carrito");
    return;
  }

  const comboItem = {
  id: `combo-${macetaSeleccionada.id}-${plantasSeleccionadas.id}-${colorSeleccionado.codigo}`,
  modelo: `${macetaSeleccionada.modelo} + ${plantasSeleccionadas.map(p => p.nombre).join(", ")}`,
  
  // 👇 Nueva estructura de imágenes: guardamos ambas
  imagen: colorSeleccionado.imagen,              // imagen de la maceta
  imagenPlanta: plantasSeleccionadas.imagen,       // imagen de la planta
  medidas: macetaSeleccionada.medidas,
  Precio: Number(precioTotal),

  detalleCombo: {
    maceta: {
  id: macetaSeleccionada.id,
  modelo: macetaSeleccionada.modelo,
  medidas: macetaSeleccionada.medidas,
  precio: precioMaceta,
  color: {
    codigo: colorSeleccionado.codigo,
    imagen: colorSeleccionado.imagenMiniatura ?? colorSeleccionado.imagen, // ✅ siempre existe
  },
},
    plantas: plantasSeleccionadas.map((pl) => ({
  id: pl.id,
  nombre: pl.nombre,
  precio: pl.precio,
  imagen: pl.imagen,
})),
  },
};

  console.log("🛒 Objeto agregado al carrito:", comboItem); // 👈 DEPURACIÓN

   addToCart(comboItem);

  alert("Combinación agregada al carrito!");
};


  return (
  <div style={{ padding: 20 }}>
    <h1>Macetas con Plantas 🌿</h1>
    <p>
      Elige una maceta (variante específica) y una planta. 
      Luego personaliza el color de la maceta y revisa la vista previa.
    </p>

    {/* Contenedor principal dividido en 2 columnas */}
    <div style={{ display: "flex", gap: 40, marginTop: 20, alignItems: "flex-start" }}>
      
      {/* Columna Izquierda: selección paso a paso */}
      <div style={{ flex: 2 }}>
        
        {/* === Paso 1: Macetas === */}
        <h2>1️⃣ Elige tu Maceta</h2>
        {/* Filtros de macetas */}
        <div style={{ marginBottom: 20 }}>
          <button
            onClick={() => setFiltro("todas")}
            style={{
              marginRight: 10,
              padding: "8px 16px",
              borderRadius: 6,
              border: filtro === "todas" ? "2px solid #16a34a" : "1px solid #d1d5db",
              background: filtro === "todas" ? "#dcfce7" : "white",
              cursor: "pointer",
            }}
          >
            Todas
          </button>
          <button
            onClick={() => setFiltro("medianas")}
            style={{
              marginRight: 10,
              padding: "8px 16px",
              borderRadius: 6,
              border: filtro === "medianas" ? "2px solid #16a34a" : "1px solid #d1d5db",
              background: filtro === "medianas" ? "#dcfce7" : "white",
              cursor: "pointer",
            }}
          >
            Medianas
          </button>
          <button
            onClick={() => setFiltro("grandes")}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: filtro === "grandes" ? "2px solid #16a34a" : "1px solid #d1d5db",
              background: filtro === "grandes" ? "#dcfce7" : "white",
              cursor: "pointer",
            }}
          >
            Grandes
          </button>
        </div>

        {/* Ordenamiento */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ marginRight: 10, fontWeight: 600 }}>Ordenar por:</label>
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              border: "1px solid #d1d5db",
              cursor: "pointer",
            }}
          >
            <option value="">-- Ninguno --</option>
            <option value="dim-asc">Dimensiones: Pequeñas → Grandes</option>
            <option value="dim-desc">Dimensiones: Grandes → Pequeñas</option>
          </select>
        </div>

        {/* Listado de macetas */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {macetasFiltradas.map((m) => {
            const isSelected = macetaSeleccionada?.id === m.id;
            const link = buildCatalogLink(m);
            
if (macetaConfirmada && macetaSeleccionada?.id !== m.id) {
  return null; // ocultamos todas las demás
}
            return (
              <div
                key={m.id}
                style={{
                  border: isSelected ? "3px solid #16a34a" : "1px solid #e5e7eb",
                  borderRadius: 10,
                  padding: 12,
                  width: 190,
                  background: "#fff",
                  boxShadow: isSelected
                    ? "0 6px 14px rgba(22,163,74,0.18)"
                    : "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "transform .12s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img
                  src={safeSrc(selectedColors[m.id]?.imagen || m.imagen)}
                  alt={m.modelo ?? "Maceta"}
                  style={{ width: "100%", height: 120, objectFit: "contain", cursor: "pointer" }}
                  onClick={() => setMacetaSeleccionada(m)}
                  onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                />

                <div
                  onClick={() => {
                    setMacetaSeleccionada(m);
                    setSelectedColors((prev) => ({ ...prev, [m.id]: null }));
                  }}
                  style={{
                    marginTop: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                  title={m.modelo}
                >
                  {m.modelo}
                </div>

                {m.medidas && (
                  <div style={{ fontSize: 12, color: "#374151", marginTop: 4 }}>{m.medidas}</div>
                )}

                <div style={{ color: "#16a34a", fontWeight: 800, fontSize: 13, marginTop: 6 }}>
                  ${Number(m.Precio ?? 0).toFixed(2)}
                </div>

                {/* Colores disponibles SOLO si esta maceta está seleccionada */}
                {macetaSeleccionada?.id === m.id && (() => {
                  const colorData = macetaColorImages[m.baseKeyExact];
                  if (!colorData) return null;

                  // Caso 1: sin variantes
                  if (!colorData.variantes) {
                    return (
                      <div style={{ marginTop: 8 }}>
                        <h4 style={{ fontSize: 12, marginBottom: 4 }}>Elige un color:</h4>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          {Object.entries(colorData).map(([codigo, img]) => (
                            <div
                              key={codigo}
                              onClick={() => {
  setSelectedColors((prev) => ({
    ...prev,
    [m.id]: {
      codigo,
      imagen: img,
      imagenMiniatura: getImage(`images/colores-macetas/${codigo}.jpg`),
    },
  }));
  setMacetaSeleccionada(m);
  setMacetaConfirmada(true); // ✅ confirmamos la maceta
}}
                              style={{
                                border:
                                  selectedColors[m.id]?.codigo === codigo
                                    ? "2px solid #16a34a"
                                    : "1px solid #ccc",
                                borderRadius: 6,
                                padding: 2,
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={img}
                                alt={codigo}
                                style={{ width: 32, height: 32, objectFit: "cover" }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  // Caso 2: con variantes
                  const varianteData = colorData.variantes?.[m.variantKey];
                  if (!varianteData) return null;

                  return (
                    <div style={{ marginTop: 8 }}>
                      <h4 style={{ fontSize: 12, marginBottom: 4 }}>Elige un color:</h4>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {Object.entries(varianteData).map(([codigo, img]) => (
                          <div
                            key={codigo}
                            onClick={() => {
  setSelectedColors((prev) => ({
    ...prev,
    [m.id]: {
      codigo,
      imagen: img,
      imagenMiniatura: getImage(`images/colores-macetas/${codigo}.jpg`),
    },
  }));
  setMacetaSeleccionada(m);
  setMacetaConfirmada(true); // ✅ confirmamos la maceta
}}
                            style={{
                              border:
                                selectedColors[m.id]?.codigo === codigo
                                  ? "2px solid #16a34a"
                                  : "1px solid #ccc",
                              borderRadius: 6,
                              padding: 2,
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={img}
                              alt={codigo}
                              style={{ width: 32, height: 32, objectFit: "cover" }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                <div style={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
                  <Link
                    to={link.to}
                    state={link.state}
                    style={{
                      display: "inline-block",
                      background: "#0ea5e9",
                      color: "white",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "6px 10px",
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    Más información
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* === Paso 2: Plantas (aparece después de elegir maceta) === */}
                {macetaSeleccionada && (
          <div style={{ marginTop: 40 }}>
            <h2>2️⃣ Elige tu Planta</h2>
            {/* Filtro de plantas */}
            <div style={{ marginBottom: 20 }}>
              <button
                onClick={() => setFiltroPlantas("todas")}
                style={{
                  marginRight: 10,
                  padding: "8px 16px",
                  borderRadius: 6,
                  border: filtroPlantas === "todas" ? "2px solid #16a34a" : "1px solid #d1d5db",
                  background: filtroPlantas === "todas" ? "#dcfce7" : "white",
                  cursor: "pointer",
                }}
              >
                Todas
              </button>
              <button
                onClick={() => setFiltroPlantas("interior")}
                style={{
                  marginRight: 10,
                  padding: "8px 16px",
                  borderRadius: 6,
                  border: filtroPlantas === "interior" ? "2px solid #16a34a" : "1px solid #d1d5db",
                  background: filtroPlantas === "interior" ? "#dcfce7" : "white",
                  cursor: "pointer",
                }}
              >
                Interior
              </button>
              <button
                onClick={() => setFiltroPlantas("exterior")}
                style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  border: filtroPlantas === "exterior" ? "2px solid #16a34a" : "1px solid #d1d5db",
                  background: filtroPlantas === "exterior" ? "#dcfce7" : "white",
                  cursor: "pointer",
                }}
              >
                Exterior
              </button>
            </div>

            {/* Listado de plantas filtradas */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {plantasFiltradas.map((p) => {
                const isSelected = plantasSeleccionadas?.id === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
  setPlantasSeleccionadas((prev) => [
    ...prev,
    {
      ...p,
      width: 180,
      id: `${p.id}-${Date.now()}`, // 👈 genera ID único
    },
  ]);
}}
                    style={{
                      border: isSelected ? "3px solid #16a34a" : "1px solid #e5e7eb",
                      borderRadius: 10,
                      padding: 12,
                      width: 190,
                      background: "#fff",
                      boxShadow: isSelected
                        ? "0 6px 14px rgba(22,163,74,0.18)"
                        : "0 2px 8px rgba(0,0,0,0.06)",
                      transition: "transform .12s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    title={p.nombre}
                  >
                    <img
                      src={safeSrc(p.imagen)}
                      alt={p.nombre}
                      style={{ width: "100%", height: 120, objectFit: "contain" }}
                      onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                    />
                    <div style={{ marginTop: 8, fontSize: 13, fontWeight: 700 }}>{p.nombre}</div>
                    <div style={{ color: "#16a34a", fontWeight: 800, fontSize: 13 }}>
                      ${Number(p.precio ?? 0).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Columna Derecha: Vista previa sticky */}
      <div style={{ flex: 1, position: "sticky", top: 20, alignSelf: "flex-start" }}>
      
        <h2>Vista Previa</h2>
        
       {macetaSeleccionada && plantasSeleccionadas ? (
  <div
  style={{
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    background: "#fff",
    minHeight: 500,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  }}
>
  {plantasSeleccionadas.map((planta, index) => (
  <motion.div
    key={planta.id + index}
    drag
    onMouseEnter={() => setHoveredPlantaIndex(index)}
    onMouseLeave={() => setHoveredPlantaIndex(null)}
    style={{
      position: "absolute",
      top: `${25 + index * 5}%`,
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: planta.width,
      zIndex: 1,
      cursor: "grab",
    }}
  >
    <img
      src={safeSrc(planta.imagen)}
      alt={`Planta ${planta.nombre}`}
      style={{
        width: "100%",
        height: "auto",
        userSelect: "none",
        pointerEvents: "none",
      }}
      draggable={false}
    />

    {/* ✅ Mostrar botones solo si estamos sobre esta planta */}
    {hoveredPlantaIndex === index && (
      <div className="flex justify-center mt-1 gap-2">
        <button
          onClick={() =>
            setPlantasSeleccionadas((prev) =>
              prev.map((pl, i) =>
                i === index
                  ? { ...pl, width: Math.max(40, pl.width - 10) }
                  : pl
              )
            )
          }
          className="text-xs px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <button
          onClick={() =>
            setPlantasSeleccionadas((prev) =>
              prev.map((pl, i) =>
                i === index ? { ...pl, width: pl.width + 10 } : pl
              )
            )
          }
          className="text-xs px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={() =>
            setPlantasSeleccionadas((prev) =>
              prev.filter((_, i) => i !== index)
            )
          }
          className="text-xs px-2 py-0.5 bg-red-200 text-red-800 rounded hover:bg-red-300"
        >
          🗑
        </button>
      </div>
    )}
  </motion.div>
))}
    {/* ✅ Maceta (fija) */}
    <div
  style={{
    marginTop: 200,
    width: macetaWidth,
    position: "relative",
    cursor: "default",
  }}
  onMouseEnter={() => setMostrarControlesMaceta(true)}
  onMouseLeave={() => setMostrarControlesMaceta(false)}
>
  <img
    src={safeSrc(selectedColors[macetaSeleccionada?.id]?.imagen || macetaSeleccionada?.imagen)}
    alt={macetaSeleccionada?.modelo ?? "Maceta"}
    style={{
      width: "100%",
      height: "auto",
      objectFit: "contain",
      display: "block",
      margin: "0 auto",
    }}
    draggable={false}
  />

  {/* Botones de tamaño para la maceta */}
  {mostrarControlesMaceta && (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
        marginTop: 4,
      }}
    >
      <button
        onClick={() => setMacetaWidth((prev) => Math.max(120, prev - 20))}
        className="text-xs px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
      >
        -
      </button>
      <button
        onClick={() => setMacetaWidth((prev) => prev + 20)}
        className="text-xs px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
      >
        +
      </button>
    </div>
  )}
</div>

       {/* 🏷️ Info + botón agregar */}
    <div
  style={{
    marginTop: 20,
    textAlign: "center",
    width: "100%",
  }}
>
      <div style={{ fontWeight: 600 }}>{macetaSeleccionada?.modelo}</div>
      <div style={{ fontSize: 12, color: "#374151" }}>{macetaSeleccionada?.medidas}</div>
     <div style={{ marginTop: 8, fontWeight: 600 }}>
  {plantasSeleccionadas.map((p) => p.nombre).join(", ")}
</div>

      <div style={{ color: "#16a34a", fontSize: 18, fontWeight: 800, marginTop: 4 }}>
        Total: ${precioTotal}
      </div>

      <button
        onClick={handleAddToCart}
        style={{
          marginTop: 8,
          padding: "8px 16px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 700,
          width: "100%",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  </div>
) : (
  <p style={{ color: "#6b7280" }}>Selecciona una maceta y una planta</p>
)}
        {macetaConfirmada && (
  <button
    onClick={() => {
      setMacetaSeleccionada(null);
      setSelectedColors({});
      setMacetaConfirmada(false); // reiniciamos
    }}
    style={{
      marginTop: 12,
      padding: "8px 16px",
      background: "#f59e0b",
      color: "white",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 600,
    }}
  >
    Cambiar maceta
  </button>
)}
{(macetaSeleccionada || plantasSeleccionadas) && (
  <button
    onClick={() => {
      setMacetaSeleccionada(null);
      setPlantasSeleccionadas([]);
      setSelectedColors({});
      setMacetaConfirmada(false);
      setMacetaWidth(240);
          }}
    style={{
      marginTop: 8,
      padding: "8px 16px",
      background: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 600,
    }}
  >
    Reiniciar todo
  </button>
)}
      </div>
    </div>
  </div>
);
} 