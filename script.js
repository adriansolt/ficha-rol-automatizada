var i, j, k, posicion;

var lista_habilidades = {
  sensoriales: [{
      habilidad: "escuchar",
      atributo: "per",
    },
    {
      habilidad: "ver",
      atributo: "per",
    },
    {
      habilidad: "buscar",
      atributo: "per",
    },
    {
      habilidad: "rastrear",
      atributo: "per",
    },
    {
      habilidad: "sigilo",
      atributo: "per",
    },
  ],
  corporales: [{
      habilidad: "atletismo",
      atributo: "agi",
    },
    {
      habilidad: "acrobacias",
      atributo: "agi",
    },
    {
      habilidad: "trepar",
      atributo: "fue",
    },
    {
      habilidad: "montar",
      atributo: "con",
    },
    {
      habilidad: "nadar",
      atributo: "con",
    },
    {
      habilidad: "resdolor",
      atributo: "agi",
    },
  ],
  creativas: [{
      habilidad: "arte",
      atributo: "int",
    },
    {
      habilidad: "disfraz",
      atributo: "per",
    },
    {
      habilidad: "estilo",
      atributo: "per",
    },
    {
      habilidad: "tmanos",
      atributo: "des",
    },
    {
      habilidad: "cerrajeria",
      atributo: "des",
    },
    {
      habilidad: "tramperia",
      atributo: "int",
    },
    {
      habilidad: "cocina",
      atributo: "des",
    },
    {
      habilidad: "venenos",
      atributo: "int",
    },
  ],
  sociales: [{
      habilidad: "orientarse",
      atributo: "per",
    },
    {
      habilidad: "ocultarse",
      atributo: "agi",
    },
    {
      habilidad: "robo",
      atributo: "per",
    },
    {
      habilidad: "frialdad",
      atributo: "con",
    },
    {
      habilidad: "etiqueta",
      atributo: "int",
    },
    {
      habilidad: "animales",
      atributo: "int",
    },
  ],
  culturales: [{
      habilidad: "medicina",
      atributo: "int",
    },
    {
      habilidad: "historia",
      atributo: "int",
    },
    {
      habilidad: "ocultismo",
      atributo: "int",
    },
    {
      habilidad: "navegar",
      atributo: "int",
    },
    {
      habilidad: "mates",
      atributo: "int",
    },
    {
      habilidad: "tasacion",
      atributo: "int",
    },
  ],
  profesiones: [{
      habilidad: "ingenieria",
      atributo: "int",
    },
    {
      habilidad: "joyeria",
      atributo: "des",
    },
    {
      habilidad: "forja",
      atributo: "fue",
    },
    {
      habilidad: "sastreria",
      atributo: "des",
    },
    {
      habilidad: "alquimia",
      atributo: "int",
    },
    {
      habilidad: "herbolaria",
      atributo: "int",
    },
  ],
};

var lista_atr = ["agi", "con", "des", "fue", "int", "per"];

var lista_bonos = [
  -30, // 1
  -25, // 2
  -20, // 3
  -20, // 4
  -15, // 5
  -15, // 6
  -10, // 7
  -5, // 8
  -5, // 9
  0, // 10
  5, // 11
  5, // 12
  5, // 13
  5, // 14
  10, // 15
  10, // 16
  10, // 17
  15, // 18
  15, // 19
  20, // 20
];

var lista_vida_base_por_nivel = [
  1, // 1
  3, // 2
  4, // 3
  7, // 4
  8, // 5
  10, // 6
  11, // 7
  13, // 8
  14, // 9
  16, // 10
  17, // 11
  18, // 12
  19, // 13
  21, // 14
  22, // 15
  23, // 16
  24, // 17
  26, // 18
  28, // 19
  30, // 20
];

var lista_armas = [{
    arma: "Lazo",
    arma_db: 5,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Cuerda",
    arma_tam: "S",
    arma_especial: "Presa 18",
  },
  {
    arma: "Red de gladiador",
    arma_db: 5,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "4",
    arma_clase: "Cuerda",
    arma_tam: "M",
    arma_especial: "Presa 20",
  },
  {
    arma: "Combate desarmado",
    arma_db: 10,
    arma_iniciativa: 20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "-",
    arma_tam: "-",
    arma_clase: "Sin armas",
    arma_especial: "Precisa",
  },
  {
    arma: "Jarr\u00f3n",
    arma_db: 15,
    arma_iniciativa: -10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Maza",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Botella rota",
    arma_db: 15,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "6",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Antorcha",
    arma_db: 20,
    arma_iniciativa: -10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Maza",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Palo de madera",
    arma_db: 20,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Maza",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Cadena",
    arma_db: 25,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12",
    arma_clase: "Cuerda",
    arma_tam: "M",
    arma_especial: "Presa 16",
  },
  {
    arma: "Estilete",
    arma_db: 25,
    arma_iniciativa: 20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "6",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "Precisa",
  },
  {
    arma: "Silla",
    arma_db: 25,
    arma_iniciativa: -20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10",
    arma_clase: "Mandoble",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Barra met\u00e1lica",
    arma_db: 25,
    arma_iniciativa: -5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10",
    arma_clase: "Maza",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Cestus",
    arma_freq: "6",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "Precisa",
    arma_db: 25,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
  },
  {
    arma: "Cuchillo de cocina",
    arma_db: 25,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Garrote",
    arma_db: 30,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10",
    arma_clase: "Maza",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Daga",
    arma_db: 30,
    arma_iniciativa: 20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "Precisa",
  },
  {
    arma: "Vara",
    arma_db: 30,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Asta",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Garfio",
    arma_db: 30,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Daga de parada",
    arma_db: 30,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "6",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "Precisa",
  },
  {
    arma: "Azada",
    arma_db: 30,
    arma_iniciativa: -20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Hacha",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Hoz",
    arma_db: 35,
    arma_iniciativa: -10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Arp\u00f3n",
    arma_db: 35,
    arma_iniciativa: -5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10",
    arma_clase: "Asta",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Florete",
    arma_db: 35,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "6",
    arma_clase: "Espada / Arma corta",
    arma_especial: "Precisa",
    arma_tam: "S",
  },
  {
    arma: "Guada\u00f1a",
    arma_db: 35,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10 / 18",
    arma_clase: "Asta / Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Jabalina",
    arma_db: 35,
    arma_iniciativa: 5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Asta",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "L\u00e1tigo",
    arma_db: 35,
    arma_iniciativa: -20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Cuerda",
    arma_tam: "M",
    arma_especial: "Presa 16",
  },
  {
    arma: "Tridente",
    arma_db: 40,
    arma_iniciativa: -10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12 / 14",
    arma_clase: "Asta",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Hacha de le\u00f1ador",
    arma_db: 40,
    arma_iniciativa: -10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10 / 14",
    arma_clase: "Hacha",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Pico",
    arma_db: 40,
    arma_iniciativa: -20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Lanza",
    arma_db: 40,
    arma_iniciativa: 5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8 / 12",
    arma_clase: "Asta",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Estoque",
    arma_db: 40,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Espada",
    arma_tam: "S",
    arma_especial: "Precisa",
  },
  {
    arma: "Espada corta",
    arma_db: 40,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "Precisa",
  },
  {
    arma: "Mayal",
    arma_db: 40,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12",
    arma_clase: "Maza / Cuerda",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Maza",
    arma_db: 40,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12",
    arma_clase: "Maza",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Hacha de mano",
    arma_db: 45,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10",
    arma_clase: "Hacha",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Sable",
    arma_db: 45,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12",
    arma_clase: "Espada",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Martillo de guerra",
    arma_db: 50,
    arma_iniciativa: -5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12",
    arma_clase: "Asta",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Cimitarra",
    arma_db: 50,
    arma_iniciativa: -5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10",
    arma_clase: "Espada",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Espada larga",
    arma_db: 50,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12",
    arma_clase: "Espada",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Espada ancha",
    arma_db: 55,
    arma_iniciativa: -5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "10",
    arma_clase: "Espada",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Maza pesada de combate",
    arma_db: 60,
    arma_iniciativa: -15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12 / 20",
    arma_clase: "Maza / Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Alabarda",
    arma_db: 60,
    arma_iniciativa: -15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "12 / 20",
    arma_clase: "Asta / Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Espada bastarda",
    arma_db: 70,
    arma_iniciativa: -30,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "14 / 18",
    arma_clase: "Espada / Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Hacha de guerra",
    arma_db: 70,
    arma_iniciativa: -30,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "14",
    arma_clase: "Hacha",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Gran martillo de guerra",
    arma_db: 70,
    arma_iniciativa: -35,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "14 / 20",
    arma_clase: "Maza",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Lanza de caballer\u00eda",
    arma_db: 80,
    arma_iniciativa: -30,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "16",
    arma_clase: "Asta",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Mangual",
    arma_db: 80,
    arma_iniciativa: -50,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "16 / 20",
    arma_clase: "Maza / Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Mandoble",
    arma_db: 90,
    arma_iniciativa: -60,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "16 / 20",
    arma_clase: "Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Hacha a dos manos",
    arma_db: 100,
    arma_iniciativa: -70,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "18 / 20",
    arma_clase: "Hacha / Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Ballesta de mano",
    arma_db: 30,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "6",
    arma_clase: "A. de proyectil",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Ballesta Pesada",
    arma_db: 60,
    arma_iniciativa: -20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "20",
    arma_clase: "A. de proyectil",
    arma_tam: "L",
    arma_especial: "Recarga",
  },
  {
    arma: "Arco corto",
    arma_db: 30,
    arma_iniciativa: -10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "8",
    arma_clase: "A. de proyectil",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Arco largo",
    arma_db: 40,
    arma_iniciativa: -30,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: "7",
    arma_clase: "A. de proyectil",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Rodela",
    arma_db: 15,
    arma_iniciativa: -15,
    arma_atq: 0,
    arma_par: 10,
    arma_esq: 5,
    arma_freq: "10",
    arma_clase: "Escudo",
    arma_especial: "-",
    arma_tam: "-",
  },
  {
    arma: "Escudo",
    arma_db: 20,
    arma_iniciativa: -25,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 10,
    arma_freq: "14",
    arma_tam: "-",
    arma_especial: "-",
    arma_clase: "Escudo",
  },
  {
    arma: "Escudo corporal",
    arma_db: 25,
    arma_iniciativa: -40,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 15,
    arma_freq: "20",
    arma_tam: "-",
    arma_especial: "-",
    arma_clase: "Escudo",
  },
];

