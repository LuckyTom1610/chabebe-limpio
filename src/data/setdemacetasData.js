import { getImage } from "../utils/cloudinary";

export const setdemacetasData = [
{
   id: "SETORO",
   nombre: "SET ORO",
   categoria: "Set de Macetas",
   variantes: [
    
      {descripcion: "DBOE600",
    medidas: "Dimensiones: 595 mm x 395 mm X 380 mm",
    Capacidad: "2.3",
    Disponibilidad: "20 und",
    Precio: 31.24,
    imagenesCatalogo: [getImage("DBOE600_1.jpg")],
        },
    {
    descripcion: "DHOE600",
    medidas: "Dimensiones: 595 mm x 395 mm X 545 mm",
    Capacidad: "3.9",
    Disponibilidad: "20 und",
    Precio: 31.24,
    imagenesCatalogo: [getImage("DBOE600_1.jpg")],
         },
   ],
    colores: [
         { nombre: "Blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg")},
         { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
         { nombre: "pino verde", codigo: "2411U", imagen:getImage("2411U_zielona_pinia.jpg")},  
         { nombre: "gris medio oscuro", codigo: "419U", imagen:getImage("419U_ciemny_szary.jpg")}
      ],
   imagen: getImage("Oro Oval.jpg"),
},
{
   id: "SETBETONBOWL",
   nombre: "SET BETON BOWL",
   categoria: "Set de Macetas",
   variantes: [
    
      {descripcion: "DKB240",
    medidas: "Dimensiones: 238 mm x 161 mm",
    Capacidad: "2.3",
    Disponibilidad: "20 und",
    Precio: 27.13,
    imagenesCatalogo: [getImage("DKB240-422U_1.jpg")],
    Accesorios: [{nombre: "Insert", imagen:  [getImage("insert.jpg")]}]
     },
    {
    descripcion: "DKB290",
    medidas: "Dimensiones: 290 mm x 195 mm",
    Capacidad: "3.9",
    Disponibilidad: "20 und",
    Precio: 27.13,
    imagenesCatalogo: [getImage("DKB240-422U_1.jpg")],
     Accesorios: [{nombre: "Insert", imagen:  [getImage("insert.jpg")]}],
     },
     {
    descripcion: "DKB370",
    medidas: "Dimensiones: 370 mm x 218 mm",
    Capacidad: "9",
    Disponibilidad: "20 und",
    Precio: 27.13,
    imagenesCatalogo: [getImage("DKB240-422U_1.jpg")],
    Accesorios: [{nombre: "Insert", imagen:  [getImage("insert.jpg")]}],
     },
  ],
    colores: [
        { nombre: "concreto / hormigón", codigo: "422U", imagen:getImage("422U_beton.jpg")},
          ],
    imagen: getImage("Beton_Bowl.png"),
   },
   {
   id: "SETGRACIABETONEFFECT",
   nombre: "SET GRACIA BETON EFFECT",
   categoria: "Set de Macetas",
   variantes: [
    {
    descripcion: "DGQL400E ",
    medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
    Capacidad: "25",
    Disponibilidad: "75 und",
    Precio: 30.87,
    imagenesCatalogo: [getImage("DGQL400E-422U_1.jpg")],
    Accesorios: [{nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno.jpg")]}],
      },
      {
    descripcion: "DGCL600E ",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mmm",
    Capacidad: "19.5",
    Disponibilidad: "75 und",
    Precio: 30.87,
    imagenesCatalogo: [getImage("DGQL400E-422U_1.jpg")],
    Accesorios: [{ nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno1.jpg")]}],
   },    
   {
    descripcion: "DGRL400LE ",
    medidas: "Dimensiones: 380 mm x 207 mm",
    Capacidad: "14.3",
    Disponibilidad: "75 und",
    Precio: 30.87,
    imagenesCatalogo: [getImage("DGQL400E-422U_1.jpg")],
    Accesorios: [{ nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno2.jpg")]}],
 },
  ],  
    colores: [
     { nombre: "concreto / hormigón", codigo: "422U", imagen:getImage("422U_beton.jpg")},
     { nombre: "crema", codigo: "CY700", imagen:getImage("CY700_kremowy.jpg")},
     { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
             ],
     imagen: getImage("Gracia_Case_Beton_Effect.jpg"),
   },
   {
   
    id: "SETGRACIAECOWOOD",
   nombre: "SET GRACIA ECO WOOD",
   categoria: "Set de Macetas",
   variantes: [
    {
    descripcion: "DGQL400W ",
    medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
    Capacidad: "25",
    Disponibilidad: "100 und",
    Precio: 20.18,
    imagenesCatalogo: [getImage("DGQL400W-4665W_1.jpg")],
    Accesorios: [{nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno.jpg")]}],
    },
    {
    descripcion: "DGCL600W",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mm",
    Capacidad: "19.5",
    Disponibilidad: "100 und",
    Precio:20.18,
    imagenesCatalogo: [getImage("DGQL400W-4665W_1.jpg")],
    Accesorios: [{nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno1.jpg")]}],
    },
    ],
    colores: [
       { nombre: "blanco ECO", codigo: "S449W", imagen:getImage("S449W_bialy_ECO.jpg")},
       { nombre: "natural ECO", codigo: "4665W", imagen:getImage("4665W_naturo_ECO.jpg")},
       { nombre: "gris oscuro ECO", codigo: "S433W", imagen:getImage("S433W_antracytowy_ECO.jpg")},
       { nombre: "café ECO", codigo: "4625W", imagen: getImage("4625W_kawa_ECO.jpg")},
            ],
    imagen: getImage("Gracia_SquareECO_Wood.jpg"),
   },
   {
   
    id: "SETTUBOPM",
    nombre: "SET TUBOPM",
    categoria: "Set de Macetas",
    variantes: [
    {
    descripcion: "DPOD240 ",
    medidas: "Dimensiones: 239 mm x 231 mm",
    Capacidad: "8",
    Disponibilidad: "75 und",
    Precio: 23.70,
    imagenesCatalogo: [getImage("DPOD240-S433_1.jpg")],
    Accesorios: [{nombre: "Platillo", imagen:  [getImage("PLATILLO TUBOPM.jpg")]}],
    },
    {
    descripcion: "DPOD350...",
    medidas: "Dimensiones: 338 x 326 mm",
    Capacidad: "22.5",
    Disponibilidad: "75 und",
    Precio: 23.70,
    imagenesCatalogo: [getImage("DPOD240-S433_1.jpg")],
     Accesorios: [{nombre: "Platillo", imagen:  [getImage("PLATILLO TUBOPM.jpg")]}],
     },
     {
    descripcion: "DPOD400",
    medidas: "Dimensiones: 390 mm x 375 mm",
    Capacidad: "35",
    Disponibilidad: "75 und",
    Precio: 23.70,
    imagenesCatalogo: [getImage("DPOD240-S433_1.jpg")],
    Accesorios: [{nombre: "Platillo", imagen:  [getImage("PLATILLO TUBOPM.jpg")]}],
      },
      ],
    colores: [
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "pino verde", codigo: "2411U", imagen:getImage("2411U_zielona_pinia.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
      ],
    imagen: getImage("Tubo_PM_.jpg"),
   },
   {
   
   id: "SETGRACIA",
   nombre: "SET GRACIA",
   categoria: "Set de Macetas",
   variantes: [
   {
   descripcion: "DGQL400",
   medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
   Capacidad: "25",
   Disponibilidad: "100 und",
   Precio: 26.46,
   imagenesCatalogo: [getImage("DGQL400-S449_1.jpg")],
   Accesorios: [{nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno.jpg")]}],
   },
   {
   descripcion: "DGCL600 ",
   medidas: "Dimensiones: 580 mm x 240 mm x 235 mm",
   Capacidad: "19.5",
   Disponibilidad: "100 und",
   Precio: 26.46,
   imagenesCatalogo: [getImage("DGQL400-S449_1.jpg")],
   Accesorios: [{nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno1.jpg")]}],
   },
   {
   descripcion: "DGTL240",
   medidas: "Dimensiones: 239 mm x 445 mm x 235 mm",
   Capacidad: "14.5",
   Disponibilidad: "100 und",
   Precio: 26.46,
   imagenesCatalogo: [getImage("DGQL400-S449_1.jpg")],
   Accesorios: [{nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno3.jpg")]}],
      },
      ],
   colores: [
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "verde terroso", codigo: "5615C", imagen:getImage("5615C_ziemisty_zielony.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
      ],
      imagen: getImage("Gracia_Square.jpg"),
    },
    {
   id: "SETGRACIATUBUSECOWOOD",
   nombre: "SET GRACIA TUBUS ECO WOOD",
   categoria: "Set de Macetas",
   variantes: [
    {
    descripcion: "DGRL400LW ",
    medidas: "Dimensiones: 380 mm x 207 mm",
    Capacidad: "14.3",
    Disponibilidad: "100 und",
    Precio: 16.08,
    imagenesCatalogo: [getImage("DGRL400LW_1.jpg")],
    Accesorios: [{nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno2.jpg")]}],
    },
    {
    descripcion: "DGTL240W ",
    medidas: "Dimensiones: 293 mm x 445 mm",
    Capacidad: "14.5",
    Disponibilidad: "100 und",
    Precio: 16.08,
    imagenesCatalogo: [getImage("DGRL400LW_1.jpg")],
    Accesorios: [{nombre: "base de drenaje interno", imagen:  [getImage("base de drenaje interno3.jpg")]}],
    },
    ],
     colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen:getImage("S449W_bialy_ECO.jpg")},
      { nombre: "natural ECO", codigo: "4665W", imagen:getImage("4665W_naturo_ECO.jpg")},
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen:getImage("S433W_antracytowy_ECO.jpg")},
      { nombre: "café ECO", codigo: "4625W", imagen:getImage("4625W_kawa_ECO.jpg")}
      ],
    imagen: getImage("Gracia_Tubus_Slim_ECO_Wood.jpg"),
   },
   {
   id: "SETMILLYROUND",
   nombre: "SET MILLY ROUND",
   categoria: "Set de Macetas",
   variantes: [
   {
   descripcion: "DMIG190",
   medidas: "Dimensiones: 188 mm x 277 mm",
   Capacidad: "3.7",
   Disponibilidad: "30 und",
   Precio: 7.23,
   imagenesCatalogo: [getImage("DMIN200-4985U_1.jpg")],
    },
    {
   descripcion: "DMIL220",
   medidas: "Dimensiones: 220 mm x 262 mm",
   Capacidad: "5.7",
   Disponibilidad: "30 und",
   Precio: 7.23,
   imagenesCatalogo: [getImage("DMIN200-4985U_1.jpg")],
    },
    {
   descripcion: "DMIN200",
   medidas: "Dimensiones: 195 mm x 210 mm",
   Capacidad: "5.20",
   Disponibilidad: "48 und",
   Precio: 7.23,
   imagenesCatalogo: [getImage("DMIN200-4985U_1.jpg")],
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
    imagen: getImage("Milly_Round DMIN.jpg"),
   },
   {
   
   id: "SETSPLOFYBOWL",
   nombre: "SET SPLOFY BOWL",
   categoria: "Set de Macetas",
   variantes: [
    {
   descripcion: "DKSP240",
   medidas: "Dimensiones: 239 mm x 161 mm",
   Capacidad: "2.3",
   Disponibilidad: "60 und",
   Precio: 27.13,
   imagenesCatalogo: [getImage("DKSP240-7529U_1.jpg")],
     },
     {
   descripcion: "DKSP290",
   medidas: "Dimensiones: 290 mm x195 mm",
   Capacidad: "3.9",
   Disponibilidad: "60 und",
   Precio: 27.13,
   imagenesCatalogo: [getImage("DKSP240-7529U_1.jpg")],
     },
     {
   descripcion: "DKSP370",
   medidas: "Dimensiones: 370 mm x 218 mm",
   Capacidad: "9",
   Disponibilidad: "60 und",
   Precio: 27.13,
   imagenesCatalogo: [getImage("DKSP240-7529U_1.jpg")],
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
  
  id: "SETRATOLLARALLINGSQUARE",
  nombre: "SET RATOLLA RALLING SQUARE",
  categoria: "Set de Macetas",
  variantes: [
  {
  descripcion: "DRLB280",
  medidas: "Dimensiones: 272 mm x 272 mm x 225 mm",
  Capacidad: "8.5",
  Disponibilidad: "30 und",
  Precio: 9.82,
  imagenesCatalogo: [getImage("DRLB280-7529U_1.jpg")],
  },
  {
  descripcion: "DRLB400",
  medidas: "Dimensiones: 396 mm x 272 mm x 225 mm",
  Capacidad: "13",
  Disponibilidad: "30 und",
  Precio: 9.82,
  imagenesCatalogo: [getImage("DRLB280-7529U_1.jpg")],
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
  
  id: "SETHEOS",
  nombre: "SET HEOS",
  categoria: "Set de Macetas",
  variantes: [
    {
  descripcion: "DLHEN470",
  medidas: "Dimensiones: 468 mm x 295 mm",
  Capacidad: "31/45",
  Disponibilidad: "20 und",
  Precio: 28.46,
  imagenesCatalogo: [getImage("DLHEN470-S433_1.jpg")],
  },
  {
  descripcion: "DBHEN470",
  medidas: "Dimensiones: 468 mm x 440 mm",
  Capacidad: "31/69",
  Disponibilidad: "20 und",
  Precio: 28.46,
  imagenesCatalogo: [getImage("DLHEN470-S433_1.jpg")],
  },
  {
  descripcion: "DBHER470",
  medidas: "Dimensiones: 468 mm x 450 mm",
  Capacidad: "31/74",
  Disponibilidad: "12 und",
  Precio: 28.46,
  imagenesCatalogo: [getImage("DLHEN470-S433_1.jpg")],
  },
  ],
  colores: [
      { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
      { nombre: "gris oscuro", codigo: "S433", imagen:getImage("S433_antracytowy.jpg")}
      ],
  imagen: getImage("Heos_DBHEN.jpg"),
  },
  {
  
  id: "SETPLANTI",
  nombre: "SET PLANTI",
  categoria: "Set de Macetas",
  variantes: [
  {
  descripcion: "DMLR190",
  medidas: "Dimensiones: 195 mm x 160 mm",
  Capacidad: "3.1",
  Disponibilidad: "100 und",
  Precio: 1.45,
  imagenesCatalogo: [getImage("DMLR190_1.jpg")],
  },
  {
  descripcion: "DMLR230",
  medidas: "Dimensiones: 235 mm x 190 mm",
  Capacidad: "5.4",
  Disponibilidad: "100 und",
  Precio: 1.45,
  imagenesCatalogo: [getImage("DMLR190_1.jpg")],
  },
  ],
  colores: [
    { nombre: "Transparente", codigo: "S429", imagen:getImage("S429_bialy.jpg")},
    ],  
  imagen: getImage("Planti.jpg"),
  },
  {
  
  id: "SETGROWER",
  nombre: "SET GROWER",
  categoria: "Set de Macetas",
  variantes: [
    {
  descripcion: "DOGR180",
  medidas: "Dimensiones: 179 mm x 165 mm",
  Capacidad: "3",
  Disponibilidad: "100 und",
  Precio: 2.50,
  imagenesCatalogo: [getImage("DOGR180_1.jpg")],
  },
  {
  descripcion: "DOGR200",
  medidas: "Dimensiones: 199 mm x 183 mm",
  Capacidad: "4",
  Disponibilidad: "100 und",
  Precio: 2.50,
  imagenesCatalogo: [getImage("DOGR180_1.jpg")],
  },
  {
  descripcion: "DOGR240",
  medidas: "Dimensiones: 235 mm x 216 mm",
  Capacidad: "6.5",
  Disponibilidad: "100 und",
  Precio: 2.50,
  imagenesCatalogo: [getImage("DOGR180_1.jpg")],
  },
  ],
  colores: [
    { nombre: "blanco", codigo: "S449", imagen:getImage("S449_bialy.jpg")},
    ],
  imagen: getImage("Grower.jpg"),
  },
  {
  
  id: "SETARIAOVAL",
  nombre: "SET ARIA OVAL",
  categoria: "Set de Macetas",
  variantes: [
  {
  descripcion: "TAO40",
  medidas: "Dimensiones: 400 mm X 200 mm X 160 mm",
  Capacidad: "5",
  Disponibilidad: "12 und",
  Precio: 44.10,
  imagenesCatalogo: [getImage("TAO40_2.jpg")],
  },
  {
  descripcion: "TAO60",
  medidas: "Dimensiones: 600 mm X 280 mm X 200 mm",
  Capacidad: "16",
  Disponibilidad: "15 und",
  Precio: 44.10,
  imagenesCatalogo: [getImage("TAO40_2.jpg")],
  },
  ],
  colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
      { nombre: "gris piedra", codigo: "405U", imagen:getImage("405U_szary_kamienny.jpg")}
  ],
  imagen: getImage("Aria_Oval.jpg"),
  },
  {
  
  id: "SETCOROBOWL",
  nombre: "SET CORO BOWL",
  categoria: "Set de Macetas",
  variantes: [
  {
  descripcion: "TCB40H",
  medidas: "Dimensiones: 400 mm X 530 mm",
  Capacidad: "9",
  Disponibilidad: "9 und",
  Precio: 120.77,
  imagenesCatalogo: [getImage("TCB40H_2.jpg")],
  },
  {
  descripcion: "TCB48",
  medidas: "Dimensiones: 480 mm X 420 mm",
  Capacidad: "22",
  Disponibilidad: "3 und",
  Precio: 120.77,
  imagenesCatalogo: [getImage("TCB40H_2.jpg")],
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
  
  id: "SETMOLTA",
  nombre: "SET MOLTA",
  categoria: "Set de Macetas",
  variantes: [
    {
  descripcion: "TMRF60",
  medidas: "Dimensiones: 600 mm x 500 mm",
  Capacidad: "45",
  Disponibilidad: "4 und",
  Precio: 203.79,
  imagenesCatalogo: [getImage("TMSF40_1.jpg")],
  },
  {
  descripcion: "TMSF40",
  medidas: "Dimensiones: 400 mm X 360 mm",
  Capacidad: "19",
  Disponibilidad: "6 und",
  Precio: 203.79,
  imagenesCatalogo: [getImage("TMSF40_1.jpg")],
  },
  {
  descripcion: "TMSF48",
  medidas: "Dimensiones: 480 mm X 390 mm",
  Capacidad: "32",
  Disponibilidad: "4 und",
  Precio: 203.79,
  imagenesCatalogo: [getImage("TMSF40_1.jpg")],
  },
  ],
  colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
           ],
   imagen: getImage("Molta_Square_Foot.jpg"),
  },
  {
  
  id: "SETDUALAROUNDSLIM",
  nombre: "SET DUALA ROUND SLIM ",
  categoria: "Set de Macetas",
  variantes: [
  {
  descripcion: "TDS30",
  medidas: "Dimensiones: 300/250 mm X 540 mm",
  Capacidad: " 8 y 5 L",
  Disponibilidad: "4 und",
  Precio: 124.30,
  imagenesCatalogo: [getImage("TDS30_1.jpg")],
  },
  {
  descripcion: "TDS40",
  medidas: "Dimensiones: 400/300 mm X700 mm",
  Capacidad: "17 y 12",
  Disponibilidad: "4 und",
  Precio: 124.30,
  imagenesCatalogo: [getImage("TDS30_1.jpg")],
  },
  ],
  colores: [
      { nombre: "moca", codigo: "7529U", imagen:getImage("7529U_mocca.jpg")},
      { nombre: "gris claro", codigo: "443U", imagen:getImage("443U_jasny_szary.jpg")},
    ],
  imagen: getImage("Duala.JPG"),
  },
];

export const macetasPrincipalesSet = [
  { id: "SETORO", modelo: "SET ORO", imagen: getImage("Oro Oval.jpg") },
  { id: "SETBETONBOWL", modelo: "SET BETON BOWL", imagen: getImage("Beton_Bowl.png") },
  { id: "SETGRACIABETONEFFECT", modelo: "SET GRACIA BETON EFFECT", imagen: getImage("Gracia_Case_Beton_Effect.jpg") },
  { id: "SETGRACIAECOWOOD", modelo: "SET GRACIA ECO WOOD", imagen: getImage("Gracia_SquareECO_Wood.jpg") },
  { id: "SETTUBOPM", modelo: "SET TUBOPM", imagen: getImage("Tubo_PM_.jpg") },
  { id: "SETGRACIA", modelo: "SET GRACIA", imagen: getImage("Gracia_Square.jpg") },
  { id: "SETGRACIATUBUSECOWOOD", modelo: "SET GRACIA TUBUS ECO WOOD", imagen: getImage("Gracia_Tubus_Slim_ECO_Wood.jpg") },
  { id: "SETMILLYROUND", modelo: "SET MILLY ROUND", imagen: getImage("Milly_Round DMIN.jpg") },
  { id: "SETSPLOFYBOWL", modelo: "SET SPLOFY BOWL", imagen: getImage("Splofy_Bowl.jpg") },
  { id: "SETRATOLLARALLINGSQUARE", modelo: "SET RATOLLA RALLING SQUARE", imagen: getImage("ratolla-raling.jpg") },
  { id: "SETHEOS", modelo: "SET HEOS", imagen: getImage("Heos_DBHEN.jpg") },
  { id: "SETPLANTI", modelo: "SET PLANTI", imagen: getImage("Planti.jpg") },
  { id: "SETGROWER", modelo: "SET GROWER", imagen: getImage("Grower.jpg") },
  { id: "SETARIAOVAL", modelo: "SET ARIA OVAL", imagen: getImage("Aria_Oval.jpg") },
  { id: "SETCOROBOWL", modelo: "SET CORO BOWL", imagen: getImage("Coro_Bowl_High.png") },
  { id: "SETMOLTA", modelo: "SET MOLTA", imagen: getImage("Molta_Square_Foot.jpg") },
  { id: "SETDUALAROUNDSLIM", modelo: "SET DUALA ROUND SLIM", imagen: getImage("Duala.JPG") },
];

export default setdemacetasData;