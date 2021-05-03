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
    arma_freq: "10 / 14",
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
    arma_freq: "15",
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
    arma_freq: "16",
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
    arma_freq: "16",
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
    arma_freq: "16",
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
    arma_freq: "17",
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
    arma_freq: "18",
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
    arma_freq: "18",
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
    arma_freq: "20",
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
    arma_freq: "20",
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
    arma_freq: "20",
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
    arma_freq: "10",
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
    mov: "0",
    dureza: "Blanda",
    clase: "Armadura",
  },
  {
    armadura: "Camisola de cuero",
    def: 10,
    reqarm: 0,
    advertir: "-",
    mov: "0",
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
    mov: "0",
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
    advertir: "0",
    mov: "-",
    dureza: "Duro",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo frent\u00f3n",
    def: 30,
    reqarm: 0,
    advertir: "0",
    mov: "-",
    dureza: "Duro",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo coronilla",
    def: 20,
    reqarm: 0,
    advertir: "0",
    mov: "-",
    dureza: "Duro",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo de cuero",
    def: 10,
    reqarm: 0,
    advertir: "0",
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
  },
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
  if (armadura_checked == "Eq.") {
    var armadura_dureza = f("armadura" + i + "_dureza").value;
    var armadura_clase = f("armadura" + i).value.split(" ")[0];

    if (armadura_checked == "Eq.") {
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
      switch (armadura_dureza) {
        case "Dura":
          armaduras_equipadas.Dura = armadura_t;
          break;
        case "Duro":
          yelmos_equipados.Duro = armadura_t;
          break;
        case "Blanda":
          armaduras_equipadas.Blanda[
            armaduras_equipadas.Blanda[1] ? 2 : 1
          ] = armadura_t;
          break;
        case "Blando":
          yelmos_equipados.Blando[
            yelmos_equipados.Blando[1] ? 2 : 1
          ] = armadura_t;
          break;

        default:
          break;
      }
    }
  }
}

var armas_equipadas = {
  D: null,
  I: null,
  "D+I": null,
};

for (
  i = 1; i <= 6 &&
  !armas_equipadas["D+I"] &&
  !(armas_equipadas["I"] && armas_equipadas["D"]); i++
) {
  var arma_checked = f("arma" + i + "_check").value;
  if (arma_checked == "D" || arma_checked == "I" || arma_checked == "D+I") {
    armas_equipadas[arma_checked] = {
      posicion: i,
      arma: f("arma" + i).value,
      atq: f("arma" + i + "_atq").value,
      par: f("arma" + i + "_par").value,
      esq: f("arma" + i + "_esq").value,
      db: f("arma" + i + "_db").value,
      iniciativa: f("arma" + i + "_iniciativa").value,
      freq: f("arma" + i + "_freq").value,
      clase: f("arma" + i + "_clase").value,
      tam: f("arma" + i + "_tam").value,
      especial: f("arma" + i + "_especial").value,
      calidad: f("arma" + i + "_calidad").value,
    };
  }
}

var tablas_arma_aprendidas = [];

for (i = 1; i <= 7 && f("tabla_arma" + i).value != "-"; i++) {
  tablas_arma_aprendidas.push({
    arma: f("tabla_arma" + i).value,
    clase: f("tabla_arma" + i + "_clase").value,
  });
}

var puntos_base = f("puntos_base");
var nombre = f("nombre");
var raza = f("raza");
var nivel = f("nivel");

// Experiencia

var op_exp = f("op_exp");
var exp = f("exp");

// Puntos de mejora

var pm_actuales = f("pm_actuales");
var pm_totales = f("pm_totales");

// Puntos de desarrollo (PD)

var pd_actuales = f("pd_actuales");
var pd_totales = f("pd_totales");

// Mano dominante

var mano_dominante = f("mano_dominante");
var mano_dominante_v = mano_dominante.value;

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
var reg_base = f("reg_base");

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
var pd_vida_coste = f("pd_vida_coste");
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
var negativo_armadura_hombro_der = f("negativo_armadura_hombro_der");
var negativo_armadura_hombro_izq = f("negativo_armadura_hombro_izq");
var negativo_armadura_pecho = f("negativo_armadura_pecho");
var negativo_armadura_brazo_der = f("negativo_armadura_brazo_der");
var negativo_armadura_brazo_izq = f("negativo_armadura_brazo_izq");
var negativo_armadura_mano_der = f("negativo_armadura_mano_der");
var negativo_armadura_mano_izq = f("negativo_armadura_mano_izq");
var negativo_armadura_pierna_der = f("negativo_armadura_pierna_der");
var negativo_armadura_pierna_izq = f("negativo_armadura_pierna_izq");
var negativo_armadura_pie_der = f("negativo_armadura_pie_der");
var negativo_armadura_pie_izq = f("negativo_armadura_pie_izq");

// Desarmado

var arma0 = f("arma0");
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

var final_acrobacias = f("final_acrobacias");
var final_atletismo = f("final_atletismo");
var final_nadar = f("final_nadar");
var final_trepar = f("final_trepar");
var final_ocultarse = f("final_ocultarse");
var final_sigilo = f("final_sigilo");

var final_ver = f("final_ver");
var final_escuchar = f("final_escuchar");
var final_buscar = f("final_buscar");
var final_rastrear = f("final_rastrear");

var num_ventajas_hab = f("num_ventajas_hab");
var num_ventajas_gratis = f("num_ventajas_gratis");

var armadura0_def = f("armadura0_def");

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

var puntos_base_total = 6 * 9; // 54
var restriccion_mov_armadura;
var validar_rama = true;
var reset_arma = true;

// VALIDATIONS

function v_exp(event) {}

function v_op_exp(event) {}

function v_idioma_escrito(event) {
  posicion = event.target.name.substr(6, 1);
  var coste_idioma = f("idioma" + posicion + "_pd");
  var coste_idioma_v = 0;

  switch (event.value) {
    case "Bajo":
      coste_idioma_v += 10;
      break;
    case "Medio":
      coste_idioma_v += 15;
      break;
    case "Alto":
      coste_idioma_v += 20;
      break;
    case "Nativo":
      coste_idioma_v += 25;
      break;
    default:
      break;
  }

  switch (f("idioma" + posicion + "_hablado").value) {
    case "Bajo":
      coste_idioma_v += 10;
      break;
    case "Medio":
      coste_idioma_v += 15;
      break;
    case "Alto":
      coste_idioma_v += 20;
      break;
    case "Nativo":
      coste_idioma_v += 25;
      break;
    default:
      break;
  }

  coste_idioma.value = coste_idioma_v;
}

function v_idioma_hablado(event) {
  posicion = event.target.name.substr(6, 1);
  var coste_idioma = f("idioma" + posicion + "_pd");
  var coste_idioma_v = 0;

  switch (event.value) {
    case "Bajo":
      coste_idioma_v += 10;
      break;
    case "Medio":
      coste_idioma_v += 15;
      break;
    case "Alto":
      coste_idioma_v += 20;
      break;
    case "Nativo":
      coste_idioma_v += 25;
      break;
    default:
      break;
  }

  switch (f("idioma" + posicion + "_escrito").value) {
    case "Bajo":
      coste_idioma_v += 10;
      break;
    case "Medio":
      coste_idioma_v += 15;
      break;
    case "Alto":
      coste_idioma_v += 20;
      break;
    case "Nativo":
      coste_idioma_v += 25;
      break;
    default:
      break;
  }

  coste_idioma.value = coste_idioma_v;
}

function v_mano_dominante(event) {
  if (event.value == "Ambas") {
    pm_actuales.value = n(pm_actuales.value) + 2;
  } else if (mano_dominante.value == "Ambas") {
    pm_actuales.value -= 2;
  }
  mano_dominante_v = event.value;
  aplicarNegativosArmas();
}

/**
 * atr_puntos
 * atr_base
 */