var lista_armaduras = [{
    armadura: "Peto de cuero endurecido",
    def: 20,
    reqarm: 20,
    advertir: "-",
    mov: -10,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Peto de cuero tachonado",
    def: 30,
    reqarm: 25,
    advertir: "-",
    mov: -10,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Peto de metal",
    def: 40,
    reqarm: 40,
    advertir: "-",
    mov: -10,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Camisola acolchada",
    def: 10,
    reqarm: 0,
    advertir: "-",
    mov: 0,
    dureza: "Blanda",
    clase: "Armadura",
  },
  {
    armadura: "Camisola de cuero",
    def: 10,
    reqarm: 0,
    advertir: "-",
    mov: 0,
    dureza: "Blanda",
    clase: "Armadura",
  },
  {
    armadura: "Camisola de piel",
    def: 20,
    reqarm: 10,
    advertir: "-",
    mov: -10,
    dureza: "Blanda",
    clase: "Armadura",
  },
  {
    armadura: "Camisola de anillas",
    def: 40,
    reqarm: 60,
    advertir: "-",
    mov: -20,
    dureza: "Blanda",
    clase: "Armadura",
  },
  {
    armadura: "Completa gabardina",
    def: 10,
    reqarm: 0,
    advertir: "-",
    mov: 0,
    dureza: "Blanda",
    clase: "Armadura",
  },
  {
    armadura: "Completa de cuero",
    def: 20,
    reqarm: 10,
    advertir: "-",
    mov: -10,
    dureza: "Blanda",
    clase: "Armadura",
  },
  {
    armadura: "Completa de mallas",
    def: 30,
    reqarm: 30,
    advertir: "-",
    mov: -10,
    dureza: "Blanda",
    clase: "Armadura",
  },
  {
    armadura: "Completa de piezas",
    def: 50,
    reqarm: 50,
    advertir: "-",
    mov: -20,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Completa de metal",
    def: 40,
    reqarm: 70,
    advertir: "-",
    mov: -30,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Completa con escamas",
    def: 40,
    reqarm: 80,
    advertir: "-",
    mov: -30,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Completa de placas",
    def: 50,
    reqarm: 90,
    advertir: "-",
    mov: -40,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Completa de placas pesada",
    def: 60,
    reqarm: 120,
    advertir: "-",
    mov: -50,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Completa de campa\u00f1a pesada",
    def: 70,
    reqarm: 150,
    advertir: "-",
    mov: -60,
    dureza: "Dura",
    clase: "Armadura",
  },
  {
    armadura: "Yelmo de anillas",
    def: 20,
    reqarm: 0,
    advertir: 0,
    mov: "-",
    dureza: "Duro",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo frent\u00f3n",
    def: 30,
    reqarm: 0,
    advertir: 0,
    mov: "-",
    dureza: "Duro",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo coronilla",
    def: 20,
    reqarm: 0,
    advertir: 0,
    mov: "-",
    dureza: "Duro",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo de cuero",
    def: 10,
    reqarm: 0,
    advertir: 0,
    mov: "-",
    dureza: "Blando",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo de maya",
    def: 40,
    reqarm: 0,
    advertir: -10,
    mov: "-",
    dureza: "Blando",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo completo abierto",
    def: 50,
    reqarm: 5,
    advertir: -20,
    mov: "-",
    dureza: "Duro",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo completo cerrado",
    def: 50,
    reqarm: 10,
    advertir: -30,
    mov: "-",
    dureza: "Duro",
    clase: "Yelmo",
  },
];

var lista_tabla_armas_estilos = [{
    tabla: "ARMAS CORTAS",
    clase: "Arma corta",
  },
  {
    tabla: "HACHAS",
    clase: "Hacha",
  },
  {
    tabla: "MAZAS",
    clase: "Maza",
  },
  {
    tabla: "ESPADAS",
    clase: "Espada",
  },
  {
    tabla: "MANDOBLES",
    clase: "Mandoble",
  },
  {
    tabla: "ASTAS",
    clase: "Asta",
  },
  {
    tabla: "CUERDAS",
    clase: "Cuerda",
  },
  {
    tabla: "A. DE PROYECTIL",
    clase: "A. de proyectil",
  },
  {
    tabla: "ESCUDOS",
    clase: "Escudo",
  }
];

var lista_movimiento = [
  1,
  1,
  1,
  1, // 1-4
  2, // 5
  3, // 6
  4, // 7
  5, // 8
  6, // 9
  7, // 10-12
  7, // 10-12
  7, // 10-12
  8, // 13-15
  8, // 13-15
  8, // 13-15
  9, // 16
  10, // 17
  11, // 18-19
  11, // 18-19
  12, // 20
];

var armaduras_equipadas = {
  Dura: null,
  Blanda: {
    1: null,
    2: null,
  },
};

var yelmos_equipados = {
  Duro: null,
  Blando: {
    1: null,
    2: null,
  },
};

for (i = 1; i <= 6; i++) {
  var armadura_checked = f("armadura" + i + "_check").value;
  if (armadura_checked === "Eq.") {
    var armadura_dureza = f("armadura" + i + "_dureza").value;
    var armadura_clase = f("armadura" + i).value.split(" ")[0];

    if (armadura_checked === "Eq.") {
      var armadura_t = {
        posicion: i,
        armadura: f("armadura" + i).value,
        def: f("armadura" + i + "_def").value,
        reqarm: f("armadura" + i + "_reqarm").value,
        advertir: f("armadura" + i + "_advertir").value,
        mov: f("armadura" + i + "_mov").value,
        dureza: armadura_dureza,
        clase: armadura_clase,
        calidad: f("armadura" + i + "_calidad").value,
      };
      if (armadura_dureza.value === "Dura") {
        if (armadura_clase === "Yelmo") {
          yelmos_equipados.Duro = armadura_t;
        } else {
          armaduras_equipadas.Dura = armadura_t;
        }
      } else {
        if (armadura_clase === "Yelmo") {
          yelmos_equipados.Blando[
            yelmos_equipados.Blando[1] ? 2 : 1
          ] = armadura_t;
        } else {
          armaduras_equipadas.Blanda[
            armaduras_equipadas.Blanda[1] ? 2 : 1
          ] = armadura_t;
        }
      }
    }
  }
}

var armas_equipadas = {
  D: null,
  I: null,
  "D+I": null,
};

for (i = 1; i <= 6 && !armas_equipadas["D+I"] && !(armas_equipadas["I"] && armas_equipadas["D"]); i++) {
  var arma_checked = f("arma" + i + "_check").value;
  if (arma_checked === "D" || arma_checked === "I" || arma_checked === "D+I") {
    armas_equipadas[arma_checked] = {
      posicion: i,
      arma: f("arma" + i).value,
      atq: n(f("arma" + i + "_atq").value),
      par: n(f("arma" + i + "_par").value),
      esq: n(f("arma" + i + "_esq").value),
      db: n(f("arma" + i + "_db").value),
      iniciativa: n(f("arma" + i + "_iniciativa").value),
      freq: n(f("arma" + i + "_freq").value),
      clase: f("arma" + i + "_clase").value,
      tam: f("arma" + i + "_tam").value,
      especial: f("arma" + i + "_especial").value,
      calidad: n(f("arma" + i + "_calidad").value),
    };
  }
}


var puntos_base = f("puntos_base");
var nombre = f("nombre");
var raza = f("raza");
var nivel = f("nivel");

// Experiencia

var exp_actuales = f("exp_actuales");
var exp_totales = f("exp_totales");

// Puntos de ventaja

var pventaja_restantes = f("pventaja_restantes");
var pventaja_totales = f("pventaja_totales");

// Puntos de desarrollo (PD)

var pd_restantes = f("pd_restantes");
var pd_totales = f("pd_totales");

// Mano dominante

var mano_dominante = f("mano_dominante");
var ambidiestria;

// Atributos

var agi_puntos = f("agi_puntos");
var agi_base = f("agi_base");
var agi_actual = f("agi_actual");
var agi_bono = f("agi_bono");

var con_puntos = f("con_puntos");
var con_base = f("con_base");
var con_actual = f("con_actual");
var con_bono = f("con_bono");

var des_puntos = f("des_puntos");
var des_base = f("des_base");
var des_actual = f("des_actual");
var des_bono = f("des_bono");

var fue_puntos = f("fue_puntos");
var fue_base = f("fue_base");
var fue_actual = f("fue_actual");
var fue_bono = f("fue_bono");

var int_puntos = f("int_puntos");
var int_base = f("int_base");
var int_actual = f("int_actual");
var int_bono = f("int_bono");

var per_puntos = f("per_puntos");
var per_base = f("per_base");
var per_actual = f("per_actual");
var per_bono = f("per_bono");

// Carga

var carga_normal = f("carga_normal");
var carga_max = f("carga_max");

// Movimiento

var mov_base = f("mov_base");
var mov_restr = f("mov_restr");
var mov_max = f("mov_max");

// Regeneración

var nventaja_reg = f("nventaja_reg");
var reg_normal = f("reg_normal");
var reg_max = f("reg_max");

// Resistencias

var base_res = f("base_res");

var nventaja_res_fisica = f("nventaja_res_fisica");
var nventaja_res_enfermedades = f("nventaja_res_enfermedades");
var nventaja_res_venenos = f("nventaja_res_venenos");
var nventaja_res_frio = f("nventaja_res_frio");
var nventaja_res_calor = f("nventaja_res_calor");

var final_res_fisica = f("final_res_fisica");
var final_res_enfermedades = f("final_res_enfermedades");
var final_res_venenos = f("final_res_venenos");
var final_res_frio = f("final_res_frio");
var final_res_calor = f("final_res_calor");

