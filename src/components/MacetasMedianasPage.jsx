import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getImage } from "../utils/cloudinary";

// === Helpers para normalizar descripción y obtener imágenes por color ===

// Normaliza la descripción de la variante para obtener la "clave" (ej: "DKB240")
function normalizeVarDesc(desc) {
  // Toma la primera palabra (ej: "DKB240" de "DKB240 Beton Bowl...")
  const firstToken = (desc || "").trim().split(/\s+/)[0];
  return firstToken.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
}

function getMacetaColorImage(macetaId, selectedColor, varianteActual) {
  if (selectedColor?.imagenMaceta) return selectedColor.imagenMaceta;

  const byMaceta = macetaColorImages[macetaId];
  if (!byMaceta) return null;

  // 1) Buscar dentro de variantes (si existen)
  if (byMaceta.variantes && varianteActual?.descripcion) {
    const varKey = normalizeVarDesc(varianteActual.descripcion); // Ej: "DKB240"
    const byVar = byMaceta.variantes[varKey];
    const hit = byVar?.[selectedColor?.codigo];
    if (hit) return hit;
  }

  // 2) Si no está en variantes, buscar por color directo
  const hitDirect = byMaceta[selectedColor?.codigo];
  if (hitDirect) return hitDirect;

  return null;
}
/* =========================
   Helpers generales
   ========================= */
function safeSrc(path) {
  if (!path) return getImage("placeholder.jpg");
  try {
    return encodeURI(path);
  } catch {
    return path;
  }
}

/** Construye candidatos de ruta por convención dentro de /images/Macetas-con-Plantas */
function buildColorImagePath({ baseId, varianteDesc, colorCode }) {
  const v = (varianteDesc || "").replace(/\s+/g, "");
  const c = (colorCode || "").trim();
  const b = (baseId || "").trim();

  return [
    getImage(`${b}-${v}-${c}.jpg`),
    getImage(`${b}-${c}.jpg`),
    getImage(`${b}_${c}.jpg`),
    getImage(`${b}${v ? "-" + v : ""}_${c}.jpg`),
  ];
}

/**
 * Decide qué imagen usar para el carrito (respetando color).
 * NO cambia la imagen principal del modal; solo la del carrito y para fallback.
 */
function getDisplayImage({ principal, varianteActual, selectedColor }) {
  const baseSrc =
    varianteActual?.imagenesCatalogo?.[0] ??
    principal?.imagen ??
    getImage("placeholder.jpg");

  // Si el color trae una imagen directa de maceta
  if (selectedColor?.imagenMaceta) {
    return { src: selectedColor.imagenMaceta, fallback: baseSrc };
  }

  // Si hay color, intenta buscar en tu mapa de macetaColorImages
  if (selectedColor?.codigo) {
    const macetaId = principal?.id;
    const varDesc = varianteActual?.descripcion;
    const varianteKey = varDesc ? varDesc.split(" ")[0] : null;

    // Buscar dentro de macetaColorImages
    const byMaceta = macetaColorImages[macetaId];
    if (byMaceta) {
      if (byMaceta.variantes && varianteKey) {
        const varianteImgs = byMaceta.variantes[varianteKey];
        if (varianteImgs && varianteImgs[selectedColor.codigo]) {
          return { src: varianteImgs[selectedColor.codigo], fallback: baseSrc };
        }
      }
      if (byMaceta[selectedColor.codigo]) {
        return { src: byMaceta[selectedColor.codigo], fallback: baseSrc };
      }
    }
  }

  return { src: baseSrc, fallback: getImage("placeholder.jpg") };
}

/* =========================
   Tarjeta (grid principal)
   ========================= */