function v_atributo(event) {
  event.value = floor(event.value);

  var atributo = event.target.name.substr(0, 3);
  var atributo_puntos =
    event.target.name == atributo + "_puntos" ?
    event.value :
    f(atributo + "_puntos").value;
  var atributo_base =
    event.target.name == atributo + "_base" ?
    event.value :
    f(atributo + "_base").value;
  var atributo_actual = f(atributo + "_actual");
  var atributo_actual_old_v = atributo_actual.value;
  var atributo_bono = f(atributo + "_bono");
  var atributo_bono_old_v = atributo_bono.value;

  if (
    event.value < 0 ||
    atributo_puntos < 0 ||
    pm_actuales.value + atributo_puntos > pm_totales.value ||
    atributo_base > 20 ||
    atributo_base < 1
  ) {
    event.rc = false;
  } else {
    if (event.target.name == atributo + "_puntos") {
      actualizarField(
        pm_actuales,
        f(atributo + "_puntos").value,
        event.value
      );
    }
    atributo_actual.value = n(atributo_base) + n(atributo_puntos);

    atributo_bono.value = lista_bonos[atributo_actual.value - 1];

    if (event.target.name == atributo + "_base") {
      actualizarField(puntos_base, -f(atributo + "_base").value, -event.value);
      if (puntos_base.value == 0) {
        puntos_base.value = "";
      }
    }

    for (var key in lista_habilidades) {
      var rama = lista_habilidades[key];
      rama.forEach(function (hab) {
        if (hab.atributo == atributo) {
          actualizarField(
            f("final_" + hab.habilidad),
            atributo_bono_old_v,
            atributo_bono.value
          );
        }
      });
    }

    switch (atributo) {
      case "agi":
        actualizarMovimiento();
        actualizarField(
          final_esquiva,
          atributo_bono_old_v,
          atributo_bono.value
        );
        actualizarField(
          final_iniciativa,
          atributo_bono_old_v,
          atributo_bono.value
        );

        break;
      case "fue":
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

        for (i = 0; i <= 6; i++) {
          var arma_fue_bono = f("arma" + i + "_fue_bono");
          var arma_check = f("arma" + i + "_check");
          var arma_clase = f("arma" + i + "_clase");
          var arma_db = f("arma" + i + "_db");
          var arma_df = f("arma" + i + "_df");

          if (arma_clase.value == "A. de proyectil") {
            arma_fue_bono.value = 0;
          } else {
            if (arma_check.value == "D+I") {
              arma_fue_bono.value = fue_bono.value * 2;
            } else {
              arma_fue_bono.value = fue_bono.value;
            }
          }

          arma_df.value = Math.max(
            0,
            n(arma_db.value) + n(arma_fue_bono.value)
          );
        }

        actualizarField(final_llA, atributo_bono_old_v, atributo_bono.value);

        actualizarTablaDiferencias();
        calculoTotalArmaduras();
        aplicarNegativosArmas();
        break;
      case "con":
        var base_vida_old_v = base_vida.value;
        base_vida.value = lista_vida_base_por_nivel[atributo_actual.value - 1];
        actualizarField(totales_vida, base_vida_old_v, base_vida.value);
        actualizarField(actuales_vida, base_vida_old_v, base_vida.value);

        // REG
        var old_value, new_value;
        if (nventaja_reg.value == -1) {
          old_value = regBasePorCON(atributo_actual_old_v) / 2;
          new_value = regBasePorCON(atributo_actual.value) / 2;
        } else {
          old_value = regBasePorCON(atributo_actual_old_v);
          new_value = regBasePorCON(atributo_actual.value);
        }
        actualizarField(reg_base, old_value, new_value);
        actualizarRegeneracionesSegunRegeneracionBase(reg_base.value);
        ["fisica", "enfermedades", "venenos", "frio", "calor"].forEach(
          function (res) {
            if (f("nventaja_res_" + res) == -1) {
              actualizarField(
                f("final_res_" + res),
                atributo_bono_old_v / 2,
                atributo_bono.value / 2
              );
            } else {
              actualizarField(
                f("final_res_" + res),
                atributo_bono_old_v,
                atributo_bono.value
              );
            }
          }
        );
        actualizarVidaPDCoste();
        break;
      case "des":
        actualizarField(
          final_iniciativa,
          atributo_bono_old_v,
          atributo_bono.value
        );

        if (armas_equipadas["D"]) {
          actualizarField(
            final_ataque_d,
            atributo_bono_old_v,
            atributo_bono.value
          );
          actualizarField(
            final_parada_d,
            atributo_bono_old_v,
            atributo_bono.value
          );
        } else if (armas_equipadas["I"]) {
          actualizarField(
            final_ataque_i,
            atributo_bono_old_v,
            atributo_bono.value
          );
          actualizarField(
            final_parada_i,
            atributo_bono_old_v,
            atributo_bono.value
          );
        } else {
          actualizarField(
            final_ataque_i,
            atributo_bono_old_v,
            atributo_bono.value
          );
          actualizarField(
            final_parada_i,
            atributo_bono_old_v,
            atributo_bono.value
          );
          actualizarField(
            final_ataque_d,
            atributo_bono_old_v,
            atributo_bono.value
          );
          actualizarField(
            final_parada_d,
            atributo_bono_old_v,
            atributo_bono.value
          );
        }

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

// ARMADURAS

function v_armadura_check(event) {
  posicion = event.target.name.substr(8, 1);
  if (event.value == "Eq.") {
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
  posicion = event.target.name.substr(8, 1);
  f(event.target.name + "_calidad").value = 0;
  f(event.target.name + "_check").value = "-";

  resetAtributosArmadura(posicion, event.value);
}

function v_armadura_calidad(event) {
  var posicion = event.target.name.substr(8, 1);
  var armadura = f("armadura" + posicion);
  if (posicion == 0) {
    if (event.value == 0) {
      pm_actuales.value = n(pm_actuales.value) - 2;
    } else {
      pm_actuales.value = n(pm_actuales.value) + 2;
    }
  }

  resetAtributosArmadura(posicion, armadura.value, event.value);
  calculoTotalArmaduras();
}

// ARMAS

function v_arma_check(event) {
  var mano_a_desequipar = f(event.target.name).value;
  posicion = event.target.name.substr(4, 1);
  var arma = f("arma" + posicion);
  var arma_fue_bono = f("arma" + posicion + "_fue_bono");
  var arma_df = f("arma" + posicion + "_df");
  var arma_db = f("arma" + posicion + "_db");
  var arma_clase = f("arma" + posicion + "_clase");

  if (
    arma.value == "-" ||
    (arma_clase.value == "A. de proyectil" &&
      (event.value == "D" || event.value == "I")) ||
    manoOcupada(event.value, posicion)
  ) {
    event.rc = false;
  } else if (event.value == "-") {
    armas_equipadas[mano_a_desequipar] = null;
    arma_fue_bono.value = fue_bono.value;
    arma_df.value = Math.max(0, n(arma_db.value) + n(arma_fue_bono.value));

    resetArma(posicion);

    if (
      !armas_equipadas["D"] &&
      !armas_equipadas["I"] &&
      !armas_equipadas["D+I"]
    ) {
      // Combate desarmado

      arma0_check.value = "D+I";

      actualizarIniciativa();
      actualizarEsquiva();
      actualizarTablaDiferencias();
    }
    aplicarNegativosArmas();
  } else {
    if (mano_a_desequipar != "-") {
      armas_equipadas[mano_a_desequipar] = null;
    } else {
      resetArma(0);
    }

    arma0_check.value = "-";

    armas_equipadas[event.value] = {
      posicion: posicion,
      arma: arma.value,
      atq: f("arma" + posicion + "_atq").value,
      par: f("arma" + posicion + "_par").value,
      esq: f("arma" + posicion + "_esq").value,
      db: f("arma" + posicion + "_db").value,
      iniciativa: f("arma" + posicion + "_iniciativa").value,
      freq: f("arma" + posicion + "_freq").value,
      clase: arma_clase.value,
      tam: f("arma" + posicion + "_tam").value,
      especial: f("arma" + posicion + "_especial").value,
      calidad: f("arma" + posicion + "_calidad").value,
    };

    if (event.value == "D+I" && arma_clase.value !== "A. de proyectil") {
      arma_fue_bono.value = fue_bono.value * 2;
    } else {
      arma_fue_bono.value = fue_bono.value;
    }

    arma_df.value = Math.max(0, n(arma_db.value) + n(arma_fue_bono.value));

    if (event.value == "D") {
      equipo_parada_i.value = "-";
      final_parada_i.value = "-";
      equipo_ataque_i.value = "-";
      final_ataque_i.value = "-";
    } else if (event.value == "I") {
      equipo_parada_d.value = "-";
      final_parada_d.value = "-";
      equipo_ataque_d.value = "-";
      final_ataque_d.value = "-";
    }

    aplicarNegativosArmas();

    actualizarIniciativa();
    actualizarEsquiva();
    actualizarTablaDiferencias();
  }
}

function v_arma(event) {
  f(event.target.name + "_calidad").value = 0;
  f(event.target.name + "_check").value = "-";

  posicion = event.target.name.substr(4, 1);

  resetArma(posicion, event.value);
}

function v_arma_calidad(event) {
  i = event.target.name.substr(4, 1);
  var arma_clase = f("arma" + i + "_clase");
  var arma_check = f("arma" + i + "_check");
  var arma = f("arma" + i);

  if (arma_clase.value == "Escudo" || arma_clase.value == "-") {
    event.rc = false;
  } else {
    resetArma(i, arma.value, event.value);
    if (
      arma_check.value == "I" ||
      arma_check.value == "D" ||
      arma_check.value == "D+I"
    ) {
      reset_arma = false;
      aplicarNegativosArma(arma_check.value);
      reset_arma = true;
    }
  }
}

// TABLA DE ARMAS

function v_tabla_arma(event) {
  posicion = event.target.name.substr(event.target.name.length - 1);
  var coste_pd = f(event.target.name + "_pd");
  var coste_pd_old_v = coste_pd.value;
  var arma_clase = f(event.target.name + "_clase");

  if (
    (posicion > 1 && f("tabla_arma" + (posicion - 1)).value.length <= 1) ||
    (posicion < 7 && f("tabla_arma" + (n(posicion) + 1)).value.length > 1)
  ) {
    event.rc = false;
  } else {
    if (event.value == "-" || f(event.target.name).value != "-") {
      tablas_arma_aprendidas.pop();
    }

    if (event.value == "-") {
      coste_pd.value = 0;
      arma_clase.value = "-";
    } else if (
      event.value == event.value.toUpperCase()
      // || event.value.substr(0, 3) == "E. "
    ) {
      coste_pd.value = 25;
      lista_tabla_armas_estilos.some(function (tabla_arma) {
        if (tabla_arma.tabla == event.value) {
          arma_clase.value = tabla_arma.clase;
          tablas_arma_aprendidas.push({
            arma: event.value,
            clase: tabla_arma.clase,
          });
          return true;
        }
      });
    } else {
      lista_armas.some(function (arma) {
        if (arma.arma == event.value) {
          arma_clase.value = arma.arma_clase;
          tablas_arma_aprendidas.push({
            arma: event.value,
            clase: arma.arma_clase,
          });
          return true;
        }
      });
      var encontrado = false;
      var similar = false;
      for (i = 1; i < posicion && !encontrado; i++) {
        var t_arma = f("tabla_arma" + i);
        var t_arma_clase = f("tabla_arma" + i + "_clase");

        if (
          t_arma.value == event.value ||
          (t_arma_clase.value == arma_clase.value &&
            t_arma.value == t_arma.value.toUpperCase())
        ) {
          coste_pd.value = 0;
          encontrado = true;
        } else {
          if (t_arma_clase.value == arma_clase.value && !similar) {
            similar = true;
          }
        }
      }

      if (!encontrado && posicion > 1) {
        coste_pd.value = similar ? 5 : 10;
      }
    }
    if (posicion > 1) {
      actualizarField(pd_actuales, coste_pd_old_v, coste_pd.value);
    }

    if (armas_equipadas["D+I"]) {
      resetArma(armas_equipadas["D+I"].posicion);
    } else {
      if (armas_equipadas["D"] || armas_equipadas["I"]) {
        if (armas_equipadas["D"]) {
          resetArma(armas_equipadas["D"].posicion);
        }
        if (armas_equipadas["I"]) {
          resetArma(armas_equipadas["I"].posicion);
        }
      } else {
        resetArma(0);
      }
    }

    aplicarNegativosArmas();
  }
}

// LLEVAR ARMADURA

function v_pd_llA(event) {
  event.value = floor(event.value);
  if (
    event.value >= 0 &&
    n(event.value) +
    n(pd_ataque.value) +
    n(pd_parada.value) +
    n(pd_esquiva.value) <=
    floor(pd_totales.value / 2)
  ) {
    actualizarFinal(event);
    actualizarField(pd_actuales, pd_llA.value, event.value);
    calculoTotalArmaduras();
  } else {
    event.rc = false;
  }

  if (!event.value) {
    event.value = 0;
  }
}

function v_nventaja_llA(event) {
  var pventaja_llA_old_v = pventaja_llA.value;
  pventaja_llA.value = Math.floor((2.5 * nivel.value * event.value) / 5) * 5;
  actualizarField(final_llA, pventaja_llA_old_v, pventaja_llA.value);
  actualizarField(pm_actuales, nventaja_llA.value * 2, event.value * 2);
  calculoTotalArmaduras();
}

function v_esp_llA(event) {
  event.value = floor(event.value);

  if (isNaN(event.value)) {
    event.rc = false;
  } else {
    actualizarFinal(event);
    calculoTotalArmaduras();
  }

  if (event.value == 0) {
    event.value = "";
  }
}

// VIDA

function v_pd_vida(event) {
  event.value = floor(event.value);

  if (event.value < 0) {
    event.rc = false;
  } else {
    actualizarVidaPDCoste(event.value);
    actualizarField(actuales_vida, pd_vida.value, event.value);
    actualizarField(base_vida, pd_vida.value, event.value);
    actualizarField(totales_vida, pd_vida.value, event.value);
  }
}

function actualizarVidaPDCoste(pd_vida_p) {
  var pd_vida_v = pd_vida_p ? pd_vida_p : pd_vida.value;
  var pd_vida_coste_old_v = pd_vida_coste.value;
  switch (n(con_actual.value)) {
    case 1:
      pd_vida_coste.value = 15 * pd_vida_v;
      break;
    case 2:
    case 3:
      pd_vida_coste.value = 14 * pd_vida_v;
      break;
    case 4:
    case 5:
      pd_vida_coste.value = 13 * pd_vida_v;
      break;
    case 6:
    case 7:
      pd_vida_coste.value = 12 * pd_vida_v;
      break;
    case 8:
    case 9:
      pd_vida_coste.value = 11 * pd_vida_v;
      break;
    case 10:
    case 11:
      pd_vida_coste.value = 10 * pd_vida_v;
      break;
    case 12:
    case 13:
      pd_vida_coste.value = 9 * pd_vida_v;
      break;
    case 14:
    case 15:
      pd_vida_coste.value = 8 * pd_vida_v;
      break;
    case 16:
    case 17:
      pd_vida_coste.value = 7 * pd_vida_v;
      break;
    case 18:
    case 19:
      pd_vida_coste.value = 6 * pd_vida_v;
      break;
    case 20:
      pd_vida_coste.value = 5 * pd_vida_v;
      break;
    default:
      break;
  }
  actualizarField(pd_actuales, pd_vida_coste_old_v, pd_vida_coste.value);
}

function v_nventaja_vida(event) {
  actualizarField(
    pventaja_vida,
    nventaja_vida.value * nivel.value,
    event.value * nivel.value
  );
  actualizarField(pm_actuales, nventaja_vida.value * 2, event.value * 2);
  actualizarField(
    actuales_vida,
    nventaja_vida.value * nivel.value,
    event.value * nivel.value
  );
  actualizarField(
    totales_vida,
    nventaja_vida.value * nivel.value,
    event.value * nivel.value
  );
}

function v_esp_vida(event) {
  event.value = floor(event.value);

  if (isNaN(event.value)) {
    event.rc = false;
  } else {
    actualizarField(actuales_vida, esp_vida.value, event.value);
    actualizarField(totales_vida, esp_vida.value, event.value);
  }
  if (event.value == 0) {
    event.value = "";
  }
}

function v_actuales_vida(event) {
  event.value = floor(event.value);
  if (event.value > totales_vida.value) {
    event.value = totales_vida.value;
  }
}

// COMBATE

function v_pd_ataque(event) {
  event.value = floor(event.value);

  if (
    event.value >= 0 &&
    n(event.value) +
    n(pd_parada.value) +
    n(pd_esquiva.value) +
    n(pd_llA.value) <=
    floor(pd_totales.value / 2)
  ) {
    if (armas_equipadas["D"] || armas_equipadas["I"]) {
      if (armas_equipadas["D"]) {
        actualizarField(
          final_ataque_d,
          f(event.target.name).value,
          event.value
        );
      }
      if (armas_equipadas["I"]) {
        actualizarField(
          final_ataque_i,
          f(event.target.name).value,
          event.value
        );
      }
    } else {
      actualizarField(final_ataque_d, f(event.target.name).value, event.value);
      actualizarField(final_ataque_i, f(event.target.name).value, event.value);
    }
    actualizarField(pd_actuales, pd_ataque.value, event.value);
  } else {
    event.rc = false;
  }
}

function v_pd_esquiva(event) {
  event.value = floor(event.value);

  if (
    event.value >= 0 &&
    n(event.value) + n(pd_ataque.value) + n(pd_parada.value) <=
    floor(pd_totales.value / 2)
  ) {
    actualizarFinal(event);
    actualizarField(pd_actuales, pd_esquiva.value, event.value);
  } else {
    event.rc = false;
  }
}

function v_pd_parada(event) {
  event.value = floor(event.value);
  if (
    event.value >= 0 &&
    n(event.value) + n(pd_ataque.value) + n(pd_esquiva.value) <=
    floor(pd_totales.value / 2)
  ) {
    event.value = floor(event.value);
    if (armas_equipadas["D"] || armas_equipadas["I"]) {
      if (armas_equipadas["D"]) {
        actualizarField(
          final_parada_d,
          f(event.target.name).value,
          event.value
        );
      }
      if (armas_equipadas["I"]) {
        actualizarField(
          final_parada_i,
          f(event.target.name).value,
          event.value
        );
      }
    } else {
      actualizarField(final_parada_d, f(event.target.name).value, event.value);
      actualizarField(final_parada_i, f(event.target.name).value, event.value);
    }

    actualizarField(pd_actuales, pd_parada.value, event.value);

  } else {
    event.rc = false;
  }
}

function v_nventaja_combate(event) {
  var pventaja = f("p" + event.target.name.substr(1));
  var pventaja_old_v = pventaja.value;
  pventaja.value = Math.min(50, event.value * 5 * floor(nivel.value / 2));

  if (event.target.name.indexOf("esquiva") > -1) {
    actualizarField(final_esquiva, pventaja_old_v, pventaja.value);
  } else if (event.target.name.indexOf("parada") > -1) {
    if (armas_equipadas["D"] || armas_equipadas["I"]) {
      if (armas_equipadas["D"]) {
        actualizarField(final_parada_d, pventaja_old_v, pventaja.value);
      } else {
        actualizarField(final_parada_i, pventaja_old_v, pventaja.value);
      }
    } else {
      actualizarField(final_parada_d, pventaja_old_v, pventaja.value);
      actualizarField(final_parada_i, pventaja_old_v, pventaja.value);
    }
  } else {
    if (armas_equipadas["D"] || armas_equipadas["I"]) {
      if (armas_equipadas["D"]) {
        actualizarField(final_ataque_d, pventaja_old_v, pventaja.value);
      } else {
        actualizarField(final_ataque_i, pventaja_old_v, pventaja.value);
      }
    } else {
      actualizarField(final_ataque_d, pventaja_old_v, pventaja.value);
      actualizarField(final_ataque_i, pventaja_old_v, pventaja.value);
    }
  }

  actualizarField(
    pm_actuales,
    f(event.target.name).value * 2,
    event.value * 2
  );
}

function v_esp_combate(event) {
  event.value = floor(event.value);

  if (isNaN(event.value)) {
    event.rc = false;
  } else {
    if (
      f("final" + event.target.name.substr(event.target.name.indexOf("_")))
      .value === "-"
    ) {
      event.rc = false;
    } else {
      actualizarFinal(event);
    }
  }

  if (event.value == 0) {
    event.value = "";
  }
}

//

function v_diff_x(event) {
  if (event.value >= 0) {
    actualizarDiffX(event);
  } else {
    event.rc = false;
  }
}

function v_negativo_armadura(event) {
  event.value = floor(event.value);

  var armadura = f(event.target.name.substr(9));

  event.value = absolute(event.value);

  if (isNaN(event.value)) {
    event.rc = false;
  } else {
    event.value = floor(event.value / 10) * 10;

    armadura.value = Math.max(0, armadura.value - event.value);
  }
}

function v_op_vida_resta(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    if (n(actuales_vida.value) + n(event.value) > totales_vida.value) {
      actuales_vida.value = totales_vida.value;
    } else {
      actuales_vida.value = n(actuales_vida.value) + n(event.value);
    }
    event.value = "-";
  } else {
    event.rc = false;
  }
}

function v_op_vida_suma(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    if (n(actuales_vida.value) + n(event.value) > totales_vida.value) {
      actuales_vida.value = totales_vida.value;
    } else {
      actuales_vida.value = n(actuales_vida.value) + n(event.value);
    }
    event.value = "+";
  } else {
    event.rc = false;
  }
}

function v_op_bronce_1(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    bronce.value = n(event.value) + n(bronce.value);
    event.value = "-";
  } else {
    event.rc = false;
  }
}

function v_op_bronce_2(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    bronce.value = n(event.value) + n(bronce.value);
    event.value = "+";
  } else {
    event.rc = false;
  }
}