var esp_res_fisica = f("esp_res_fisica");
var esp_res_enfermedades = f("esp_res_enfermedades");
var esp_res_venenos = f("esp_res_venenos");
var esp_res_frio = f("esp_res_frio");
var esp_res_calor = f("esp_res_calor");

// Vida

var esp_vida = f("esp_vida");
var base_vida = f("base_vida");
var pd_vida = f("pd_vida");
var pd_base_vida = f("pd_base_vida");
var nventaja_vida = f("nventaja_vida");
var pventaja_vida = f("pventaja_vida");
var totales_vida = f("totales_vida");
var actuales_vida = f("actuales_vida");
var op_vida_resta = f("op_vida_resta");
var op_vida_suma = f("op_vida_suma");

// Iniciativa

var base_iniciativa = f("base_iniciativa");
var arma_iniciativa_total = f("arma_iniciativa_total");
var armadura_iniciativa_total = f("armadura_iniciativa_total");
var nventaja_iniciativa = f("nventaja_iniciativa");
var pventaja_iniciativa = f("pventaja_iniciativa");
var esp_iniciativa = f("esp_iniciativa");
var final_iniciativa = f("final_iniciativa");

// Llevar armadura

var pd_llA = f("pd_llA");
var nventaja_llA = f("nventaja_llA");
var pventaja_llA = f("pventaja_llA");
var esp_llA = f("esp_llA");
var final_llA = f("final_llA");

// Esquiva

var pd_esquiva = f("pd_esquiva");
var nventaja_esquiva = f("nventaja_esquiva");
var pventaja_esquiva = f("pventaja_esquiva");
var equipo_esquiva = f("equipo_esquiva");
var final_esquiva = f("final_esquiva");
var esp_esquiva = f("esp_esquiva");

// Parada

var pd_parada = f("pd_parada");
var nventaja_parada = f("nventaja_parada");
var pventaja_parada = f("pventaja_parada");
var equipo_parada_i = f("equipo_parada_i");
var final_parada_i = f("final_parada_i");
var equipo_parada_d = f("equipo_parada_d");
var final_parada_d = f("final_parada_d");
var esp_parada_d = f("esp_parada_d");
var esp_parada_i = f("esp_parada_i");

// Ataque

var pd_ataque = f("pd_ataque");
var nventaja_ataque = f("nventaja_ataque");
var pventaja_ataque = f("pventaja_ataque");
var equipo_ataque_i = f("equipo_ataque_i");
var final_ataque_i = f("final_ataque_i");
var equipo_ataque_d = f("equipo_ataque_d");
var final_ataque_d = f("final_ataque_d");
var esp_ataque_d = f("esp_ataque_d");
var esp_ataque_i = f("esp_ataque_i");

// Armadura

var armadura_cabeza = f("armadura_cabeza");
var armadura_espalda = f("armadura_espalda");
var armadura_hombro_der = f("armadura_hombro_der");
var armadura_hombro_izq = f("armadura_hombro_izq");
var armadura_pecho = f("armadura_pecho");
var armadura_brazo_der = f("armadura_brazo_der");
var armadura_brazo_izq = f("armadura_brazo_izq");
var armadura_mano_der = f("armadura_mano_der");
var armadura_mano_izq = f("armadura_mano_izq");
var armadura_pierna_der = f("armadura_pierna_der");
var armadura_pierna_izq = f("armadura_pierna_izq");
var armadura_pie_der = f("armadura_pie_der");
var armadura_pie_izq = f("armadura_pie_izq");

var negativo_armadura_cabeza = f("negativo_armadura_cabeza");
var negativo_armadura_espalda = f("negativo_armadura_espalda");
var negativo_armadura_hombro_der = f(
  "negativo_armadura_hombro_der"
);
var negativo_armadura_hombro_izq = f(
  "negativo_armadura_hombro_izq"
);
var negativo_armadura_pecho = f("negativo_armadura_pecho");
var negativo_armadura_brazo_der = f("negativo_armadura_brazo_der");
var negativo_armadura_brazo_izq = f("negativo_armadura_brazo_izq");
var negativo_armadura_mano_der = f("negativo_armadura_mano_der");
var negativo_armadura_mano_izq = f("negativo_armadura_mano_izq");
var negativo_armadura_pierna_der = f(
  "negativo_armadura_pierna_der"
);
var negativo_armadura_pierna_izq = f(
  "negativo_armadura_pierna_izq"
);
var negativo_armadura_pie_der = f("negativo_armadura_pie_der");
var negativo_armadura_pie_izq = f("negativo_armadura_pie_izq");

// Desarmado

var arma0_check = f("arma0_check");
var arma0_esq = f("arma0_esq");
var arma0_atq = f("arma0_atq");
var arma0_par = f("arma0_par");
var arma0_db = f("arma0_db");
var arma0_fue_bono = f("arma0_fue_bono");
var arma0_df = f("arma0_df");
var arma0_iniciativa = f("arma0_iniciativa");
var arma0_freq = f("arma0_freq");
var arma0_clase = f("arma0_clase");
var arma0_tam = f("arma0_tam");
var arma0_especial = f("arma0_especial");
var arma0_calidad = f("arma0_calidad");

// Ataque adicional

var atq_adicional = f("atq_adicional");

// Dinero

var oro = f("oro");
var op_oro_resta = f("op_oro_resta");
var op_oro_suma = f("op_oro_suma");

var plata = f("plata");
var op_plata_resta = f("op_plata_resta");
var op_plata_suma = f("op_plata_suma");

var bronce = f("bronce");
var op_bronce_resta = f("op_bronce_resta");
var op_bronce_suma = f("op_bronce_suma");

// Diff

var diff_x = f("diff_x");
var a1_x = f("a1_x");
var a2_x = f("a2_x");

// Equipo

var equipo_acrobacias = f("equipo_acrobacias");
var equipo_atletismo = f("equipo_atletismo");
var equipo_nadar = f("equipo_nadar");
var equipo_trepar = f("equipo_trepar");
var equipo_ocultarse = f("equipo_ocultarse");
var equipo_sigilo = f("equipo_sigilo");

var equipo_ver = f("equipo_ver");
var equipo_escuchar = f("equipo_escuchar");
var equipo_buscar = f("equipo_buscar");
var equipo_rastrear = f("equipo_rastrear");

var armadura_mov_total = f("armadura_mov_total");
var armadura_advertir_total = f("armadura_advertir_total");

var armadura0_def = f("armadura0_def").value;

var armadura_cabeza_lista,
  armadura_espalda_lista,
  armadura_hombro_der_lista,
  armadura_hombro_izq_lista,
  armadura_pecho_lista,
  armadura_brazo_der_lista,
  armadura_brazo_izq_lista,
  armadura_mano_der_lista,
  armadura_mano_izq_lista,
  armadura_pierna_der_lista,
  armadura_pierna_izq_lista,
  armadura_pie_der_lista,
  armadura_pie_izq_lista;

var puntos_base_v, restriccion_mov_armadura;

function log(k, v) {
  if (v === undefined) {
    console.println(k);
  } else {
    console.println(k + ": " + v);
  }
}

// VALIDATIONS

function v_armadura_check(event) {
  var posicion = n(event.target.name.substr(8, 1));
  if (event.value === "Eq.") {
    if (noCabeArmadura(posicion)) {
      event.rc = false;
    } else {
      resetAtributosArmadura(posicion);

      equiparArmaduraYelmo({
        posicion: posicion,
        armadura: f("armadura" + posicion).value,
        def: f("armadura" + posicion + "_def").value,
        reqarm: f("armadura" + posicion + "_reqarm").value,
        advertir: f("armadura" + posicion + "_advertir").value,
        mov: f("armadura" + posicion + "_mov").value,
        dureza: f("armadura" + posicion + "_dureza").value,
        clase: f("armadura" + posicion).value.split(" ")[0],
        calidad: f("armadura" + posicion + "_calidad").value,
      });

      calculoTotalArmaduras();
    }
  } else {
    resetAtributosArmadura(posicion);

    desequiparArmaduraYelmo(posicion);

    calculoTotalArmaduras();
  }
}

function v_armadura(event) {
  var posicion = n(event.target.name.substr(8, 1));
  f(event.target.name + "_calidad").value = 0;
  f(event.target.name + "_check").value = "-";

  resetAtributosArmadura(posicion, event.value);
}

function v_armadura_calidad(event) {
  var posicion = n(event.target.name.substr(8, 1));

  resetAtributosArmadura(posicion);
  calculoTotalArmaduras();
}

