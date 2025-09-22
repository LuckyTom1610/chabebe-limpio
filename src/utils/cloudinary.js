const CLOUDINARY_BASE_URL = process.env.CLOUDINARY_BASE_URL || "";

/**
 * Genera la URL de una imagen en Cloudinary
 * @param {string} path - Nombre del archivo (ejemplo: "Metal_Hanger_bjfed2.jpg")
 * @returns {string} URL completa lista para usar
 */
export function getImage(path) {
  if (!CLOUDINARY_BASE_URL) {
    console.warn("⚠️ CLOUDINARY_BASE_URL no está configurado");
    return path; // fallback al nombre del archivo
  }

  // Evita dobles barras
  return `${CLOUDINARY_BASE_URL.replace(/\/$/, "")}/${path}`;
}