function v_op_plata_1(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    plata.value = n(event.value) + n(plata.value);
    event.value = "-";
  } else {
    event.rc = false;
  }
}

function v_op_plata_2(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    plata.value = n(event.value) + n(plata.value);
    event.value = "+";
  } else {
    event.rc = false;
  }
}

function v_op_oro_1(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    oro.value = n(event.value) + n(oro.value);
    event.value = "-";
  } else {
    event.rc = false;
  }
}

function v_op_oro_2(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    oro.value = n(event.value) + n(oro.value);
    event.value = "+";
  } else {
    event.rc = false;
  }
}

function v_bronce(event) {
  event.value = floor(event.value);

  if (event.value >= 100) {
    var plata_up = Math.floor(event.value / 100);
    plata.value = n(plata.value) + n(plata_up);
    event.value = event.value - plata_up * 100;
  } else if (event.value < 0) {
    event.value = 0;
  } else if (isNaN(event.value)) {
    event.rc = false;
  }
}

function v_plata(event) {
  event.value = floor(event.value);

  if (event.value >= 100) {
    var oro_up = Math.floor(event.value / 100);
    oro.value = n(oro.value) + n(oro_up);
    event.value = event.value - oro_up * 100;
  } else if (event.value < 0) {
    event.value = 0;
  } else if (isNaN(event.value)) {
    event.rc = false;
  }
}

