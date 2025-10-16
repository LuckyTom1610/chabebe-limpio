import { getImage } from "../utils/cloudinary";

export const macetasMedianasData = [

{
   id: "betonBowl",
   nombre: "Beton Bowl",
   categoria: "Macetas Medianas",
   variantes: [
    {
    descripcion: "DKB240",
    medidas: "Dimensiones: 238 mm x 161 mm",
    Capacidad: "2.3",
    Disponibilidad: "20 und",
    Precio: 8.63,
    imagenesCatalogo: [getImage("DKB240-422U.jpg")],
    Accesorios: [{ nombre: "Insert", imagen:  [getImage("insert.jpg")]}],
    },
    {
    descripcion: "DKB290",
    medidas: "Dimensiones: 290 mm x 195 mm",
    Capacidad: "3.9",
    Disponibilidad: "20 und",
    Precio: 11.68,
    imagenesCatalogo: [getImage("DKB290-422U.jpg")],
     Accesorios: [{ nombre: "Insert", imagen:  [getImage("insert.jpg")]}],
     },
     {
    descripcion: "DKB370",
    medidas: "Dimensiones: 370 mm x 218 mm",
    Capacidad: "9",
    Disponibilidad: "20 und",
    Precio: 18.45,
    imagenesCatalogo: [getImage("DKB370-422U.jpg")],
     Accesorios: [{ nombre: "Insert", imagen:  [getImage("insert.jpg")]}],
     },
    ],
    colores: [
        { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg")}],
    imagen: getImage("Beton_Bowl.png"),   
      },
      {
  
    id: "GRACIASQUAREBETONEFFECT",
    nombre: "Gracia Square Beton Effect",
    categoria: "Macetas Medianas",
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
 },
 ],
     colores: [
      { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg")},
      { nombre: "crema", codigo: "CY700", imagen:getImage("CY700_kremowy.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")},
      ],
    imagen: getImage("Gracia_Square_Beton_Effect.jpg"),
     },
     {

    id: "GraciaLowBetonEffect",
    nombre: "Gracia Low Beton Effect",
    categoria: "Macetas Medianas", 
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
 },
 ],
    colores: [
     { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg")},
      { nombre: "crema", codigo: "CY700", imagen: getImage("CY700_kremowy.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg")},
      ],
    imagen: getImage("Gracia_Low_Beton_Effect.png"),
     },
     {

   id: "GraciaLow",
   nombre: "GRACIA LOW",
   categoria: "Macetas Medianas", 
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
      },
      ],
    colores: [
      { nombre: "Blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg")},
      { nombre: "verde terroso", codigo: "5615C", imagen: getImage("5615C_ziemisty_zielony.jpg")},
      ],
    imagen: getImage("Gracia_low.png"),
     },
     {
     
    id: "GRACIALOWECOWOOD",
    nombre: "GRACIA LOW ECO WOOD",
    categoria: "Macetas Medianas", 
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
      ],
    imagen: getImage("Gracia_ECO_Wood.png"),
     },
     {
     
    id: "GRACIATUBUSSLIMECOWOOD",
    nombre: "GRACIA TUBUS SLIM ECO WOOD",
    categoria: "Macetas Medianas", 
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
      },
      ],
    colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen: getImage("S449W_bialy_ECO.jpg")},
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg")},
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen: getImage("S433W_antracytowy_ECO.jpg")},
      { nombre: "café ECO", codigo: "4625W", imagen: getImage("4625W_kawa_ECO.jpg")},
      ],
    imagen: getImage("Gracia_Tubus_Slim_ECO_Wood.png"),
     },
     {
   
   id: "GRACIASQUAREECOWOOD",
   nombre: "GRACIA SQUARE ECO WOOD",
   categoria: "Macetas Medianas", 
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
      },
      ],
   colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen: getImage("S449W_bialy_ECO.jpg")},
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg")},
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen: getImage("S433W_antracytowy_ECO.jpg")},
      { nombre: "café ECO", codigo: "4625W", imagen: getImage("4625W_kawa_ECO.jpg")}
      ],
    imagen: getImage("Gracia_SquareECO_Wood.jpg"),
     },
     {
  
    id: "TUBOPM",
    nombre: "TUBOPM",
    categoria: "Macetas Medianas", 
    variantes: [
    {
    descripcion: "DPOD240 ",
    medidas: "Dimensiones: 239 mm x 231 mm",
    Capacidad: "8",
    Disponibilidad: "75 und",
    Precio: 6.20,
    imagenesCatalogo: [getImage("DPOD240-S433.jpg")],
    Accesorios: [{nombre: "Platillo", imagen:  [getImage("PLATILLO TUBOPM.jpg")]}],
     },
    {
    descripcion: "DPOD350...",
    medidas: "Dimensiones: 338 x 326 mm",
    Capacidad: "22.5",
    Disponibilidad: "75 und",
    Precio: 10.88,
    imagenesCatalogo: [getImage("DPOD350-S433.jpg")],
    Accesorios: [{nombre: "Platillo", imagen:  [getImage("PLATILLO TUBOPM.jpg")]}],
     },
    {
    descripcion: "DPOD400",
    medidas: "Dimensiones: 390 mm x 375 mm",
    Capacidad: "35",
    Disponibilidad: "75 und",
    Precio: 16.78,
    imagenesCatalogo: [getImage("DPOD400-S433.jpg")],
     Accesorios: [{nombre: "Platillo", imagen:  [getImage("PLATILLO TUBOPM.jpg")]}],
     },
      ],
    colores: [
      { nombre: "blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg")},
      { nombre: "pino verde", codigo: "2411U", imagen: getImage("2411U_zielona_pinia.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg")}
             ],
    imagen: getImage("Tubo_PM_.jpg"),
  },
   {
  
  
   id: "GRACIASQUARE",
   nombre: "GRACIA SQUARE",
   categoria: "Macetas Medianas",
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
      },
      ],
    colores: [
      { nombre: "blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg")},
      { nombre: "verde terroso", codigo: "5615C", imagen: getImage("5615C_ziemisty_zielony.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg")}

      ],
    imagen: getImage("Gracia_Square.png"),
      },
      {
  
  
    id: "GRACIATUBUSSLIM",
    nombre: "GRACIA TUBUS SLIM",
    categoria: "Macetas Medianas",
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
      },
      ],
    colores: [
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "verde terroso", codigo: "5615C", imagen:getImage("5615C_ziemisty_zielony.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")},
      ],
    imagen: getImage("Gracia_Tubus_Slim.png"),
      },
      {
 
   id: "MILLYROUNDA",
   nombre: "MILLY ROUND A",
   categoria: "Macetas Medianas",
   descripcion: "DMIG190",
   medidas: "Dimensiones: 188 mm x 277 mm",
   Capacidad: "3.7",
   Disponibilidad: "30 und",
   Precio: 2.83,
   imagenesCatalogo: [getImage("DMIG190-4985U.jpg")],
   colores: [
      { nombre: "rojo oscuro", codigo: "4985U", imagen:getImage("4985U_marsala.jpg")},
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "pino verde", codigo: "2411U", imagen:getImage("2411U_zielona_pinia.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")},
      { nombre: "carbón", codigo: "446U", imagen:getImage("446U_wegiel.jpg")}
            ],
   imagen: getImage("Milly_Round DMIL.png"),
     },
    {

   id: "MILLYROUND",
   nombre: "MILLY ROUND",
   categoria: "Macetas Medianas",
   variantes: [
    {
    descripcion: "DMIL220",
    medidas: "Dimensiones: 220 mm x 262 mm",
    Capacidad: "5.7",
    Disponibilidad: "30 und",
    Precio: 4.98,
    imagenesCatalogo: [getImage("DMIL220-4985U.jpg")],
    },
     {
    descripcion: "DMIN200",
    medidas: "Dimensiones: 195 mm x 210 mm",
    Capacidad: "5.20",
    Disponibilidad: "48 und",
    Precio: 2.53,
    imagenesCatalogo: [getImage("DMIN200-4985U.jpg")],
    },
     ],
    colores: [
      { nombre: "rojo oscuro", codigo: "4985U", imagen:getImage("4985U_marsala.jpg")},
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "pino verde", codigo: "2411U", imagen:getImage("2411U_zielona_pinia.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")},
      { nombre: "carbón", codigo: "446U", imagen:getImage("446U_wegiel.jpg")}
            ],
    imagen: getImage("Milly_Round DMIN.png"),
          },
          {
  
    id: "SPLOFYBOWL",
    nombre: "SPLOFY BOWL",
    categoria: "Macetas Medianas",
    variantes: [
    {
    descripcion: "DKSP240",
    medidas: "Dimensiones: 239 mm x 161 mm",
    Capacidad: "2.3",
    Disponibilidad: "60 und",
    Precio: 8.63,
    imagenesCatalogo: [getImage("DKSP240-7529U.jpg")],
    },
    {
    descripcion: "DKSP290",
    medidas: "Dimensiones: 290 mm x195 mm",
    Capacidad: "3.9",
    Disponibilidad: "60 und",
    Precio: 11.68,
    imagenesCatalogo: [getImage("DKSP290-7529U.jpg")],
    },
    {
    descripcion: "DKSP370",
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
             ],
    imagen: getImage("Splofy_Bowl.jpg"),
     },        
    {
  
  
    id: "RATOLLARallingSquare",
    nombre: "RATOLLA Ralling Square",
    categoria: "Macetas Medianas",
    variantes: [
    {
    descripcion: "DRLB280",
    medidas: "Dimensiones: 272 mm x 272 mm x 225 mm",
    Capacidad: "8.5",
    Disponibilidad: "30 und",
    Precio: 5.58,
    imagenesCatalogo: [getImage("DRLB280-7529U.jpg")],
    },
    {
    descripcion: "DRLB400",
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
             ],
    imagen: getImage("ratolla-raling.jpg"),
    },
    {
  
    id: "HEOS",
    nombre: "HEOS",
    categoria: "Macetas Medianas",
    variantes: [
    {
    descripcion: "DLHEN470",
    medidas: "Dimensiones: 468 mm x 295 mm",
    Capacidad: "31/45",
    Disponibilidad: "20 und",
    Precio: 18.38,
    imagenesCatalogo: [getImage("DLHEN470-S433.jpg")],
    },
    {
    descripcion: "DBHEN470",
    medidas: "Dimensiones: 468 mm x 440 mm",
    Capacidad: "31/69",
    Disponibilidad: "20 und",
    Precio: 22.28,
    imagenesCatalogo: [getImage("DBHEN470-S433.jpg")],
    },
    {
    descripcion: "DBHER470",
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
         ],
    imagen: getImage("Heos_DBHEN.jpg"),
    },
    {
    id: "PLANTI",
    nombre: "PLANTI",
    categoria: "Macetas Medianas",
    variantes: [
    {
    descripcion: "DMLR190",
    medidas: "Dimensiones: 195 mm x 160 mm",
    Capacidad: "3.1",
    Disponibilidad: "100 und",
    Precio: 0.83,
    imagenesCatalogo: [getImage("DMLR190.jpg")],
    },
    {
    descripcion: "DMLR230",
    medidas: "Dimensiones: 235 mm x 190 mm",
    Capacidad: "5.4",
    Disponibilidad: "100 und",
    Precio: 1.25,
    imagenesCatalogo: [getImage("DMLR230.jpg")],
    },
    ],
    colores: [
      { nombre: "transparente", codigo: "S429", imagen:getImage("S449_bialy.jpg")},
             ],
    imagen: getImage("Planti.jpg"),
    },  
    {
  
    id: "GROWER",
    nombre: "GROWER",
    categoria: "Macetas Medianas",
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
               ],
    imagen: getImage("Grower.png"),
     },
     {
  
   id: "RESPANARALLING",
   nombre: "RESPANA RALLING",
   categoria: "Macetas Medianas",
   descripcion: "DREB290",
   medidas: "Dimensiones: 288 mm x 298 mm x 209 mm",
   Capacidad: "9",
   Disponibilidad: "20 und",
   Precio: 3.63,
   imagenesCatalogo: [getImage("DREB290-S433.jpg")],
   colores: [
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
         ],
   imagen: getImage("respana_railing.jpg"),
        },
    {
   id: "MillyWall",
   nombre: "Milly Wall",
   categoria: "Macetas Medianas",
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
       ],
    imagen: getImage("Milly_Wall.png"),
     },
      {
  
    id: "ARIAOVAL",
    nombre: "ARIA OVAL",
    categoria: "Macetas Medianas",
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
            ],
    imagen: getImage("Aria_Oval.jpg"),
     },
     {
  
   id: "CORObowl",
   nombre: "CORObowl",
   categoria: "Macetas Medianas",
   variantes: [
   {
   descripcion: "TCB40H",
   medidas: "Dimensiones: 400 mm X 530 mm",
   Capacidad: "9",
   Disponibilidad: "9 und",
   Precio: 79.63,
   imagenesCatalogo: [getImage("TCB40H.jpg")],
   },
   {
   descripcion: "TCB48",
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
           ],
  imagen: getImage("Coro_Bowl_High.png"),
     },
      {
  
   id: "MOLTAsquarefoot",
   nombre: "MOLTA square foot",
   categoria: "Macetas Medianas",
   variantes: [
   {
   descripcion: "TMSF40",
   medidas: "Dimensiones: 400 mm X 360 mm",
   Capacidad: "19",
   Disponibilidad: "6 und",
   Precio: 73.00,
   imagenesCatalogo: [getImage("TMSF40.jpg"),],
   },
   {
   descripcion: "TMSF48",
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
            ],
   imagen:getImage("Molta_Square_Foot.jpg"),
   },
   {
   id: "DUALAroundslim",
   nombre: "DUALA round slim",
   categoria: "Macetas Medianas",
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
   imagen: getImage("Duala.jpg"),
   },
 ];

export default macetasMedianasData;

  
    
          
     

      
   

      

 