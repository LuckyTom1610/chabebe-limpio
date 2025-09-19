import React from "react";

export default function EnviosYGarantiasPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Envíos y Garantías</h1>

      {/* Política de Envíos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">✈️ Política de Envíos</h2>
        <p className="mb-3">
          En Chabeve nos comprometemos a que tus productos lleguen de forma rápida y segura. 
          Si te encuentras en <strong>Quito</strong>, tu pedido será entregado en un plazo máximo de <strong>24 horas</strong>.
        </p>
        <p className="mb-3">
          Para envíos al resto del país, trabajamos con distintas empresas logísticas que nos permiten llegar a 
          <strong> todas las provincias del Ecuador</strong>. El tiempo de entrega dependerá de la ubicación y la empresa de transporte asignada.
        </p>
        <p className="mb-3">
          <strong>Los envíos en Quito son completamente gratuitos.</strong> Para otras provincias, el costo será determinado por la empresa de entrega correspondiente.
        </p>
      </section>

      {/* Tiempos de Preparación */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">📦 Tiempos de Preparación</h2>
        <p className="mb-3">
          Procesamos todos los pedidos en un plazo máximo de <strong>24 horas</strong>. Una vez confirmado el pedido, iniciamos el proceso de alistamiento y entrega según tu ubicación.
        </p>
      </section>

      {/* Política de Garantías */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🛡️ Política de Garantías</h2>
        <p className="mb-3">
          Todos nuestros productos cuentan con una garantía de <strong>6 meses</strong> a partir de la fecha de entrega.
        </p>
        <p className="mb-3">
          Esta garantía cubre defectos relacionados con cambios no naturales en el color de la maceta y daños estructurales que no hayan sido causados por caídas, golpes u otro mal uso.
        </p>
        <p className="mb-3">
          Si necesitas hacer uso de tu garantía, puedes contactarnos por nuestros canales de atención para iniciar el proceso de revisión y reemplazo.
        </p>
      </section>

      <p className="text-sm text-gray-500">
        * Nos reservamos el derecho de actualizar esta política según disponibilidad y cambios logísticos. Te recomendamos revisar esta sección periódicamente para estar al tanto de cualquier modificación.
      </p>
    </div>
  );
}