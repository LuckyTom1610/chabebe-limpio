import { getImage } from "../utils/cloudinary";

export const macetasConPlantasData = [
  
{ id: "betonBowl", 
  nombre: "Beton Bowl", 
  categoria: "Macetas con Plantas",
  imagen:[   getImage("Beton_Bowl_DKB_150_422U.png"), // variante 0
             getImage("Beton_Bowl_DKB_290_422U_m.png"),  // variante 1 (ajusta si tu nombre real difiere)
             getImage("Beton_Bowl_DKB_370_422U_m.png"),  // variante 2
         ],
         },

{ id: "GRACIASQUAREBETONEFFECT", 
  nombre: "Gracia Square Beton Effect", 
  imagen: getImage("Gracia_Square_Beton_Effect_DGQL400E_422U.png"),
  categoria: "Macetas con Plantas",
  },

{ id: "GraciaLowBetonEffect", 
  nombre: "Gracia Low Beton Effect", 
  imagen: getImage("Gracia_Low_Beton Effect_DGRL400LE_422U.png"),
  categoria: "Macetas con Plantas",
  },


 { id: "GraciaLow", 
   nombre: "Gracia Low", 
   imagen: getImage("Gracia_Low_DGRL400L_S433.png"),
   categoria: "Macetas con Plantas",
  },

  { id: "GRACIALOWECOWOOD", 
    nombre: "Gracia Low ECO Wood", 
    imagen: getImage("Gracia_Low_ECO_Wood_DGRL400LW_4665W_naturo.png"),
    categoria: "Macetas con Plantas",
  },

  { id: "GRACIATUBUSSLIMECOWOOD",
    nombre: "Gracis Tubus Slim Eco Wood",
    imagen: getImage("Gracia_Tubus_Slim_ECO_Wood_DGTL240W_4665W.png"),
    categoria: "Macetas con Plantas",
  },

  { id: "GRACIASQUAREECOWOOD", 
    nombre: "Gracia Square ECO Wood", 
    imagen: getImage("Gracia_Square_ECO_Wood_DGQL400W_4665W.png"),
    categoria: "Macetas con Plantas",
  },
  // TUBOPM tiene 3 variantes -> array
   { id: "TUBOPM", 
     nombre: "Tubo PM", 
     imagen: [ getImage("Tubo_PM_DPOD240_2411U.png"), // 0
               getImage("Tubo_PM_DPOD350_2411U.png"), // 1 (ajústalo al nombre real si difiere)
               getImage("Tubo_PM_DPOD400_2411U.png"), // 2
             ],
     categoria: "Macetas con Plantas",
     },

  { id: "GRACIASQUARE",
    nombre: "Gracia Square",
    imagen: getImage("Gracia_square_DGQL400_S433.png"),
    categoria: "Macetas con Plantas",
  },


  { id: "GRACIATUBUSSLIM",
    nombre: "Gracia Tubus Slim",
    imagen: getImage("Gracia_Tubus_Slim_DGTL240_S433.png"),
    categoria: "Macetas con Plantas",
     },

  // MILLY tiene casos con y sin variantes; si quieres específico por variante, usa array
   { id: "MILLYROUNDA",
      nombre: "Milly Round A", 
      imagen: getImage("Milly_DMIG190_4985U_m.png"),
      categoria: "Macetas con Plantas",
     },
  
     
    { id: "MILLYROUND",
      nombre: "Milly Round", 
      imagen: [getImage("Milly_Round_DMIL220_4985U.png"), // 0
               getImage("Milly_DMIN170_4985U.png"), // 1
              ],
      categoria: "Macetas con Plantas",
     },

    { id: "SPLOFYBOWL", 
      nombre: "Splofy Bowl", 
      imagen: [ getImage("DKSP180_7529U SPLOFY.png"), // 0
                getImage("DKSP290_7529U SPLOFY.png"), // 1
                getImage("DKSP370-7529U SPLOFY.png"), // 2
              ],
      categoria: "Macetas con Plantas",
     },

      { id: "RATOLLARallingSquare", 
        nombre: "Ratolla Ralling Square", 
        imagen: [  getImage("DRLB280_S433_RATOLLA.png"), // 0
                   getImage("DRLB400_S433_RATOLLA.png"), // 1
                ],
        categoria: "Macetas con Plantas",
     },

    { id: "HEOS", 
      nombre: "Heos", 
      imagen: [ getImage("Heos_DLHEN400_S433.png"),
                getImage("Heos_DBHEN470_S433_m.png"),
                getImage("Heos_DBHER_S433.png"),
              ],
      categoria: "Macetas con Plantas",
    },


   { id: "PLANTI", 
     nombre: "Planti", 
     imagen: [ getImage("Planti_DMLR190_S429.png"),
               getImage("Planti_DMLR230_S429.png"),
            ],
    categoria: "Macetas con Plantas",
    },

    { id: "GROWER", 
     nombre: "Grower", 
     imagen: [ getImage("Grower_DOGR180_S449.png"),
               getImage("Grower_DOGR200_S449.png"),
               getImage("Grower_DOGR240_S449.png"),
             ],
     categoria: "Macetas con Plantas",
    },

    { id: "RESPANARALLING",
      nombre: "Respana Ralling",
      imagen: getImage("DREB290_S433_RESPANA.png"),
      categoria: "Macetas con Plantas",
    },

     { id: "MillyWall",
       nombre: "Milly Wall",
       imagen: getImage("Milly_Wall_DMIW150_2411U_m.png"),
       categoria: "Macetas con Plantas",
    },


    { id: "ARIAOVAL", 
      nombre: "Aria Oval", 
      imagen: getImage("Aria_Oval_TAO60_101GR_sand_m.png"),
      categoria: "Macetas con Plantas",
    },


  { id: "CORObowl",
    nombre: "Coro Bowl", 
    imagen: [ getImage("Coro_Bowl_High_TCB40H_101GR.png"), // 0
              getImage("Coro_Bowl_TCB48_101GR.png"),  // 1
            ],
    categoria: "Macetas con Plantas",
    },

  { id: "MOLTAsquarefoot",
    nombre: "Molta Square Foot", 
    imagen: [ getImage("Molta_Square_Foot_TMSF40_101GR.png"),// 0
              getImage("Molta_Square_Foot_TMSF48_101GR.png"), // 1
            ],
    categoria: "Macetas con Plantas",
    },

  { id: "DUALAroundslim",
    nombre: "Duala Round Slim", 
    imagen: [ getImage("Duala_Round_Slim_TDR30S_107GR.png"), // 0
              getImage("Duala_Round_Slim_TDR40S_107GR_m.png"), // 1
            ],
    categoria: "Macetas con Plantas",
    },

  // ===== GRANDES =====
  { id: "ORO",
    nombre: "Oro", 
    imagen: [ getImage("Oro_DBOE600_443U_m.png"), // 0
              getImage("Oro_DHOE600_443U_m.png"), // 1
            ],
  categoria: "Macetas con Plantas",
    },

  { id: "LEXOROUND",
    nombre: "Lexo Round", 
    imagen: getImage("DLR_S449 LEXO.png"),
     categoria: "Macetas con Plantas",
    },

  { id: "GRACIACASEBETONEFFECT",
    nombre: "Gracia Case Beton Effect", 
    imagen: getImage("Gracia_Case_Beton_Effect_DGCL600E_422U.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "GRACIACASEECOWOOD",
    nombre: "Gracia Case Eco Wood", 
    imagen: getImage("Gracia_Case_ECO_Wood_DGCL600W_4665W.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "GRACIACASE",
    nombre: "Gracia Case", 
    imagen: getImage("Gracia_Case_DGCL400_443U_m.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "CASCADEGRADENWALL",
    nombre: "Cascade Garden Wall", 
    imagen: getImage("Garden_Long_Wall_IO3W800_2 modulowy_S433.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "BLOMA",
    nombre: "Bloma", 
    imagen: getImage("DBLO600_1.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "URBICASEBETOMEFFECT",
    nombre: "Urbi Case Betom Effect", 
    imagen: getImage("Urbi_Case_Beton_Effect_DUC600TE_425U.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "RESPANAPLANTERWOODHIGHSET",
    nombre: "Respana Planter Wood High Set", 
    imagen:  getImage("ISEW780H_1.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "CORObowlhigh",
    nombre: "Coro bowl high", 
    imagen: [ getImage("Coro_Bowl_High_TCB40H_101GR.png"), // 0
              getImage("Coro_Bowl_TCB48_101GR.png"),  // 1
            ],
    categoria: "Macetas con Plantas",
    },

  { id: "EVOLIA",
    nombre: "Evolia", 
    imagen: getImage("Evolia_TEV60_101GR_sand.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "YEKE",
    nombre: "Yeke", 
    imagen: getImage("Yeke_TY50_101GR_sand_m.png"),
    categoria: "Macetas con Plantas",
    },

  { id: "MOLTA",
    nombre: "Molta", 
    imagen: getImage("Molta_Round_Foot_TMRF60_101GR_m.png"),
    categoria: "Macetas con Plantas",
    },
];

// 🌿 Plantas disponibles
export const plantasConPlantasData = [

  // 🌱 Interiores
  { id: "p1", nombre: "Calatea", tipo: "interior", precio: 1.0, imagen: getImage("Calatea.png"), categoria: "plantas" },
  { id: "p2", nombre: "Cheflera", tipo: "interior", precio: 1.0, imagen: getImage("Cheflera.png"), categoria: "plantas" },
  { id: "p4", nombre: "Costilla de Adán", tipo: "interior", precio: 1, imagen: getImage("Costilla de Adán.png"), categoria: "plantas" },
  { id: "p6", nombre: "Drácena", tipo: "interior", precio: 1, imagen: getImage("Drácena.png"), categoria: "plantas" },
  { id: "p7", nombre: "Ficus caucho", tipo: "interior", precio: 1, imagen: getImage("Ficus caucho.png"), categoria: "plantas" },
  { id: "p8", nombre: "Ficus lira o violín", tipo: "interior", precio: 1, imagen: getImage("Ficus lira o violín.png"), categoria: "plantas" },
  { id: "p9", nombre: "Filodendro hoja grande", tipo: "interior", precio: 1, imagen: getImage("Filodendro hoja grande.png"), categoria: "plantas" },
  { id: "p11", nombre: "Mini calatea", tipo: "interior", precio: 1, imagen: getImage("Mini calatea.png"), categoria: "plantas" },
  { id: "p13", nombre: "Peperomia", tipo: "interior", precio: 1, imagen: getImage("Peperomia.png"), categoria: "plantas" },
  { id: "p14", nombre: "Planta china del dinero", tipo: "interior", precio: 1, imagen: getImage("Planta china del dinero.png"), categoria: "plantas" },

  // 🌿 Exteriores
  { id: "p3", nombre: "Clavelón--Marigold", tipo: "exterior", precio: 1, imagen: getImage("Clavelón--Marigold.png"), categoria: "plantas" },
  { id: "p5", nombre: "Croto", precio: 1, tipo: "exterior", imagen: getImage("Croto.png"), categoria: "plantas" },
  { id: "p10", nombre: "Lavanda", precio: 1, tipo: "exterior", imagen: getImage("Lavanda.png"), categoria: "plantas" },
  { id: "p12", nombre: "Palma cica", precio: 1, tipo: "exterior", imagen: getImage("Palma cica.png"), categoria: "plantas" },
  { id: "p15", nombre: "Trébol morado", precio: 1, tipo: "exterior", imagen: getImage("Trébol_morado.png"), categoria: "plantas" },
];

export default [...macetasConPlantasData, ...plantasConPlantasData];