function v_arma_check(event) {
  var mano_a_desequipar = f(event.target.name).value;
  var posicion = event.target.name.substr(4, 1);
  var arma = f("arma" + posicion);
  var arma_clase = f("arma" + posicion + "_clase");
  if (
    arma.value === "-" ||
    (arma_clase.value === "A. de proyectil" &&
      (event.value === "D" || event.value === "I")) ||
    manoOcupada(event.value, posicion)
  ) {
    event.rc = false;
  } else if (event.value === "-") {
    armas_equipadas[mano_a_desequipar] = null;
    resetAtributosArma(posicion);

    if (
      !armas_equipadas["D"] &&
      !armas_equipadas["I"] &&
      !armas_equipadas["D+I"]
    ) {
      // Combate desarmado

      arma0_check.value = "D+I";
      resetAtributosArma(0);
      aplicarNegativosArma(0, "D+I");

      actualizarIniciativa();
      actualizarAtaque();
      actualizarParada();
      actualizarEsquiva();
      actualizarTablaDiferencias();
    }
  } else {
    if (mano_a_desequipar !== "-") {
      armas_equipadas[mano_a_desequipar] = null;
    }

    /*
  
      --- No saber usar el arma ---
      - Sabes una similar -> -20
      - No sabes una similar -> -60
  
      --- No tienes la fuerza requerida ---
      -> -5 por cada punto de fuerza faltante
  
      --- Llevar un arma con dos manos --- 
      -> 0
      
      --- Llevar un arma con una mano ---
      - Arma pequeña -> -10
      - Arma mediana -> -15
      - Arma grande -> -20
  
      --- Llevar un arma en cada mano (negativos a cada mano) ---
      - Arma pequeña -> -20
      - Arma mediana -> -30
      - Arma grande -> -40
     
      --- Arma en mano no dominante --- 
      -> -30
      
      --- Realizar ataque adicional ---
      -> -25
      resetAtributosArma(posicion);
      
      */

    arma0_check.value = "-";

    resetAtributosArma(posicion);
    aplicarNegativosArma(posicion, event.value);

    armas_equipadas[event.value] = {
      posicion: posicion,
      arma: arma.value,
      atq: n(f("arma" + posicion + "_atq").value),
      par: n(f("arma" + posicion + "_par").value),
      esq: n(f("arma" + posicion + "_esq").value),
      db: n(f("arma" + posicion + "_db").value),
      iniciativa: n(
        f("arma" + posicion + "_iniciativa").value
      ),
      freq: n(f("arma" + posicion + "_freq").value),
      clase: arma_clase.value,
      tam: f("arma" + posicion + "_tam").value,
      especial: f("arma" + posicion + "_especial").value,
      calidad: n(f("arma" + posicion + "_calidad").value),
    };

    if (event.value === "D+I") {
      var arma_fue_bono = f("arma" + posicion + "_fue_bono");
      var arma_db = f("arma" + posicion + "_db");
      var arma_df = f("arma" + posicion + "_df");

      arma_fue_bono.value = n(arma_fue_bono.value * 2);
      arma_df.value = n(arma_db.value) + n(arma_fue_bono.value);
    }

    actualizarIniciativa();
    actualizarAtaque();
    actualizarParada();
    actualizarEsquiva();
    actualizarTablaDiferencias();

  }
}

function v_arma(event) {
  f(event.target.name + "_calidad").value = 0;
  f(event.target.name + "_check").value = "-";

  var posicion = event.target.name.substr(4, 1);

  resetAtributosArma(posicion, event.value);
}

function v_arma_calidad(event) {
  var i = event.target.name.substr(4, 1);
  var arma_clase = f("arma" + i + "_clase");
  var arma_check = f("arma" + i + "_check");

  if (arma_clase.value === "Escudo" || arma_clase.value === "-") {
    event.rc = false;
  } else {
    resetAtributosArma(i);
    aplicarNegativosArma(i, arma_check.value);
  }
}

function v_exp_actual(event) {
  // var nivel = f("nivel");
  // var loop = true;
  // var nRslt;
  // while (event.value > n(f("exp_totales").value) && loop) {
  //   nRslt = app.alert(
  //     "Has sobrepasado los puntos de experiencia.\n\n" +
  //     "¿Quieres subir de nivel?",
  //     2,
  //     2,
  //     "Submit Validation"
  //   );
  //   if (nRslt === 4) {
  //     nivel.value++;
  //     event.value = event.value - n(f("exp_totales").value);
  //   } else {
  //     loop = false;
  //   }
  // }
  // loop = true;
  // var exp_actual = event.value;
  // while (exp_actual < 0 && n(nivel.value) >= 0 && loop) {
  //   nRslt = app.alert(
  //     "Has introducido un valor negativo.\n\n" + "¿Quieres bajar de nivel?",
  //     2,
  //     2,
  //     "Submit Validation"
  //   );
  //   if (nRslt === 4) {
  //     nivel.value--;
  //     event.value =
  //       n(event.value) + n(f("exp_totales").value);
  //     exp_actual = n(event.value);
  //   } else {
  //     loop = false;
  //   }
  // }
}

function v_idioma_escrito(event) {
  var posicion = event.target.name.substr(6, 1);
  var coste_idioma = f("idioma" + posicion + "_pd");
  var coste_idioma_v = 0;

  switch (event.value) {
    case "Bajo":
      coste_idioma_v += 2;
      break;
    case "Medio":
      coste_idioma_v += 3;
      break;
    case "Alto":
      coste_idioma_v += 4;
      break;
    case "Nativo":
      coste_idioma_v += 5;
      break;
    default:
      break;
  }

  switch (f("idioma" + posicion + "_hablado").value) {
    case "Bajo":
      coste_idioma_v += 2;
      break;
    case "Medio":
      coste_idioma_v += 3;
      break;
    case "Alto":
      coste_idioma_v += 4;
      break;
    case "Nativo":
      coste_idioma_v += 5;
      break;
    default:
      break;
  }

  coste_idioma.value = coste_idioma_v;
}

function v_idioma_hablado(event) {
  var posicion = event.target.name.substr(6, 1);
  var coste_idioma = f("idioma" + posicion + "_pd");
  var coste_idioma_v = 0;

  switch (event.value) {
    case "Bajo":
      coste_idioma_v += 2;
      break;
    case "Medio":
      coste_idioma_v += 3;
      break;
    case "Alto":
      coste_idioma_v += 4;
      break;
    case "Nativo":
      coste_idioma_v += 5;
      break;
    default:
      break;
  }

  switch (f("idioma" + posicion + "_escrito").value) {
    case "Bajo":
      coste_idioma_v += 2;
      break;
    case "Medio":
      coste_idioma_v += 3;
      break;
    case "Alto":
      coste_idioma_v += 4;
      break;
    case "Nativo":
      coste_idioma_v += 5;
      break;
    default:
      break;
  }

  coste_idioma.value = coste_idioma_v;
}

function v_pd_ataque(event) {
  var pd_totales = f("pd_totales");
  var limite_pd_combate = n(pd_totales.value) / 2;
  var pd_parada = f("pd_parada");
  var pd_esquiva = f("pd_esquiva");
  var pd_llA = f("pd_llA");
  if (n(event.value) <= 0) {
    event.value = 0;
  } else if (
    n(event.value) +
    n(pd_parada.value) +
    n(pd_esquiva.value) +
    n(pd_llA.value) >
    limite_pd_combate ||
    n(event.value) > limite_pd_combate / 4
  ) {
    event.rc = false;
  } else {
    actualizarAtaque();
  }
}

function v_pd_esquiva(event) {
  var pd_totales = f("pd_totales");
  var limite_pd_combate = n(pd_totales.value) / 2;
  var pd_ataque = f("pd_ataque");
  var pd_parada = f("pd_parada");
  var pd_llA = f("pd_llA");

  if (n(event.value) <= 0) {
    event.value = 0;
  } else if (
    n(event.value) +
    n(pd_ataque.value) +
    n(pd_parada.value) +
    n(pd_llA.value) >
    limite_pd_combate ||
    n(event.value) > limite_pd_combate / 4
  ) {
    event.rc = false;
  } else {
    actualizarEsquiva();
  }
}

function v_pd_parada(event) {
  var pd_totales = f("pd_totales");
  var limite_pd_combate = n(pd_totales.value) / 2;
  var pd_ataque = f("pd_ataque");
  var pd_llA = f("pd_llA");
  var pd_esquiva = f("pd_esquiva");
  if (n(event.value) <= 0) {
    event.value = 0;
  } else if (
    n(event.value) +
    n(pd_ataque.value) +
    n(pd_esquiva.value) +
    n(pd_llA.value) >
    limite_pd_combate ||
    n(event.value) > limite_pd_combate / 4
  ) {
    event.rc = false;
  } else {
    actualizarParada();
  }
}

function v_pd_llA(event) {
  var pd_totales = f("pd_totales");
  var limite_pd_combate = n(pd_totales.value) / 2;
  var pd_ataque = f("pd_ataque");
  var pd_parada = f("pd_parada");
  var pd_esquiva = f("pd_esquiva");
  if (n(event.value) <= 0) {
    event.value = 0;
  } else if (
    n(event.value) +
    n(pd_ataque.value) +
    n(pd_esquiva.value) +
    n(pd_parada.value) >
    limite_pd_combate ||
    n(event.value) > limite_pd_combate / 10
  ) {
    event.rc = false;
  } else {
    actualizarLlA(event);
  }
}

function v_tabla_arma(event) {
  var posicion = n(event.target.name.substr(event.target.name.length - 1));
  var coste_pd = f(event.target.name + "_pd");
  var arma_clase = f(event.target.name + "_clase");

  if (
    (posicion > 1 &&
      f("tabla_arma" + (posicion - 1)).value === "-") ||
    (posicion < 7 && f("tabla_arma" + (posicion + 1)).value !== "-")
  ) {
    event.rc = false;
  } else {
    if (event.value === "-") {
      coste_pd.value = 0;
      arma_clase.value = "-";
    } else if (
      event.value === event.value.toUpperCase()
      // || event.value.substr(0, 3) === "E. "
    ) {
      coste_pd.value = 25;
      lista_tabla_armas_estilos.some(function (tabla_arma) {
        if (tabla_arma.tabla === event.value) {
          arma_clase.value = tabla_arma.clase;
          return true;
        }
      });
    } else {
      lista_armas.some(function (arma) {
        if (arma.arma === event.value) {
          arma_clase.value = arma.arma_clase;
          return true;
        }
      });
      var encontrado = false;
      var similar = false;
      for (i = 1; i < posicion && !encontrado; i++) {
        var t_arma = f("tabla_arma" + i);
        var t_arma_clase = f("tabla_arma" + i + "_clase");

        if (t_arma.value === event.value || ((t_arma_clase.value === arma_clase.value) && t_arma.value === t_arma.value.toUpperCase())) {
          coste_pd.value = 0;
          encontrado = true;
        } else {
          if (t_arma_clase.value === arma_clase.value && !similar) {
            similar = true;
          }
        }

      }

      if (!encontrado) {
        coste_pd.value = similar ? 5 : 10;
      }

    }

    if (armas_equipadas["D"]) {
      resetAtributosArma(armas_equipadas["D"].posicion);
      aplicarNegativosArma(armas_equipadas["D"].posicion, "D");

      armas_equipadas["D"].atq = n(
        f("arma" + armas_equipadas["D"].posicion + "_atq").value
      );
      armas_equipadas["D"].par = n(
        f("arma" + armas_equipadas["D"].posicion + "_par").value
      );
    }

    if (armas_equipadas["I"]) {
      resetAtributosArma(armas_equipadas["I"].posicion);
      aplicarNegativosArma(armas_equipadas["I"].posicion, "I");

      armas_equipadas["I"].atq = n(
        f("arma" + armas_equipadas["I"].posicion + "_atq").value
      );
      armas_equipadas["I"].par = n(
        f("arma" + armas_equipadas["I"].posicion + "_par").value
      );
    }

    if (armas_equipadas["D+I"]) {
      resetAtributosArma(armas_equipadas["D+I"].posicion);
      aplicarNegativosArma(armas_equipadas["D+I"].posicion, "D+I");

      armas_equipadas["D+I"].atq = n(
        f("arma" + armas_equipadas["D+I"].posicion + "_atq").value
      );
      armas_equipadas["D+I"].par = n(
        f("arma" + armas_equipadas["D+I"].posicion + "_par").value
      );
    }

    actualizarAtaque();
    actualizarParada();
  }
}

