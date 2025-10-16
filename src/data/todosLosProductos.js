import accesoriosData from "./accesoriosData";
import composterasData from "./composterasData";
import cuidadoPlantasData from "./cuidadoPlantasData";
import macetasconPlantasData from "./macetasconPlantasData";
import macetasGrandesData from "./macetasGrandesData";
import macetasMedianasData from "./macetasMedianasData";
import sembremosEnCasaData from "./sembremosEnCasaData";
import setdemacetasData from "./setdemacetasData";
import SistemasdeGoteoData from "./SistemasdeGoteoData";
import plantasInspiracion from "./plantasInspiracion";
import macetaColorImages from "../utils/macetaColorImages";

const todosLosProductos = [
  ...accesoriosData.map(p => ({ ...p, categoria: "Accesorios" })),
  ...composterasData.map(p => ({ ...p, categoria: "Composteras" })),
  ...cuidadoPlantasData.map(p => ({ ...p, categoria: "Cuidado Plantas" })),
  ...macetasconPlantasData.map(p => ({ ...p, categoria: "Macetas con Plantas" })),
  ...macetasGrandesData.map(p => ({ ...p, categoria: "Macetas Grandes" })),
  ...macetasMedianasData.map(p => ({ ...p, categoria: "Macetas Medianas" })),
  ...sembremosEnCasaData.map(p => ({ ...p, categoria: "Sembremos en Casa" })),
  ...setdemacetasData.map(p => ({ ...p, categoria: "Set de Macetas" })),
  ...SistemasdeGoteoData.map(p => ({ ...p, categoria: "Sistemas de Goteo" })),
  ...plantasInspiracion.map(p => ({ ...p, categoria: "Plantas" })),
  
  
  ...Object.entries(macetaColorImages).map(([id, colores]) => ({
  id,
  nombre: id.replace(/_/g, " "),
  colores,
  categoria: "Colores",
})),
  ];
export default todosLosProductos;