const MacetaCard = ({ maceta, onClick }) => {
  const { addToCart } = useContext(CartContext);
  if (!maceta) return null;

  return (
    <div
      className="maceta-card"
      onClick={onClick}
      style={{
        cursor: "pointer",
        width: 260,
        height: 260,
        flexShrink: 0,
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={maceta.imagen}
        alt={maceta.modelo}
        style={{
          width: "100%",
          maxHeight: "80%",
          borderRadius: 8,
          objectFit: "contain",
        }}
      />
      <p
        style={{
          marginTop: 12,
          fontWeight: "bold",
          whiteSpace: "normal",
          wordBreak: "break-word",
          width: "100%",
          textAlign: "center",
        }}
      >
        {maceta.modelo}
      </p>
    </div>
  );
};

/* =========================
   Grid (imágenes principales)
   ========================= */
const macetasPrincipales = [
{
   id: "betonBowl",
   modelo: "Beton Bowl",
   imagen: getImage("Beton_Bowl.png"),
},
{
  id: "GRACIASQUAREBETONEFFECT",
   modelo: "GRACIA SQUARE BETON EFFECT",
   imagen: getImage("Gracia_Square_Beton_Effect.jpg"),
   },
{
  id: "GraciaLowBetonEffect",
   modelo: "Gracia Low Beton Effect",
   imagen: getImage("Gracia_Low_Beton_Effect.png"),
   },
{
  id: "GraciaLow",
   modelo: "GRACIA LOW",
   imagen: getImage("Gracia_low.png"),
   },
   {
  id: "GRACIALOWECOWOOD",
   modelo: "GRACIA LOW ECO WOOD",
   imagen: getImage("Gracia_ECO_Wood.png"),
   },
{
  id: "GRACIATUBUSSLIMECOWOOD",
   modelo: "GRACIA TUBUS SLIM ECO WOOD",
   imagen: getImage("Gracia_Tubus_Slim_ECO_Wood.png"),
   },
{
  id: "GRACIASQUAREECOWOOD",
   modelo: "GRACIA SQUARE ECO WOOD",
   imagen: getImage("Gracia_SquareECO_Wood.jpg"),
   },
{
  id: "TUBOPM",
   modelo: "TUBOPM",
   imagen: getImage("Tubo_PM_.jpg"),
   },
{
  id: "GRACIASQUARE",
   modelo: "GRACIA SQUARE",
   imagen: getImage("Gracia_Square.png"),
   },
{
  id: "GRACIATUBUSSLIM",
   modelo: "GRACIA TUBUS SLIM",
   imagen: getImage("Gracia_Tubus_Slim.png"),
   },
   {
  id: "MILLYROUNDA",
   modelo: "MILLY ROUND",
   imagen: getImage("Milly_Round DMIL.png"),
   },
   {
  id: "MILLYROUND",
   modelo: "MILLY ROUND",
   imagen: getImage("Milly_Round DMIN.png"),
   },
 
{
  id: "SPLOFYBOWL",
   modelo: "SPLOFY BOWL",
   imagen: getImage("Splofy_Bowl.jpg"),
   },
   {
  id: "RATOLLARallingSquare",
   modelo: "RATOLLA Ralling Square",
   imagen: getImage("ratolla-raling.jpg"),
   },
   {
  id: "HEOS",
   modelo: "HEOS",
   imagen: getImage("Heos_DBHEN.jpg"),
   },
 {
  id: "PLANTI",
   modelo: "PLANTI",
   imagen: getImage("Planti.jpg"),
   },
 {
  id: "GROWER",
   modelo: "GROWER",
   imagen: getImage("Grower.png"),
   },
 {
  id: "RESPANARALLING",
   modelo: "RESPANA RALLING",
   imagen: getImage("respana_railing.jpg"),
   },
 {
  id: "MillyWall",
   modelo: "Milly Wall",
   imagen: getImage("Milly_Wall.png"),
   },
{
  id: "ARIAOVAL",
   modelo: "ARIA OVAL",
   imagen: getImage("Aria_Oval.jpg"),
   },
{
  id: "CORObowl",
   modelo: "CORObowl",
   imagen: getImage("Coro_Bowl_High.png"),
   },
{
  id: "MOLTAsquarefoot",
   modelo: "MOLTA square foot",
   imagen:getImage("Molta_Square_Foot.jpg"),
   },
{
  id: "DUALAroundslim",
   modelo: "DUALA round slim",
   imagen: getImage("Duala.jpg"),
   },
];
const catalogosData = {
  betonBowl: {
    variantes: [
    
      {descripcion: "DKB240",
    medidas: "Dimensiones: 238 mm x 161 mm",
    Capacidad: "2.3",
    Disponibilidad: "20 und",
    Precio: 8.63,
    imagenesCatalogo: [getImage("DKB240-422U.jpg")],
    Accesorios: [
      {
        nombre: "Insert",
        imagen:  [getImage("insert.jpg")],
 }
 ]
     },
    {
    descripcion: "DKB290",
    medidas: "Dimensiones: 290 mm x 195 mm",
    Capacidad: "3.9",
    Disponibilidad: "20 und",
    Precio: 11.68,
    imagenesCatalogo: [getImage("DKB290-422U.jpg")],
     Accesorios: [
      {
        nombre: "Insert",
        imagen:  [getImage("insert.jpg")],
 }
 ],
     },
     {
    descripcion: "DKB370",
    medidas: "Dimensiones: 370 mm x 218 mm",
    Capacidad: "9",
    Disponibilidad: "20 und",
    Precio: 18.45,
    imagenesCatalogo: [getImage("DKB370-422U.jpg")],
     Accesorios: [
      {
        nombre: "Insert",
        imagen:  [getImage("insert.jpg")],
 }
 ],
     },
  ],
colores: [
        { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg")},
          ]

},

  GRACIASQUAREBETONEFFECT: {
    descripcion: "DGQL400E ",
    medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
    Capacidad: "25",
    Disponibilidad: "75 und",
    Precio: 16.53,
    imagenesCatalogo: [getImage("DGQL400E-422U.jpg")],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  [getImage("base de drenaje interno.jpg")],
 }
 ],

     colores: [
      { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg")},
      { nombre: "crema", codigo: "CY700", imagen:getImage("CY700_kremowy.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
      ]
     },
GraciaLowBetonEffect: {
    descripcion: "DGRL400LE ",
    medidas: "Dimensiones: 380 mm x 207 mm",
    Capacidad: "14.3",
    Disponibilidad: "75 und",
    Precio: 13.05,
    imagenesCatalogo: [getImage("DGRL400LE-CY700.jpg"),],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  [getImage("base de drenaje interno2.jpg")],
 }
 ],

colores: [
     { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg")},
      { nombre: "crema", codigo: "CY700", imagen: getImage("CY700_kremowy.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg")}
      ]

     },
    GraciaLow: {
    descripcion: "DGRL400L ",
    medidas: "Dimensiones: 380 mm x 207 mm",
    Capacidad: "14.3",
    Disponibilidad: "100 und",
    Precio: 11.55,
    imagenesCatalogo: [getImage("DGRL400L-S449.jpg")],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  [getImage("base de drenaje interno2.jpg")],
 }
 ],

colores: [
      { nombre: "Blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg")},
      { nombre: "verde terroso", codigo: "5615C", imagen: getImage("5615C_ziemisty_zielony.jpg")}
      ]

     },
GRACIALOWECOWOOD: {
    descripcion: "DGRL400LW ",
    medidas: "Dimensiones: 380 mm x 207 mm",
    Capacidad: "14.3",
    Disponibilidad: "100 und",
    Precio: 12.13,
    imagenesCatalogo: [getImage("DGRL400LW-S449W.jpg")],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  [getImage("base de drenaje interno2.jpg")],
 }
 ],

colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen: getImage("S449W_bialy_ECO.jpg")},
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg")},
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen: getImage("S433W_antracytowy_ECO.jpg")},
      { nombre: "café ECO", codigo: "4625W", imagen: getImage("4625W_kawa_ECO.jpg")}
      ]
    
     },
     GRACIATUBUSSLIMECOWOOD: {
    descripcion: "DGTL240W ",
    medidas: "Dimensiones: 293 mm x 445 mm",
    Capacidad: "14.5",
    Disponibilidad: "100 und",
    Precio: 10.85,
    imagenesCatalogo: [getImage("DGTL240W-4665W.jpg")],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  [getImage("base de drenaje interno3.jpg")],
 }
 ],

colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen: getImage("S449W_bialy_ECO.jpg")},
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg")},
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen: getImage("S433W_antracytowy_ECO.jpg")},
      { nombre: "café ECO", codigo: "4625W", imagen: getImage("4625W_kawa_ECO.jpg")},
      ]

     },
     GRACIASQUAREECOWOOD: {
    descripcion: "DGQL400W ",
    medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
    Capacidad: "25",
    Disponibilidad: "100 und",
    Precio: 15.35,
    imagenesCatalogo: [getImage("DGQL400W-4665W.jpg"),],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  [getImage("base de drenaje interno.jpg")],
 }
 ],

colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen: getImage("S449W_bialy_ECO.jpg")},
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg")},
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen: getImage("S433W_antracytowy_ECO.jpg")},
      { nombre: "café ECO", codigo: "4625W", imagen: getImage("4625W_kawa_ECO.jpg")}
      ]

     },
    TUBOPM: {
    
      variantes: [
    
    {descripcion: "DPOD240 ",
    medidas: "Dimensiones: 239 mm x 231 mm",
    Capacidad: "8",
    Disponibilidad: "75 und",
    Precio: 6.20,
    imagenesCatalogo: [getImage("DPOD240-S433.jpg")],
     Accesorios: [
      {
        nombre: "Platillo",
        imagen:  [getImage("PLATILLO TUBOPM.jpg")],
 }
 ]
     },
    {
    descripcion: "DPOD350...",
    medidas: "Dimensiones: 338 x 326 mm",
    Capacidad: "22.5",
    Disponibilidad: "75 und",
    Precio: 10.88,
    imagenesCatalogo: [getImage("DPOD350-S433.jpg")],
     Accesorios: [
      {
        nombre: "Platillo",
        imagen:  [getImage("PLATILLO TUBOPM.jpg")],
 }
 ]
     },
     {
    descripcion: "DPOD400",
    medidas: "Dimensiones: 390 mm x 375 mm",
    Capacidad: "35",
    Disponibilidad: "75 und",
    Precio: 16.78,
    imagenesCatalogo: [getImage("DPOD400-S433.jpg")],
     Accesorios: [
      {
        nombre: "Platillo",
        imagen:  [getImage("PLATILLO TUBOPM.jpg")],
 }
 ]
     },
  ],

colores: [
      { nombre: "blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg")},
      { nombre: "pino verde", codigo: "2411U", imagen: getImage("2411U_zielona_pinia.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg")}
      
      ]

  },
    GRACIASQUARE: {
    descripcion: "DGQL400",
    medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
    Capacidad: "25",
    Disponibilidad: "100 und",
    Precio: 14.63,
    imagenesCatalogo: [getImage("DGQL400-S449.jpg")],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  [getImage("base de drenaje interno.jpg")],
 }
 ],

colores: [
      { nombre: "blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg")},
      { nombre: "verde terroso", codigo: "5615C", imagen: getImage("5615C_ziemisty_zielony.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg")}
      
      ]
    
     },
     GRACIATUBUSSLIM: {
    descripcion: "DGTL240",
    medidas: "Dimensiones: 239 mm x 445 mm x 235 mm",
    Capacidad: "14.5",
    Disponibilidad: "100 und",
    Precio: 10.33,
    imagenesCatalogo: [getImage("DGTL240-S449.jpg"),],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  [getImage("base de drenaje interno3.jpg")],
 }
 ],

