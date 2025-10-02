import React, { useState } from "react";
import { datosBancarios } from "../data/datosBancarios"; // <- usa tu nombre de archivo actual

/**
 * Props opcionales:
 * - total: number (monto sugerido a pagar, ej: total del carrito)
 * - numeroWhatsApp: string (por defecto: "593982287640")
 * - cliente: { nombre?: string, telefono?: string } para precargar el mensaje
 */
const TransferenciaBancaria = ({
  total = 0,
  numeroWhatsApp = "593988851695",
  cliente = {},
}) => {
  const [monto, setMonto] = useState(Number(total) || 0);
  const [referencia, setReferencia] = useState("");
  const [nombre, setNombre] = useState(cliente?.nombre || "");
  const [telefono, setTelefono] = useState(cliente?.telefono || "");

  const copiarDatos = async () => {
    const texto = `Banco: ${datosBancarios.banco}
Titular: ${datosBancarios.titular}
Tipo de cuenta: ${datosBancarios.tipoCuenta}
Número de cuenta: ${datosBancarios.numeroCuenta}`;
    try {
      await navigator.clipboard.writeText(texto);
      alert("Datos bancarios copiados al portapapeles ✅");
    } catch {
      alert("No se pudo copiar. Copia manualmente, por favor.");
    }
  };

  const enviarComprobanteWA = () => {
    // Validaciones mínimas
    if (!monto || Number(monto) <= 0) {
      alert("Ingresa el monto transferido.");
      return;
    }
    // Mensaje prellenado
    let mensaje = `🧾 *Comprobante de transferencia*

*Datos del pago:*
Banco: ${datosBancarios.banco}
Titular: ${datosBancarios.titular}
Tipo de cuenta: ${datosBancarios.tipoCuenta}
Número de cuenta: ${datosBancarios.numeroCuenta}
Monto: $${Number(monto).toFixed(2)}
${referencia ? `Referencia: ${referencia}\n` : ""}`;

    if (nombre || telefono) {
      mensaje += `\n*Mis datos:*\n`;
      if (nombre) mensaje += `Nombre: ${nombre}\n`;
      if (telefono) mensaje += `Teléfono: ${telefono}\n`;
    }

    mensaje += `\nAdjunto el comprobante en este chat. Gracias.`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">Pago por transferencia bancaria</h3>

      {/* Datos del banco */}
      <div className="text-sm leading-6">
        <p><span className="font-semibold">Banco:</span> {datosBancarios.banco}</p>
        <p><span className="font-semibold">Titular:</span> {datosBancarios.titular}</p>
        <p><span className="font-semibold">Tipo de cuenta:</span> {datosBancarios.tipoCuenta}</p>
        <p><span className="font-semibold">Número de cuenta:</span> {datosBancarios.numeroCuenta}</p>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={copiarDatos}
          className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Copiar datos
        </button>
      </div>

      {/* Form para armar el mensaje de WhatsApp */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Monto transferido (USD)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Ej: 45.90"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Referencia/No. de transacción (opcional)</label>
          <input
            type="text"
            value={referencia}
            onChange={(e) => setReferencia(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Ej: TRX-123456"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tu nombre (opcional)</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tu teléfono (opcional)</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full border px-2 py-1 rounded"
            placeholder="099..."
          />
        </div>
      </div>

      <button
        onClick={enviarComprobanteWA}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Enviar comprobante por WhatsApp
      </button>

      <p className="text-xs text-gray-500 mt-2">
        *Recuerda adjuntar la captura o PDF del comprobante en el chat de WhatsApp.*
      </p>
    </div>
  );
};

export default TransferenciaBancaria;