function v_atributo(event) {
  var atributo = event.target.name.substr(0, 3);
  var atributo_puntos =
    event.target.name === atributo + "_puntos" ?
    n(event.value) :
    n(f(atributo + "_puntos").value);
  var atributo_base =
    event.target.name === atributo + "_base" ?
    n(event.value) :
    n(f(atributo + "_base").value);
  var atributo_actual = f(atributo + "_actual");
  var atributo_bono = f(atributo + "_bono");

  if (
    atributo_puntos < 0 ||
    pventaja_restantes.value - atributo_puntos < 0 ||
    atributo_base > 20 ||
    atributo_base < 1
  ) {
    event.rc = false;
  } else {
    pventaja_restantes.value =
      n(pventaja_restantes.value) - atributo_puntos;
    atributo_actual.value = n(atributo_base) + atributo_puntos;

    atributo_bono.value = lista_bonos[n(atributo_actual.value) - 1];

    switch (atributo) {
      case "agi":
        actualizarMovimiento();
        actualizarEsquiva();
        actualizarIniciativa();
        break;
      case "fue":
        var carga_normal = f("carga_normal");
        var carga_max = f("carga_max");

        switch (fue_actual.value) {
          case 1:
            carga_normal.value = "< 1";
            carga_max.value = 1;
            break;
          case 2:
            carga_normal.value = 1;
            carga_max.value = 2;
            break;
          case 3:
            carga_normal.value = 3;
            carga_max.value = 7;
            break;
          case 4:
            carga_normal.value = 5;
            carga_max.value = 10;
            break;
          case 5:
            carga_normal.value = 8;
            carga_max.value = 16;
            break;
          case 6:
            carga_normal.value = 10;
            carga_max.value = 20;
            break;
          case 7:
            carga_normal.value = 12;
            carga_max.value = 30;
            break;
          case 8:
            carga_normal.value = 15;
            carga_max.value = 40;
            break;
          case 9:
            carga_normal.value = 20;
            carga_max.value = 50;
            break;
          case 10:
            carga_normal.value = 25;
            carga_max.value = 60;
            break;
          case 11:
            carga_normal.value = 30;
            carga_max.value = 100;
            break;
          case 12:
            carga_normal.value = 40;
            carga_max.value = 120;
            break;
          case 13:
            carga_normal.value = 50;
            carga_max.value = 150;
            break;
          case 14:
            carga_normal.value = 60;
            carga_max.value = 180;
            break;
          case 15:
            carga_normal.value = 70;
            carga_max.value = 230;
            break;
          case 16:
            carga_normal.value = 80;
            carga_max.value = 260;
            break;
          case 17:
            carga_normal.value = 90;
            carga_max.value = 300;
            break;
          case 18:
            carga_normal.value = 100;
            carga_max.value = 350;
            break;
          case 19:
            carga_normal.value = 125;
            carga_max.value = 400;
            break;
          case 20:
            carga_normal.value = 150;
            carga_max.value = 420;
            break;
          default:
            break;
        }

        for (var i = 0; i <= 6; i++) {
          var arma_fue_bono = f("arma" + i + "_fue_bono");
          var arma_check = f("arma" + i + "_check");
          var arma_clase = f("arma" + i + "_clase");
          var arma_db = f("arma" + i + "_db");
          var arma_df = f("arma" + i + "_df");

          if (arma_clase.value === "A. de proyectil") {
            arma_fue_bono.value = 0;
          } else {
            if (arma_check.value === "D+I") {
              arma_fue_bono.value = n(fue_bono.value) * 2;
            } else {
              arma_fue_bono.value = n(fue_bono.value);
            }
          }

          arma_df.value = Math.ceil(
            n(arma_db.value) + arma_fue_bono.value
          );
        }

        actualizarTablaDiferencias();

        break;
      case "con":
        base_vida.value = lista_vida_base_por_nivel[n(atributo_actual.value) - 1];
        actualizarVida();
        break;
      case "des":
        actualizarIniciativa();
        actualizarAtaque();
        actualizarParada();
        break;
      case "int":
        break;
      case "per":
        break;

      default:
        break;
    }
  }
}

function v_nventaja_combate(event) {
  var pventaja = f("p" + event.target.name.substr(1));

  pventaja.value = Math.min(
    50,
    n(event.value) * 5 * floor(n(nivel.value) / 2)
  );

  switch (event.target.name.substr(9)) {
    case "ataque":
      actualizarAtaque();
      break;
    case "parada":
      actualizarParada();
      break;
    case "esquiva":
      actualizarEsquiva();
      break;
    default:
      break;
  }
}

function v_nventaja_llA(event) {
  var pventaja = f("pventaja_llA");

  pventaja.value =
    n(event.value) * 5 * floor(n(nivel.value) / 2);

  actualizarLlA();
}

function v_diff_x(event) {
  if (event.value >= 0) {
    actualizarDiffX(event);
  } else {
    event.rc = false;
  }
}

function v_negativo_armadura(event) {
  var armadura = f(event.target.name.substr(9));

  event.value = absolute(event.value);

  if (!event.value) {
    event.rc = false;
  } else {
    event.value = floor((event.value) / 10) * 10;

    armadura.value = Math.max(0, n(armadura.value) - event.value);
  }

}

function resetAtributosArma(posicion, arma_nueva) {
  var arma = arma_nueva ? arma_nueva : f("arma" + posicion).value;
  var arma_par = f("arma" + posicion + "_par");
  var arma_atq = f("arma" + posicion + "_atq");
  var arma_esq = f("arma" + posicion + "_esq");
  var arma_iniciativa = f("arma" + posicion + "_iniciativa");
  var arma_clase = f("arma" + posicion + "_clase");
  var arma_df = f("arma" + posicion + "_df");
  var arma_db = f("arma" + posicion + "_db");
  var arma_clase = f("arma" + i + "_clase");
  var arma_fue_bono = f("arma" + posicion + "_fue_bono");
  var arma_clase = f("arma" + posicion + "_clase");
  var arma_freq = f("arma" + posicion + "_freq");
  var arma_tam = f("arma" + posicion + "_tam");
  var arma_especial = f("arma" + posicion + "_especial");
  var arma_calidad = f("arma" + posicion + "_calidad");

  if (arma === "-") {
    arma_atq.value = "-";
    arma_par.value = "-";
    arma_esq.value = "-";
    arma_db.value = "-";
    arma_fue_bono.value = "-";
    arma_iniciativa.value = "-";
    arma_freq.value = "-";
    arma_clase.value = "-";
    arma_tam.value = "-";
    arma_especial.value = "-";
    arma_df.value = "-";
  } else {
    lista_armas.some(function (l_arma) {
      if (l_arma.arma === arma) {
        arma_atq.value =
          n(l_arma.arma_atq) + 5 * n(arma_calidad.value);
        arma_par.value =
          n(l_arma.arma_par) + 5 * n(arma_calidad.value);
        arma_esq.value = l_arma.arma_esq;
        arma_db.value =
          n(l_arma.arma_db) + 10 * n(arma_calidad.value);
        arma_fue_bono.value =
          arma_clase.value === "A. de proyectil" ? 0 : n(fue_bono.value);
        arma_iniciativa.value =
          n(l_arma.arma_iniciativa) + 5 * n(arma_calidad.value);
        arma_freq.value = l_arma.arma_freq;
        arma_clase.value = l_arma.arma_clase;
        arma_tam.value = l_arma.arma_tam;
        arma_especial.value = l_arma.arma_especial;
        arma_df.value = Math.ceil(n(arma_db.value) + arma_fue_bono.value);

        return true;
      }
    });
  }
}

function resetAtributosArmadura(posicion, armadura_nueva) {
  var armadura = armadura_nueva ?
    armadura_nueva :
    f("armadura" + posicion).value;
  var armadura_def = f("armadura" + posicion + "_def");
  var armadura_reqarm = f("armadura" + posicion + "_reqarm");
  var armadura_advertir = f("armadura" + posicion + "_advertir");
  var armadura_mov = f("armadura" + posicion + "_mov");
  var armadura_dureza = f("armadura" + posicion + "_dureza");
  var armadura_calidad = f("armadura" + posicion + "_calidad");

  if (armadura === "-") {
    armadura_def.value = "-";
    armadura_reqarm.value = "-";
    armadura_advertir.value = "-";
    armadura_mov.value = "-";
    armadura_dureza.value = "-";
    armadura_calidad.value = "-";
  } else if (armadura === "Cuerpo") {
    armadura_def.value = 10 * n(armadura_calidad.value);
    armadura_advertir.value = 5 * n(armadura_calidad.value);
    armadura_mov.value = 5 * n(armadura_calidad.value);
  } else {
    lista_armaduras.some(function (l_armadura) {
      if (l_armadura.armadura === armadura) {
        armadura_def.value =
          l_armadura.def + 10 * n(armadura_calidad.value);
        armadura_reqarm.value = Math.max(
          0,
          n(l_armadura.reqarm) - 5 * n(armadura_calidad.value)
        );
        armadura_advertir.value =
          l_armadura.advertir === "-" ?
          "-" :
          Math.min(
            0,
            n(l_armadura.advertir) + 5 * n(armadura_calidad.value)
          );
        armadura_mov.value =
          l_armadura.mov === "-" ?
          "-" :
          Math.min(
            0,
            n(l_armadura.mov) + 5 * n(armadura_calidad.value)
          );
        armadura_dureza.value = l_armadura.dureza;

        return true;
      }
    });
  }
}

