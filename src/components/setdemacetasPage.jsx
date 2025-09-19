import React, { useState, useContext } from "react";
import CatalogoMacetas from "./CatalogoMacetas";
import { CartContext } from "../context/CartContext";

const MacetaCard = ({ maceta, onClick }) => {
  const { addToCart } = useContext(CartContext);

  if (!maceta) return null; // 
  
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
        style={{ width: "100%", maxHeight: "80%", borderRadius: 8, objectFit: "contain" }}
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

const macetasPrincipales = [ 
{
   id: "SETORO",
   modelo: "SET ORO",
   imagen: "/images/set-de-macetas/Oro Oval.jpg",
},
{
  id: "SETBETONBOWL",
   modelo: "SET BETON BOWL",
   imagen: "/images/set-de-macetas/Beton_Bowl.jpg",
   },
{
  id: "SETGRACIABETONEFFECT",
   modelo: "SET GRACIA BETON EFFECT",
   imagen: "/images/set-de-macetas/Gracia_Case_Beton_Effect.jpg",
   },
{
  id: "SETGRACIAECOWOOD",
   modelo: "SET GRACIA ECO WOOD",
   imagen: "/images/set-de-macetas/Gracia_SquareECO_Wood.jpg",
   },
   {
  id: "SETTUBOPM",
   modelo: "SET TUBOPM",
   imagen: "/images/set-de-macetas/Tubo_PM_.jpg",
   },
   {
  id: "SETGRACIA",
   modelo: "SET GRACIA",
   imagen: "/images/set-de-macetas/Gracia_Square.jpg",
   },
{
  id: "SETGRACIATUBUSECOWOOD",
   modelo: "SET GRACIA TUBUS ECO WOOD",
   imagen: "/images/set-de-macetas/Gracia_Tubus_Slim_ECO_Wood.jpg",
   },
{
  id: "SETMILLYROUND",
   modelo: "SET MILLY ROUND",
   imagen: "/images/set-de-macetas/Milly_Round DMIN.jpg",
   },
   {
  id: "SETSPLOFYBOWL",
   modelo: "SET SPLOFY BOWL",
   imagen: "/images/set-de-macetas/Splofy_Bowl.jpg",
   },
{
  id: "SETRATOLLARALLINGSQUARE",
   modelo: "SET RATOLLA RALLING SQUARE",
   imagen: "/images/set-de-macetas/ratolla-raling.jpg",
   },
   {
  id: "SETHEOS",
   modelo: "SET HEOS",
   imagen: "/images/set-de-macetas/Heos_DBHEN.jpg",
   },
   {
  id: "SETPLANTI",
   modelo: "SET PLANTI",
   imagen: "/images/set-de-macetas/Planti.jpg",
   },
 
{
  id: "SETGROWER",
   modelo: "SET GROWER",
   imagen: "/images/set-de-macetas/Grower.jpg",
   },
   {
  id: "SETARIAOVAL",
   modelo: "SET ARIA OVAL",
   imagen: "/images/set-de-macetas/Aria_Oval.jpg",
   },
   {
  id: "SETCOROBOWL",
   modelo: "SET CORO BOWL",
   imagen: "/images/set-de-macetas/Coro_Bowl_Hig.jpg",
   },
 {
  id: "SETMOLTA",
   modelo: "SET MOLTA",
   imagen: "/images/set-de-macetas/Molta_Square_Foot.jpg",
   },
 {
  id: "SETDUALAROUNDSLIM",
   modelo: "SET DUALA ROUND SLIM ",
   imagen: "/images/set-de-macetas/Duala.JPG",
   },

];
const catalogosData = {
    SETORO: {
    variantes: [
    
      {descripcion: "DBOE600",
    medidas: "Dimensiones: 595 mm x 395 mm X 380 mm",
    Capacidad: "2.3",
    Disponibilidad: "20 und",
    Precio: 31.24,
    imagenesCatalogo: ["/images/set-de-macetas/DBOE600.jpg",],
        },
    {
    descripcion: "DHOE600",
    medidas: "Dimensiones: 595 mm x 395 mm X 545 mm",
    Capacidad: "3.9",
    Disponibilidad: "20 und",
    Precio: 31.24,
    imagenesCatalogo: ["/images/set-de-macetas/DBOE600.jpg",],
         },
   ],
colores: [
         { nombre: "Blanco", codigo: "S449", imagen: "/images/colores-macetas/S449_bialy.jpg"},
          { nombre: "gris claro", codigo: "443U", imagen:"/images/colores-macetas/443U_jasny_szary.jpg"},
         { nombre: "pino verde", codigo: "2411U", imagen:"/images/colores-macetas/2411U_zielona_pinia.jpg"},  
        { nombre: "gris medio oscuro", codigo: "419U", imagen:"/images/colores-macetas/419U_ciemny_szary.jpg"}
      ],
},
  SETBETONBOWL: {
    variantes: [
    
      {descripcion: "DKB240",
    medidas: "Dimensiones: 238 mm x 161 mm",
    Capacidad: "2.3",
    Disponibilidad: "20 und",
    Precio: 27.13,
    imagenesCatalogo: ["/images/set-de-macetas/DKB240-422U.jpg",],
    Accesorios: [
      {
        nombre: "Insert",
        imagen:  ["/images/accesorios/insert.jpg"],
 }
 ]
     },
    {
    descripcion: "DKB290",
    medidas: "Dimensiones: 290 mm x 195 mm",
    Capacidad: "3.9",
    Disponibilidad: "20 und",
    Precio: 27.13,
    imagenesCatalogo: ["/images/set-de-macetas/DKB240-422U.jpg",],
     Accesorios: [
      {
        nombre: "Insert",
        imagen:  ["/images/accesorios/insert.jpg"],
 }
 ],
     },
     {
    descripcion: "DKB370",
    medidas: "Dimensiones: 370 mm x 218 mm",
    Capacidad: "9",
    Disponibilidad: "20 und",
    Precio: 27.13,
    imagenesCatalogo: ["/images/set-de-macetas/DKB240-422U.jpg",],
     Accesorios: [
      {
        nombre: "Insert",
        imagen:  ["/images/accesorios/insert.jpg"],
 }
 ],
     },
  ],
colores: [
        { nombre: "concreto / hormigón", codigo: "422U", imagen:"/images/colores-macetas/422U_beton.jpg"},
          ]
},
 
  SETGRACIABETONEFFECT: {
    variantes: [
    
      {descripcion: "DGQL400E ",
    medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
    Capacidad: "25",
    Disponibilidad: "75 und",
    Precio: 30.87,
    imagenesCatalogo: ["/images/set-de-macetas/DGQL400E-422U.jpg",],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  ["/images/accesorios/base de drenaje interno.jpg"],
 }
 ]
      },
      {descripcion: "DGCL600E ",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mmm",
    Capacidad: "19.5",
    Disponibilidad: "75 und",
    Precio: 30.87,
    imagenesCatalogo: ["/images/set-de-macetas/DGQL400E-422U.jpg",],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  ["/images/accesorios/base de drenaje interno1.jpg"],
 }
 ],
  },    
   {descripcion: "DGRL400LE ",
    medidas: "Dimensiones: 380 mm x 207 mm",
    Capacidad: "14.3",
    Disponibilidad: "75 und",
    Precio: 30.87,
    imagenesCatalogo: ["/images/set-de-macetas/DGQL400E-422U.jpg",],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  ["/images/accesorios/base de drenaje interno2.jpg"],
 }
 ],
 },
  ],  
