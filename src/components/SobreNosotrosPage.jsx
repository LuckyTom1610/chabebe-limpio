import React from "react";

function SobreNosotrosPage() {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 32 }}>Sobre Nosotros</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Misión</h2>
        <p>
          En <strong>Chabeve</strong>, creemos que todos merecen reconectar con la
          naturaleza desde casa. Nuestra misión es ayudarte a cultivar bienestar,
          salud y sostenibilidad, una maceta a la vez.
        </p>

        <h2 style={{ marginTop: 24 }}>Visión</h2>
        <p>
          Queremos ser la marca de referencia para quienes desean un estilo de vida
          más verde, práctico y en armonía con el planeta.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Nuestra Historia</h2>
        <p>
          Chabeve nació en 2023 con una idea simple: facilitar el cultivo urbano.
          Lo que comenzó como un emprendimiento de compostaje hoy ofrece productos
          innovadores y accesibles para sembrar desde casa.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Valores</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🌱 <strong>Sostenibilidad:</strong> Compromiso con el medio ambiente.</li>
          <li>🤝 <strong>Honestidad:</strong> Transparencia en cada paso.</li>
          <li>🏡 <strong>Vida saludable:</strong> Estilo de vida verde desde casa.</li>
          <li>❤️ <strong>Cercanía:</strong> Escuchamos y cuidamos a nuestros clientes.</li>
          <li>📦 <strong>Calidad:</strong> Productos duraderos y bien pensados.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Conoce al equipo (próximamente)</h2>
        <p style={{ color: "#888" }}>
          Aquí podrás conocer al equipo detrás de Chabeve. ¡Muy pronto compartiremos
          nuestras historias y pasiones!
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Certificaciones y Alianzas</h2>
        <p style={{ color: "#888" }}>
          Actualmente estamos construyendo nuevas alianzas. Aquí destacaremos nuestras
          certificaciones y colaboraciones importantes. 🌿
        </p>
      </section>

      <section style={{ textAlign: "center", marginTop: 60 }}>
        <p style={{ fontSize: "18px", fontStyle: "italic", color: "#2e7d32" }}>
          No vendemos macetas, sembramos ideas para un mundo más verde 🌍💚
        </p>
      </section>
    </div>
  );
}

export default SobreNosotrosPage;