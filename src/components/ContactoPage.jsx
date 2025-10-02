import React from "react";

export default function ContactoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Contáctanos</h1>

      {/* Información de contacto */}
      <div className="mb-10">
        <p className="mb-2 text-lg">
          📍 Estamos ubicados en Quito y próximamente en otras ciudades del Ecuador.
        </p>

        <p className="mb-2 text-lg">
          📱 <strong>Celular / WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/593988851695"
            className="text-green-700 underline hover:text-green-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            +593988851695
          </a>
        </p>

        <p className="mb-2 text-lg">
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:chavebe@outlook.es"
            className="text-green-700 underline hover:text-green-900"
          >
            chavebe@outlook.es
          </a>
        </p>
      </div>

      {/* Mapa 1: Ubicación actual */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">📍 Ubicación Actual</h2>
        <p className="mb-4 text-gray-600 italic">
          Avenida 6 de Diciembre y General Francisco Robles, antiguo Banco Guayaquil.
        </p>
        <div className="w-full h-[300px] md:h-[400px] mb-4">
          <iframe
            title="Ubicación Actual"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15910.204377785498!2d-78.493909!3d-0.207426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTAuMjA3NDI2LCAtNzguNDkzOTA5!5e0!3m2!1ses-419!2sec!4v1694900000000!5m2!1ses-419!2sec"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
        <a
          href="https://www.google.com/maps?q=-0.207426,-78.493909"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          📍 Cómo llegar
        </a>
      </div>

      {/* Mapa 2: Próxima ubicación */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">📍 Próxima Ubicación</h2>
        <p className="mb-4 text-gray-600 italic">
          Calle De las Rieles, San Juan de Cumbayá. Diagonal al Colegio Terranova.
        </p>
        <div className="w-full h-[300px] md:h-[400px] mb-4">
          <iframe
            title="Próxima Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15910.549!2d-78.455447!3d-0.202271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTAuMjAyMjcxLCAtNzguNDU1NDQ3!5e0!3m2!1ses-419!2sec!4v1694900000000!5m2!1ses-419!2sec"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
        <a
          href="https://www.google.com/maps?q=-0.202271,-78.455447"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          📍 Cómo llegar
        </a>
      </div>
    </div>
  );
}