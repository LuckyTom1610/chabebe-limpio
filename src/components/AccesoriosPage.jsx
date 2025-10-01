import React, { useState, useContext, useEffect } from "react";
import CatalogoMacetas from "./CatalogoMacetas";
import { CartContext } from "../context/CartContext";
import { getImage } from "../utils/cloudinary";

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
    id: "MAZECAP",
    modelo: "MAZECAP",
    imagen: getImage("MAZE_CAP.jpg"),
  },
  {
    id: "GIRAFFE",
    modelo: "GIRAFFE",
    imagen: getImage("Giraffe.jpg"),
  },
  {
    id: "BASEWOODY",
    modelo: "BASE WOODY",
    imagen: getImage("BASE_WOODY.jpg"),
  },
  {
    id: "BIRDYFEEDSQUARE",
    modelo: "BIRDYFEED SQUARE",
    imagen: getImage("BIRDYFEED_SQUARE.jpg"),
  },
  {
    id: "BIRDYFEEDROUND",
    modelo: "BIRDYFEED ROUND",
    imagen: getImage("BIRDYFEED_ROUND.jpg"),
  },
  {
    id: "METALHANGER",
    modelo: "METAL HANGER",
    imagen: getImage("Metal_Hanger.jpg"),
  },
  {
    id: "WHEELS",
    modelo: "WHEELS",
    imagen: getImage("WHEELS.png"),
  },
  {
    id: "INSERT",
    modelo: "INSERT",
    imagen: getImage("Insert1.jpg"),
  },
];
const catalogosData = {
  
  MAZECAP: {
    descripcion: "IPDM600",
    medidas: "Dimensiones: 593 mm x 192 mm",
    Disponibilidad: "20 und",
    Precio: 18.30,
    imagenesCatalogo: [getImage("IPDM600.jpg")],
    colores: [
        { nombre: "gris", codigo: "S443", imagen: getImage("S443_szary.jpg") },
        { nombre: "color ladrillo", codigo: "R736", imagen: getImage("R736_cegla.jpg") },
        { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") },
          ]
},

GIRAFFE: {
    descripcion: "IKW2",
    medidas: "Dimensiones: 334 x mm 140 mm x 326 mm",
    Disponibilidad: "120 und",
    Precio: 2,
    imagenesCatalogo: [getImage("IKW2.jpg")],
    colores: [
        { nombre: "crema", codigo: "CY728", imagen: getImage("CY728_krem.jpg") },
        { nombre: "verde grisáceo", codigo: "623U", imagen: getImage("623U_szalwia.jpg") },
        { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") },
          ]
},

BASEWOODY: {
    descripcion: "IBWS",
    medidas: "Dimensiones: 756 mm x 756 mm x 250 mm",
    Disponibilidad: "10 und",
    Precio: 27.75,
    imagenesCatalogo: [getImage("IBWS.jpg")],
     

colores: [
     { nombre: "ladrillo rústico", codigo: "7587U", imagen: getImage("7587U_rustykalna_cegla.jpg") },
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg") },
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") },
      ]

     },
    BIRDYFEEDSQUARE: {
    descripcion: "IBFS ",
    medidas: "Dimensiones: 248 mm x 182 mm x 174 mm",
    Disponibilidad: "15 und",
    Precio: 11.68,
    imagenesCatalogo: [getImage("IBFS.jpg")],
    colores: [
       { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") },
       { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") },
         ]

     },

BIRDYFEEDROUND: {
    descripcion: "IBFR",
    medidas: "Dimensiones: 294 mm x 258 mm x 122 mm",
    Disponibilidad: "10 und",
    Precio: 9.50,
    imagenesCatalogo: [getImage("IBFR.jpg")],
    colores: [
       { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") },
      ]
    
     },
     METALHANGER: {
    descripcion: "IWS ",
    medidas: "Dimensiones: 90 mm x 130 mm x 7 mm",
    Disponibilidad: "100 und",
    Precio: 4.08,
    imagenesCatalogo: [getImage("IWS.jpg")],
    colores: [
      { nombre: "METAL", codigo: "METAL", imagen: getImage("443U_jasny_szary.jpg") },
            ]

     },
     WHEELS: {
    
      variantes: [
    {descripcion: "TSW4 ",
    medidas: "Dimensiones: 235 mm X 280 mm",
    Disponibilidad: "20 und",
    Precio: 8.78,
    imagenesCatalogo: [getImage("TSW4.jpg")],
    },
    {descripcion: "TSW6",
    medidas: "Dimensiones: 235 mm X 425 mm",
    Disponibilidad: "20 und",
    Precio: 10.50,
    imagenesCatalogo: [getImage("TSW6.jpg")],
    },
    ],
    },
   
     INSERT: {

      variantes: [

    {descripcion: "IWKO325",
    medidas: "Dimensiones: 325 mm x 205 mm",
    Capacidad: "11",
    Disponibilidad: "400 und",
    Precio: 2.98,
    imagenesCatalogo: [getImage("IWKO325.jpg")],
        
     },
     {descripcion: "IWKO355",
    medidas: "Dimensiones: 355 x mm x 220 mm",
    Capacidad: "18",
    Disponibilidad: "400 und",
    Precio: 3.75,
    imagenesCatalogo: [getImage("IWKO355.jpg")],
          },
          {descripcion: "IWKO460",
    medidas: "Dimensiones: 460 mm x 290 mm",
    Capacidad: "40",
    Disponibilidad: "400 und",
    Precio: 7.35,
    imagenesCatalogo: [getImage("IWKO460.jpg")],
          },
     ],

colores: [
      { nombre: "NEGRO", codigo: "S411", imagen: getImage("S411_czarny.jpg") },
         ]

     },
     };

  function AccesoriosPage() {
  const [catalogoVisible, setCatalogoVisible] = useState(null);
  const [varianteIndex, setVarianteIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useContext(CartContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);  

  const macetaSeleccionada = catalogoVisible ? catalogosData[catalogoVisible] : null;
  const varianteActual = macetaSeleccionada?.variantes
  ? macetaSeleccionada.variantes[varianteIndex]
  : macetaSeleccionada;
  const principal = macetasPrincipales.find(m => m.id === catalogoVisible);

  return (
    <div style={{ maxWidth: '95vw', margin: '10px auto 0', textAlign: 'center' }}>
      {catalogoVisible ? (
          <div
           style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 1000,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 10px",
  boxSizing: "border-box",
  overflowY: "auto",
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
                onClick={() =>
                  setVarianteIndex((prev) =>
                    prev === 0 ? macetaSeleccionada.variantes.length - 1 : prev - 1
                  )
                }
                style={{ cursor: 'pointer' }}
              >
                ← Anterior
              </button>
              <button
                onClick={() =>
                  setVarianteIndex((prev) =>
                    prev === macetaSeleccionada.variantes.length - 1 ? 0 : prev + 1
                  )
                }
                style={{ cursor: 'pointer' }}
              >
                Siguiente →
              </button>
            </div>
          )}

          
{/* === NUEVO DISEÑO DEL MODAL === */}
<div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "24px",
    alignItems: "flex-start",
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

  {/* Columna Derecha: Colores + Accesorios */}
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
                src={color.imagen}
                alt={color.nombre}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Accesorios */}
    {Array.isArray(varianteActual?.Accesorios) && varianteActual.Accesorios.length > 0 && (
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
                  src={src}
                  alt={acc?.nombre ?? 'Accesorio'}
                  style={{ width: '100%', height: 120, objectFit: 'cover' }}
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
      // id único para poder eliminar luego (usa id + descripción de la variante si existe)
      id: `${principal?.id ?? catalogoVisible}-${varianteActual?.descripcion ?? "base"}-${selectedColor?.codigo ?? "base"}`, // ID único por color
      // usa el modelo e imagen de la tarjeta principal
      modelo: principal?.modelo ?? catalogoVisible,
      imagen: principal?.imagen ?? (varianteActual?.imagenesCatalogo?.[0] ?? ""),
      imagenColor: selectedColor.imagen, // <-- aquí va la miniatura del color
      // y conserva los datos técnicos de la variante/entrada seleccionada
      colorNombre: selectedColor.nombre, // nombre legible del color 
      medidas: varianteActual?.medidas ?? "",
      Capacidad: varianteActual?.Capacidad ?? "",
      Disponibilidad: varianteActual?.Disponibilidad ?? "",
      Precio: varianteActual?.Precio ?? 0, // <--- esto asegura que el precio esté disponible
      color: selectedColor // <--- añadimos color seleccionado
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
        <h1>Accesorios</h1>
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
export default AccesoriosPage;