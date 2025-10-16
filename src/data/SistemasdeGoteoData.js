import { getImage } from "../utils/cloudinary";


const SistemasDeGoteoData = [ 
{
id: "WR",
nombre: "Watering System Round",
categoria: "Sistemas de Goteo",
variantes: [
{
descripcion: "WR1",
medidas: "Dimensiones: 170 mm x 42 mm x 170 mm",
Disponibilidad: "5 und",
Precio: 3.70,
imagenesCatalogo: [getImage("WR1.jpg")],
},
{
descripcion: "WR2",
medidas: "Dimensiones: 170 mm x 42 mm x 170 mm",
Disponibilidad: "5 und",
Precio: 4.15,
imagenesCatalogo: [getImage("WR2.jpg")],
},
{
descripcion: "WR3",
medidas: "Dimensiones: 212 mm x 50 mm x 212 mm",
Disponibilidad: "5 und",
Precio: 4.95,
imagenesCatalogo: [getImage("WR3.jpg")],
},
{
descripcion: "WR4",
medidas: "Dimensiones: 252 mm x 59 mm x 252 mm",
Disponibilidad: "5 und",
Precio: 5.95,
imagenesCatalogo: [getImage("WR4.jpg")],
},
{
descripcion: "WR5",
medidas: "Dimensiones: 277 mm x 59 mm x 277 mm",
Disponibilidad: "5 und",
Precio: 7.90,
imagenesCatalogo: [getImage("WR5.jpg")],
},
{
descripcion: "WR6",
medidas: "Dimensiones: 317 mm x 57 mm x 317 mm",
Disponibilidad: "5 und",
Precio: 8.55,
imagenesCatalogo: [getImage("WR6.jpg")],
},
{
descripcion: "WR7",
medidas: "Dimensiones: 340 mm x 59 mm x 340 mm",
Disponibilidad: "5 und",
Precio: 9.90,
imagenesCatalogo: [getImage("WR7.jpg")],
},
{
descripcion: "WR8",
medidas: "Dimensiones: 415 mm x 62 mm x 415 mm",
Disponibilidad: "5 und",
Precio: 10.90,
imagenesCatalogo: [getImage("WR8.jpg")],
},
],
imagen: getImage("Sistemas de Goteo wr.jpg"),
},
{

id: "WS",
nombre: "Watering System Square",
categoria: "Sistemas de Goteo",
variantes: [
{
descripcion: "WS3",
medidas: "Dimensiones: 245 mm x 52 mm x 245 mm",
Disponibilidad: "5 und",
Precio: 5.65,    imagenesCatalogo: [getImage("WS3.jpg")],
},
{
descripcion: "WS4",
medidas: "Dimensiones: 295 mm x 55 mm x 295 mm",
Disponibilidad: "5 und",
Precio: 5.95,
imagenesCatalogo: [getImage("WS4.jpg")],
},
{
descripcion: "WS6",
medidas: "Dimensiones: 360 mm x mm 65 x 360 mm",
Disponibilidad: "5 und",
Precio: 7.90,
imagenesCatalogo: [getImage("WS6.jpg")],
},
],
imagen: getImage("Sistemas de Goteo ws.jpg"),
},
];
export const sistemasDeGoteoPrincipales = [
  { id: "WR", modelo: "Watering System Round", imagen: getImage("Sistemas de Goteo wr.jpg") },
  { id: "WS", modelo: "Watering System Square", imagen: getImage("Sistemas de Goteo ws.jpg") },
];
export default SistemasDeGoteoData;