colores: [
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "verde terroso", codigo: "5615C", imagen:getImage("5615C_ziemisty_zielony.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")},
      
      ]

     },
    MILLYROUNDA: {
    descripcion: "DMIG190",
    medidas: "Dimensiones: 188 mm x 277 mm",
    Capacidad: "3.7",
    Disponibilidad: "30 und",
    Precio: 2.83,
    imagenesCatalogo: [getImage("DMIG190-4985U.jpg")],
     Accesorios: [
      
 ],

colores: [
      { nombre: "rojo oscuro", codigo: "4985U", imagen:getImage("4985U_marsala.jpg")},
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "pino verde", codigo: "2411U", imagen:getImage("2411U_zielona_pinia.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")},
      { nombre: "carbón", codigo: "446U", imagen:getImage("446U_wegiel.jpg")}
      
      ]

     },
     MILLYROUND: {

      variantes: [

    {descripcion: "DMIL220",
    medidas: "Dimensiones: 220 mm x 262 mm",
    Capacidad: "5.7",
    Disponibilidad: "30 und",
    Precio: 4.98,
    imagenesCatalogo: [getImage("DMIL220-4985U.jpg")],
     Accesorios: [
      
 ]
    
     },
     {descripcion: "DMIN200",
    medidas: "Dimensiones: 195 mm x 210 mm",
    Capacidad: "5.20",
    Disponibilidad: "48 und",
    Precio: 2.53,
    imagenesCatalogo: [getImage("DMIN200-4985U.jpg")],
     Accesorios: [
     
 ]
     },
     ],

colores: [
      { nombre: "rojo oscuro", codigo: "4985U", imagen:getImage("4985U_marsala.jpg")},
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "pino verde", codigo: "2411U", imagen:getImage("2411U_zielona_pinia.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")},
      { nombre: "carbón", codigo: "446U", imagen:getImage("446U_wegiel.jpg")}
      
      ]

     },
      SPLOFYBOWL: {

      variantes: [

    {descripcion: "DKSP240",
    medidas: "Dimensiones: 239 mm x 161 mm",
    Capacidad: "2.3",
    Disponibilidad: "60 und",
    Precio: 8.63,
    imagenesCatalogo: [getImage("DKSP240-7529U.jpg")],
     
     },
     {descripcion: "DKSP290",
    medidas: "Dimensiones: 290 mm x195 mm",
    Capacidad: "3.9",
    Disponibilidad: "60 und",
    Precio: 11.68,
    imagenesCatalogo: [getImage("DKSP290-7529U.jpg")],
     
     },
      {descripcion: "DKSP370",
    medidas: "Dimensiones: 370 mm x 218 mm",
    Capacidad: "9",
    Disponibilidad: "60 und",
    Precio: 18.45,
    imagenesCatalogo: [getImage("DKSP370-7529U.jpg")],
     
     },
     ],

colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
         ]

     },
     RATOLLARallingSquare: {

      variantes: [

    {descripcion: "DRLB280",
    medidas: "Dimensiones: 272 mm x 272 mm x 225 mm",
    Capacidad: "8.5",
    Disponibilidad: "30 und",
    Precio: 5.58,
    imagenesCatalogo: [getImage("DRLB280-7529U.jpg")],
     
     },
     {descripcion: "DRLB400",
    medidas: "Dimensiones: 396 mm x 272 mm x 225 mm",
    Capacidad: "13",
    Disponibilidad: "30 und",
    Precio: 8.45,
    imagenesCatalogo: [getImage("DRLB400-7529U.jpg")],
     
     },
      ],

colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "sombra", codigo: "440U", imagen:getImage("440U_umbra.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
         ]

     },
    HEOS: {
    
      variantes: [

    {descripcion: "DLHEN470",
    medidas: "Dimensiones: 468 mm x 295 mm",
    Capacidad: "31/45",
    Disponibilidad: "20 und",
    Precio: 18.38,
    imagenesCatalogo: [getImage("DLHEN470-S433.jpg")],
     
     },
     {descripcion: "DBHEN470",
    medidas: "Dimensiones: 468 mm x 440 mm",
    Capacidad: "31/69",
    Disponibilidad: "20 und",
    Precio: 22.28,
    imagenesCatalogo: [getImage("DBHEN470-S433.jpg")],
    
     },
      {descripcion: "DBHER470",
    medidas: "Dimensiones: 468 mm x 450 mm",
    Capacidad: "31/74",
    Disponibilidad: "12 und",
    Precio: 22.28,
    imagenesCatalogo: [getImage("DBHER470-S433.jpg")],
    
     },
     ],

colores: [
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
         ]

     },
    PLANTI: {
    
      variantes: [

    {descripcion: "DMLR190",
    medidas: "Dimensiones: 195 mm x 160 mm",
    Capacidad: "3.1",
    Disponibilidad: "100 und",
    Precio: 0.83,
    imagenesCatalogo: [getImage("DMLR190.jpg")],
     
     },
     {descripcion: "DMLR230",
    medidas: "Dimensiones: 235 mm x 190 mm",
    Capacidad: "5.4",
    Disponibilidad: "100 und",
    Precio: 1.25,
    imagenesCatalogo: [getImage("DMLR230.jpg")],
     
     },
      ],

colores: [
      { nombre: "transparente", codigo: "S429", imagen:getImage("S449_bialy.jpg")},
               ]

     },
     GROWER: {
    
      variantes: [

    {descripcion: "DOGR180",
    medidas: "Dimensiones: 179 mm x 165 mm",
    Capacidad: "3",
    Disponibilidad: "100 und",
    Precio: 0.95,
    imagenesCatalogo: [getImage("DOGR180.jpg")],
     
     },
     {descripcion: "DOGR200",
    medidas: "Dimensiones: 199 mm x 183 mm",
    Capacidad: "4",
    Disponibilidad: "100 und",
    Precio: 1.13,
    imagenesCatalogo: [getImage("DOGR200.jpg")],
     
     },
      {descripcion: "DOGR240",
    medidas: "Dimensiones: 235 mm x 216 mm",
    Capacidad: "6.5",
    Disponibilidad: "100 und",
    Precio: 1.50,
    imagenesCatalogo: [getImage("DOGR240.jpg")],
     
     },
     ],

colores: [
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
               ]

     },
     RESPANARALLING: {
    descripcion: "DREB290",
    medidas: "Dimensiones: 288 mm x 298 mm x 209 mm",
    Capacidad: "9",
    Disponibilidad: "20 und",
    Precio: 3.63,
    imagenesCatalogo: [getImage("DREB290-S433.jpg")],
     

colores: [
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
         ]

     },
     MillyWall: {
    descripcion: "DMIW150",
    medidas: "Dimensiones: 146 mm x 176 mm",
    Capacidad: "2.1",
    Disponibilidad: "120 und",
    Precio: 2.40,
    imagenesCatalogo: [getImage("DMIW150.jpg")],
     
colores: [
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "pino verde", codigo: "2411U", imagen:getImage("2411U_zielona_pinia.jpg")},
      { nombre: "rojo oscuro", codigo: "4985U", imagen:getImage("4985U_marsala.jpg")},
      { nombre: "carbón", codigo: "446U", imagen:getImage("446U_wegiel.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
      
      ]

     },
    ARIAOVAL: {
    descripcion: "TAO40",
    medidas: "Dimensiones: 400 mm X 200 mm X 160 mm",
    Capacidad: "5",
    Disponibilidad: "12 und",
    Precio: 24.63,
    imagenesCatalogo: [getImage("TAO40.jpg")],
     
colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "gris piedra", codigo: "405U", imagen:getImage("405U_szary_kamienny.jpg")}
      
      ]
     },
      CORObowl: {

      variantes: [

    {descripcion: "TCB40H",
    medidas: "Dimensiones: 400 mm X 530 mm",
    Capacidad: "9",
    Disponibilidad: "9 und",
    Precio: 79.63,
    imagenesCatalogo: [getImage("TCB40H.jpg")],
    
     },
     {descripcion: "TCB48",
    medidas: "Dimensiones: 480 mm X 420 mm",
    Capacidad: "22",
    Disponibilidad: "9 und",
    Precio: 92.90,
    imagenesCatalogo: [getImage("TCB48.jpg")],
     
     },
     ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "gris piedra", codigo: "405U", imagen:getImage("405U_szary_kamienny.jpg")},
      
      ]

     },
     MOLTAsquarefoot: {

      variantes: [

    {descripcion: "TMSF40",
    medidas: "Dimensiones: 400 mm X 360 mm",
    Capacidad: "19",
    Disponibilidad: "6 und",
    Precio: 73.00,
    imagenesCatalogo: [getImage("TMSF40.jpg"),],
    
     },
     {descripcion: "TMSF48",
    medidas: "Dimensiones: 480 mm X 390 mm",
    Capacidad: "32",
    Disponibilidad: "4 und",
    Precio: 92.90,
    imagenesCatalogo: [getImage("TMSF48.jpg"),],
     
     },
     ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
     
      
      ]

     },
     DUALAroundslim: {

      variantes: [

    {descripcion: "TDS30",
    medidas: "Dimensiones: 300/250 mm X 540 mm",
    Capacidad: " 8 y 5 L",
    Disponibilidad: "4 und",
    Precio: 73.98,
    imagenesCatalogo: [getImage("TDS30.jpg")],
    
     },
     {descripcion: "TDS40",
    medidas: "Dimensiones: 400/300 mm X700 mm",
    Capacidad: "17 y 12",
    Disponibilidad: "4 und",
    Precio: 103.60,
    imagenesCatalogo: [getImage("TDS40.jpg"),],
     
     },
     ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
     ],
    },
  };

  const macetaColorImages = {
   betonBowl: {
    variantes: {
    DKB240:{
      "422U": getImage("Beton_Bowl_DKB_150_422U.jpg"),
  },
        DKB290: {
      "422U": getImage("Beton_Bowl_DKB_290_422U_m.jpg"),
      },

      DKB370: {
        "422U": getImage("Beton_Bowl_DKB_370_422U_m.jpg"),
      },
    },
  },
  GRACIASQUAREBETONEFFECT: {
    "422U": getImage("Gracia_Square_Beton_Effect_DGQL400E_422U.jpg"),
    "CY700": getImage("Gracia_Square_Beton_Effect_DGQL400E_CY700.jpg"),
    "S433": getImage("Gracia_Square_Beton_Effect_DGQL400E_S433.jpg"),
  },

GraciaLowBetonEffect: {
    "422U": getImage("Gracia_Low_Beton Effect_DGRL400LE_422U.png"),
    "CY700": getImage("Gracia_Low_Beton_Effect_DGRL400LE_CY700.png"),
    "S433": getImage("Gracia_Low_Beton_Effect_DGRL400LE_S433.png"),
  },
  
      GraciaLow: {
        "S449": getImage("Gracia_Low_DGRL400L_S449.jpg"),
        "443U": getImage("Gracia_Low_DGRL400L_443U.jpg"),
        "S433": getImage("Gracia_Low_DGRL400L_S433.jpg"),
        "5615C": getImage("Gracia_Low_DGRL400L_5615C.jpg"),
  },

      GRACIALOWECOWOOD: {
        "S449W": getImage("Gracia_Low_ECO_Wood_DGRL400LW_S449W_m.jpg"),
        "4665W": getImage("Gracia_Low_ECO_Wood_DGRL400LW_4665W_naturo.jpg"),
        "S433W": getImage("Gracia_Low_ECO_Wood_DGRL400LW_S433W.jpg"),
        "4625W": getImage("Gracia_Low_Eco_Wood_DGRL400LW_4625W.jpg"),
},
      GRACIATUBUSSLIMECOWOOD: {
        "S449W": getImage("Gracia_Tubus_Slim_ECO_Wood_DGTL240W_S449W_m.jpg"),
        "4665W": getImage("Gracia_Tubus_Slim_ECO_Wood_DGTL240W_4665W.jpg"),
        "S433W": getImage("Gracia_Tubus_Slim_ECO_Wood_DGTL240W_S433W.jpg"),
        "4625W": getImage("Gracia_Tubus_Slim_ECO_Wood_DGTL240W_4625W.jpg"),
  },
      GRACIASQUAREECOWOOD: {
        "S449W": getImage("Gracia_Square_ECO_Wood_DGQL400W_S449W.jpg"),
        "4665W": getImage("Gracia_Square_ECO_Wood_DGQL400W_4665W.jpg"),
        "S433W": getImage("Gracia_Square_ECO_Wood_DGQL400W_S433W.jpg"),
        "4625W": getImage("Gracia_Square_ECO_Wood_DGQL400W_4625W.jpg"),
  },

          TUBOPM: {
        "S449": getImage("Tubo_PM_DPOD_S449.jpg"),
        "2411U": getImage("Tubo_PM_DPOD400_2411U.jpg"),
        "S433": getImage("Tubo_PM_DPOD_443U.jpg"),
          },
           GRACIASQUARE: {
        "S449": getImage("Gracia_square_DGQL400_S449.jpg"),
        "443U": getImage("Gracia_square_DGQL400_443U.jpg"),
        "5615C": getImage("Gracia_square_DGQL400_5615C.jpg"),
        "S433": getImage("Gracia_square_DGQL400_S433.jpg"),
          },

         GRACIATUBUSSLIM: {
        "S449": getImage("Gracia_Tubus_Slim_DGTL240_S449.jpg"),
        "443U": getImage("Gracia_Tubus_Slim_DGTL240_S443U.jpg"),
        "5615C": getImage("Gracia_Tubus_Slim_DGTL240_5615C.jpg"),
        "S433": getImage("Gracia_Tubus_Slim_DGTL240_S433.jpg"),
          },

          MILLYROUNDA: {
            "4985U": getImage("Milly_DMIG190_4985U_m.jpg"),
            "S449": getImage("Milly_DMIG190_S449.jpg"),
            "443U": getImage("Milly_DMIG190_443U_m.jpg"),
            "2411U": getImage("Milly_DMIG190_2411U.jpg"),
            "S433": getImage("Milly_DMIG190_S433_m.jpg"),
            "446U": getImage("Milly_DMIG190_446U.jpg"),
            },

          MILLYROUND: {
            variantes: {
              DMIL220: {
            "4985U": getImage("Milly_Round_DMIL220_4985U.jpg"),
            "S449": getImage("Milly_Round_DMIL220_S449_m.jpg"),
            "443U": getImage("Milly_Round_DMIL220_443U_m.jpg"),
            "2411U": getImage("Milly_Round_DMIL220_2411U.jpg"),
            "S433": getImage("Milly_DMIL220_S433_m.jpg"),
            "446U": getImage("Milly_DMIL220_446U_m.jpg"),
            },
              DMIN200: {
            "4985U": getImage("Milly_DMIN200_4985U_m.jpg"),
            "S449": getImage("Milly_Round_DMIN200_S449.jpg"),
            "443U": getImage("Milly_Round_DMIN200_443U.jpg"),
            "2411U": getImage("Milly_Round_DMIN200_2411U.jpg"),
            "S433": getImage("Milly_Round_DMIN200_S433.jpg"),
            "446U": getImage("Milly_Round_DMIN200_446U.jpg"),
            },
          },
        },

          SPLOFYBOWL: {
            variantes: {
              DKSP240: {
            "7529U": getImage("DKSP180_7529U SPLOFY.jpg"),
            "S449": getImage("DKSP180_S449 SPLOFY.jpg"),
            "S433": getImage("DKSP180_S433 SPLOFY.jpg"),
                  },
              DKSP290: {
            "7529U": getImage("DKSP290_7529U SPLOFY.jpg"),
            "S449": getImage("DKSP290_S449 SPLOFY.jpg"),
            "S433": getImage("DKSP290_S433 SPLOFY.jpg"),
                  },
              DKSP370: {  
            "7529U": getImage("DKSP370-7529U SPLOFY.jpg"),
            "S449": getImage("DKSP370_S449 SPLOFY.jpg"),
            "S433": getImage("DKSP370_S433 SPLOFY.jpg"),

            },
          },
        },
         RATOLLARallingSquare: {
           variantes: {
              DRLB280: {
            "7529U": getImage("DRLB280_7529U_RATOLLA.png"),
            "440U": getImage("DRLB280_440U_RATOLLA.png"),
            "S433": getImage("DRLB280_S433_RATOLLA.png"),
                  },
              DRLB400: {
            "7529U": getImage("DRLB400_7529U_RATOLLA.jpg"),
            "440U": getImage("DRLB400_440U_RATOLLA.jpg"),
            "S433": getImage("DRLB400_S433_RATOLLA.jpg"),
                  },
                 },
        },
          HEOS: {
            variantes: {
              DLHEN470: {
            S449: getImage("Heos_DLHEN470_S449.jpg"),
            S433: getImage("Heos_DLHEN470_S433.jpg"),
      },
              DBHEN470: {
            S449: getImage("Heos_DBHEN470_S449.jpg"),
            S433: getImage("Heos_DBHEN470_S433_m.jpg"),
      },
              DBHER470: {
            S449: getImage("Heos_DBHER_S449.jpg"),
            S433: getImage("Heos_DBHER_S433.jpg"),
      },
    },
  },
         PLANTI: {
          variantes: {
              DMLR190: {
            S429: getImage("Planti_DMLR190_S429.jpg"),
      },
              DMLR230: {
            S429: getImage("Planti_DMLR230_S429.jpg"),
      },
    },
  },
             GROWER: {
              variantes: {
              DOGR180: {
            S449: getImage("Grower_DOGR180_S449.jpg"),
      },
              DOGR200: {
            S449: getImage("Grower_DOGR200_S449.jpg"),
            },
              DOGR240: {
            S449: getImage("Grower_DOGR240_S449.jpg"),
       },
     },
   },
            RESPANARALLING: {
             S433: getImage("DREB290_S433_RESPANA.jpg"),
              },

                 MillyWall: {
            "S449": getImage("Milly_Wall_DMIW150_S449_m.jpg"),
            "443U": getImage("Milly_Wall_DMIW150_443U.jpg"),
            "2411U": getImage("Milly_Wall_DMIW150_2411U_m.jpg"),
            "4985U": getImage("Milly_Wall_DMIW150_4985U_m.jpg"),
            "446U": getImage("Milly_Wall_DMIW150_446U_m.jpg"),
            "S433": getImage("Milly_Wall_DMIW150_S433.jpg"),
            },

                ARIAOVAL: {
            "7529U": getImage("Aria_Oval_TAO40_101GR_sand_m.jpg"),
            "443U": getImage("Aria_Oval_TAO40_105GR_tiny_granite.jpg"),
            "405U": getImage("Aria_Oval_TAO40_107GR_graphite.jpg"),
                  },
                
                CORObowl: {
                 variantes: {
              TCB40H: {
            "7529U": getImage("Coro_Bowl_High_TCB40H_101GR.jpg"),
            "443U": getImage("Coro_Bowl_High_TCB40H_107GR_graphite.jpg"),
            "405U": getImage("Coro_Bowl_High_TCB40H_109GR_m.jpg"),
                  },
              TCB48: {
            "7529U": getImage("Coro_Bowl_TCB48_101GR.jpg"),
            "443U": getImage("Coro_Bowl_TCB48_107GR_graphite.jpg"),
            "405U": getImage("Coro_Bowl_TCB48_109GR.jpg"),
                  },
                 },
        }, 
              MOLTAsquarefoot: {
                 variantes: {
              TMSF40: {
            "7529U": getImage("Molta_Square_Foot_TMSF40_101GR.jpg"),
            "443U": getImage("Molta_Square_Foot_TMSF40_107GR.jpg"),
            
                  },
              TMSF48: {
            "7529U": getImage("Molta_Square_Foot_TMSF48_101GR.jpg"),
            "443U": getImage("Molta_Square_Foot_TMSF48_107GR.jpg"),
                },
              },
            }, 

             DUALAroundslim: {
               variantes: {
              TDS30: {
            "7529U": getImage("Duala_Round_Slim_TDR30S_101GR_m.jpg"),
            "443U": getImage("Duala_Round_Slim_TDR30S_107GR.jpg"),
            
                  },
              TDS40: {
            "7529U": getImage("Duala_Round_Slim_TDR40S_101GR_m.jpg"),
            "443U": getImage("Duala_Round_Slim_TDR40S_107GR_m.jpg"),
                },
              },
            }, 
};

  /** Resuelve la imagen de vista previa por maceta+color (debajo de los swatches) */
