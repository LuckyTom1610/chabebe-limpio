import React from "react";
import { useLocation } from "react-router-dom";
import todosLosProductos from "../data/todosLosProductos";
import { macetaColorImages } from "../utils/macetaColorImages";

// 🔹 Opcional: importar catálogos si existen los nombres de colores allí
// import { catalogoMacetasGrandes } from "../components/MacetasgrandesPage";
// import { accesoriosData } from "../data/accesoriosData";
// etc.  <-- Solo si quieres cruzar info con catálogos

export default function BuscarPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  // 🧠 Filtrado mejorado: busca por nombre, categoría, descripción o color
  const resultados = todosLosProductos.filter((p) => {
    const nombreMatch = p.nombre?.toLowerCase().includes(query);
    const categoriaMatch = p.categoria?.toLowerCase().includes(query);
    const descripcionMatch = p.descripcion?.toLowerCase().includes(query);

    // 🔍 Buscar por colores (código o nombre descriptivo)
    const coloresDeMaceta = macetaColorImages[p.id];

    // Recolectamos tanto los códigos como nombres de color (si existen)
    const colorMatch = coloresDeMaceta
      ? Object.entries(coloresDeMaceta).some(([codigo, valor]) => {
          // Si es un objeto (caso variantes), explorar niveles más profundos
          if (typeof valor === "object" && !Array.isArray(valor)) {
            return Object.entries(valor).some(
              ([subCodigo, img]) =>
                subCodigo.toLowerCase().includes(query) ||
                subCodigo.replace(/_/g, " ").toLowerCase().includes(query)
            );
          }
          return (
            codigo.toLowerCase().includes(query) ||
            codigo.replace(/_/g, " ").toLowerCase().includes(query)
          );
        })
      : false;

    return nombreMatch || categoriaMatch || descripcionMatch || colorMatch;
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Resultados de búsqueda:{" "}
        <span className="text-green-600">"{query}"</span>
      </h1>

      {resultados.length > 0 ? (
        <div className="space-y-4">
          {resultados.map((producto) => {
            const colores = macetaColorImages[producto.id];

            return (
              <div
                key={producto.id}
                className="border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {producto.nombre}
                  </h2>
                  <p className="text-sm text-gray-500">{producto.categoria}</p>

                  {/* 🎨 Mostrar los colores disponibles */}
                  {colores && (
                    <div className="flex flex-wrap gap-2 mt-2 items-center">
                      {Object.entries(colores).map(([codigo, valor]) => {
                        // Si tiene subniveles (variantes)
                        if (typeof valor === "object" && !Array.isArray(valor)) {
                          return Object.entries(valor).map(([subCodigo, img]) => (
                            <img
                              key={`${codigo}-${subCodigo}`}
                              src={img}
                              alt={subCodigo}
                              title={subCodigo}
                              className="w-6 h-6 rounded-full border border-gray-300 object-cover"
                            />
                          ));
                        }

                        return (
                          <img
                            key={codigo}
                            src={valor}
                            alt={codigo}
                            title={codigo}
                            className="w-6 h-6 rounded-full border border-gray-300 object-cover"
                          />
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 📸 Imagen principal del producto */}
                {producto.imagen && (
                  <img
                    src={
                      Array.isArray(producto.imagen)
                        ? producto.imagen[0]
                        : producto.imagen
                    }
                    alt={producto.nombre}
                    className="h-16 w-16 object-contain rounded"
                  />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">No se encontraron resultados 😕</p>
      )}
    </div>
  );
}