colores: [
     { nombre: "concreto / hormigón", codigo: "422U", imagen:"/images/colores-macetas/422U_beton.jpg"},
      { nombre: "crema", codigo: "CY700", imagen:"/images/colores-macetas/CY700_kremowy.jpg"},
      { nombre: "gris oscuro", codigo: "S433", imagen:"/images/colores-macetas/S433_antracytowy.jpg"}
      ]
     },
    SETGRACIAECOWOOD: {
    variantes: [

    {descripcion: "DGQL400W ",
    medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
    Capacidad: "25",
    Disponibilidad: "100 und",
    Precio: 20.18,
    imagenesCatalogo: ["/images/set-de-macetas/DGQL400W-4665W.jpg",],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  ["/images/accesorios/base de drenaje interno.jpg"],
 }
 ],
},
 {descripcion: "DGCL600W",
    medidas: "Dimensiones: 580 mm x 240 mm x 235 mm",
    Capacidad: "19.5",
    Disponibilidad: "100 und",
    Precio:20.18,
    imagenesCatalogo: ["/images/set-de-macetas/DGQL400W-4665W.jpg",],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  ["/images/accesorios/base de drenaje interno1.jpg"],
 }
 ],
},
],
colores: [
       { nombre: "blanco ECO", codigo: "S449W", imagen:"/images/colores-macetas/S449W_bialy_ECO.jpg"},
      { nombre: "natural ECO", codigo: "4665W", imagen:"/images/colores-macetas/4665W_naturo_ECO.jpg"},
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen:"/images/colores-macetas/S433W_antracytowy_ECO.jpg"},
      { nombre: "café ECO", codigo: "4625W", imagen: "/images/colores-macetas/4625W_kawa_ECO.jpg"},
      ],
      },
     SETTUBOPM: {
     variantes: [
    
    {descripcion: "DPOD240 ",
    medidas: "Dimensiones: 239 mm x 231 mm",
    Capacidad: "8",
    Disponibilidad: "75 und",
    Precio: 23.70,
    imagenesCatalogo: ["/images/set-de-macetas/DPOD240-S433.jpg",],
     Accesorios: [
      {
        nombre: "Platillo",
        imagen:  ["/images/accesorios/PLATILLO TUBOPM.jpg"],
 }
 ]
     },
    {descripcion: "DPOD350...",
    medidas: "Dimensiones: 338 x 326 mm",
    Capacidad: "22.5",
    Disponibilidad: "75 und",
    Precio: 23.70,
    imagenesCatalogo: ["/images/set-de-macetas/DPOD240-S433.jpg",],
     Accesorios: [
      {
        nombre: "Platillo",
        imagen:  ["/images/accesorios/PLATILLO TUBOPM.jpg"],
 }
 ]
     },
     {descripcion: "DPOD400",
    medidas: "Dimensiones: 390 mm x 375 mm",
    Capacidad: "35",
    Disponibilidad: "75 und",
    Precio: 23.70,
    imagenesCatalogo: ["/images/set-de-macetas/DPOD240-S433.jpg",],
     Accesorios: [
      {
        nombre: "Platillo",
        imagen:  ["/images/accesorios/PLATILLO TUBOPM.jpg"],
      }
      ]
      },
      ],

colores: [
      { nombre: "blanco", codigo: "S449", imagen:"/images/colores-macetas/S449_bialy.jpg"},
      { nombre: "pino verde", codigo: "2411U", imagen:"/images/colores-macetas/2411U_zielona_pinia.jpg"},
      { nombre: "gris oscuro", codigo: "S433", imagen:"/images/colores-macetas/S433_antracytowy.jpg"}
      ]
      },
    SETGRACIA:{
     variantes: [
    
    {descripcion: "DGQL400",
    medidas: "Dimensiones: 390 mm x 390 mm x 270 mm",
    Capacidad: "25",
    Disponibilidad: "100 und",
    Precio: 26.46,
    imagenesCatalogo: ["/images/set-de-macetas/DGQL400-S449.jpg",],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  ["/images/accesorios/base de drenaje interno.jpg"],
      }
      ]
      },
      {descripcion: "DGCL600 ",
      medidas: "Dimensiones: 580 mm x 240 mm x 235 mm",
      Capacidad: "19.5",
      Disponibilidad: "100 und",
      Precio: 26.46,
      imagenesCatalogo: ["/images/set-de-macetas/DGQL400-S449.jpg",],
      Accesorios: [
      {
      nombre: "base de drenaje interno",
      imagen:  ["/images/accesorios/base de drenaje interno1.jpg"],
      }
      ]
      },
      {descripcion: "DGTL240",
      medidas: "Dimensiones: 239 mm x 445 mm x 235 mm",
      Capacidad: "14.5",
      Disponibilidad: "100 und",
      Precio: 26.46,
      imagenesCatalogo: ["/images/set-de-macetas/DGQL400-S449.jpg",],
      Accesorios: [
      {
      nombre: "base de drenaje interno",
      imagen:  ["/images/accesorios/base de drenaje interno3.jpg"],
      }
      ]
      },
      ],