function v_oro(event) {
  event.value = floor(event.value);

  if (event.value < 0) {
    event.value = 0;
  } else if (isNaN(event.value)) {
    event.rc = false;
  }
}

function v_pd_habilidad(event) {
  var habilidad = event.target.name.substr(3);
  var hab_mult = f("mult_" + habilidad);
  var hab_final = f("final_" + habilidad);
  var hab_base = f("base_" + habilidad);
  var hab_base_old_v = hab_base.value;
  var mult_rama = f("mult_" + getRama(habilidad));
  event.value = floor(event.value);
  if (event.value > 0) {
    if (hab_mult.value == "-" && mult_rama.value != "x2") {
      hab_base.value = n(event.value);
    } else {
      hab_base.value = 2 * n(event.value);
    }
  } else {
    event.value = 0;
    hab_base.value = -30;
  }
  if (event.rc) {
    actualizarField(hab_final, hab_base_old_v, hab_base.value);
    actualizarField(pd_actuales, f(event.target.name).value, event.value);
  }
}

function getRama(habilidad) {
  var encontrado = false;
  var rama_v = "";
  for (var rama in lista_habilidades) {
    if (!encontrado) {
      lista_habilidades[rama].some(function (hab) {
        if (hab.habilidad == habilidad) {
          encontrado = true;
          rama_v = rama;
          return true;
        }
      });
    }
  }

  return rama_v;
}

function v_mult_habilidad(event) {
  if (validar_rama) {
    var hab = event.target.name.substr(5);
    var hab_base = f("base_" + event.target.name.substr(5));
    var hab_base_old_v = hab_base.value;
    var hab_final = f("final_" + event.target.name.substr(5));
    var hab_pd = f("pd_" + event.target.name.substr(5));
    var rama_v = getRama(hab);
    var rama_mult = f("mult_" + rama_v);
    if (rama_mult.value == "x2" && event.value == "x2") {
      event.rc = false;
    } else {
      if (event.value != "x2") {
        if (hab_pd.value > 0) {
          if (rama_mult.value != "x2") {
            hab_base.value = hab_pd.value;
          } else {
            hab_base.value = hab_pd.value * 2;
          }
        } else {
          hab_base.value = -30;
        }
        pm_actuales.value = n(pm_actuales.value) - 2;
      } else {
        if (hab_pd.value > 0) {
          hab_base.value = hab_pd.value * 2;
        } else {
          hab_base.value = -30;
        }
        pm_actuales.value = n(pm_actuales.value) + 2;
      }
      actualizarField(hab_final, hab_base_old_v, hab_base.value);
    }
  }
}

function v_mult_rama(event) {
  lista_habilidades[event.target.name.substr(5)].forEach(function (hab) {
    var hab_base = f("base_" + hab.habilidad);
    var hab_pd = f("pd_" + hab.habilidad);
    var hab_base_old_v = hab_base.value;
    var hab_final = f("final_" + hab.habilidad);
    var hab_mult = f("mult_" + hab.habilidad);
    if (hab_mult.value == "x2") {
      validar_rama = false;
      hab_mult.value = "-";
      pm_actuales.value = n(pm_actuales.value) - 2;
      validar_rama = true;
    }
    if (hab_base.value > 0) {
      if (event.value != "x2") {
        hab_base.value = hab_pd.value;
      } else {
        hab_base.value = hab_pd.value * 2;
      }
      actualizarField(hab_final, hab_base_old_v, hab_base.value);
    }
  });
  if (event.value != "x2") {
    pm_actuales.value = n(pm_actuales.value) - 4;
  } else {
    pm_actuales.value = n(pm_actuales.value) + 4;
  }
}

function v_nventaja_rama(event) {
  lista_habilidades[event.target.name.substr(9)].forEach(function (hab) {
    var hab_pventaja = f("pventaja_" + hab.habilidad);
    var hab_pventaja_old_v = hab_pventaja.value;
    var hab_final = f("final_" + hab.habilidad);
    actualizarField(
      hab_pventaja,
      Math.floor((2.5 * nivel.value * f(event.target.name).value) / 5) * 5,
      Math.floor((2.5 * nivel.value * event.value) / 5) * 5
    );
    actualizarField(hab_final, hab_pventaja_old_v, hab_pventaja.value);
  });
  var nventaja_pventaja = [0, 4, 6];
  actualizarField(
    pm_actuales,
    nventaja_pventaja[n(f(event.target.name).value)],
    nventaja_pventaja[n(event.value)]
  );
}

function v_nventaja_habilidad(event) {
  var hab_pventaja = f("pventaja" + event.target.name.substr(8));
  var hab_final = f("final" + event.target.name.substr(8));

  actualizarField(
    hab_pventaja,
    5 * nivel.value * f(event.target.name).value,
    5 * nivel.value * event.value
  );
  actualizarField(
    hab_final,
    5 * nivel.value * f(event.target.name).value,
    5 * nivel.value * event.value
  );

  if (event.value == 1) {
    num_ventajas_hab.value = n(num_ventajas_hab.value) + 1;
  }

  var cost_old = f(event.target.name).value * 2;
  var cost_new = event.value * 2;

  if (num_ventajas_hab.value <= 5) {
    if (event.value == 1) {
      cost_new = 0;
    } else if (f(event.target.name).value == 1) {
      cost_old = 0;
    }
  }
  if (f(event.target.name).value == 1) {
    num_ventajas_hab.value = n(num_ventajas_hab.value) - 1;
  }
  if (num_ventajas_hab.value >= 0 && num_ventajas_hab.value <= 5) {
    num_ventajas_gratis.value = num_ventajas_hab.value;
  }

  actualizarField(pm_actuales, cost_old, cost_new);
}

function v_esp_iniciativa(event) {
  actualizarFinal(event);
  if (event.value == 0) {
    event.value = "";
  }
}

function v_esp_resistencias(event) {
  actualizarFinal(event);
  if (event.value == 0) {
    event.value = "";
  }
}