function aplicarNegativosArma(posicion, check) {
  var arma = f("arma" + posicion);
  var arma_par = f("arma" + posicion + "_par");
  var arma_atq = f("arma" + posicion + "_atq");
  var arma_clase = f("arma" + posicion + "_clase");
  var arma_freq = f("arma" + posicion + "_freq");
  var arma_tam = f("arma" + posicion + "_tam");

  if (s(arma_freq.value).indexOf("/") > -1) {
    if (check === "D" || check === "I") {
      arma_freq.value = s(arma_freq.value).substr(s(arma_freq.value).indexOf("/") + 2);
    } else if (check === "D+I") {
      arma_freq.value = s(arma_freq.value).substr(0, s(arma_freq.value).indexOf(" "));
    }
  }

  // Negativos por no saber usar el arma
  if (arma_clase.value !== "Escudo") {
    var tabla_arma, tabla_arma_clase;

    var similar = false;
    var encontrado = false;

    for (i = 1; i <= 7 && !encontrado; i++) {
      tabla_arma = f("tabla_arma" + i);
      tabla_arma_clase = f("tabla_arma" + i + "_clase");
      if (
        arma.value === tabla_arma.value ||
        (tabla_arma_clase.value.indexOf(arma_clase.value) > -1 &&
          tabla_arma.value === tabla_arma.value.toUpperCase())
      ) {
        encontrado = true;
      } else if (tabla_arma_clase.value.indexOf(arma_clase.value) > -1) {
        similar = true;
      }
    }
    if (!encontrado) {
      if (similar) {
        arma_atq.value -= 20;
        arma_par.value -= 20;
      } else {
        arma_atq.value -= 60;
        arma_par.value -= 60;
      }
    }
  }

  // Negativos por no tener fuerza requerida
  if (arma_freq.value !== "-") {
    var fue_req_diff = n(arma_freq.value) - n(fue_actual.value);
    if (fue_req_diff > 0) {
      arma_atq.value -= 5 * fue_req_diff;
      arma_par.value -= 5 * fue_req_diff;
    }
  }

  // Negativos por usarla en la mano no dominante
  if (check !== "D+I" && mano_dominante.value !== "Ambas" && check !== mano_dominante.value.charAt(0)) {
    arma_atq.value -= 30;
    arma_par.value -= 30;
  }

  // Negativos según el tamaño si no se usa con las dos manos
  if (
    (check === "D" && armas_equipadas["I"]) ||
    (check === "I" && armas_equipadas["D"])
  ) {
    switch (arma_tam.value) {
      case "S":
        arma_atq.value += -20;
        arma_par.value += -20;
        break;
      case "M":
        arma_atq.value += -30;
        arma_par.value += -30;
        break;
      case "L":
        arma_atq.value += -40;
        arma_par.value += -40;
        break;
      default:
        break;
    }
  } else if (
    (check === "D" && !armas_equipadas["I"]) ||
    (check === "I" && !armas_equipadas["D"])
  ) {
    switch (arma_tam.value) {
      case "S":
        arma_atq.value += -10;
        arma_par.value += -10;
        break;
      case "M":
        arma_atq.value += -15;
        arma_par.value += -15;
        break;
      case "L":
        arma_atq.value += -20;
        arma_par.value += -20;
        break;
      default:
        break;
    }
  }
}


function countArmaduras() {
  var num_armaduras = 0;
  [
    armaduras_equipadas.Dura,
    armaduras_equipadas.Blanda[1],
    armaduras_equipadas.Blanda[2]
  ].forEach(function (armadura_array) {
    if (armadura_array) {
      num_armaduras++;
    }
  });

  return num_armaduras;
}

function countYelmos() {
  var num_yelmos = 0;
  [
    yelmos_equipados.Duro,
    yelmos_equipados.Blando[1],
    yelmos_equipados.Blando[2]
  ].forEach(function (yelmo_array) {
    if (yelmo_array) {
      num_yelmos++;
    }
  });

  return num_yelmos;
}

function countReqArmTotalYelmos() {
  var reqarm_total = 0;
  [
    yelmos_equipados.Duro,
    yelmos_equipados.Blando[1],
    yelmos_equipados.Blando[2]
  ].forEach(function (yelmo_array) {
    if (yelmo_array) {
      reqarm_total += n(yelmo_array.reqarm);
    }
  });

  return reqarm_total;
}

function countReqArmTotalArmaduras() {
  var reqarm_total = 0;
  [
    armaduras_equipadas.Dura,
    armaduras_equipadas.Blanda[1],
    armaduras_equipadas.Blanda[2]
  ].forEach(function (armadura_array) {
    if (armadura_array) {
      reqarm_total += n(armadura_array.reqarm);
    }
  });

  return reqarm_total;
}

function actualizarHabilidad(habilidad) {
  var base_habilidad = f("base_" + habilidad);
  var pventaja_habilidad = f("pventaja_" + habilidad);
  var equipo_habilidad = f("equipo_" + habilidad);
  var final_habilidad = f("final_" + habilidad);
  var bono = 0,
    encontrado;

  for (var nombre_rama in lista_habilidades) {
    var rama = lista_habilidades[nombre_rama];
    rama.some(function (hab) {
      if (!encontrado) {
        if (hab.habilidad === habilidad) {
          bono = n(f(hab.atributo + "_bono").value);
          encontrado = true;
          return true;
        }
      } else {
        return true;
      }
    });
  }

  final_habilidad.value =
    n(base_habilidad.value) +
    bono +
    n(pventaja_habilidad.value) +
    n(equipo_habilidad.value);
}

function desequiparArmaduraYelmo(posicion) {
  var encontrado = false;
  if (
    armaduras_equipadas.Dura && armaduras_equipadas.Dura.posicion === posicion
  ) {
    armaduras_equipadas.Dura = null;
    encontrado = true;
  }
  if (!encontrado &&
    armaduras_equipadas.Blanda[1] && armaduras_equipadas.Blanda[1].posicion === posicion
  ) {
    armaduras_equipadas.Blanda[1] = null;
    encontrado = true;
  }
  if (!encontrado &&
    armaduras_equipadas.Blanda[2] && armaduras_equipadas.Blanda[2].posicion === posicion
  ) {
    armaduras_equipadas.Blanda[2] = null;
    encontrado = true;
  }
  if (!encontrado &&
    yelmos_equipados.Duro && yelmos_equipados.Duro.posicion === posicion
  ) {
    yelmos_equipados.Duro = null;
    encontrado = true;
  }
  if (!encontrado &&
    yelmos_equipados.Blando[1] && yelmos_equipados.Blando[1].posicion === posicion
  ) {
    yelmos_equipados.Blando[1] = null;
    encontrado = true;
  }
  if (!encontrado &&
    yelmos_equipados.Blando[2] && yelmos_equipados.Blando[2].posicion === posicion
  ) {
    yelmos_equipados.Blando[2] = null;
  }

}

function equiparArmaduraYelmo(armadura_yelmo) {
  if (armadura_yelmo.clase === "Yelmo") {
    if (armadura_yelmo.dureza === "Blando") {
      yelmos_equipados.Blando[
        yelmos_equipados.Blando[1] ? 2 : 1
      ] = armadura_yelmo;
    } else {
      yelmos_equipados.Duro = armadura_yelmo;
    }
  } else {
    if (armadura_yelmo.dureza === "Blanda") {
      if (armaduras_equipadas.Blanda[1]) {
        armaduras_equipadas.Blanda[2] = armadura_yelmo;
      } else {
        armaduras_equipadas.Blanda[1] = armadura_yelmo;
      }
    } else {
      armaduras_equipadas.Dura = armadura_yelmo;
    }
  }
}

function actualizarIniciativa() {
  if (armas_equipadas["D"] && !armas_equipadas["I"]) {
    arma_iniciativa_total.value = n(armas_equipadas["D"].iniciativa);
  } else if (!armas_equipadas["D"] && armas_equipadas["I"]) {
    arma_iniciativa_total.value = n(armas_equipadas["I"].iniciativa);
  } else if (armas_equipadas["I"] !== null && armas_equipadas["D"] !== null) {
    equipo_esquiva.value =
      n(armas_equipadas["I"].esq) + n(armas_equipadas["D"].esq);
    arma_iniciativa_total.value =
      n(armas_equipadas["I"].iniciativa) +
      n(armas_equipadas["D"].iniciativa);
  } else if (armas_equipadas["D+I"] !== null) {
    arma_iniciativa_total.value = n(armas_equipadas["D+I"].iniciativa);
  } else {
    arma_iniciativa_total.value = n(arma0_iniciativa.value);
  }
  final_iniciativa.value =
    n(base_iniciativa.value) +
    n(des_bono.value) +
    n(agi_bono.value) +
    n(arma_iniciativa_total.value) +
    n(armadura_iniciativa_total.value) +
    n(esp_iniciativa.value);
}

function actualizarVida() {
  totales_vida.value =
    n(base_vida.value) +
    n(pd_base_vida.value) +
    n(pventaja_vida.value) +
    n(esp_vida.value);
}

function actualizarMovimiento() {
  var mov_total = agi_actual.value + floor(n(armadura_iniciativa_total.value) / 10);

  if (mov_total - 1 >= 1 && mov_total - 1 <= 20) {
    mov_max.value = lista_movimiento[mov_total - 1];
  } else {
    mov_max.value = 0;
  }

  mov_restr.value = n(mov_max.value) - n(mov_base.value);
}

