import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getImage } from "../utils/cloudinary";

/* =========================
   Helpers
   ========================= */
function normalizeVarDesc(desc) {
  const firstToken = (desc || "").trim().split(/\s+/)[0];
  return firstToken.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
}

function safeSrc(src) {
  if (!src || typeof src !== "string") return getImage("placeholder.jpg");

  // Si ya es una URL completa de Cloudinary o HTTP, la dejamos como está
  if (/^(https?:)?\/\/res\.cloudinary\.com\//.test(src)) return src;

  // Si es relativa, asúmela desde public
  return `/${src.trim()}`;
}



function getDisplayImage({ principal, varianteActual, selectedColor }) {
  const baseSrc =
    varianteActual?.imagenesCatalogo?.[0] ??
    principal?.imagen ??
    getImage("placeholder.jpg");

  if (selectedColor?.imagenMaceta) {
    return { src: selectedColor.imagenMaceta, fallback: baseSrc };
  }

  if (selectedColor?.codigo) {
    const macetaId = principal?.id;
    const varDesc = varianteActual?.descripcion;
    const varianteKey = varDesc ? varDesc.split(" ")[0] : null;

    const byMaceta = macetaColorImages[macetaId];
    if (byMaceta) {
      if (byMaceta.variantes && varianteKey) {
        const varianteImgs = byMaceta.variantes[varianteKey];
        if (varianteImgs && varianteImgs[selectedColor.codigo]) {
          return { src: varianteImgs[selectedColor.codigo], fallback: baseSrc };
        }
      }
      if (byMaceta[selectedColor.codigo]) {
        return { src: byMaceta[selectedColor.codigo], fallback: baseSrc };
      }
    }
  }

  return { src: baseSrc, fallback: getImage("placeholder.jpg") };
}

/* =========================
   Tarjeta (grid principal)
   ========================= */
const MacetaCard = ({ maceta, onClick }) => {
  if (!maceta) return null;

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
        style={{
          width: "100%",
          maxHeight: "80%",
          borderRadius: 8,
          objectFit: "contain",
        }}
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

/* =========================
   Catálogo de Sembremos en casa
   ========================= */
const macetasPrincipales = [
  
  {
  id: "BLOMA",
   modelo: "BLOMA",
   imagen: getImage("Bloma.jpg"),
   },
  
    {
    id: "RESPANAPLANTERWOODHIGHSET",
   modelo: "RESPANA PLANTER WOOD HIGH SET",
   imagen: getImage("Respana Planter Wood.jpg"),
  },
  {
    id: "HOMEGROWER",
    modelo: "HOMEGROWER",
    imagen: getImage("Botanic_DBOP780_S433_DEPO_2411U_aranz_02_m.jpg"),
  },

{
    id: "TOMATOGROWER",
    modelo: "TOMATO GROWER",
    imagen: getImage("Tomato_Grower_IPOM400_300_sadzonka_m.jpg"),
  },

  {
    id: "POTATOGROWER",
    modelo: "POTATO GROWER",
    imagen: getImage("Potato_Grower_IZIE400_roslina.jpg"),
  },

 {
    id: "FLOOSUPPORTS",
    modelo: "FLOO SUPPORTS IFLS1",
    imagen: getImage("Floo_Supports_IFLS1_opak_folia_m.jpg"),
  },

    {
   id: "COMBIOLIQ",
   modelo: "IBFT55",
   imagen: getImage("compost_IBFT55.jpg"),
},
{
  id: "COMBIOSOIL",
   modelo: "IKUGL",
   imagen: getImage("compost_IKUGL.jpg"),
   },
{
  id: "COMPOGREEN",
   modelo: "IKST380C",
   imagen: getImage("compost_IKST.jpg"),
   },
];

const catalogosData = {
  BLOMA: {
    descripcion: "DBLO600",
    medidas: "580 mm x 288 mm x 780 mm",
    Capacidad: "-",
    Disponibilidad: "8 und",
    Precio: 18,
    imagenesCatalogo: [getImage("DBLO600.jpg")],
    colores: [
      {
        nombre: "gris piedra",
        codigo: "405U",
        imagen: getImage("405U_szary_kamienny.jpg"),
      },
    ],
  },
  RESPANAPLANTERWOODHIGHSET: {
    descripcion: "ISEW780H",
    medidas: "770 mm x 380 mm x 795 mm",
    Capacidad: "55",
    Disponibilidad: "35 und",
    Precio: 70.5,
    imagenesCatalogo: [getImage("ISEW780H_2.jpg")],
    colores: [
      {
        nombre: "gris piedra",
        codigo: "405U",
        imagen: getImage("405U_szary_kamienny.jpg"),
      },
    ],
  },
  HOMEGROWER: {
    descripcion: "DEPO400",
    medidas: "390 mm x 375 mm",
    Capacidad: "35",
    Disponibilidad: "6 und",
    Precio: 23.25,
    imagenesCatalogo: [
      getImage("Home_Grower_DEPO300_4665W_m.jpg"),
    ],
    colores: [
      {
        nombre: "natural ECO",
        codigo: "4665W",
        imagen: getImage("4665W_naturo_ECO.jpg"),
      },
      {
        nombre: "pino verde",
        codigo: "2411U",
        imagen: getImage("2411U_zielona_pinia.jpg"),
      },
      {
        nombre: "gris oscuro",
        codigo: "S433",
        imagen: getImage("S433_antracytowy.jpg"),
      },
    ],
  },
  TOMATOGROWER: {
    descripcion: "IPOM350",
    medidas: "345 mm x 265 mm",
    Capacidad: "18",
    Disponibilidad: "25 und",
    Precio: 13.03,
    imagenesCatalogo: [
      getImage("Tomato_Grower_IPOM350_rozl_S433_m.jpg"),
    ],
    colores: [
      {
        nombre: "gris oscuro",
        codigo: "S433",
        imagen: getImage("S433_antracytowy.jpg"),
      },
    ],
  },
  POTATOGROWER: {
    descripcion: "IZIE400",
    medidas: "392 mm x 316 mm",
    Capacidad: "28",
    Disponibilidad: "25 und",
    Precio: 10.85,
    imagenesCatalogo: [
      getImage("Potato_Grower_IZIE300_S433_wklad.jpg"),
    ],
    colores: [
      {
        nombre: "gris oscuro",
        codigo: "S433",
        imagen: getImage("S433_antracytowy.jpg"),
      },
    ],
  },
  FLOOSUPPORTS: {
    variantes: [
      {
        descripcion: "IFLS1",
        medidas: "210 mm x 210 mm x 1200 mm",
        Disponibilidad: "100 und",
        Precio: 8.63,
        imagenesCatalogo: [
          getImage("Floo_Supports_IFLS1_wariant_1.jpg"),
        ],
      },
      {
        descripcion: "IFLS5",
        medidas: "250 mm x 800 mm",
        Disponibilidad: "12 und",
        Precio: 8.63,
        imagenesCatalogo: [
          getImage("Floo_Supports_IFLS5_fi_24_wariant_1.jpg"),
        ],
      },
      {
        descripcion: "IFLS6",
        medidas: "250 mm x 600 mm",
        Disponibilidad: "15 und",
        Precio: 8.63,
        imagenesCatalogo: [
          getImage("Floo_Supports_IFLS6_wariant_1.jpg"),
        ],
      },
      {
        descripcion: "IFLS7",
        medidas: "350 mm x 900 mm",
        Disponibilidad: "14 und",
        Precio: 9.95,
        imagenesCatalogo: [
          getImage("Floo_Supports_IFLS7_wariant_1.jpg"),
        ],
      },
    ],
    colores: [
      {
        nombre: "verde bosque",
        codigo: "G851",
        imagen: getImage("G851_zielony_lesny.jpg"),
      },
    ],
  },
  COMBIOLIQ: {
    descripcion: "IBFT55",
    medidas: "380 mm x 590 mm",
    Capacidad: "55",
    Disponibilidad: "5 und",
    Precio: 34.33,
    imagenesCatalogo: [getImage("IBFT55.jpg")],
    colores: [
      {
        nombre: "Negro",
        codigo: "S411",
        imagen: getImage("S411_czarny.jpg"),
      },
    ],
  },
  COMBIOSOIL: {
    descripcion: "IKUGL",
    medidas: "250 mm x 530 mm",
    Capacidad: "11",
    Disponibilidad: "45 und",
    Precio: 8.63,
    imagenesCatalogo: [getImage("IKUGL.jpg")],
    colores: [
      {
        nombre: "Negro",
        codigo: "S411",
        imagen: getImage("S411_czarny.jpg"),
      },
    ],

  },
  COMPOGREEN: {
    descripcion: "IKST380C",
    medidas: "719 mm x 719 mm x 826 mm",
    Capacidad: "380",
    Disponibilidad: "50 und",
    Precio: 42.23,
    imagenesCatalogo: [getImage("IKST380C.jpg")],
    colores: [
      {
        nombre: "Negro",
        codigo: "S411",
        imagen: getImage("S411_czarny.jpg"),
      },
    ],
  },
};

const macetaColorImages = {
  BLOMA: {
    "405U": getImage("Bloma.jpg"),
  },
  RESPANAPLANTERWOODHIGHSET: {
    "405U": getImage("ISEW780H_1.png"),
  },
  HOMEGROWER: {
    S433: getImage("Home_Grower_DEPO300_S433.jpg"),
    "4665W": getImage("Home_Grower_DEPO300_4665W_m.jpg"),
    "2411U": getImage("Home_Grower_DEPO300_2411U.jpg"),
  },
  TOMATOGROWER: {
    S433: getImage("Tomato_Grower_IPOM350_rozl_S433_m.jpg"),
  },
  POTATOGROWER: {
    S433: getImage("Potato_Grower_IZIE300_S433_wklad.jpg"),
  },
  FLOOSUPPORTS: {
    variantes: {
      "IFLS1": {
        "G851": getImage("Floo_Supports_IFLS1_wariant_1.jpg"),
      },
      "IFLS5": {
        "G851": getImage("Floo_Supports_IFLS5_fi_24_wariant_1.jpg"),
      },
      "IFLS6": {
        "G851": getImage("Floo_Supports_IFLS6_wariant_1.jpg"),
      },
      "IFLS7": {
        "G851": getImage("Floo_Supports_IFLS7_wariant_1.jpg"),
      },
    },
  },

COMBIOLIQ: {
    "S411": getImage("IBFT55.jpg"),
},
COMBIOSOIL: {
    "S411": getImage("IKUGL.jpg"),
},
 COMPOGREEN: {
    "S411": getImage("IKST380C.jpg"),
},
};

/* =========================
   Página principal
   ========================= */
function SembremosEnCasaPage() {
  const [catalogoVisible, setCatalogoVisible] = useState(null);
  const [varianteIndex, setVarianteIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useContext(CartContext);

  function getMacetaColorImage(macetaId, _varianteActual, selectedColor) {
  if (!macetaId || !selectedColor) return null;
  const modelo = macetaColorImages[macetaId];
  return modelo?.[selectedColor.codigo] ?? selectedColor.imagenMaceta ?? null;
}

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
        const safeIdx = Number.isFinite(idx)
          ? Math.max(0, Math.min(idx, totalVariantes - 1))
          : 0;
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
  varianteActual,
  selectedColor
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



                  {/* Botón agregar al carrito */}
            <button
              onClick={() => {
                if (!selectedColor) {
                  alert("Selecciona un color antes de agregar al carrito.");
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
                       <h1>Sembremos en Casa</h1>

                       {/* ==== VIDEOS ==== */}
      <div style={{ margin: "20px 0" }}>
        <h2 style={{ marginBottom: 10 }}>Guías en video</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <video
            src="/videos/9 Compogreen IKST380C-Z i IKL380C-Z.mp4"
            controls
            style={{ width: 320, borderRadius: 12 }}
          />
          <video
            src="/videos/P.2 Respana Planter Wood low ISEW780 i ISEW780H High.mp4"
            controls
            style={{ width: 320, borderRadius: 12 }}
          />
        <video
            src="/videos/P.6 Tomato Planter_rozbudowa.mp4"
            controls
            style={{ width: 320, borderRadius: 12 }}
          />

        </div>
      </div>
                       
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
export default SembremosEnCasaPage;