import React from 'react';
import './CatalogoMacetas.css';

export default function CatalogoMacetas({ datos }) {
  if (!datos) return null;

  const imagenPrincipal = datos.imagenesCatalogo && datos.imagenesCatalogo.length
    ? datos.imagenesCatalogo[0]
    : '';

  return (
    <div>
      {/* Espaciador para navbar fijo */}
      <div style={{ height: 'var(--navbar-height)' }} />

      {/* Contenedor que incluye imagen y texto */}
      <div className="catalogo-viewport">
        {imagenPrincipal && (
          <img
            src={imagenPrincipal}
            alt="maceta principal"
            className="catalogo-principal"
          />
        )}

        <div style={{ maxWidth: 600, margin: '10px auto', textAlign: 'center' }}>
          <h2>Detalle del catálogo</h2>
          <p>{datos.descripcion}</p>
          <p>{datos.medidas}</p>
          <p>Capacidad: {datos.Capacidad} L</p>
          <p>Disponibilidad: {datos.Disponibilidad}</p>
          <p>Precio: ${datos.Precio?.toFixed(2)}</p>  {/* <- línea agregada */}        </div>
        </div>

      {/* Thumbnails */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 12 }}>
        {datos.imagenesCatalogo && datos.imagenesCatalogo.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Detalle ${i + 2}`}
            style={{ width: 60, borderRadius: 2 }}
          />
        ))}
      </div>

      {/* Accesorios incluidos */}
{datos.Accesorios && datos.Accesorios.length > 0 && (
  <div className="mt-3">
    <p className="text-sm font-semibold mb-1">Accesorios incluidos:</p>
    <div className="flex gap-2 flex-wrap">
      
      {datos.Accesorios.map((Accesorios, i) => (
        <a key={i} href={Accesorios.enlace} className="group">
          <img
            src={Accesorios.imagen}
            alt={Accesorios.nombre}
            className="w-16 h-16 object-cover rounded border hover:scale-105 transition-transform"
            title={Accesorios.nombre}
          />
        </a>
      ))}
    </div>
  </div>
)}
    </div>
  );
}
