import { getImage } from "../utils/cloudinary";

export const composterasData = [
  {
    id: "COMBIOLIQ",
    modelo: "IBFT55",
    descripcion: "Compostera COMBIOLIQ",
    medidas: "Dimensiones: 380 mm x 590 mm",
    capacidad: "55 L",
    disponibilidad: "5 und",
    precio: 34.33,
    imagen: getImage("compost_IBFT55_zsv5it.jpg"),
    imagenesCatalogo: [getImage("IBFT55_qn0rlw.jpg")],
    categoria: "Composteras",
  },
  {
    id: "COMBIOSOIL",
    modelo: "IKUGL",
    descripcion: "Compostera COMBIOSOIL",
    medidas: "Dimensiones: 250 mm x 530 mm",
    capacidad: "11 L",
    disponibilidad: "45 und",
    precio: 8.63,
    imagen: getImage("compost_IKUGL_s8de5e.jpg"),
    imagenesCatalogo: [getImage("IKUGL_ascf2m.jpg")],
    categoria: "Composteras",
  },
  {
    id: "COMPOGREEN",
    modelo: "IKST380C",
    descripcion: "Compostera COMPOGREEN",
    medidas: "Dimensiones: 719 mm x 719 mm x 826 mm",
    capacidad: "380 L",
    disponibilidad: "50 und",
    precio: 42.23,
    imagen: getImage("compost_IKST_kzbvyd.jpg"),
    imagenesCatalogo: [getImage("IKST380C_z3yki5.jpg")],
    categoria: "Composteras",
  },
];

export default composterasData;