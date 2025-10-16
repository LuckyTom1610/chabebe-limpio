import { getImage } from "../utils/cloudinary";

export const accesoriosData = [
{
    id: "MAZECAP",
    modelo: "MAZECAP",
    imagen: getImage("MAZE_CAP.jpg"),
    categoria: "Accesorios",
  },
  {
    id: "GIRAFFE",
    modelo: "GIRAFFE",
    imagen: getImage("Giraffe.jpg"),
    categoria: "Accesorios",
  },
  {
    id: "BASEWOODY",
    modelo: "BASE WOODY",
    imagen: getImage("BASE_WOODY.jpg"),
    categoria: "Accesorios",
  },
  {
    id: "BIRDYFEEDSQUARE",
    modelo: "BIRDYFEED SQUARE",
    imagen: getImage("BIRDYFEED_SQUARE.jpg"),
    categoria: "Accesorios",
  },
  {
    id: "BIRDYFEEDROUND",
    modelo: "BIRDYFEED ROUND",
    imagen: getImage("BIRDYFEED_ROUND.jpg"),
    categoria: "Accesorios",
  },
  {
    id: "METALHANGER",
    modelo: "METAL HANGER",
    imagen: getImage("Metal_Hanger.jpg"),
    categoria: "Accesorios",
  },
  {
    id: "WHEELS",
    modelo: "WHEELS",
    imagen: getImage("WHEELS.png"),
    categoria: "Accesorios",
  },
  {
    id: "INSERT",
    modelo: "INSERT",
    imagen: getImage("Insert1.jpg"),
    categoria: "Accesorios",
  },
];
export const catalogosAccesorios = {
  
  MAZECAP: {
    descripcion: "IPDM600",
    medidas: "Dimensiones: 593 mm x 192 mm",
    Disponibilidad: "20 und",
    Precio: 18.30,
    imagenesCatalogo: [getImage("IPDM600.jpg")],
    colores: [
        { nombre: "gris", codigo: "S443", imagen: getImage("S443_szary.jpg") },
        { nombre: "color ladrillo", codigo: "R736", imagen: getImage("R736_cegla.jpg") },
        { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") },
          ]
},

GIRAFFE: {
    descripcion: "IKW2",
    medidas: "Dimensiones: 334 x mm 140 mm x 326 mm",
    Disponibilidad: "120 und",
    Precio: 2,
    imagenesCatalogo: [getImage("IKW2.jpg")],
    colores: [
        { nombre: "crema", codigo: "CY728", imagen: getImage("CY728_krem.jpg") },
        { nombre: "verde grisáceo", codigo: "623U", imagen: getImage("623U_szalwia.jpg") },
        { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") },
          ]
},

BASEWOODY: {
    descripcion: "IBWS",
    medidas: "Dimensiones: 756 mm x 756 mm x 250 mm",
    Disponibilidad: "10 und",
    Precio: 27.75,
    imagenesCatalogo: [getImage("IBWS.jpg")],
     

colores: [
     { nombre: "ladrillo rústico", codigo: "7587U", imagen: getImage("7587U_rustykalna_cegla.jpg") },
      { nombre: "natural ECO", codigo: "4665W", imagen: getImage("4665W_naturo_ECO.jpg") },
      { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") },
      ]

     },
    BIRDYFEEDSQUARE: {
    descripcion: "IBFS ",
    medidas: "Dimensiones: 248 mm x 182 mm x 174 mm",
    Disponibilidad: "15 und",
    Precio: 11.68,
    imagenesCatalogo: [getImage("IBFS.jpg")],
    colores: [
       { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") },
       { nombre: "gris oscuro", codigo: "S433", imagen: getImage("S433_antracytowy.jpg") },
         ]

     },

BIRDYFEEDROUND: {
    descripcion: "IBFR",
    medidas: "Dimensiones: 294 mm x 258 mm x 122 mm",
    Disponibilidad: "10 und",
    Precio: 9.50,
    imagenesCatalogo: [getImage("IBFR.jpg")],
    colores: [
       { nombre: "gris piedra", codigo: "405U", imagen: getImage("405U_szary_kamienny.jpg") },
      ]
    
     },
     METALHANGER: {
    descripcion: "IWS ",
    medidas: "Dimensiones: 90 mm x 130 mm x 7 mm",
    Disponibilidad: "100 und",
    Precio: 4.08,
    imagenesCatalogo: [getImage("IWS.jpg")],
    colores: [
      { nombre: "METAL", codigo: "METAL", imagen: getImage("443U_jasny_szary.jpg") },
            ]

     },
     WHEELS: {
    
      variantes: [
    {descripcion: "TSW4 ",
    medidas: "Dimensiones: 235 mm X 280 mm",
    Disponibilidad: "20 und",
    Precio: 8.78,
    imagenesCatalogo: [getImage("TSW4.jpg")],
    },
    {descripcion: "TSW6",
    medidas: "Dimensiones: 235 mm X 425 mm",
    Disponibilidad: "20 und",
    Precio: 10.50,
    imagenesCatalogo: [getImage("TSW6.jpg")],
    },
    ],
    },
   
     INSERT: {

      variantes: [

    {descripcion: "IWKO325",
    medidas: "Dimensiones: 325 mm x 205 mm",
    Capacidad: "11",
    Disponibilidad: "400 und",
    Precio: 2.98,
    imagenesCatalogo: [getImage("IWKO325.jpg")],
        
     },
     {descripcion: "IWKO355",
    medidas: "Dimensiones: 355 x mm x 220 mm",
    Capacidad: "18",
    Disponibilidad: "400 und",
    Precio: 3.75,
    imagenesCatalogo: [getImage("IWKO355.jpg")],
          },
          {descripcion: "IWKO460",
    medidas: "Dimensiones: 460 mm x 290 mm",
    Capacidad: "40",
    Disponibilidad: "400 und",
    Precio: 7.35,
    imagenesCatalogo: [getImage("IWKO460.jpg")],
          },
     ],

colores: [
      { nombre: "NEGRO", codigo: "S411", imagen: getImage("S411_czarny.jpg") },
         ]

     },
     };

export default accesoriosData;