function GetMacetaColorImage(macetaId, selectedColor) {
  if (selectedColor?.imagenMaceta) return selectedColor.imagenMaceta;
  const byMaceta = macetaColorImages[macetaId];
  if (!byMaceta) return null;
  return byMaceta[selectedColor?.codigo] || null;
}

/* =========================
   Componente principal
   ========================= */
function MacetasMedianasPage() {
  const [catalogoVisible, setCatalogoVisible] = useState(null);
  const [varianteIndex, setVarianteIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useContext(CartContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const macetaSeleccionada = catalogoVisible ? catalogosData[catalogoVisible] : null;
  const varianteActual = macetaSeleccionada?.variantes
    ? macetaSeleccionada.variantes[varianteIndex]
    : macetaSeleccionada;
  const principal = macetasPrincipales.find((m) => m.id === catalogoVisible);

  // Imagen calculada por color para carrito (no cambia la principal del modal)
  const { src: displayImg, fallback: displayFallback } = getDisplayImage({
    principal,
    varianteActual,
    selectedColor,
  });

  // Deep-link: ?open=ID&variante=INDEX
  const location = useLocation();
  useEffect(() => {
  const params = new URLSearchParams(location.search);

    const openFromQuery = params.get("open");
  const varianteFromQuery = params.get("variante");

  const open = openFromQuery ?? location.state?.open ?? null;
  const varianteIdxRaw = varianteFromQuery ?? location.state?.variante ?? 0;

  if (open && catalogosData[open]) {
    setCatalogoVisible(open);

    const totalVariantes = Array.isArray(catalogosData[open].variantes)
      ? catalogosData[open].variantes.length
      : 0;

    if (totalVariantes > 0) {
      const idx = Number.parseInt(varianteIdxRaw, 10);
      const safeIdx = Number.isFinite(idx) ? Math.max(0, Math.min(idx, totalVariantes - 1)) : 0;
      setVarianteIndex(safeIdx);
    } else {
      setVarianteIndex(0);
    }

    // 🔑 Resetear color al abrir nueva maceta
    setSelectedColor(null);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [location.search, location.state]);

useEffect(() => {
  if (catalogoVisible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [catalogoVisible]);

  return (
    <div style={{ maxWidth: "95vw", margin: "10px auto 0", textAlign: "center" }}>
      {catalogoVisible ? (
        <div
          style={{
    position: "fixed", // ✅ Puedes mantenerlo, pero hay que evitar height: 100vh
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, // ✅ Esto permite scroll completo
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.5)",
    overflowY: "auto", // ✅ Para que puedas ver hasta abajo
    overflowX: "hidden",
    padding: "20px 10px",
    boxSizing: "border-box",
  }}

        >
          <div
            style={{
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    maxWidth: "95vw",
    width: "100%",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    minHeight: "100%",          // ✅ Asegura que siempre haya scroll si el contenido lo requiere
    boxSizing: "border-box",
  }}
          >
            <button
              onClick={() => setCatalogoVisible(null)}
              style={{
                marginBottom: 0,
                padding: "8px 16px",
                background: "#2e7d32",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Volver a imágenes principales
            </button>

            {macetaSeleccionada?.variantes && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <button
                  onClick={() => {
                    setVarianteIndex((prev) =>
                      prev === 0 ? macetaSeleccionada.variantes.length - 1 : prev - 1
                    );
                    setSelectedColor(null); // 🔑 resetear color
                  }}
                  style={{ cursor: "pointer" }}
                >
                    ← Anterior
</button>
<button
  onClick={() => {
    setVarianteIndex((prev) =>
      prev === macetaSeleccionada.variantes.length - 1 ? 0 : prev + 1
    );
    setSelectedColor(null); // 🔑 resetear color
  }}
>
  Siguiente →
</button>
              </div>
            )}

            {/* === MODAL === */}
            <div
              style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "24px",
              alignItems: "flex-start",
              marginTop: 10,
              }}
            >
              {/* Columna Izquierda: Imagen + Detalles */}
              <div>
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e5e7eb",
                    borderRadius: 16,
                    padding: 12,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <img
                    src={varianteActual?.imagenesCatalogo?.[0] ?? principal?.imagen}
                    alt={principal?.modelo}
                    style={{
                      width: "100%",
                      height: 480,
                      objectFit: "contain",
                      borderRadius: 12,
                      background: "white",
                    }}
                    onError={(e) => {
                      e.currentTarget.src = displayFallback;
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: 14,
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 12,
                    padding: 14,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#111827",
                      marginBottom: 6,
                    }}
                  >
                    Características
                  </div>

                  <div style={{ display: "grid", rowGap: 6 }}>
                    <div
                      style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
                    >
                      <span style={{ color: "#6b7280", minWidth: 110 }}>Descripción</span>
                      <span
                        style={{
                          color: "#111827",
                          fontWeight: 500,
                          textAlign: "right",
                        }}
                      >
                        {varianteActual?.descripcion ?? principal?.modelo ?? "-"}
                      </span>
                    </div>

                    {(varianteActual?.medidas ?? macetaSeleccionada?.medidas) && (
                      <div
                        style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
                      >
                        <span style={{ color: "#6b7280", minWidth: 110 }}>Medidas</span>
                        <span
                          style={{
                            color: "#111827",
                            fontWeight: 500,
                            textAlign: "right",
                          }}
                        >
                          {varianteActual?.medidas ?? macetaSeleccionada?.medidas}
                        </span>
                      </div>
                    )}

                    {(varianteActual?.Capacidad ?? macetaSeleccionada?.Capacidad) && (
                      <div
                        style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
                      >
                        <span style={{ color: "#6b7280", minWidth: 110 }}>Capacidad</span>
                        <span
                          style={{
                            color: "#111827",
                            fontWeight: 500,
                            textAlign: "right",
                          }}
                        >
                          {(varianteActual?.Capacidad ?? macetaSeleccionada?.Capacidad) + " L"}
                        </span>
                      </div>
                    )}

                    {(varianteActual?.Disponibilidad ?? macetaSeleccionada?.Disponibilidad) && (
                      <div
                        style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
                      >
                        <span style={{ color: "#6b7280", minWidth: 110 }}>
                          Disponibilidad
                        </span>
                        <span
                          style={{
                            color: "#111827",
                            fontWeight: 500,
                            textAlign: "right",
                          }}
                        >
                          {varianteActual?.Disponibilidad ?? macetaSeleccionada?.Disponibilidad}
                        </span>
                      </div>
                    )}

                    {(varianteActual?.Precio ?? macetaSeleccionada?.Precio) && (
                      <div
                        style={{ display: "flex", justifyContent: "space-between", gap: 10 }}
                      >
                        <span style={{ color: "#6b7280", minWidth: 110 }}>Precio</span>
                        <span
                          style={{
                            color: "#16a34a",
                            fontWeight: 700,
                            textAlign: "right",
                          }}
                        >
                          {"$ " +
                            Number(
                              varianteActual?.Precio ?? macetaSeleccionada?.Precio
                            ).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Colores + Vista previa + Accesorios */}
              <div              
                style={{
                display: "grid",
                gap: 16,
                paddingBottom: 100, // ✅ espacio extra para botón
                }}
                >

                {/* Colores */}
                {macetaSeleccionada?.colores && (
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 12,
                      padding: 14,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#111827",
                        marginBottom: 8,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span>Colores disponibles</span>
                      {selectedColor && (
                        <span style={{ color: "#6b7280", fontWeight: 500, fontSize: 13 }}>
                          · {selectedColor.nombre}
                        </span>
                      )}
                    </div>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {macetaSeleccionada.colores.map((color, index) => (
                        <div
                          key={index}
                          onClick={() => setSelectedColor(color)}
                          title={color.nombre}
                          style={{
                            width: 55,
                            height: 20,
                            borderRadius: "8px",
                            overflow: "hidden",
                            border:
                              selectedColor?.codigo === color.codigo
                                ? "3px solid #16a34a"
                                : "1px solid #e5e7eb",
                            cursor: "pointer",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                            transition: "transform 0.15s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "scale(1.08)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        >
                          <img
                            src={color.imagen}
                            alt={color.nombre}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Vista de maceta en color (NO reemplaza la imagen principal) */}
                {selectedColor && (
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: 12,
                      padding: 14,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#111827",
                        marginBottom: 8,
                      }}
                    >
                      Vista en color seleccionado{" "}
                      <span style={{ color: "#6b7280", fontWeight: 500 }}>
                        ({selectedColor.nombre})
                      </span>
                    </div>

                    {(() => {
                      const previewSrc = getMacetaColorImage(principal?.id, selectedColor, varianteActual);
                      if (!previewSrc) {
                        return (
                          <div style={{ color: "#6b7280", fontSize: 13 }}>
                            No hay imagen para <strong>{principal?.modelo}</strong> en el color{" "}
                            <strong>{selectedColor?.nombre}</strong>.
                            <br />
                            Agrega la ruta en <code>macetaColorImages</code> o en{" "}
                            <code>selectedColor.imagenMaceta</code>.
                          </div>
                        );
                      }
                      return (
                        <img
                          src={previewSrc}
                          alt={`Vista ${principal?.modelo} - ${selectedColor?.nombre}`}
                          style={{
                            width: "100%",
                            height: 260,
                            objectFit: "contain",
                            borderRadius: 8,
                            background: "#fff",
                          }}
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      );
                    })()}
                  </div>
                )}

                {/* Accesorios */}
                {Array.isArray(varianteActual?.Accesorios) &&
                  varianteActual.Accesorios.length > 0 && (
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderRadius: 12,
                        padding: 14,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 15,
                          color: "#111827",
                          marginBottom: 8,
                        }}
                      >
                        Incluye accesorios
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fill, minmax(140px, 1fr))",
                          gap: 12,
                        }}
                      >
                        {varianteActual.Accesorios.filter(
                          (acc) => !!acc && !!acc.imagen
                        ).map((acc, i) => {
                          const src = Array.isArray(acc.imagen)
                            ? acc.imagen[0]
                            : acc.imagen;
                          return (
                            <div
                              key={i}
                              style={{
                                background: "#ffffff",
                                border: "1px solid #e5e7eb",
                                borderRadius: 10,
                                overflow: "hidden",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                                transition:
                                  "transform 0.15s ease, box-shadow 0.15s ease",
                                cursor: "default",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow =
                                  "0 8px 16px rgba(0,0,0,0.08)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                  "0 2px 8px rgba(0,0,0,0.06)";
                              }}
                            >
                              <img
                                src={src}
                                alt={acc?.nombre ?? "Accesorio"}
                                style={{ width: "100%", height: 120, objectFit: "cover" }}
                              />
                              <div
                                style={{
                                  padding: "8px 10px",
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: "#111827",
                                  textAlign: "center",
                                }}
                              >
                                {acc?.nombre ?? "Accesorio"}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
              </div>
            </div>
            {/* === FIN MODAL === */}

            <button
              onClick={() => {
                if (!selectedColor) {
                  alert("Por favor, selecciona un color antes de agregar al carrito.");
                  return;
                }
                 const { src: displayImg } = getDisplayImage({
                    principal,
                    varianteActual,
                    selectedColor,
                 });

                addToCart({
                  id: `${principal?.id ?? catalogoVisible}-${varianteActual?.descripcion ?? "base"}-${selectedColor?.codigo ?? "base"}`,
                  modelo: principal?.modelo ?? catalogoVisible,
                  imagen: displayImg,
                  imagenColor: selectedColor.imagen,
                  colorNombre: selectedColor.nombre,
                  medidas: varianteActual?.medidas ?? "",
                  Capacidad: varianteActual?.Capacidad ?? "",
                  Disponibilidad: varianteActual?.Disponibilidad ?? "",
                  Precio: varianteActual?.Precio ?? 0,
                  color: selectedColor
                 });
              }}
              style={{
                marginTop: 10,
                padding: "8px 16px",
                background: "#2e7d32",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginBottom: "40px",
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ) : (
        <>
          <h1>Macetas Medianas</h1>
          <div
            style={{
              marginTop: 12,
              maxWidth: "90vw",
              margin: "0 auto",
              padding: "20px 0",
              overflowX: "auto",
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {macetasPrincipales.map((m) => (
              <MacetaCard key={m.id} maceta={m} onClick={() => setCatalogoVisible(m.id)} />
            ))}
          </div>
          <p style={{ marginTop: 20, fontStyle: "italic", color: "#666" }}>
            Haz clic en una maceta para ver su catálogo completo
          </p>
        </>
      )}
    </div>
  );
}

export { macetasPrincipales };
export { catalogosData as catalogoMacetasMedianas };
export default MacetasMedianasPage;