import React, { useState, useContext } from "react";
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
   id: "COMBIOLIQ",
   modelo: "IBFT55",
   imagen: getImage("compost_IBFT55_zsv5it.jpg"),
  },
{
  id: "COMBIOSOIL",
   modelo: "IKUGL",
   imagen: getImage("compost_IKUGL_s8de5e.jpg"),
   },
{
  id: "COMPOGREEN",
   modelo: "IKST380C",
   imagen: getImage("compost_IKST_kzbvyd.jpg"),
   },
];
const catalogosData = {
 
  COMBIOLIQ: 
        
      {descripcion: "IBFT55",
    medidas: "Dimensiones: 380 mmx 590 mm,",
    Capacidad:"55",
    Disponibilidad: "5 und",
    Precio: 34.33,
    imagenesCatalogo: [getImage("IBFT55_qn0rlw.jpg")],
         },
   
   COMBIOSOIL: 
     
    {descripcion: "IKUGL",
    medidas: "Dimensiones: 250 mmx 530 mm",
    Capacidad:"11",
    Disponibilidad: "45 und",
    Precio: 8.63,    
    imagenesCatalogo: [getImage("IKUGL_ascf2m.jpg")],
    
     },
    COMPOGREEN: 
     
    {descripcion: "IKST380C",
    medidas: "Dimensiones: 719 mm x 719 mm x 826 mm",
    Capacidad:"380",
    Disponibilidad: "50 und",
    Precio: 42.23,    
    imagenesCatalogo: [getImage("IKST380C_z3yki5.jpg")],
    
     },
     
     
};

  function ComposterasPage() {
  const [catalogoVisible, setCatalogoVisible] = useState(null);
  const [varianteIndex, setVarianteIndex] = useState(0);
  const { addToCart } = useContext(CartContext);
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
   
       
    
    addToCart({
      // id único para poder eliminar luego (usa id + descripción de la variante si existe)
      id: `${principal?.id ?? catalogoVisible}-${varianteActual?.descripcion ?? "base"}`, // ID único por color
      // usa el modelo e imagen de la tarjeta principal
      modelo: principal?.modelo ?? catalogoVisible,
      imagen: principal?.imagen ?? (varianteActual?.imagenesCatalogo?.[0] ?? ""),
            // y conserva los datos técnicos de la variante/entrada seleccionada
      medidas: varianteActual?.medidas ?? "",
      Capacidad: varianteActual?.Capacidad ?? "",
      Disponibilidad: varianteActual?.Disponibilidad ?? "",
      Precio: varianteActual?.Precio ?? 0, // <--- esto asegura que el precio esté disponible
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
        <h1>Composteras</h1>
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
export default ComposterasPage;