import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import TransferenciaBancaria from "./TransferenciaBancaria";



const CarritoPage = () => {
 
  const [metodoPago, setMetodoPago] = useState("");
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const totalProductos = cart.reduce((acc, item) => acc + (item.cantidad || 1), 0);
  const totalMonto = cart.reduce((acc, item) => acc + (item.Precio * (item.cantidad || 1)), 0);
  console.log(cart);

  const [clienteDatos, setClienteDatos] = useState({
  nombre: "",
  cedula: "",
  direccion: "",
  telefono: "",
});

const handleChange = (e) => {
  setClienteDatos({
    ...clienteDatos,
    [e.target.name]: e.target.value,
  });
};

 const enviarWhatsApp = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }

     // Validación de datos del cliente
  const { nombre, cedula, direccion, telefono } = clienteDatos;
  if (!nombre || !cedula || !direccion || !telefono) {
    alert("Por favor completa todos los campos de datos para la factura.");
    return;
  }

    const numeroWhatsApp = "593988851695";

    let mensaje = `🛒 *Pedido Chabeve*\n\n`;
    mensaje += `*Datos del cliente:*\n`;
    mensaje += `Nombre: ${clienteDatos.nombre}\n`;
    mensaje += `Cédula/RUC: ${clienteDatos.cedula}\n`;
    mensaje += `Dirección: ${clienteDatos.direccion}\n`;
    mensaje += `Teléfono: ${clienteDatos.telefono}\n\n`;

    mensaje += `*Productos:*\n`;
    cart.forEach((item, index) => {
  const colorInfo = item.color ?? {};  // el nombre limpio del color
  const cantidad = item.cantidad || 1;
  mensaje += `${index + 1}. ${item.modelo}`;
  if (colorInfo.nombre) mensaje += ` - Color: ${colorInfo.nombre} (${colorInfo.codigo})`;
  mensaje += ` - ${cantidad} unidad${cantidad > 1 ? "es" : ""} - $${item.Precio?.toFixed(2)}\n`;
});

    mensaje += `\n*Total:* $${totalMonto.toFixed(2)}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
      <React.Fragment>
        <div className="space-y-3">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border p-3 rounded-lg shadow-sm">
              
             {/* Info maceta/planta */}
<div className="flex items-center gap-2">
  {/* Imagen de maceta */}
  <img
    src={item?.detalleCombo?.maceta?.imagen ?? item.imagen}
    alt="Maceta"
    style={{
      width: 120,
      height: 120,
      objectFit: "contain",
      borderRadius: 8,
      background: "#fff",
    }}
    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
  />

  {/* Imagen de planta (si existe en el combo) */}
 {item?.detalleCombo?.plantas?.map((planta, i) => (
  <img
    key={i}
    src={planta.imagen}
    alt={`Planta ${planta.nombre}`}
    style={{
      width: 120,
      height: 120,
      objectFit: "contain",
      borderRadius: 8,
      background: "#fff",
    }}
    onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
  />
))}
</div>
                <div className="flex-1 ml-4">
                  <p className="font-semibold">
 {item?.detalleCombo ? (
  <>
    {item.detalleCombo.maceta.modelo} +{" "}
    {item.detalleCombo.plantas.map((pl, i) => (
      <span key={i}>
        {pl.nombre}
        {i < item.detalleCombo.plantas.length - 1 ? ", " : ""}
      </span>
    ))}
  </>
) : (
  item.modelo
)}
</p>
                  <p className="text-sm text-gray-600">{item.medidas}</p>
                 {item.medidas && (
                  
  <p className="text-sm text-gray-600">Medidas: {item.medidas}</p>

  
)}

                    {/* Color (solo macetas medianas y grandes, NO combos) */}
{item.color?.nombre ? (
  <div className="flex items-center gap-2 mt-1">
    <span className="text-sm text-gray-600">
      Color: {item.color.nombre} ({item.color.codigo})
    </span>
    {item.color.imagen && (
      <img
        src={item.color.imagen}
        alt={`Color ${item.color.nombre}`}
        className="w-16 h-6 object-cover rounded border"
      />
    )}
  </div>
) : null}

{/* Precio SIEMPRE va al final */}
  <p className="text-sm font-semibold">Precio: ${item.Precio?.toFixed(2)}</p>

                              {/* Control de cantidad */}
                  <div className="flex items-center mt-1 space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span>{item.cantidad}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              
             {/* Botón eliminar */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

{/* Formulario de datos de facturación */}
<div className="mt-6 p-4 border rounded-lg bg-gray-50">
  <h3 className="font-semibold mb-2">Datos para la factura</h3>
  <div className="flex flex-col gap-2">
    <input
      type="text"
      name="nombre"
      placeholder="Nombre completo"
      value={clienteDatos.nombre}
      onChange={handleChange}
      className="border px-2 py-1 rounded"
    />
    <input
      type="text"
      name="cedula"
      placeholder="Cédula o RUC"
      value={clienteDatos.cedula}
      onChange={handleChange}
      className="border px-2 py-1 rounded"
    />
    <input
      type="text"
      name="direccion"
      placeholder="Dirección"
      value={clienteDatos.direccion}
      onChange={handleChange}
      className="border px-2 py-1 rounded"
    />
    <input
      type="text"
      name="telefono"
      placeholder="Teléfono"
      value={clienteDatos.telefono}
      onChange={handleChange}
      className="border px-2 py-1 rounded"
    />
  </div>
</div>

{/* Métodos de pago */}
<div className="mt-6 p-4 border rounded-lg bg-gray-50">
  <h3 className="font-semibold mb-2">Método de pago</h3>
  <div className="flex gap-4">
    <label className="flex items-center">
      <input
        type="radio"
        name="metodoPago"
        value="whatsapp"
        checked={metodoPago === "whatsapp"}
        onChange={(e) => setMetodoPago(e.target.value)}
      />
      <span className="ml-2">Enviar pedido por WhatsApp</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="metodoPago"
        value="transferencia"
        checked={metodoPago === "transferencia"}
        onChange={(e) => setMetodoPago(e.target.value)}
      />
      <span className="ml-2">Pago por transferencia bancaria</span>
    </label>
  </div>
</div>
   
         {/* Totales */}
          <div className="mt-4 p-3 border-t">
            <p className="font-semibold">Total productos: {totalProductos}</p>
            <p className="font-semibold">Monto total: ${totalMonto.toFixed(2)}</p>
          </div>
          <div className="mt-4">
  {metodoPago === "whatsapp" && (
    <button
      onClick={enviarWhatsApp}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Enviar pedido por WhatsApp
    </button>
  )}

  {metodoPago === "transferencia" && (
    <TransferenciaBancaria
      total={totalMonto}
      cliente={clienteDatos}
    />
  )}
</div>
        </React.Fragment>
       )}
    </div>
  );
};

export default CarritoPage;