function v_nventaja_iniciativa(event) {
  switch (n(event.value)) {
    case -2:
      pventaja_iniciativa.value = -60;
      break;
    case -1:
      pventaja_iniciativa.value = -30;
      break;
    case 0:
      pventaja_iniciativa.value = 0;
      break;
    case 1:
      pventaja_iniciativa.value = 25;
      break;
    case 2:
      pventaja_iniciativa.value = 45;
      break;
    case 3:
      pventaja_iniciativa.value = 60;
      break;
    default:
      break;
  }
  actualizarField(
    pm_actuales,
    f(event.target.name).value * 2,
    event.value * 2
  );
  actualizarIniciativa();
}

function actualizarIniciativa() {
  if (armas_equipadas["D"] && !armas_equipadas["I"]) {
    arma_iniciativa_total.value = armas_equipadas["D"].iniciativa;
  } else if (!armas_equipadas["D"] && armas_equipadas["I"]) {
    arma_iniciativa_total.value = armas_equipadas["I"].iniciativa;
  } else if (armas_equipadas["I"] != null && armas_equipadas["D"] != null) {
    equipo_esquiva.value =
      n(armas_equipadas["I"].esq) + n(armas_equipadas["D"].esq);
    arma_iniciativa_total.value =
      n(armas_equipadas["I"].iniciativa) + n(armas_equipadas["D"].iniciativa);
  } else if (armas_equipadas["D+I"] != null) {
    arma_iniciativa_total.value = armas_equipadas["D+I"].iniciativa;
  } else {
    arma_iniciativa_total.value = arma0_iniciativa.value;
  }
  final_iniciativa.value =
    n(base_iniciativa.value) +
    n(des_bono.value) +
    n(agi_bono.value) +
    n(arma_iniciativa_total.value) +
    n(armadura_iniciativa_total.value) +
    n(pventaja_iniciativa.value) +
    n(esp_iniciativa.value);
}

function actualizarMovimiento() {
  var mov_total =
    agi_actual.value + floor(armadura_iniciativa_total.value / 10);

  if (mov_total - 1 >= 1 && mov_total - 1 <= 20) {
    mov_max.value = lista_movimiento[mov_total - 1];
  } else {
    mov_max.value = 0;
  }

  mov_restr.value = mov_max.value - mov_base.value;
}

function actualizarAtaque() {
  if (armas_equipadas["D"] && !armas_equipadas["I"]) {
    equipo_ataque_d.value = armas_equipadas["D"].atq;
    equipo_ataque_i.value = "-";
  } else if (!armas_equipadas["D"] && armas_equipadas["I"]) {
    equipo_ataque_d.value = "-";
    equipo_ataque_i.value = armas_equipadas["I"].atq;
  } else if (armas_equipadas["I"] != null && armas_equipadas["D"] != null) {
    equipo_ataque_d.value = armas_equipadas["D"].atq;
    equipo_ataque_i.value = armas_equipadas["I"].atq;
  } else if (armas_equipadas["D+I"] != null) {
    equipo_ataque_d.value = armas_equipadas["D+I"].atq;
    equipo_ataque_i.value = armas_equipadas["D+I"].atq;
  } else {
    equipo_ataque_d.value = arma0_atq.value;
    equipo_ataque_i.value = arma0_atq.value;
  }
  if (equipo_ataque_d.value == "-") {
    final_ataque_d.value = "-";
  } else {
    final_ataque_d.value =
      n(pd_ataque.value) +
      n(des_bono.value) +
      n(pventaja_ataque.value) +
      n(equipo_ataque_d.value) +
      n(esp_ataque_d.value);
  }

  if (equipo_ataque_i.value == "-") {
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
  } else if (armas_equipadas["I"] != null && armas_equipadas["D"] != null) {
    equipo_parada_d.value = armas_equipadas["D"].atq;
    equipo_parada_i.value = armas_equipadas["I"].atq;
  } else if (armas_equipadas["D+I"] != null) {
    equipo_parada_d.value = armas_equipadas["D+I"].atq;
    equipo_parada_i.value = armas_equipadas["D+I"].atq;
  } else {
    equipo_parada_d.value = arma0_atq.value;
    equipo_parada_i.value = arma0_atq.value;
  }
  if (equipo_parada_d.value == "-") {
    final_parada_d.value = "-";
  } else {
    final_parada_d.value =
      n(pd_parada.value) +
      n(des_bono.value) +
      n(pventaja_parada.value) +
      n(equipo_parada_d.value) +
      n(esp_parada_d.value);
  }

  if (equipo_parada_i.value == "-") {
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
  } else if (armas_equipadas["I"] != null && armas_equipadas["D"] != null) {
    equipo_esquiva.value =
      n(armas_equipadas["I"].esq) + n(armas_equipadas["D"].esq);
  } else if (armas_equipadas["D+I"] != null) {
    equipo_esquiva.value = armas_equipadas["D+I"].esq;
  } else {
    equipo_esquiva.value = arma0_esq.value;
  }
  final_esquiva.value =
    n(pd_esquiva.value) +
    n(agi_bono.value) +
    n(pventaja_esquiva.value) +
    n(equipo_esquiva.value) +
    n(esp_esquiva.value);
}

function actualizarTablaDiferencias() {
  // Actualizar tablas diferencias

  for (i = 10; i <= 200; i = i + 10) {
    var a1 = f("a1_" + i); // Izquierda
    var a2 = f("a2_" + i); // Derecha
    if (armas_equipadas["D+I"]) {
      // D+I ocupado
      a1.value = Math.round(
        ((n(armas_equipadas["D+I"].db) + n(fue_bono.value) * 2) * i) / 500
      );
      a2.value = Math.round(
        ((n(armas_equipadas["D+I"].db) + n(fue_bono.value) * 2) * i) / 500
      );
    } else if (armas_equipadas["I"]) {
      // I ocupado
      a1.value = Math.round(
        ((n(armas_equipadas["I"].db) + n(fue_bono.value)) * i) / 500
      );
      if (armas_equipadas["D"]) {
        // D ocupado
        a2.value = Math.round(
          ((n(armas_equipadas["D"].db) + n(fue_bono.value)) * i) / 500
        );
      } else {
        // D libre
        a2.value = "-";
      }
    } else if (armas_equipadas["D"]) {
      // D ocupado y I libre
      a1.value = "-";
      a2.value = Math.round(
        ((n(armas_equipadas["D"].db) + n(fue_bono.value)) * i) / 500
      );
    } else {
      // I y D libre
      a1.value = Math.round((n(arma0_df.value) * i) / 500);
      a2.value = Math.round((n(arma0_df.value) * i) / 500);
    }
  }

  actualizarDiffX();
}

function actualizarDiffX(event) {
  var diff_x_e = event ? event : diff_x;

  if (armas_equipadas["D+I"]) {
    // D+I ocupado
    a1_x.value = Math.round(
      ((n(armas_equipadas["D+I"].db) + n(fue_bono.value) * 2) *
        n(diff_x_e.value)) /
      500
    );
    a2_x.value = Math.round(
      ((n(armas_equipadas["D+I"].db) + n(fue_bono.value) * 2) *
        n(diff_x_e.value)) /
      500
    );
  } else if (armas_equipadas["I"]) {
    // I ocupado
    a1_x.value = Math.round(
      ((n(armas_equipadas["I"].db) + n(fue_bono.value)) * n(diff_x_e.value)) /
      500
    );
    if (armas_equipadas["D"]) {
      // D ocupado
      a2_x.value = Math.round(
        ((n(armas_equipadas["D"].db) + n(fue_bono.value)) * n(diff_x_e.value)) /
        500
      );
    } else {
      // D libre
      a2_x.value = "-";
    }
  } else if (armas_equipadas["D"]) {
    // D ocupado y I libre
    a1_x.value = "-";
    a2_x.value = Math.round(
      (n(armas_equipadas["D"].db + n(fue_bono.value)) * n(diff_x_e.value)) / 500
    );
  } else {
    // I y D libre
    a1_x.value = Math.round((n(arma0_df.value) * n(diff_x_e.value)) / 500);
    a2_x.value = Math.round((n(arma0_df.value) * n(diff_x_e.value)) / 500);
  }
}

