import React from "react";

const macetas = [
  {
    modelo: "Beton Bowl",
    imagen: "/images/Sistema-de-Goteo/WS.jpg",
  },
];

export default function SistemasdeGoteo({ onClick }) {
  return (
    <div
      style={{ maxWidth: 600, margin: "40px auto", textAlign: "center", cursor: "pointer" }}
      onClick={onClick}
    >
      <h1>Sistemas de Goteo</h1>
      {macetas.map((m) => (
        <div key={m.modelo} style={{ marginTop: 30 }}>
          <img
            src={m.imagen}
            alt={m.modelo}
            style={{
              width: "100%",
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
          <p style={{ marginTop: 12, fontWeight: "bold" }}>{m.modelo}</p>
        </div>
      ))}
      <p style={{ fontStyle: "italic", color: "#666", marginTop: 20 }}>
        Haz clic en la imagen para ver el catálogo completo
      </p>
    </div>
  );
}
