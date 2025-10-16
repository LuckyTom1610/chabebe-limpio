import { getImage } from "../utils/cloudinary";

export const sembremosEnCasaData = [

  {
   id: "BLOMA",
   nombre: "BLOMA",
   categoria: "Sembremos en Casa",
   descripcion: "DBLO600",
   medidas: "580 mm x 288 mm x 780 mm",
   Capacidad: "-",
   Disponibilidad: "8 und",
   Precio: 18,
   imagenesCatalogo: [getImage("DBLO600.jpg")],
   colores: [
      {
        nombre: "gris piedra",
        codigo: "405U",
        imagen: getImage("405U_szary_kamienny.jpg"),
      },
    ],
  imagen: getImage("Bloma.jpg"),
  },
  {
  
   id: "RESPANAPLANTERWOODHIGHSET",
   nombre: "RESPANA PLANTER WOOD HIGH SET",
   categoria: "Sembremos en Casa",
   descripcion: "ISEW780H",
   medidas: "770 mm x 380 mm x 795 mm",
   Capacidad: "55",
   Disponibilidad: "35 und",
   Precio: 70.5,
   imagenesCatalogo: [getImage("ISEW780H_2.jpg")],
   colores: [
   {
    nombre: "gris piedra",
    codigo: "405U",
    imagen: getImage("405U_szary_kamienny.jpg"),
      },
    ],
  imagen: getImage("Respana Planter Wood.jpg"),
  },
  {
  
  id: "HOMEGROWER",
  nombre: "HOME GROWER",
  categoria: "Sembremos en Casa",
  descripcion: "DEPO400",
  medidas: "390 mm x 375 mm",
  Capacidad: "35",
  Disponibilidad: "6 und",
  Precio: 23.25,
  imagenesCatalogo: [
      getImage("Home_Grower_DEPO300_4665W_m.jpg"),
    ],
    colores: [
      {
        nombre: "natural ECO",
        codigo: "4665W",
        imagen: getImage("4665W_naturo_ECO.jpg"),
      },
      {
        nombre: "pino verde",
        codigo: "2411U",
        imagen: getImage("2411U_zielona_pinia.jpg"),
      },
      {
        nombre: "gris oscuro",
        codigo: "S433",
        imagen: getImage("S433_antracytowy.jpg"),
      },
    ],
  imagen: getImage("Botanic_DBOP780_S433_DEPO_2411U_aranz_02_m.jpg"),
  },
 {

    id: "TOMATOGROWER",
    nombre: "TOMATO GROWER",
    categoria: "Sembremos en Casa",
    descripcion: "IPOM350",
    medidas: "345 mm x 265 mm",
    Capacidad: "18",
    Disponibilidad: "25 und",
    Precio: 13.03,
    imagenesCatalogo: [
      getImage("Tomato_Grower_IPOM350_rozl_S433_m.jpg"),
    ],
    colores: [
      {
        nombre: "gris oscuro",
        codigo: "S433",
        imagen: getImage("S433_antracytowy.jpg"),
      },
    ],
   imagen: getImage("Tomato_Grower_IPOM400_300_sadzonka_m.jpg"),
  },
  {
   id: "POTATOGROWER",
   nombre: "POTATO GROWER",
   categoria: "Sembremos en Casa",
   descripcion: "IZIE400",
   medidas: "392 mm x 316 mm",
   Capacidad: "28",
   Disponibilidad: "25 und",
   Precio: 10.85,
   imagenesCatalogo: [
      getImage("Potato_Grower_IZIE300_S433_wklad.jpg"),
    ],
    colores: [
      {
        nombre: "gris oscuro",
        codigo: "S433",
        imagen: getImage("S433_antracytowy.jpg"),
      },
    ],
   imagen: getImage("Potato_Grower_IZIE400_roslina.jpg"),
 },
 {
   id: "FLOOSUPPORTS",
   nombre: "FLOO SUPPORTS IFLS1",
   categoria: "Sembremos en Casa",
   variantes: [
      {
        descripcion: "IFLS1",
        medidas: "210 mm x 210 mm x 1200 mm",
        Disponibilidad: "100 und",
        Precio: 8.63,
        imagenesCatalogo: [
          getImage("Floo_Supports_IFLS1_wariant_1.jpg"),
        ],
      },
      {
        descripcion: "IFLS5",
        medidas: "250 mm x 800 mm",
        Disponibilidad: "12 und",
        Precio: 8.63,
        imagenesCatalogo: [
          getImage("Floo_Supports_IFLS5_fi_24_wariant_1.jpg"),
        ],
      },
      {
        descripcion: "IFLS6",
        medidas: "250 mm x 600 mm",
        Disponibilidad: "15 und",
        Precio: 8.63,
        imagenesCatalogo: [
          getImage("Floo_Supports_IFLS6_wariant_1.jpg"),
        ],
      },
      {
        descripcion: "IFLS7",
        medidas: "350 mm x 900 mm",
        Disponibilidad: "14 und",
        Precio: 9.95,
        imagenesCatalogo: [
          getImage("Floo_Supports_IFLS7_wariant_1.jpg"),
        ],
      },
    ],
    colores: [
      {
        nombre: "verde bosque",
        codigo: "G851",
        imagen: getImage("G851_zielony_lesny.jpg"),
      },
    ],
    imagen: getImage("Floo_Supports_IFLS1_opak_folia_m.jpg"),
  },
  {
  
  id: "COMBIOLIQ",
  nombre: "compostera COMBIO LIQ",
  categoria: "Sembremos en Casa",
  descripcion: "IBFT55",
  medidas: "380 mm x 590 mm",
  Capacidad: "55",
  Disponibilidad: "5 und",
  Precio: 34.33,
  imagenesCatalogo: [getImage("IBFT55.jpg")],
  colores: [
      {
        nombre: "Negro",
        codigo: "S411",
        imagen: getImage("S411_czarny.jpg"),
      },
    ],
   imagen: getImage("compost_IBFT55.jpg"),
  },
{
  id: "COMBIOSOIL",
  modelo: "compostera COMBIO SOIL",
  categoria: "Sembremos en Casa",
  descripcion: "IKUGL",
  medidas: "250 mm x 530 mm",
  Capacidad: "11",
  Disponibilidad: "45 und",
  Precio: 8.63,
  imagenesCatalogo: [getImage("IKUGL.jpg")],
  colores: [
      {
        nombre: "Negro",
        codigo: "S411",
        imagen: getImage("S411_czarny.jpg"),
      },
    ],
  imagen: getImage("compost_IKUGL.jpg"),
  },
 {
  
   id: "COMPOGREEN",
   modelo: "composteraCOMPO GREEN",
   categoria: "Sembremos en Casa",
   descripcion: "IKST380C",
   medidas: "719 mm x 719 mm x 826 mm",
   Capacidad: "380",
   Disponibilidad: "50 und",
   Precio: 42.23,
   imagenesCatalogo: [getImage("IKST380C.jpg")],
   colores: [
      {
        nombre: "Negro",
        codigo: "S411",
        imagen: getImage("S411_czarny.jpg"),
      },
    ],
   imagen: getImage("compost_IKST.jpg"),
   },
];

