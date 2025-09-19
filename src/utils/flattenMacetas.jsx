export function flattenMacetas(catalogoObj = {}, categoria = undefined) {
  const items = [];

  Object.entries(catalogoObj).forEach(([baseKeyExact, entry]) => {
    const baseKeyLower = String(baseKeyExact).toLowerCase();

    const variantes = Array.isArray(entry?.variantes) ? entry.variantes : [entry];

    variantes.forEach((v, idx) => {
      const descripcion =
        (v && v.descripcion) ||
        (entry && entry.descripcion) ||
        baseKeyExact;

      const variantKey = String(descripcion).trim().split(/[^\w-]+/)[0];

      const imagen =
        (v?.imagenesCatalogo && v.imagenesCatalogo[0]) ||
        (entry?.imagenesCatalogo && entry.imagenesCatalogo[0]) ||
        "/images/placeholder.jpg";

      items.push({
        id: `${baseKeyExact}-${idx}`,
        baseKeyExact,
        baseKeyLower,
        modelo: baseKeyExact,
        descripcion,
        medidas: v?.medidas || entry?.medidas || "",
        Precio: v?.Precio ?? entry?.Precio ?? 0,
        imagen,
        variantIndex: idx,
        variantKey,

        // 👇 NUEVO: origen del catálogo para filtrar sin ambigüedades
        categoria, // 'medianas' | 'grandes'
      });
    });
  });

  return items;
}