function calculoTotalArmaduras() {
  var armaduras_reqarm_total = 0;
  var armaduras_mov_total = 0;
  var yelmos_reqarm_total = 0;
  var yelmos_advertir_total = 0;
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
    armaduras_equipadas.Blanda[2],
  ].forEach(function (armadura_array) {
    if (armadura_array) {
      armadura_mov = f("armadura" + armadura_array.posicion + "_mov");
      armadura_def = f("armadura" + armadura_array.posicion + "_def");
      armadura_reqarm = f("armadura" + armadura_array.posicion + "_reqarm");
      armaduras_mov_total += n(armadura_mov.value);
      armaduras_reqarm_total += n(armadura_reqarm.value);

      num_armaduras++;
    }
  });

  if (num_armaduras > 0) {
    var diff_reqarm_armaduras = final_llA.value - armaduras_reqarm_total;
    if (diff_reqarm_armaduras > 0) {
      armaduras_mov_total = Math.min(
        0,
        n(armaduras_mov_total) + floor(diff_reqarm_armaduras / 50) * 10
      );
    }
    armaduras_mov_total = armaduras_mov_total - 20 * (num_armaduras - 1);
    if (diff_reqarm_armaduras < 0) {
      armaduras_mov_total = armaduras_mov_total + diff_reqarm_armaduras;
    }
  }

  actualizarField(
    final_acrobacias,
    equipo_acrobacias.value,
    armaduras_mov_total
  );
  actualizarField(final_atletismo, equipo_atletismo.value, armaduras_mov_total);
  actualizarField(final_nadar, equipo_nadar.value, armaduras_mov_total);
  actualizarField(final_trepar, equipo_trepar.value, armaduras_mov_total);
  actualizarField(final_ocultarse, equipo_ocultarse.value, armaduras_mov_total);
  actualizarField(final_sigilo, equipo_sigilo.value, armaduras_mov_total);

  equipo_acrobacias.value = armaduras_mov_total;
  equipo_atletismo.value = armaduras_mov_total;
  equipo_nadar.value = armaduras_mov_total;
  equipo_trepar.value = armaduras_mov_total;
  equipo_ocultarse.value = armaduras_mov_total;
  equipo_sigilo.value = armaduras_mov_total;

  armadura_iniciativa_total.value = armaduras_mov_total;
  actualizarIniciativa();
  actualizarMovimiento();

  [
    yelmos_equipados.Duro,
    yelmos_equipados.Blando[1],
    yelmos_equipados.Blando[2],
  ].forEach(function (yelmo_array) {
    if (yelmo_array) {
      yelmo_advertir = f("armadura" + yelmo_array.posicion + "_advertir");
      yelmo_def = f("armadura" + yelmo_array.posicion + "_def");
      yelmo_reqarm = f("armadura" + yelmo_array.posicion + "_reqarm");
      yelmos_advertir_total += n(yelmo_advertir.value);
      yelmos_reqarm_total += n(yelmo_reqarm.value);

      num_yelmos++;
    }
  });

  if (num_yelmos > 0) {
    var diff_reqarm_yelmos = final_llA.value - yelmos_reqarm_total;
    if (diff_reqarm_yelmos > 0) {
      yelmos_advertir_total = Math.min(
        0,
        n(yelmos_advertir_total) + floor(diff_reqarm_yelmos / 50) * 10
      );
    }
    yelmos_advertir_total = yelmos_advertir_total - 20 * (num_yelmos - 1);
    if (diff_reqarm_yelmos < 0) {
      yelmos_advertir_total = yelmos_advertir_total + diff_reqarm_yelmos;
    }
  }

  actualizarField(final_ver, equipo_ver.value, yelmos_advertir_total);
  actualizarField(final_escuchar, equipo_escuchar.value, yelmos_advertir_total);
  actualizarField(final_buscar, equipo_buscar.value, yelmos_advertir_total);
  actualizarField(final_rastrear, equipo_rastrear.value, yelmos_advertir_total);

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

  if (armadura0_def.value > 0) {
    armadura_pecho_lista.push(armadura0_def.value);
    armadura_espalda_lista.push(armadura0_def.value);
    armadura_hombro_der_lista.push(armadura0_def.value);
    armadura_hombro_izq_lista.push(armadura0_def.value);
    armadura_brazo_der_lista.push(armadura0_def.value);
    armadura_brazo_izq_lista.push(armadura0_def.value);
    armadura_mano_der_lista.push(armadura0_def.value);
    armadura_mano_izq_lista.push(armadura0_def.value);
    armadura_pierna_der_lista.push(armadura0_def.value);
    armadura_pierna_izq_lista.push(armadura0_def.value);
    armadura_pie_der_lista.push(armadura0_def.value);
    armadura_pie_izq_lista.push(armadura0_def.value);
    armadura_cabeza_lista.push(armadura0_def.value);
  }

  var armadura_def;
  var armadura_clase;

  [
    armaduras_equipadas.Dura,
    armaduras_equipadas.Blanda[1],
    armaduras_equipadas.Blanda[2],
    yelmos_equipados.Duro,
    yelmos_equipados.Blando[1],
    yelmos_equipados.Blando[2],
  ].forEach(function (armadura_yelmo) {
    if (armadura_yelmo) {
      armadura_def = f("armadura" + armadura_yelmo.posicion + "_def");
      armadura_clase = f("armadura" + armadura_yelmo.posicion).value.split(
        " "
      )[0];

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

  armadura_cabeza.value = Math.max(
    0,
    totalArmadura(armadura_cabeza_lista) - negativo_armadura_cabeza.value
  );

  armadura_pecho.value = Math.max(
    0,
    totalArmadura(armadura_pecho_lista) - negativo_armadura_pecho.value
  );

  armadura_espalda.value = Math.max(
    0,
    totalArmadura(armadura_espalda_lista) - negativo_armadura_espalda.value
  );

  armadura_hombro_der.value = Math.max(
    0,
    totalArmadura(armadura_hombro_der_lista) -
    negativo_armadura_hombro_der.value
  );

  armadura_hombro_izq.value = Math.max(
    0,
    totalArmadura(armadura_hombro_izq_lista) -
    negativo_armadura_hombro_izq.value
  );

  armadura_brazo_der.value = Math.max(
    0,
    totalArmadura(armadura_brazo_der_lista) - negativo_armadura_brazo_der.value
  );

  armadura_brazo_izq.value = Math.max(
    0,
    totalArmadura(armadura_brazo_izq_lista) - negativo_armadura_brazo_izq.value
  );

  armadura_mano_der.value = Math.max(
    0,
    totalArmadura(armadura_mano_der_lista) - negativo_armadura_mano_der.value
  );

  armadura_mano_izq.value = Math.max(
    0,
    totalArmadura(armadura_mano_izq_lista) - negativo_armadura_mano_izq.value
  );

  armadura_pierna_der.value = Math.max(
    0,
    totalArmadura(armadura_pierna_der_lista) -
    negativo_armadura_pierna_der.value
  );

  armadura_pierna_izq.value = Math.max(
    0,
    totalArmadura(armadura_pierna_izq_lista) -
    negativo_armadura_pierna_izq.value
  );

  armadura_pie_der.value = Math.max(
    0,
    totalArmadura(armadura_pie_der_lista) - negativo_armadura_pie_der.value
  );

  armadura_pie_izq.value = Math.max(
    0,
    totalArmadura(armadura_pie_izq_lista) - negativo_armadura_pie_izq.value
  );
}

function totalArmadura(lista) {
  var total = 0;
  i = 1;
  while (i < lista.length) {
    total = n(total) + lista[i] / 2;
    i++;
  }
  var res = lista.length == 0 ? 0 : n(lista[0]) + floor(total / 10) * 10;
  return res;
}

function noCabeArmadura(posicion) {
  var armadura_clase = f("armadura" + posicion).value.split(" ")[0];
  var armadura_dureza = f("armadura" + posicion + "_dureza").value;

  return (
    (armadura_clase == "Yelmo" &&
      armadura_dureza == "Duro" &&
      yelmos_equipados.Duro) ||
    (armadura_clase == "Yelmo" &&
      armadura_dureza == "Blando" &&
      yelmos_equipados.Blando[1] &&
      yelmos_equipados.Blando[2]) ||
    (armadura_clase != "Yelmo" &&
      armadura_dureza == "Dura" &&
      armaduras_equipadas.Dura) ||
    (armadura_clase != "Yelmo" &&
      armadura_dureza == "Blanda" &&
      armaduras_equipadas.Blanda[1] &&
      armaduras_equipadas.Blanda[2])
  );
}

function manoOcupada(mano, posicion) {
  return (
    (armas_equipadas["D"] &&
      (mano == "D" || mano == "D+I") &&
      armas_equipadas["D"].posicion != posicion) ||
    (armas_equipadas["I"] &&
      (mano == "I" || mano == "D+I") &&
      armas_equipadas["I"].posicion != posicion) ||
    (armas_equipadas["D+I"] &&
      (mano == "I" || mano == "D" || mano == "D+I") &&
      armas_equipadas["D+I"].posicion != posicion)
  );
}

function v_nventaja_reg(event) {
  if (nventaja_reg.value == -1) {
    reg_base.value *= 2;
    actualizarField(reg_base, 0, event.value * 2);
  } else if (event.value == -1) {
    actualizarField(reg_base, nventaja_reg.value * 2, 0);
    reg_base.value /= 2;
  } else {
    actualizarField(reg_base, nventaja_reg.value * 2, event.value * 2);
  }
  actualizarField(pm_actuales, nventaja_reg.value * 2, event.value * 2);
  actualizarRegeneracionesSegunRegeneracionBase(reg_base.value);
}

function actualizarRegeneracionesSegunRegeneracionBase(reg_base_v) {
  switch (floor(reg_base_v)) {
    case 0:
      reg_max.value = 0;
      reg_normal.value = 0;
      break;
    case 1:
      reg_max.value = 2;
      reg_normal.value = 1;
      break;
    case 2:
      reg_max.value = 4;
      reg_normal.value = 2;
      break;
    case 3:
      reg_max.value = 6;
      reg_normal.value = 3;
      break;
    case 4:
      reg_max.value = 8;
      reg_normal.value = 4;
      break;
    case 5:
      reg_max.value = 10;
      reg_normal.value = 5;
      break;
    case 6:
      reg_max.value = 15;
      reg_normal.value = 6;
      break;
    case 7:
      reg_max.value = 20;
      reg_normal.value = 10;
      break;
    case 8:
      reg_max.value = 50;
      reg_normal.value = 20;
      break;
    case 9:
      reg_max.value = 100;
      reg_normal.value = 40;
      break;
    default:
      break;
  }
}

function regBasePorCON(con) {
  var v;
  if (con >= 1 && con <= 4) {
    v = 0;
  } else if (con >= 5 && con <= 14) {
    v = 1;
  } else if (con >= 15 && con <= 19) {
    v = 2;
  } else {
    v = 3;
  }

  return v;
}

function v_base_res(event) {
  actualizarField(final_res_fisica, base_res.value, event.value);
  actualizarField(final_res_enfermedades, base_res.value, event.value);
  actualizarField(final_res_venenos, base_res.value, event.value);
  actualizarField(final_res_frio, base_res.value, event.value);
  actualizarField(final_res_calor, base_res.value, event.value);
}

function v_nventaja_res(event) {
  var res = event.target.name.substr(13);
  var final_res = f("final_res_" + res);
  var nventaja_res = f("nventaja_res_" + res);
  if (nventaja_res.value == -1) {
    final_res.value *= 2;
    if (event.value != 0) {
      actualizarField(final_res, 0, event.value * 25);
    }
  } else if (event.value == -1) {
    if (nventaja_res.value != 0) {
      actualizarField(final_res, nventaja_res.value * 25, 0);
    }
    final_res.value /= 2;
  } else {
    actualizarField(final_res, nventaja_res.value * 25, event.value * 25);
  }
  actualizarField(pm_actuales, nventaja_res.value, event.value);
}

function v_pd_totales(event) {
  event.value = floor(event.value);

  if (event.value < 225) {
    event.value = 225;
  }

  if (
    isNaN(event.value) ||
    event.value < pd_actuales.value ||
    n(pd_ataque.value) +
    n(pd_parada.value) +
    n(pd_esquiva.value) +
    n(pd_llA.value) >
    event.value / 2
  ) {
    event.rc = false;
  } else {
    nivel.value = floor((event.value - 225) / 25);
    pm_totales.value = 6 + floor(nivel.value / 2);

    actualizarField(
      final_res_fisica,
      base_res.value,
      30 + floor(nivel.value / 2) * 5
    );
    actualizarField(
      final_res_venenos,
      base_res.value,
      30 + floor(nivel.value / 2) * 5
    );
    actualizarField(
      final_res_enfermedades,
      base_res.value,
      30 + floor(nivel.value / 2) * 5
    );
    actualizarField(
      final_res_frio,
      base_res.value,
      30 + floor(nivel.value / 2) * 5
    );
    actualizarField(
      final_res_calor,
      base_res.value,
      30 + floor(nivel.value / 2) * 5
    );
    base_res.value = 30 + floor(nivel.value / 2) * 5;

    if (nventaja_llA.value > 0) {
      actualizarField(
        final_llA,
        pventaja_llA.value,
        floor((2.5 * nventaja_llA.value * nivel.value) / 5) * 5
      );
      pventaja_llA.value =
        floor((2.5 * nventaja_llA.value * nivel.value) / 5) * 5;
    }

    if (nventaja_esquiva.value > 0) {
      actualizarField(
        final_esquiva,
        pventaja_esquiva.value,
        Math.min(50, floor((nivel.value * 5) / 2 / 5) * 5)
      );
      pventaja_esquiva.value = Math.min(
        50,
        floor((nivel.value * 5) / 2 / 5) * 5
      );
    }

    if (nventaja_ataque.value > 0) {
      if (final_ataque_d != "-") {
        actualizarField(
          final_ataque_d,
          pventaja_ataque.value,
          Math.min(50, floor((nivel.value * 5) / 2 / 5) * 5)
        );
      }
      if (final_ataque_i != "-") {
        actualizarField(
          final_ataque_i,
          pventaja_ataque.value,
          Math.min(50, floor((nivel.value * 5) / 2 / 5) * 5)
        );
      }
      pventaja_ataque.value = Math.min(
        50,
        floor((nivel.value * 5) / 2 / 5) * 5
      );
    }

    if (nventaja_parada.value > 0) {
      if (final_parada_d != "-") {
        actualizarField(
          final_parada_d,
          pventaja_parada.value,
          Math.min(50, floor((nivel.value * 5) / 2 / 5) * 5)
        );
      }
      if (final_parada_i != "-") {
        actualizarField(
          final_parada_i,
          pventaja_parada.value,
          Math.min(50, floor((nivel.value * 5) / 2 / 5) * 5)
        );
      }
      pventaja_parada.value = Math.min(
        50,
        floor((nivel.value * 5) / 2 / 5) * 5
      );
    }

    if (nventaja_vida.value > 0) {
      actualizarField(
        actuales_vida,
        pventaja_vida.value,
        nventaja_vida.value * nivel.value
      );
      actualizarField(
        totales_vida,
        pventaja_vida.value,
        nventaja_vida.value * nivel.value
      );
      pventaja_vida.value = nventaja_vida.value * nivel.value;
    }

    for (var rama in lista_habilidades) {
      var pventaja_rama = 0;
      var nventaja_rama = f("nventaja_" + rama);
      if (nventaja_rama.value > 0) {
        pventaja_rama =
          Math.floor((2.5 * nventaja_rama.value * nivel.value) / 5) * 5;
      }
      lista_habilidades[rama].forEach(function (hab) {
        var nventaja_hab = f("nventaja_" + hab.habilidad);
        if (nventaja_hab.value > 0 || nventaja_rama.value > 0) {
          var pventaja_hab = f("pventaja_" + hab.habilidad);
          var pventaja_hab_old_v = pventaja_hab.value;
          var final_hab = f("final_" + hab.habilidad);
          pventaja_hab.value =
            n(5 * nivel.value * nventaja_hab.value) + n(pventaja_rama);
          final_hab.value =
            final_hab.value - n(pventaja_hab_old_v) + n(pventaja_hab.value);
        }
      });
    }
  }
}

function resetArma(posicion, arma_nueva, calidad) {
  var arma = arma_nueva ? arma_nueva : f("arma" + posicion).value;
  var arma_par = f("arma" + posicion + "_par");
  var arma_atq = f("arma" + posicion + "_atq");
  var arma_esq = f("arma" + posicion + "_esq");
  var arma_iniciativa = f("arma" + posicion + "_iniciativa");
  var arma_clase = f("arma" + posicion + "_clase");
  var arma_df = f("arma" + posicion + "_df");
  var arma_db = f("arma" + posicion + "_db");
  var arma_fue_bono = f("arma" + posicion + "_fue_bono");
  var arma_freq = f("arma" + posicion + "_freq");
  var arma_tam = f("arma" + posicion + "_tam");
  var arma_especial = f("arma" + posicion + "_especial");
  var arma_check = f("arma" + posicion + "_check");
  var arma_calidad = calidad ?
    calidad :
    f("arma" + posicion + "_calidad").value;

  if (arma == "-") {
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
      if (l_arma.arma == arma) {
        arma_atq.value = n(l_arma.arma_atq) + n(5 * arma_calidad);
        arma_par.value = n(l_arma.arma_par) + n(5 * arma_calidad);
        arma_esq.value = l_arma.arma_esq;
        arma_db.value = n(l_arma.arma_db) + n(10 * arma_calidad);
        arma_iniciativa.value = n(l_arma.arma_iniciativa) + n(5 * arma_calidad);
        arma_freq.value = l_arma.arma_freq;
        arma_clase.value = l_arma.arma_clase;
        arma_tam.value = l_arma.arma_tam;
        arma_especial.value = l_arma.arma_especial;
        arma_df.value = Math.max(0, n(arma_db.value) + n(arma_fue_bono.value));

        return true;
      }
    });
  }
}