colores: [
      { nombre: "blanco", codigo: "S449", imagen:"/images/colores-macetas/S449_bialy.jpg"},
      { nombre: "gris claro", codigo: "443U", imagen:"/images/colores-macetas/443U_jasny_szary.jpg"},
      { nombre: "verde terroso", codigo: "5615C", imagen:"/images/colores-macetas/5615C_ziemisty_zielony.jpg"},
      { nombre: "gris oscuro", codigo: "S433", imagen:"/images/colores-macetas/S433_antracytowy.jpg"}
      ]
      },
  SETGRACIATUBUSECOWOOD: {
     variantes: [
    
    {descripcion: "DGRL400LW ",
    medidas: "Dimensiones: 380 mm x 207 mm",
    Capacidad: "14.3",
    Disponibilidad: "100 und",
    Precio: 16.08,
    imagenesCatalogo: ["/images/set-de-macetas/DGRL400LW.jpg",],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  ["/images/accesorios/base de drenaje interno2.jpg",],
      }
      ]
      },
        {descripcion: "DGTL240W ",
    medidas: "Dimensiones: 293 mm x 445 mm",
    Capacidad: "14.5",
    Disponibilidad: "100 und",
    Precio: 16.08,
    imagenesCatalogo: ["/images/set-de-macetas/DGRL400LW.jpg",],
     Accesorios: [
      {
        nombre: "base de drenaje interno",
        imagen:  ["/images/accesorios/base de drenaje interno3.jpg"],
      }
      ]
      },
      ],