function actualizarAtaque() {
  if (armas_equipadas["D"] && !armas_equipadas["I"]) {
    equipo_ataque_d.value = armas_equipadas["D"].atq;
    equipo_ataque_i.value = "-";
  } else if (!armas_equipadas["D"] && armas_equipadas["I"]) {
    equipo_ataque_d.value = "-";
    equipo_ataque_i.value = armas_equipadas["I"].atq;
  } else if (armas_equipadas["I"] !== null && armas_equipadas["D"] !== null) {
    equipo_ataque_d.value = armas_equipadas["D"].atq;
    equipo_ataque_i.value = armas_equipadas["I"].atq;
  } else if (armas_equipadas["D+I"] !== null) {
    equipo_ataque_d.value = armas_equipadas["D+I"].atq;
    equipo_ataque_i.value = armas_equipadas["D+I"].atq;
  } else {
    equipo_ataque_d.value = n(arma0_atq.value);
    equipo_ataque_i.value = n(arma0_atq.value);
  }
  if (equipo_ataque_d.value === "-") {
    final_ataque_d.value = "-";
  } else {
    final_ataque_d.value =
      n(pd_ataque.value) +
      n(des_bono.value) +
      n(pventaja_ataque.value) +
      n(equipo_ataque_d.value) +
      n(esp_ataque_d.value);
  }

  if (equipo_ataque_i.value === "-") {
    final_ataque_i.value = "-";
  } else {
    final_ataque_i.value =
      n(pd_ataque.value) +
      n(des_bono.value) +
      n(pventaja_ataque.value) +
      n(equipo_ataque_i.value) +
      n(esp_ataque_i.value);
  }
}

function actualizarParada() {
  if (armas_equipadas["D"] && !armas_equipadas["I"]) {
    equipo_parada_d.value = armas_equipadas["D"].atq;
    equipo_parada_i.value = "-";
  } else if (!armas_equipadas["D"] && armas_equipadas["I"]) {
    equipo_parada_d.value = "-";
    equipo_parada_i.value = armas_equipadas["I"].atq;
  } else if (armas_equipadas["I"] !== null && armas_equipadas["D"] !== null) {
    equipo_parada_d.value = armas_equipadas["D"].atq;
    equipo_parada_i.value = armas_equipadas["I"].atq;
  } else if (armas_equipadas["D+I"] !== null) {
    equipo_parada_d.value = armas_equipadas["D+I"].atq;
    equipo_parada_i.value = armas_equipadas["D+I"].atq;
  } else {
    equipo_parada_d.value = n(arma0_atq.value);
    equipo_parada_i.value = n(arma0_atq.value);
  }
  if (equipo_parada_d.value === "-") {
    final_parada_d.value = "-";
  } else {
    final_parada_d.value =
      n(pd_parada.value) +
      n(des_bono.value) +
      n(pventaja_parada.value) +
      n(equipo_parada_d.value) +
      n(esp_parada_d.value);
  }

  if (equipo_parada_i.value === "-") {
    final_parada_i.value = "-";
  } else {
    final_parada_i.value =
      n(pd_parada.value) +
      n(des_bono.value) +
      n(pventaja_parada.value) +
      n(equipo_parada_i.value) +
      n(esp_parada_i.value);
  }
}

function actualizarEsquiva() {
  if (armas_equipadas["D"] && !armas_equipadas["I"]) {
    equipo_esquiva.value = armas_equipadas["D"].esq;
  } else if (!armas_equipadas["D"] && armas_equipadas["I"]) {
    equipo_esquiva.value = armas_equipadas["I"].esq;
  } else if (armas_equipadas["I"] !== null && armas_equipadas["D"] !== null) {
    equipo_esquiva.value =
      n(armas_equipadas["I"].esq) + n(armas_equipadas["D"].esq);
  } else if (armas_equipadas["D+I"] !== null) {
    equipo_esquiva.value = n(armas_equipadas["D+I"].esq);
  } else {
    equipo_esquiva.value = n(arma0_esq.value);
  }
  final_esquiva.value =
    n(pd_esquiva.value) +
    n(agi_bono.value) +
    n(pventaja_esquiva.value) +
    n(equipo_esquiva.value) +
    n(esp_esquiva.value);
}

function actualizarLlA(event) {
  var pd_llA_e =
    (event && event.target.name) === "pd_llA" ?
    n(event.value) :
    n(pd_llA.value);
  final_llA.value =
    pd_llA_e + n(fue_bono.value) + n(pventaja_llA.value);

  var armadura_posicion;

  if (armaduras_equipadas["Dura"]) {
    armadura_posicion = armaduras_equipadas["Dura"].posicion;
  }

  if (armaduras_equipadas["Blando"]["1"]) {
    armadura_posicion = armaduras_equipadas["Blando"]["1"].posicion;
  }

  if (armaduras_equipadas["Blando"]["2"]) {
    armadura_posicion = armaduras_equipadas["Blando"]["2"].posicion;
  }

  if (yelmos_equipados["Dura"]) {
    armadura_posicion = yelmos_equipados["Dura"].posicion;
  }

  if (yelmos_equipados["Blando"]["1"]) {
    armadura_posicion = yelmos_equipados["Blando"]["1"].posicion;
  }

  if (yelmos_equipados["Blando"]["2"]) {
    armadura_posicion = yelmos_equipados["Blando"]["2"].posicion;
  }

  resetAtributosArmadura(armadura_posicion);

  calculoTotalArmaduras();
}

function actualizarTablaDiferencias() {
  // Actualizar tablas diferencias

  for (i = 10; i <= 200; i = i + 10) {
    var a1 = f("a1_" + i); // Izquierda
    var a2 = f("a2_" + i); // Derecha
    if (armas_equipadas["D+I"]) { // D+I ocupado
      a1.value = Math.round(((n(armas_equipadas["D+I"].db) + (n(fue_bono.value) * 2)) * i) / 500);
      a2.value = Math.round(((n(armas_equipadas["D+I"].db) + (n(fue_bono.value) * 2)) * i) / 500);
    } else if (armas_equipadas["I"]) { // I ocupado
      a1.value = Math.round((n(armas_equipadas["I"].db + n(fue_bono.value)) * i) / 500);
      if (armas_equipadas["D"]) { // D ocupado
        a2.value = Math.round((n(armas_equipadas["D"].db + n(fue_bono.value)) * i) / 500);
      } else { // D libre
        a2.value = "-";
      }
    } else if (armas_equipadas["D"]) { // D ocupado y I libre
      a1.value = "-";
      a2.value = Math.round((n(armas_equipadas["D"].db + n(fue_bono.value)) * i) / 500);
    } else { // I y D libre
      a1.value = Math.round((n(arma0_df.value) * i) / 500);
      a2.value = Math.round((n(arma0_df.value) * i) / 500);
    }
  }

  actualizarDiffX();
}

function actualizarDiffX(event) {
  var diff_x_e = event ? event : diff_x;

  if (armas_equipadas["D+I"]) { // D+I ocupado
    a1_x.value = Math.round(((n(armas_equipadas["D+I"].db) + (n(fue_bono.value) * 2)) * n(diff_x_e.value)) / 500);
    a2_x.value = Math.round(((n(armas_equipadas["D+I"].db) + (n(fue_bono.value) * 2)) * n(diff_x_e.value)) / 500);
  } else if (armas_equipadas["I"]) { // I ocupado
    a1_x.value = Math.round((n(armas_equipadas["I"].db + n(fue_bono.value)) * n(diff_x_e.value)) / 500);
    if (armas_equipadas["D"]) { // D ocupado
      a2_x.value = Math.round((n(armas_equipadas["D"].db + n(fue_bono.value)) * n(diff_x_e.value)) / 500);
    } else { // D libre
      a2_x.value = "-";
    }
  } else if (armas_equipadas["D"]) { // D ocupado y I libre
    a1_x.value = "-";
    a2_x.value = Math.round((n(armas_equipadas["D"].db + n(fue_bono.value)) * n(diff_x_e.value)) / 500);
  } else { // I y D libre
    a1_x.value = Math.round((n(arma0_df.value) * n(diff_x_e.value)) / 500);
    a2_x.value = Math.round((n(arma0_df.value) * n(diff_x_e.value)) / 500);
  }
}