export const macetasPrincipalesSembremos = [
  { id: "BLOMA", modelo: "BLOMA", imagen: getImage("Bloma.jpg") },
  { id: "RESPANAPLANTERWOODHIGHSET", modelo: "Respana Planter Wood", imagen: getImage("Respana Planter Wood.jpg") },
  { id: "HOMEGROWER", modelo: "Home Grower", imagen: getImage("Botanic_DBOP780_S433_DEPO_2411U_aranz_02_m.jpg") },
  { id: "TOMATOGROWER", modelo: "Tomato Grower", imagen: getImage("Tomato_Grower_IPOM400_300_sadzonka_m.jpg") },
  { id: "POTATOGROWER", modelo: "Potato Grower", imagen: getImage("Potato_Grower_IZIE400_roslina.jpg") },
  { id: "FLOOSUPPORTS", modelo: "Floo Supports", imagen: getImage("Floo_Supports_IFLS1_opak_folia_m.jpg") },
  { id: "COMBIOLIQ", modelo: "Combioliq", imagen: getImage("compost_IBFT55.jpg") },
  { id: "COMBIOSOIL", modelo: "Combiosoil", imagen: getImage("compost_IKUGL.jpg") },
  { id: "COMPOGREEN", modelo: "Compogreen", imagen: getImage("compost_IKST.jpg") },
];

// 🎨 Colores con sus imágenes asociadas
export const macetaColorImagesSembremos = {
  BLOMA: { "405U": getImage("Bloma.jpg") },
  RESPANAPLANTERWOODHIGHSET: { "405U": getImage("ISEW780H_1.png") },
  HOMEGROWER: {
    S433: getImage("Home_Grower_DEPO300_S433.jpg"),
    "4665W": getImage("Home_Grower_DEPO300_4665W_m.jpg"),
    "2411U": getImage("Home_Grower_DEPO300_2411U.jpg"),
  },
  TOMATOGROWER: { S433: getImage("Tomato_Grower_IPOM350_rozl_S433_m.jpg") },
  POTATOGROWER: { S433: getImage("Potato_Grower_IZIE300_S433_wklad.jpg") },
  FLOOSUPPORTS: {
    variantes: {
      IFLS1: { G851: getImage("Floo_Supports_IFLS1_wariant_1.jpg") },
      IFLS5: { G851: getImage("Floo_Supports_IFLS5_fi_24_wariant_1.jpg") },
      IFLS6: { G851: getImage("Floo_Supports_IFLS6_wariant_1.jpg") },
      IFLS7: { G851: getImage("Floo_Supports_IFLS7_wariant_1.jpg") },
    },
  },
  COMBIOLIQ: { S411: getImage("IBFT55.jpg") },
  COMBIOSOIL: { S411: getImage("IKUGL.jpg") },
  COMPOGREEN: { S411: getImage("IKST380C.jpg") },
};

export default sembremosEnCasaData;