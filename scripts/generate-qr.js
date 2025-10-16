const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");

// Archivo con la lista de QR a generar
const SOURCES_PATH = path.resolve(process.cwd(), "qr-sources.json");
// Carpeta donde se guardarán los PNG
const OUTPUT_DIR = path.resolve(process.cwd(), "qrs");

// URL base. Cambia a tu dominio cuando lo tengas.
// También puedes pasarla por variable de entorno QR_BASE_URL.
const BASE_URL = process.env.QR_BASE_URL || "https://chabebe-limpio.vercel.app";

/** Construye la URL final a partir de route + params (si no hay item.url) */
function buildUrlFromRoute(route, params) {
  const url = new URL(route || "/", BASE_URL);
  if (params && typeof params === "object") {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }
  return url.toString();
}

/** Deja el nombre de archivo "limpio" */
function sanitizeFilename(name) {
  return String(name)
    .trim()
    .replace(/[^\w\d\-_.]+/g, "_")
    .slice(0, 200);
}

async function main() {
  // 1) Leer fuentes
  if (!fs.existsSync(SOURCES_PATH)) {
    console.error(`❌ No se encontró ${SOURCES_PATH}. Crea primero qr-sources.json`);
    process.exit(1);
  }

  let sources;
  try {
    sources = JSON.parse(fs.readFileSync(SOURCES_PATH, "utf8"));
  } catch (e) {
    console.error("❌ Error parseando qr-sources.json:", e.message);
    process.exit(1);
  }

  if (!Array.isArray(sources) || sources.length === 0) {
    console.error("❌ qr-sources.json está vacío o no es un array.");
    process.exit(1);
  }

  // 2) Asegurar carpeta de salida
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`🏁 Generando ${sources.length} QR(s) en: ${OUTPUT_DIR}`);
  console.log(`🔗 BASE_URL: ${BASE_URL}`);
  let ok = 0;
  let fail = 0;

  for (const item of sources) {
    try {
      const id = item.id || item.name || "qr";
      let url;

      if (item.url) {
        // si el item trae una url completa, se usa tal cual
        url = item.url;
      } else {
        // si trae route + params, se arma con BASE_URL
        url = buildUrlFromRoute(item.route || "/", item.params || {});
      }

      const filename = sanitizeFilename(`${id}.png`);
      const outPath = path.join(OUTPUT_DIR, filename);

      await QRCode.toFile(outPath, url, {
        errorCorrectionLevel: "M",
        margin: 2,
        scale: 8, // tamaño del QR (sube/baja para cambiar)
        color: { dark: "#000000", light: "#FFFFFF" },
      });

      ok++;
      console.log(`✅ ${id} → ${url}`);
    } catch (e) {
      fail++;
      console.error(`❌ Error con item ${item.id || item.name}:`, e.message);
    }
  }

  console.log(`\n🎉 Listo: ${ok} OK, ${fail} fallidos.`);
  console.log(`📂 Carpeta: ${OUTPUT_DIR}`);
}

main().catch((e) => {
  console.error("❌ Error inesperado:", e);
  process.exit(1);
});