function calculoTotalArmaduras() {
  var armadura_defensa_total_array = [];
  var armaduras_reqarm_total = 0;
  var armaduras_mov_total = 0;
  var yelmos_reqarm_total = 0;
  var yelmos_advertir_total = 0;
  var yelmo_defensa_total_array = [];
  var num_yelmos = 0;
  var num_armaduras = 0;

  var armadura_mov;
  var armadura_def;
  var armadura_reqarm;

  var yelmo_advertir;
  var yelmo_def;
  var yelmo_reqarm;

  [
    armaduras_equipadas.Dura,
    armaduras_equipadas.Blanda[1],
    armaduras_equipadas.Blanda[2]
  ].forEach(function (armadura_array) {
    if (armadura_array) {
      armadura_mov = f(
        "armadura" + armadura_array.posicion + "_mov"
      );
      armadura_def = f(
        "armadura" + armadura_array.posicion + "_def"
      );
      armadura_reqarm = f(
        "armadura" + armadura_array.posicion + "_reqarm"
      );
      armadura_defensa_total_array.push(n(armadura_def.value));
      armaduras_mov_total += n(armadura_mov.value);
      armaduras_reqarm_total += n(armadura_reqarm.value);

      num_armaduras++;
    }
  });

  if (num_armaduras > 0) {
    var diff_reqarm_armaduras = n(final_llA.value) - n(armaduras_reqarm_total);
    if (diff_reqarm_armaduras > 0) {
      armaduras_mov_total = Math.min(0, n(armaduras_mov_total) + (floor(diff_reqarm_armaduras / 50) * 10));
    }
    armaduras_mov_total = armaduras_mov_total - (20 * (num_armaduras - 1));
    if (diff_reqarm_armaduras < 0) {
      armaduras_mov_total = armaduras_mov_total + diff_reqarm_armaduras;
    }
  }

  armadura_mov_total.value = armaduras_mov_total;

  equipo_acrobacias.value = armaduras_mov_total;
  equipo_atletismo.value = armaduras_mov_total;
  equipo_nadar.value = armaduras_mov_total;
  equipo_trepar.value = armaduras_mov_total;
  equipo_ocultarse.value = armaduras_mov_total;
  equipo_sigilo.value = armaduras_mov_total;

  actualizarHabilidad("acrobacias");
  actualizarHabilidad("atletismo");
  actualizarHabilidad("nadar");
  actualizarHabilidad("trepar");
  actualizarHabilidad("ocultarse");
  actualizarHabilidad("sigilo");

  armadura_iniciativa_total.value = armaduras_mov_total;
  actualizarIniciativa();
  actualizarMovimiento();

  [
    yelmos_equipados.Duro,
    yelmos_equipados.Blando[1],
    yelmos_equipados.Blando[2]
  ].forEach(function (yelmo_array) {
    if (yelmo_array) {
      yelmo_advertir = f(
        "armadura" + yelmo_array.posicion + "_advertir"
      );
      yelmo_def = f(
        "armadura" + yelmo_array.posicion + "_def"
      );
      yelmo_reqarm = f(
        "armadura" + yelmo_array.posicion + "_reqarm"
      );
      yelmo_defensa_total_array.push(n(yelmo_def.value));
      yelmos_advertir_total += n(yelmo_advertir.value);
      yelmos_reqarm_total += n(yelmo_reqarm.value);

      num_yelmos++;
    }
  });

  if (num_yelmos > 0) {
    var diff_reqarm_yelmos = n(final_llA.value) - n(yelmos_reqarm_total);
    if (diff_reqarm_yelmos > 0) {
      yelmos_advertir_total = Math.min(0, n(yelmos_advertir_total) + (floor(diff_reqarm_yelmos / 50) * 10));
    }
    yelmos_advertir_total = yelmos_advertir_total - (20 * (num_yelmos - 1));
    if (diff_reqarm_yelmos < 0) {
      yelmos_advertir_total = yelmos_advertir_total + diff_reqarm_yelmos;
    }
  }

  armadura_advertir_total.value = yelmos_advertir_total;

  equipo_ver.value = yelmos_advertir_total;
  equipo_escuchar.value = yelmos_advertir_total;
  equipo_buscar.value = yelmos_advertir_total;
  equipo_rastrear.value = yelmos_advertir_total;

  actualizarHabilidad("ver");
  actualizarHabilidad("escuchar");
  actualizarHabilidad("buscar");
  actualizarHabilidad("rastrear");

  armadura_pecho_lista = [];
  armadura_espalda_lista = [];
  armadura_hombro_der_lista = [];
  armadura_hombro_izq_lista = [];
  armadura_brazo_der_lista = [];
  armadura_brazo_izq_lista = [];
  armadura_mano_der_lista = [];
  armadura_mano_izq_lista = [];
  armadura_pierna_der_lista = [];
  armadura_pierna_izq_lista = [];
  armadura_pie_der_lista = [];
  armadura_pie_izq_lista = [];
  armadura_cabeza_lista = [];

  if (armadura0_def > 0) {
    armadura_pecho_lista.push(armadura0_def);
    armadura_espalda_lista.push(armadura0_def);
    armadura_hombro_der_lista.push(armadura0_def);
    armadura_hombro_izq_lista.push(armadura0_def);
    armadura_brazo_der_lista.push(armadura0_def);
    armadura_brazo_izq_lista.push(armadura0_def);
    armadura_mano_der_lista.push(armadura0_def);
    armadura_mano_izq_lista.push(armadura0_def);
    armadura_pierna_der_lista.push(armadura0_def);
    armadura_pierna_izq_lista.push(armadura0_def);
    armadura_pie_der_lista.push(armadura0_def);
    armadura_pie_izq_lista.push(armadura0_def);
    armadura_cabeza_lista.push(armadura0_def);
  }

  var armadura_def;
  var armadura_clase;

  [
    armaduras_equipadas.Dura,
    armaduras_equipadas.Blanda[1],
    armaduras_equipadas.Blanda[2],
    yelmos_equipados.Duro,
    yelmos_equipados.Blando[1],
    yelmos_equipados.Blando[2]
  ].forEach(function (armadura_yelmo) {

    if (armadura_yelmo) {
      armadura_def = f("armadura" + armadura_yelmo.posicion + "_def");
      armadura_clase = f("armadura" + armadura_yelmo.posicion).value.split(" ")[0];

      switch (armadura_clase) {
        case "Peto":
          armadura_pecho_lista.push(armadura_def.value);
          armadura_espalda_lista.push(armadura_def.value);
          break;
        case "Camisola":
          armadura_pecho_lista.push(armadura_def.value);
          armadura_espalda_lista.push(armadura_def.value);
          armadura_hombro_der_lista.push(armadura_def.value);
          armadura_hombro_izq_lista.push(armadura_def.value);
          armadura_brazo_der_lista.push(armadura_def.value);
          armadura_brazo_izq_lista.push(armadura_def.value);
          armadura_mano_der_lista.push(armadura_def.value);
          armadura_mano_izq_lista.push(armadura_def.value);
          break;
        case "Completa":
          armadura_pecho_lista.push(armadura_def.value);
          armadura_espalda_lista.push(armadura_def.value);
          armadura_hombro_der_lista.push(armadura_def.value);
          armadura_hombro_izq_lista.push(armadura_def.value);
          armadura_brazo_der_lista.push(armadura_def.value);
          armadura_brazo_izq_lista.push(armadura_def.value);
          armadura_mano_der_lista.push(armadura_def.value);
          armadura_mano_izq_lista.push(armadura_def.value);
          armadura_pierna_der_lista.push(armadura_def.value);
          armadura_pierna_izq_lista.push(armadura_def.value);
          armadura_pie_der_lista.push(armadura_def.value);
          armadura_pie_izq_lista.push(armadura_def.value);
          break;
        case "Yelmo":
          armadura_cabeza_lista.push(armadura_def.value);
          break;
        default:
          break;
      }
    }
  });

  armadura_pecho_lista.sort().reverse();
  armadura_espalda_lista.sort().reverse();
  armadura_hombro_der_lista.sort().reverse();
  armadura_hombro_izq_lista.sort().reverse();
  armadura_brazo_der_lista.sort().reverse();
  armadura_brazo_izq_lista.sort().reverse();
  armadura_mano_der_lista.sort().reverse();
  armadura_mano_izq_lista.sort().reverse();
  armadura_pierna_der_lista.sort().reverse();
  armadura_pierna_izq_lista.sort().reverse();
  armadura_pie_der_lista.sort().reverse();
  armadura_pie_izq_lista.sort().reverse();
  armadura_cabeza_lista.sort().reverse();

  armadura_cabeza.value = Math.max(0, totalArmadura(armadura_cabeza_lista) - negativo_armadura_cabeza.value);

  armadura_pecho.value = Math.max(0, totalArmadura(armadura_pecho_lista) - negativo_armadura_pecho.value);

  armadura_espalda.value = Math.max(0, totalArmadura(armadura_espalda_lista) - negativo_armadura_espalda.value);

  armadura_hombro_der.value = Math.max(0, totalArmadura(armadura_hombro_der_lista) - negativo_armadura_hombro_der.value);

  armadura_hombro_izq.value = Math.max(0, totalArmadura(armadura_hombro_izq_lista) - negativo_armadura_hombro_izq.value);

  armadura_brazo_der.value = Math.max(0, totalArmadura(armadura_brazo_der_lista) - negativo_armadura_brazo_der.value);

  armadura_brazo_izq.value = Math.max(0, totalArmadura(armadura_brazo_izq_lista) - negativo_armadura_brazo_izq.value);

  armadura_mano_der.value = Math.max(0, totalArmadura(armadura_mano_der_lista) - negativo_armadura_mano_der.value);

  armadura_mano_izq.value = Math.max(0, totalArmadura(armadura_mano_izq_lista) - negativo_armadura_mano_izq.value);

  armadura_pierna_der.value = Math.max(0, totalArmadura(armadura_pierna_der_lista) - negativo_armadura_pierna_der.value);

  armadura_pierna_izq.value = Math.max(0, totalArmadura(armadura_pierna_izq_lista) - negativo_armadura_pierna_izq.value);

  armadura_pie_der.value = Math.max(0, totalArmadura(armadura_pie_der_lista) - negativo_armadura_pie_der.value);

  armadura_pie_izq.value = Math.max(0, totalArmadura(armadura_pie_izq_lista) - negativo_armadura_pie_izq.value);

}

function totalArmadura(lista) {
  var total = 0;
  i = 0;
  while (i < lista.length) {
    if (i === 0) {
      total += n(lista[i]);
    } else {
      total += n(
        floor(lista[i] / 2 / 10) * 10
      );
    }
    i++;
  }

  return total;
}

function noCabeArmadura(posicion) {
  var armadura_clase = f("armadura" + posicion).value.split(" ")[0];
  var armadura_dureza = f("armadura" + posicion + "_dureza").value;

  return (armadura_clase === "Yelmo" && armadura_dureza === "Dura" && yelmos_equipados.Duro) ||
    (armadura_clase === "Yelmo" && armadura_dureza === "Blando" && yelmos_equipados.Blando[1] && yelmos_equipados.Blando[2]) ||
    (armadura_clase !== "Yelmo" && armadura_dureza === "Dura" && armaduras_equipadas.Dura) ||
    (armadura_clase !== "Yelmo" && armadura_dureza === "Blando" && armaduras_equipadas.Blanda[1] && armaduras_equipadas.Blanda[2]);
}

function manoOcupada(mano, posicion) {
  return (
    (armas_equipadas["D"] && (mano === "D" || mano === "D+I") && n(armas_equipadas["D"].posicion) !== n(posicion)) ||
    (armas_equipadas["I"] && (mano === "I" || mano === "D+I") && n(armas_equipadas["I"].posicion) !== n(posicion)) ||
    (armas_equipadas["D+I"] && (mano === "I" || mano === "D" || mano === "D+I") && n(armas_equipadas["D+I"].posicion) !== n(posicion))
  );
}

function f(value) {
  return this.getField(value);
}

function n(value) {
  return Number(value);
}

function s(value) {
  return String(value);
}

function floor(value) {
  return Math.floor(value);
}

function absolute(value) {
  return Math.abs(value);
}