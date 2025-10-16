import { getImage } from "../utils/cloudinary";

export const macetasGrandesData = [

{
  id: "ORO",
  nombre: "Oro",
  categoria: "Macetas Grandes",
    variantes: [
    {
      descripcion: "DBOE600",
      medidas: "Dimensiones: 595 mm x 395 mm X 380 mm",
      Capacidad: "2.3",
      Disponibilidad: "20 und",
      Precio: 21,
      imagenesCatalogo: [getImage("DBOE600.jpg")],
    },
    {
      descripcion: "DHOE600",
      medidas: "Dimensiones: 595 mm x 395 mm X 545 mm",
      Capacidad: "3.9",
      Disponibilidad: "20 und",
      Precio: 23.63,
      imagenesCatalogo: [getImage("DHOE600.jpg")],
    },
  ],
  colores: [
    {nombre: "Blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg"),},
    {nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg"),},
    {nombre: "pino verde", codigo: "2411U",imagen: getImage("2411U_zielona_pinia.jpg"),},
    {nombre: "gris medio oscuro", codigo: "419U", imagen: getImage("419U_ciemny_szary.jpg"),},
  ],
  imagen: getImage("Oro Oval.jpg"),
},
   {
    id: "LEXOROUND",
    nombre: "Lexo Round",
    categoria: "Macetas Grandes",
    descripcion: "DLR1000",
    medidas: "Dimensiones: 1000 mm x 920 mm",
    Capacidad: "430",
    Disponibilidad: "1 und",
    Precio: 296.25,
    imagenesCatalogo: [getImage("DLR1000.jpg")],
    colores: [
      { nombre: "Blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg") }
    ],
    imagen: getImage("round_Lexo.jpg"),
  },
    {
    id: "GRACIACASEBETONEFFECT",
    nombre: "Gracia Case Beton Effect",
    categoria: "Macetas Grandes",
    descripcion: "DGCL600E",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mmm",
    Capacidad: "19.5",
    Disponibilidad: "75 und",
    Precio: 14.53,
    imagenesCatalogo: [getImage("DGCL600E.jpg")],
    Accesorios: [
      { nombre: "base de drenaje interno", imagen: [getImage("base de drenaje interno1.jpg")] }
    ],
    colores: [
      { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg") },
      { nombre: "crema", codigo: "CY700", imagen: getImage("CY700_kremowy.jpg") },
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
    ],
     imagen: getImage("Gracia_Case_Beton_Effect.jpg"),
  },
    {
    id: "GRACIACASEECOWOOD",
    nombre: "Gracia Case Eco Wood",
    categoria: "Macetas Grandes",
    descripcion: "DGCL600W",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mm",
    Capacidad: "19.5",
    Disponibilidad: "100 und",
    Precio: 13.48,
    imagenesCatalogo: [getImage("DGCL600w.jpg")],
    Accesorios: [
      { nombre: "base de drenaje interno", imagen: [getImage("base de drenaje interno1.jpg")] }
    ],
    colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen: getImage("S449W_bialy_ECO.jpg") },
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg") },
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen: getImage("S433W_antracytowy_ECO.jpg") },
      { nombre: "café ECO", codigo: "4625W", imagen: getImage("4625W_kawa_ECO.jpg") }
    ],
    imagen: getImage("Gracia_Case_ECO_Wood.jpg"),
     },
    {
    id: "GRACIACASE",
    nombre: "Gracia Case",
    categoria: "Macetas Grandes",
    descripcion: "DGCL600",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mm",
    Capacidad: "19.5",
    Disponibilidad: "100 und",
    Precio: 12.85,
    imagenesCatalogo: [getImage("DGCL600.jpg")],
    Accesorios: [
      { nombre: "base de drenaje interno", imagen: [getImage("base de drenaje interno1.jpg")] }
    ],
    colores: [
      { nombre: "blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg") },
      { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
      { nombre: "verde terroso", codigo: "5615C", imagen: getImage("5615C_ziemisty_zielony.jpg") },
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
    ],
    imagen: getImage("Gracia_Case_ECO_Wood.jpg"),
  },
   {
    id: "CASCADEGRADENWALL",
    nombre: "Cascade Garden Wall",
    categoria: "Macetas Grandes",
    descripcion: "IO3W800",
    medidas: "Dimensiones: 780 mm x 190 mm x 350 mm",
    Capacidad: "2 x 12L",
    Disponibilidad: "10 und",
    Precio: 22.55,
    imagenesCatalogo: [getImage("IO3W800.jpg")],
    colores: [
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
    ],
   imagen: getImage("Cascade Garden Wall.jpg"),
  },
    {
    id: "BLOMA",
    nombre: "Bloma",
    categoria: "Macetas Grandes",
    descripcion: "DBLO600",
    medidas: "Dimensiones: 580 mm x 288 mm x 780 mm",
    Capacidad: "-",
    Disponibilidad: "8 und",
    Precio: 18,
    imagenesCatalogo: [getImage("DBLO600.jpg")],
    colores: [
      { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
    ],
     imagen: getImage("Bloma.jpg"),
  },
  {
    id: "URBICASEBETOMEFFECT",
    nombre: "Urbi Case Betom Effect",
    categoria: "Macetas Grandes",
    descripcion: "DUC800TE ",
    medidas: "Dimensiones: 770 mm x 235 mm x 687 mm",
    Capacidad: "27/100",
    Disponibilidad: "30 und",
    Precio: 77.33,
    imagenesCatalogo: [getImage("DUC800TE.jpg")],
    Accesorios: [
    {nombre: "estabilizadores_plásticos", imagen: [getImage("estabilizadores_plásticos.jpg")],
    }
  ],
  colores: [
    { nombre: "concreto / hormigón", codigo: "422U", imagen: getImage("422U_beton.jpg") },
    { nombre: "crema", codigo: "CY700", imagen: getImage("CY700_kremowy.jpg") },
    { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
  ],
  imagen: getImage("Urbi_Case_DUC.jpg"),
},
{
    id: "HEOS",
    nombre: "Heos",
    categoria: "Macetas Grandes",
    variantes: [
    {
      descripcion: "DLHEN470",
      medidas: "Dimensiones: 468 mm x 295 mm",
      Capacidad: "31/45",
      Disponibilidad: "20 und",
      Precio: 18.38,
      imagenesCatalogo: [getImage("DLHEN470.jpg")],
    },
    {
      descripcion: "DBHEN470",
      medidas: "Dimensiones: 468 mm x 440 mm",
      Capacidad: "31/69",
      Disponibilidad: "12 und",
      Precio: 22.28,
      imagenesCatalogo: [getImage("DBHEN470.jpg")],
    },
    {
      descripcion: "DBHER470",
      medidas: "Dimensiones: 468 mm x 450 mm",
      Capacidad: "31/74",
      Disponibilidad: "20 und",
      Precio: 22.28,
      imagenesCatalogo: [getImage("DBHER470.jpg")],
    },
  ],
  colores: [
    { nombre: "blanco", codigo: "S449", imagen: getImage("S449_bialy.jpg") },
    { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") }
  ],
  imagen: getImage("Heos_DBHEN.jpg"),
},
  {
    id: "RESPANAPLANTERWOODHIGHSET",
    nombre: "Respana Planter Wood High Set",
    categoria: "Macetas Grandes",
    descripcion: "ISEW780H",
    medidas: "Dimensiones: 770 mm x 380 mm x 795 mm",
    Capacidad: "55",
    Disponibilidad: "35 und",
    Precio: 70.50,
    imagenesCatalogo: [getImage("ISEW780H.jpg")],
    colores: [
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ],
    imagen: getImage("Respana Planter Wood.jpg"),
},
{
    id: "ARIAOVAL", 
    nombre: "Aria Oval",
    categoria: "Macetas Grandes",
    variantes: [
    {
      descripcion: "TAO40",
      medidas: "Dimensiones: 400 mm X 200 mm X 160 mm",
      Capacidad: "5",
      Disponibilidad: "12 und",
      Precio: 24.63,
      imagenesCatalogo: [getImage("TAO40.jpg")],
    },
    {
      descripcion: "TAO60",
      medidas: "Dimensiones: 600 mm X 280 mm X 200 mm",
      Capacidad: "16",
      Disponibilidad: "15 und",
      Precio: 38.38,
      imagenesCatalogo: [getImage("TAO60.jpg")],
    }
  ],
  colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ],
     imagen: getImage("Aria_Oval.jpg"),
},
{
    id: "CORObowlhigh", 
    nombre: "Coro Bowl High",
    categoria: "Macetas Grandes",
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
    }
  ],
  colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ],
  imagen: getImage("Coro_Bowl_High.png"),
},
{
    id:"EVOLIA", 
    nombre: "Evolia",
    categoria: "Macetas Grandes", 
    descripcion: "TEV60",
    medidas: "Dimensiones: 600 mm X 500 mm X 380 mm",
    Capacidad: "23",
    Disponibilidad: "15 und",
    Precio: 92.90,
    imagenesCatalogo: [getImage("TEV60.jpg")],
    colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ],
    imagen: getImage("Evolia.jpg"),
},
{
    id:"YEKE", 
    nombre: "Yeke",
    categoria: "Macetas Grandes", 
    descripcion: "TY50",
    medidas: "Dimensiones: 500 mm x 400 mm x 250 mm",
    Capacidad: "8",
    Disponibilidad: "15 und",
    Precio: 53.08,
    imagenesCatalogo: [getImage("TY50.jpg")],
    colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") }
  ],
    imagen: getImage("Yeke.jpg"),
},
{
    id:"MOLTA", 
    nombre: "Molta",
    categoria: "Macetas Grandes", 
    descripcion: "TMRF60",
    medidas: "Dimensiones: 600 mm x 500 mm",
    Capacidad: "45",
    Disponibilidad: "4 und",
    Precio: 125.23,
    imagenesCatalogo: [getImage("TMRF60.jpg")],
    colores: [
    { nombre: "moca", codigo: "7529U", imagen: getImage("7529U_mocca.jpg") },
    { nombre: "gris claro", codigo: "443U", imagen: getImage("443U_jasny_szary.jpg") },
    { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") },
    ],
    imagen: getImage("Molta_Round.jpg"),
 },
];
export const macetasPrincipales = [
  { id: "ORO", modelo: "Oro", imagen: getImage("Oro Oval.jpg") },
  { id: "LEXOROUND", modelo: "Lexo Round", imagen: getImage("round_Lexo.jpg") },
  { id: "GRACIACASEBETONEFFECT", modelo: "Gracia Case Beton Effect", imagen: getImage("Gracia_Case_Beton_Effect.jpg") },
  { id: "GRACIACASEECOWOOD", modelo: "Gracia Case Eco Wood", imagen: getImage("Gracia_Case_ECO_Wood.jpg") },
  { id: "GRACIACASE", modelo: "Gracia Case", imagen: getImage("Gracia_Case_ECO_Wood.jpg") },
  { id: "CASCADEGRADENWALL", modelo: "Cascade Garden Wall", imagen: getImage("Cascade Garden Wall.jpg") },
  { id: "BLOMA", modelo: "Bloma", imagen: getImage("Bloma.jpg") },
  { id: "URBICASEBETOMEFFECT", modelo: "Urbi Case Betom Effect", imagen: getImage("Urbi_Case_DUC.jpg") },
  { id: "HEOS", modelo: "Heos", imagen: getImage("Heos_DBHEN.jpg") },
  { id: "RESPANAPLANTERWOODHIGHSET", modelo: "Respana Planter Wood High Set", imagen: getImage("Respana Planter Wood.jpg") },
  { id: "ARIAOVAL", modelo: "Aria Oval", imagen: getImage("Aria_Oval.jpg") },
  { id: "CORObowlhigh", modelo: "Coro Bowl High", imagen: getImage("Coro_Bowl_High.png") },
  { id: "EVOLIA", modelo: "Evolia", imagen: getImage("Evolia.jpg") },
  { id: "YEKE", modelo: "Yeke", imagen: getImage("Yeke.jpg") },
  { id: "MOLTA", modelo: "Molta", imagen: getImage("Molta_Round.jpg") },
];

export default macetasGrandesData;