colores: [
      { nombre: "blanco ECO", codigo: "S449W", imagen:"/images/colores-macetas/S449W_bialy_ECO.jpg"},
      { nombre: "natural ECO", codigo: "4665W", imagen:"/images/colores-macetas/4665W_naturo_ECO.jpg"},
      { nombre: "gris oscuro ECO", codigo: "S433W", imagen:"/images/colores-macetas/S433W_antracytowy_ECO.jpg"},
      { nombre: "café ECO", codigo: "4625W", imagen:"/images/colores-macetas/4625W_kawa_ECO.jpg"}
      ]
      },
   
    SETMILLYROUND: {
     variantes: [
    
    {descripcion: "DMIG190",
    medidas: "Dimensiones: 188 mm x 277 mm",
    Capacidad: "3.7",
    Disponibilidad: "30 und",
    Precio: 7.23,
    imagenesCatalogo: ["/images/set-de-macetas/DMIN200-4985U.jpg",],
    },
    {descripcion: "DMIL220",
    medidas: "Dimensiones: 220 mm x 262 mm",
    Capacidad: "5.7",
    Disponibilidad: "30 und",
    Precio: 7.23,
    imagenesCatalogo: ["/images/set-de-macetas/DMIN200-4985U.jpg",],
    },
    {descripcion: "DMIN200",
    medidas: "Dimensiones: 195 mm x 210 mm",
    Capacidad: "5.20",
    Disponibilidad: "48 und",
    Precio: 7.23,
    imagenesCatalogo: ["/images/set-de-macetas/DMIN200-4985U.jpg",],
     },
     ],
colores: [
      { nombre: "rojo oscuro", codigo: "4985U", imagen:"/images/colores-macetas/4985U_marsala.jpg"},
      { nombre: "blanco", codigo: "S449", imagen:"/images/colores-macetas/S449_bialy.jpg"},
      { nombre: "gris claro", codigo: "443U", imagen:"/images/colores-macetas/443U_jasny_szary.jpg"},
      { nombre: "pino verde", codigo: "2411U", imagen:"/images/colores-macetas/2411U_zielona_pinia.jpg"},
      { nombre: "gris oscuro", codigo: "S433", imagen:"/images/colores-macetas/S433_antracytowy.jpg"},
      { nombre: "carbón", codigo: "446U", imagen:"/images/colores-macetas/446U_wegiel.jpg"}
     ]
     },
    
     SETSPLOFYBOWL: {

      variantes: [

    {descripcion: "DKSP240",
    medidas: "Dimensiones: 239 mm x 161 mm",
    Capacidad: "2.3",
    Disponibilidad: "60 und",
    Precio: 27.13,
    imagenesCatalogo: ["/images/set-de-macetas/DKSP240-7529U.jpg",],
     },
     {descripcion: "DKSP290",
    medidas: "Dimensiones: 290 mm x195 mm",
    Capacidad: "3.9",
    Disponibilidad: "60 und",
    Precio: 27.13,
    imagenesCatalogo: ["/images/set-de-macetas/DKSP240-7529U.jpg",],
     },
     {descripcion: "DKSP370",
    medidas: "Dimensiones: 370 mm x 218 mm",
    Capacidad: "9",
    Disponibilidad: "60 und",
    Precio: 27.13,
    imagenesCatalogo: ["/images/set-de-macetas/DKSP240-7529U.jpg",],
     },
     ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:"/images/colores-macetas/7529U_mocca.jpg"},
      { nombre: "blanco", codigo: "S449", imagen:"/images/colores-macetas/S449_bialy.jpg"},
      { nombre: "gris oscuro", codigo: "S433", imagen:"/images/colores-macetas/S433_antracytowy.jpg"}
         ]
     },
    
     SETRATOLLARALLINGSQUARE: {

      variantes: [

    {descripcion: "DRLB280",
    medidas: "Dimensiones: 272 mm x 272 mm x 225 mm",
    Capacidad: "8.5",
    Disponibilidad: "30 und",
    Precio: 9.82,
    imagenesCatalogo: ["/images/set-de-macetas/DRLB280-7529U.jpg",],
    },
    {descripcion: "DRLB400",
    medidas: "Dimensiones: 396 mm x 272 mm x 225 mm",
    Capacidad: "13",
    Disponibilidad: "30 und",
    Precio: 9.82,
    imagenesCatalogo: ["/images/set-de-macetas/DRLB280-7529U.jpg",],
    },
    ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:"/images/colores-macetas/7529U_mocca.jpg"},
      { nombre: "sombra", codigo: "440U", imagen:"/images/colores-macetas/440U_umbra.jpg"},
      { nombre: "gris oscuro", codigo: "S433", imagen:"/images/colores-macetas/S433_antracytowy.jpg"}
         ]
     },
    
     SETHEOS: {
    
    variantes: [

    {descripcion: "DLHEN470",
    medidas: "Dimensiones: 468 mm x 295 mm",
    Capacidad: "31/45",
    Disponibilidad: "20 und",
    Precio: 28.46,
    imagenesCatalogo: ["/images/set-de-macetas/DLHEN470-S433.jpg",],
    },
    {descripcion: "DBHEN470",
    medidas: "Dimensiones: 468 mm x 440 mm",
    Capacidad: "31/69",
    Disponibilidad: "20 und",
    Precio: 28.46,
    imagenesCatalogo: ["/images/set-de-macetas/DLHEN470-S433.jpg",],
    },
    {descripcion: "DBHER470",
    medidas: "Dimensiones: 468 mm x 450 mm",
    Capacidad: "31/74",
    Disponibilidad: "12 und",
    Precio: 28.46,
    imagenesCatalogo: ["/images/set-de-macetas/DLHEN470-S433.jpg",],
    },
    ],
colores: [
      { nombre: "blanco", codigo: "S449", imagen:"/images/colores-macetas/S449_bialy.jpg"},
      { nombre: "gris oscuro", codigo: "S433", imagen:"/images/colores-macetas/S433_antracytowy.jpg"}
      ]

     },
    
     SETPLANTI: {
    
      variantes: [

    {descripcion: "DMLR190",
    medidas: "Dimensiones: 195 mm x 160 mm",
    Capacidad: "3.1",
    Disponibilidad: "100 und",
    Precio: 1.45,
    imagenesCatalogo: ["/images/set-de-macetas/DMLR190.jpg",],
    },
    {descripcion: "DMLR230",
    medidas: "Dimensiones: 235 mm x 190 mm",
    Capacidad: "5.4",
    Disponibilidad: "100 und",
    Precio: 1.45,
    imagenesCatalogo: ["/images/set-de-macetas/DMLR190.jpg",],
    },
    ],
colores: [
    { nombre: "Transparente", codigo: "S429", imagen:"/images/colores-macetas/S429_bialy.jpg"},
    ]
    },
    
    SETGROWER: {
    
    variantes: [

    {descripcion: "DOGR180",
    medidas: "Dimensiones: 179 mm x 165 mm",
    Capacidad: "3",
    Disponibilidad: "100 und",
    Precio: 2.50,
    imagenesCatalogo: ["/images/set-de-macetas/DOGR180.jpg",],
    },
    {descripcion: "DOGR200",
    medidas: "Dimensiones: 199 mm x 183 mm",
    Capacidad: "4",
    Disponibilidad: "100 und",
    Precio: 2.50,
    imagenesCatalogo: ["/images/set-de-macetas/DOGR180.jpg",],
    },
    {descripcion: "DOGR240",
    medidas: "Dimensiones: 235 mm x 216 mm",
    Capacidad: "6.5",
    Disponibilidad: "100 und",
    Precio: 2.50,
    imagenesCatalogo: ["/images/set-de-macetas/DOGR180.jpg",],
    },
    ],
colores: [
    { nombre: "blanco", codigo: "S449", imagen:"/images/colores-macetas/S449_bialy.jpg"},
    ]
    },

    SETARIAOVAL: {
    
    variantes: [
    {descripcion: "TAO40",
    medidas: "Dimensiones: 400 mm X 200 mm X 160 mm",
    Capacidad: "5",
    Disponibilidad: "12 und",
    Precio: 44.10,
    imagenesCatalogo: ["/images/set-de-macetas/TAO40.jpg",],
    },
    {descripcion: "TAO60",
    medidas: "Dimensiones: 600 mm X 280 mm X 200 mm",
    Capacidad: "16",
    Disponibilidad: "15 und",
    Precio: 44.10,
    imagenesCatalogo: ["/images/set-de-macetas/TAO40.jpg",],
    },
    ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:"/images/colores-macetas/7529U_mocca.jpg"},
      { nombre: "gris claro", codigo: "443U", imagen:"/images/colores-macetas/443U_jasny_szary.jpg"},
      { nombre: "gris piedra", codigo: "405U", imagen:"/images/colores-macetas/405U_szary_kamienny.jpg"}
    ]
    },
    
    SETCOROBOWL: {

    variantes: [

   {descripcion: "TCB40H",
    medidas: "Dimensiones: 400 mm X 530 mm",
    Capacidad: "9",
    Disponibilidad: "9 und",
    Precio: 120.77,
    imagenesCatalogo: ["/images/set-de-macetas/TCB40H.jpg",],
    
     },
     {descripcion: "TCB48",
    medidas: "Dimensiones: 480 mm X 420 mm",
    Capacidad: "22",
    Disponibilidad: "3 und",
    Precio: 120.77,
    imagenesCatalogo: ["/images/set-de-macetas/TCB40H.jpg",],
     
     },
     ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:"/images/colores-macetas/7529U_mocca.jpg"},
      { nombre: "gris claro", codigo: "443U", imagen:"/images/colores-macetas/443U_jasny_szary.jpg"},
      { nombre: "gris piedra", codigo: "405U", imagen:"/images/colores-macetas/405U_szary_kamienny.jpg"},
      
      ]

     },
     SETMOLTA: {

      variantes: [

    {descripcion: "TMRF60",
    medidas: "Dimensiones: 600 mm x 500 mm",
    Capacidad: "45",
    Disponibilidad: "4 und",
    Precio: 203.79,
    imagenesCatalogo: ["/images/set-de-macetas/TMSF40.jpg",],
    },

    {descripcion: "TMSF40",
    medidas: "Dimensiones: 400 mm X 360 mm",
    Capacidad: "19",
    Disponibilidad: "6 und",
    Precio: 203.79,
    imagenesCatalogo: ["/images/set-de-macetas/TMSF40.jpg",],
    },

     {descripcion: "TMSF48",
    medidas: "Dimensiones: 480 mm X 390 mm",
    Capacidad: "32",
    Disponibilidad: "4 und",
    Precio: 203.79,
    imagenesCatalogo: ["/images/set-de-macetas/TMSF40.jpg",],
    },
    ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:"/images/colores-macetas/7529U_mocca.jpg"},
      { nombre: "gris claro", codigo: "443U", imagen:"/images/colores-macetas/443U_jasny_szary.jpg"},
    ]

     },
     SETDUALAROUNDSLIM: {

      variantes: [

    {descripcion: "TDS30",
    medidas: "Dimensiones: 300/250 mm X 540 mm",
    Capacidad: " 8 y 5 L",
    Disponibilidad: "4 und",
    Precio: 124.30,
    imagenesCatalogo: ["/images/set-de-macetas/TDS30.jpg",],
    },
    {descripcion: "TDS40",
    medidas: "Dimensiones: 400/300 mm X700 mm",
    Capacidad: "17 y 12",
    Disponibilidad: "4 und",
    Precio: 124.30,
    imagenesCatalogo: ["/images/set-de-macetas/TDS30.jpg",],
    },
    ],
colores: [
      { nombre: "moca", codigo: "7529U", imagen:"/images/colores-macetas/7529U_mocca.jpg"},
      { nombre: "gris claro", codigo: "443U", imagen:"/images/colores-macetas/443U_jasny_szary.jpg"},
    ]
    },
};

  function SetdemacetasPage() {
  const [catalogoVisible, setCatalogoVisible] = useState(null);
  const [varianteIndex, setVarianteIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useContext(CartContext);
  const macetaSeleccionada = catalogoVisible ? catalogosData[catalogoVisible] : null;
  const varianteActual = macetaSeleccionada?.variantes
  ? macetaSeleccionada.variantes[varianteIndex]
  : macetaSeleccionada;
  const principal = macetasPrincipales.find(m => m.id === catalogoVisible);

  return (
    <div style={{ maxWidth: '95vw', margin: '10px auto 0', textAlign: 'center' }}>
      {catalogoVisible ? (
          <div
          style={{
            position: 'fixed',
            top: '0%',
            left: '50%',
            transform: 'translateX(-50%)',
            maxHeight: '100vh',
            width: '50vw',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1000,
            padding: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: 40,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              width: '100vw',
              maxHeight: '93vh',
              overflowY: 'auto',
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              textAlign: 'left',
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
          
                   
{/* === NUEVO DISEÑO DEL MODAL === */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 520px) 1fr',
    gap: 24,
    alignItems: 'flex-start',
    marginTop: 10,
  }}
>
  {/* Columna Izquierda: Imagen + Detalles */}
  <div>
    {/* Tarjeta de Imagen */}
    <div
      style={{
        background: '#f8fafc',
        border: '1px solid #e5e7eb',
        borderRadius: 16,
        padding: 12,
        boxShadow: '0 10px 20px rgba(0,0,0,0.06)',
      }}
    >
      <img
        src={varianteActual?.imagenesCatalogo?.[0] ?? principal?.imagen}
        alt={principal?.modelo}
        style={{
          width: '100%',
          height: 480,
          objectFit: 'contain',
          borderRadius: 12,
          background: 'white',
        }}
      />
    </div>

    {/* Tarjeta de Características (debajo de la imagen) */}
    <div
      style={{
        marginTop: 14,
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 14,
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      }}
    >
      <div
  style={{
    marginBottom: 12,
    padding: '10px 14px',
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 16,
    color: '#16a34a',
    textAlign: 'center',
  }}
>
  <strong>Precio del Set:</strong> {varianteActual.Precio ? `$ ${Number(varianteActual.Precio).toFixed(2)}` : '-'}
</div>

      <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 6 }}>
        Características
      </div>

          

      {/* Listado de variantes en un solo viewport */}
      
<div style={{ display: 'grid', rowGap: 14 }}>
  {macetaSeleccionada?.variantes?.map((v, i) => (
    <div
      key={i}
      style={{
        padding: 10,
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        background: '#f9fafb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      }}
    >
  

        
        <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>
        <div><strong>Medidas:</strong> {v.medidas ?? '-'}</div>
        <div><strong>Capacidad:</strong> {v.Capacidad ? v.Capacidad + ' L' : '-'}</div>
        <div><strong>Disponibilidad:</strong> {v.Disponibilidad ?? '-'}</div>
       
      </div>
    </div>
  ))}
      </div>
    </div>
  </div>

  {/* Columna Derecha: Colores + Accesorios */}
  <div style={{ display: 'grid', gap: 16 }}>
    {/* Colores */}
    {macetaSeleccionada?.colores && (
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          padding: 14,
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 15,
            color: '#111827',
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span>Colores disponibles</span>
          {selectedColor && (
            <span style={{ color: '#6b7280', fontWeight: 500, fontSize: 13 }}>
              · {selectedColor.nombre}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {macetaSeleccionada.colores.map((color, index) => (
            <div
              key={index}
              onClick={() => setSelectedColor(color)}
              title={color.nombre}
              style={{
                width: 55,
                height: 20,
                borderRadius: '8px',
                overflow: 'hidden',
                border:
                  selectedColor?.codigo === color.codigo
                    ? '3px solid #16a34a'
                    : '1px solid #e5e7eb',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={color.imagen}
                alt={color.nombre}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Accesorios */}
    {Array.isArray(varianteActual?.Accesorios) && varianteActual.Accesorios.length > 0 && (
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          padding: 14,
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 8 }}>
          Incluye accesorios
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 12,
          }}
        >
          {varianteActual.Accesorios.filter((acc) => !!acc && !!acc.imagen).map((acc, i) => {
            const src = Array.isArray(acc.imagen) ? acc.imagen[0] : acc.imagen;
            return (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 10,
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
              >
                <img
                  src={src}
                  alt={acc?.nombre ?? 'Accesorio'}
                  style={{ width: '100%', height: 120, objectFit: 'cover' }}
                />
                <div
                  style={{
                    padding: '8px 10px',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#111827',
                    textAlign: 'center',
                  }}
                >
                  {acc?.nombre ?? 'Accesorio'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
</div>
{/* === FIN NUEVO DISEÑO DEL MODAL === */}

          <button
  onClick={() => {
    if (!selectedColor) {
      alert("Por favor, selecciona un color antes de agregar al carrito.");
      return;
    }
       
    
    addToCart({
      // id único para poder eliminar luego (usa id + descripción de la variante si existe)
        id: `${principal?.id}-${varianteActual.descripcion}-${selectedColor?.codigo ?? "base"}`,
      // usa el modelo e imagen de la tarjeta principal
      modelo: principal?.modelo,
      imagen: varianteActual.imagenesCatalogo?.[0] ?? principal?.imagen,
      imagenColor: selectedColor.imagen, // <-- aquí va la miniatura del color
      colorNombre: selectedColor.nombre, // nombre legible del color 
      Disponibilidad: varianteActual.Disponibilidad,
      Precio: varianteActual.Precio,
      color: selectedColor,
    });
  }}
            style={{
              marginTop: 8,
    padding: "6px 12px",
    background: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 13,
            }}
            
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    ) : (
      <>
        <h1>set de macetas</h1>
        <div
          style={{
            marginTop: 12,
            maxWidth: '90vw',
            margin: '0 auto',
            padding: '20px 0',
            overflowX: 'auto',
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
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
export default SetdemacetasPage;