function resetAtributosArmadura(posicion, armadura_nueva, calidad_nueva) {
  var armadura = armadura_nueva ?
    armadura_nueva :
    f("armadura" + posicion).value;
  var armadura_def = f("armadura" + posicion + "_def");
  var armadura_reqarm = f("armadura" + posicion + "_reqarm");
  var armadura_advertir = f("armadura" + posicion + "_advertir");
  var armadura_mov = f("armadura" + posicion + "_mov");
  var armadura_dureza = f("armadura" + posicion + "_dureza");
  var armadura_calidad = calidad_nueva ?
    calidad_nueva :
    f("armadura" + posicion + "_calidad").value;

  if (armadura == "-") {
    armadura_def.value = "-";
    armadura_reqarm.value = "-";
    armadura_advertir.value = "-";
    armadura_mov.value = "-";
    armadura_dureza.value = "-";
    armadura_calidad = "-";
  } else if (armadura == "Cuerpo") {
    armadura_def.value = 10 * armadura_calidad;
  } else {
    lista_armaduras.some(function (l_armadura) {
      if (l_armadura.armadura == armadura) {
        armadura_def.value = n(l_armadura.def) + n(10 * armadura_calidad);
        armadura_reqarm.value = Math.max(
          0,
          l_armadura.reqarm - 5 * armadura_calidad
        );
        armadura_advertir.value =
          l_armadura.advertir == "-" ?
          "-" :
          Math.min(0, n(l_armadura.advertir) + n(5 * armadura_calidad));
        armadura_mov.value =
          l_armadura.mov == "-" ?
          "-" :
          Math.min(0, n(l_armadura.mov) + n(5 * armadura_calidad));
        armadura_dureza.value = l_armadura.dureza;

        return true;
      }
    });
  }
}

