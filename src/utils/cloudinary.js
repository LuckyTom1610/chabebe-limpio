const cloudName = "dslmjt9nd";

// 👇 Opcional: este "v1758310210" es la versión de tus assets.
// Lo puedes dejar fijo o quitarlo si no quieres que cambie con cada subida.
const version = "v1758310210";

// 🔹 Función para generar URLs de imágenes
export function getImage(path) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/${version}/${path}`;
}