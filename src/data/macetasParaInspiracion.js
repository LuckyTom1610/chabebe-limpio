import { catalogoMacetasMedianas } from "../components/MacetasMedianasPage";
import { catalogoMacetasGrandes } from "../components/MacetasGrandesPage";
import { macetaColorImages } from "../utils/macetaColorImages";
import { flattenMacetas } from "../utils/flattenMacetas";

// ✅ Utiliza la misma lógica de override de imagen confirmada por color
function getMacetasConPlantasParaInspiracion() {
  const medianas = flattenMacetas(catalogoMacetasMedianas, "medianas");
  const grandes = flattenMacetas(catalogoMacetasGrandes, "grandes");
  const todas = [...medianas, ...grandes];

  const resultado = [];

  todas.forEach((maceta) => {
    const colorData = macetaColorImages[maceta.baseKeyExact];
    if (!colorData) return;

    if (colorData.variantes && maceta.variantKey !== undefined) {
      const varianteColores = colorData.variantes[maceta.variantKey];
      if (!varianteColores) return;

      Object.entries(varianteColores).forEach(([codigo, imagen]) => {
        resultado.push({
          id: `${maceta.id}-${codigo}`,
          nombre: `${maceta.modelo} (${codigo})`,
          tipo: maceta.categoria,
          imagen,
        });
      });
    } else {
      // Caso sin variantes
      Object.entries(colorData).forEach(([codigo, imagen]) => {
        resultado.push({
          id: `${maceta.id}-${codigo}`,
          nombre: `${maceta.modelo} (${codigo})`,
          tipo: maceta.categoria,
          imagen,
        });
      });
    }
  });

  return resultado;
}

const macetasParaInspiracion = getMacetasConPlantasParaInspiracion();

export default macetasParaInspiracion;