function aplicarNegativosArma(mano) {
  var mano_v = mano ? mano : "D+I";
  var posicion =
    mano && armas_equipadas[mano] ? armas_equipadas[mano].posicion : 0;
  var arma = f("arma" + posicion);
  var arma_par = f("arma" + posicion + "_par");
  var arma_atq = f("arma" + posicion + "_atq");
  var arma_freq = f("arma" + posicion + "_freq");
  var arma_tam = f("arma" + posicion + "_tam");
  var arma_clase = f("arma" + posicion + "_clase");

  if (reset_arma) {
    resetArma(posicion);
  }

  if (s(arma_freq.value).indexOf("/") > -1) {
    if (mano_v == "D" || mano_v == "I") {
      arma_freq.value = s(arma_freq.value).substr(
        s(arma_freq.value).indexOf("/") + 2
      );
    } else if (mano_v == "D+I") {
      arma_freq.value = s(arma_freq.value).substr(
        0,
        s(arma_freq.value).indexOf(" ")
      );
    }
  }

  // Negativos por no tener fuerza requerida
  if (arma_freq.value != "-") {
    var fue_req_diff = arma_freq.value - fue_actual.value;
    if (fue_req_diff > 0) {
      arma_atq.value -= 5 * fue_req_diff;
      arma_par.value -= 5 * fue_req_diff;
    }
  }

  // Negativos por usarla en la mano_v no dominante
  if (arma_clase.value != "Escudo") {
    // Negativos por no saber usar el arma
    var similar = false;
    var encontrado = false;

    tablas_arma_aprendidas.forEach(function (tabla) {
      if (
        arma.value == tabla.arma ||
        (tabla.clase.indexOf(arma_clase.value) > -1 &&
          tabla.arma == tabla.arma.toUpperCase())
      ) {
        encontrado = true;
      } else if (tabla.clase.indexOf(arma_clase.value) > -1) {
        similar = true;
      }
    });

    if (!encontrado) {
      if (similar) {
        arma_atq.value -= 20;
        arma_par.value -= 20;
      } else {
        arma_atq.value -= 60;
        arma_par.value -= 60;
      }
    }

    if (
      mano_v != "D+I" &&
      mano_dominante_v != "Ambas" &&
      mano_v != mano_dominante_v.charAt(0)
    ) {
      arma_atq.value -= 30;
      arma_par.value -= 30;
    }

    // Negativos según el tamaño si no se usa con las dos manos
    if (
      (mano_v === "D" && armas_equipadas["I"]) ||
      (mano_v === "I" && armas_equipadas["D"]) ||
      (armas_equipadas["D"] && armas_equipadas["D"].clase == "Escudo") ||
      (armas_equipadas["I"] && armas_equipadas["I"].clase == "Escudo")
    ) {
      switch (arma_tam.value) {
        case "L":
          arma_atq.value += -15;
          break;
        case "M":
          arma_atq.value += -10;
          break;
        case "S":
          arma_atq.value += -5;
          break;
        default:
          break;
      }
    } else if (
      (mano_v === "D" && !armas_equipadas["I"]) ||
      (mano_v === "I" && !armas_equipadas["D"])
    ) {
      switch (arma_tam.value) {
        case "L":
          arma_atq.value += -15;
          arma_par.value += -15;
          break;
        case "M":
          arma_atq.value += -10;
          arma_par.value += -10;
          break;
        case "S":
          arma_atq.value += -5;
          arma_par.value += -5;
          break;
        default:
          break;
      }
    }
  }
  if (mano_v == "D") {
    equipo_parada_d.value = arma_par.value;
    equipo_ataque_d.value = arma_atq.value;
    final_ataque_d.value =
      n(pd_ataque.value) +
      n(des_bono.value) +
      n(pventaja_ataque.value) +
      n(equipo_ataque_d.value) +
      n(esp_ataque_d.value);
    final_parada_d.value =
      n(pd_parada.value) +
      n(des_bono.value) +
      n(pventaja_parada.value) +
      n(equipo_parada_d.value) +
      n(esp_parada_d.value);
  } else if (mano_v == "I") {
    equipo_parada_i.value = arma_par.value;
    equipo_ataque_i.value = arma_atq.value;
    final_ataque_i.value =
      n(pd_ataque.value) +
      n(des_bono.value) +
      n(pventaja_ataque.value) +
      n(equipo_ataque_i.value) +
      n(esp_ataque_i.value);
    final_parada_i.value =
      n(pd_parada.value) +
      n(des_bono.value) +
      n(pventaja_parada.value) +
      n(equipo_parada_i.value) +
      n(esp_parada_i.value);
  } else {
    equipo_parada_i.value = arma_par.value;
    equipo_ataque_i.value = arma_atq.value;
    equipo_parada_d.value = arma_par.value;
    equipo_ataque_d.value = arma_atq.value;
    final_ataque_i.value =
      n(pd_ataque.value) +
      n(des_bono.value) +
      n(pventaja_ataque.value) +
      n(equipo_ataque_i.value) +
      n(esp_ataque_i.value);
    final_ataque_d.value =
      n(pd_ataque.value) +
      n(des_bono.value) +
      n(pventaja_ataque.value) +
      n(equipo_ataque_d.value) +
      n(esp_ataque_d.value);
    final_parada_i.value =
      n(pd_parada.value) +
      n(des_bono.value) +
      n(pventaja_parada.value) +
      n(equipo_parada_i.value) +
      n(esp_parada_i.value);
    final_parada_d.value =
      n(pd_parada.value) +
      n(des_bono.value) +
      n(pventaja_parada.value) +
      n(equipo_parada_d.value) +
      n(esp_parada_d.value);
  }
}

function aplicarNegativosArmas() {
  var combate_desarmado = true;
  for (var mano in armas_equipadas) {
    var arma = armas_equipadas[mano];
    if (arma) {
      if (combate_desarmado) {
        combate_desarmado = false;
      }
      aplicarNegativosArma(mano);
    }
  }

  if (combate_desarmado) {
    aplicarNegativosArma();
  }
}

function countArmaduras() {
  var num_armaduras = 0;
  [
    armaduras_equipadas.Dura,
    armaduras_equipadas.Blanda[1],
    armaduras_equipadas.Blanda[2],
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
    yelmos_equipados.Blando[2],
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
    yelmos_equipados.Blando[2],
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
    armaduras_equipadas.Blanda[2],
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
  var bono = 0;
  var encontrado;

  for (var nombre_rama in lista_habilidades) {
    var rama = lista_habilidades[nombre_rama];
    rama.some(function (hab) {
      if (!encontrado) {
        if (hab.habilidad == habilidad) {
          bono = f(hab.atributo + "_bono").value;
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
    n(bono) +
    n(pventaja_habilidad.value) +
    n(equipo_habilidad.value);
}

function desequiparArmaduraYelmo(posicion) {
  var encontrado = false;
  if (
    armaduras_equipadas.Dura &&
    armaduras_equipadas.Dura.posicion == posicion
  ) {
    armaduras_equipadas.Dura = null;
    encontrado = true;
  }
  if (
    !encontrado &&
    armaduras_equipadas.Blanda[1] &&
    armaduras_equipadas.Blanda[1].posicion == posicion
  ) {
    armaduras_equipadas.Blanda[1] = null;
    encontrado = true;
  }
  if (
    !encontrado &&
    armaduras_equipadas.Blanda[2] &&
    armaduras_equipadas.Blanda[2].posicion == posicion
  ) {
    armaduras_equipadas.Blanda[2] = null;
    encontrado = true;
  }
  if (
    !encontrado &&
    yelmos_equipados.Duro &&
    yelmos_equipados.Duro.posicion == posicion
  ) {
    yelmos_equipados.Duro = null;
    encontrado = true;
  }
  if (
    !encontrado &&
    yelmos_equipados.Blando[1] &&
    yelmos_equipados.Blando[1].posicion == posicion
  ) {
    yelmos_equipados.Blando[1] = null;
    encontrado = true;
  }
  if (
    !encontrado &&
    yelmos_equipados.Blando[2] &&
    yelmos_equipados.Blando[2].posicion == posicion
  ) {
    yelmos_equipados.Blando[2] = null;
  }
}

function equiparArmaduraYelmo(armadura_yelmo) {
  if (armadura_yelmo.clase == "Yelmo") {
    if (armadura_yelmo.dureza == "Blando") {
      yelmos_equipados.Blando[
        yelmos_equipados.Blando[1] ? 2 : 1
      ] = armadura_yelmo;
    } else {
      yelmos_equipados.Duro = armadura_yelmo;
    }
  } else {
    if (armadura_yelmo.dureza == "Blanda") {
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

function actualizarField(field, old_value, new_value) {
  field.value = n(field.value) + n(new_value) - n(old_value);
}



function actualizarFinal(event) {
  event.value = floor(event.value);

  if (isNaN(event.value)) {
    event.rc = false;
  } else {
    actualizarField(
      f("final" + event.target.name.substr(event.target.name.indexOf("_"))),
      f(event.target.name).value,
      event.value
    );
  }
}

//

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

function log(key, value) {
  if (value == undefined) {
    console.println(key);
  } else {
    console.println(key + ": " + value);
  }
}