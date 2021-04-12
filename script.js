var i, j, k, posicion;

var lista_habilidades = {
  sensoriales: [
    {
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
  corporales: [
    {
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
  creativas: [
    {
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
  sociales: [
    {
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
  culturales: [
    {
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
  profesiones: [
    {
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

var lista_armas = [
  {
    arma: "Lazo",
    arma_db: 5,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
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
    arma_freq: 4,
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
    arma: "Jarrón",
    arma_db: 15,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
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
    arma_freq: 6,
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Antorcha",
    arma_db: 20,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
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
    arma_freq: 8,
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
    arma_freq: 12,
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
    arma_freq: 6,
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "Precisa",
  },
  {
    arma: "Silla",
    arma_db: 25,
    arma_iniciativa: 20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 10,
    arma_clase: "Mandoble",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Barra metálica",
    arma_db: 25,
    arma_iniciativa: 5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 10,
    arma_clase: "Maza",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Cestus",
    arma_freq: 6,
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "Precisa",
    arma_db: 25,
    arma_iniciativa: 1,
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
    arma_freq: 8,
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
    arma_freq: 10,
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
    arma_freq: 8,
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
    arma_freq: 8,
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
    arma_freq: 8,
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
    arma_freq: 6,
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "Precisa",
  },
  {
    arma: "Azada",
    arma_db: 30,
    arma_iniciativa: 20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
    arma_clase: "Hacha",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Hoz",
    arma_db: 35,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
    arma_clase: "Arma corta",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Arpón",
    arma_db: 35,
    arma_iniciativa: 5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 10,
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
    arma_freq: 6,
    arma_clase: "Espada",
    arma_especial: "Precisa",
    arma_tam: "S",
  },
  {
    arma: "Guadaña",
    arma_db: 35,
    arma_iniciativa: 0,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 10,
    arma_clase: "Asta",
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
    arma_freq: 8,
    arma_clase: "Asta",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Látigo",
    arma_db: 35,
    arma_iniciativa: 20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
    arma_clase: "Cuerda",
    arma_tam: "M",
    arma_especial: "Presa 16",
  },
  {
    arma: "Tridente",
    arma_db: 40,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 12,
    arma_clase: "Asta",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Hacha de leñador",
    arma_db: 40,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 10,
    arma_clase: "Hacha",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Pico",
    arma_db: 40,
    arma_iniciativa: 20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 10,
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
    arma_freq: 8,
    arma_clase: "Asta",
  },
  {
    arma: "Estoque",
    arma_db: 40,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
    arma_clase: "Espada",
    arma_especial: "Precisa",
  },
  {
    arma: "Espada corta",
    arma_db: 40,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
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
    arma_freq: 12,
    arma_clase: "Maza",
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
    arma_freq: 12,
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
    arma_freq: 10,
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
    arma_freq: 12,
    arma_clase: "Espada",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Martillo de guerra",
    arma_db: 50,
    arma_iniciativa: 5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 12,
    arma_clase: "Asta",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Cimitarra",
    arma_db: 50,
    arma_iniciativa: 5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 10,
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
    arma_freq: 12,
    arma_clase: "Espada",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Espada ancha",
    arma_db: 55,
    arma_iniciativa: 5,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 10,
    arma_clase: "Espada",
    arma_tam: "M",
    arma_especial: "-",
  },
  {
    arma: "Maza pesada de combate",
    arma_db: 60,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 12,
    arma_clase: "Maza",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Alabarda",
    arma_db: 60,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 12,
    arma_clase: "Asta",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Espada bastarda",
    arma_db: 70,
    arma_iniciativa: 30,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 14,
    arma_clase: "Espada",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Hacha de guerra",
    arma_db: 70,
    arma_iniciativa: 30,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 14,
    arma_clase: "Hacha",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Gran martillo de guerra",
    arma_db: 70,
    arma_iniciativa: 35,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 14,
    arma_clase: "Maza",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Lanza de caballería",
    arma_db: 80,
    arma_iniciativa: 30,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 16,
    arma_clase: "Asta",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Mangual",
    arma_db: 80,
    arma_iniciativa: 50,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 16,
    arma_clase: "Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Mandoble",
    arma_db: 90,
    arma_iniciativa: 60,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 16,
    arma_clase: "Mandoble",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Hacha a dos manos",
    arma_db: 100,
    arma_iniciativa: 70,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 18,
    arma_clase: "Hacha",
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
    arma_freq: 6,
    arma_clase: "A. de proyectil",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Ballesta Pesada",
    arma_db: 60,
    arma_iniciativa: 20,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 20,
    arma_clase: "A. de proyectil",
    arma_tam: "L",
    arma_especial: "Recarga",
  },
  {
    arma: "Arco corto",
    arma_db: 30,
    arma_iniciativa: 10,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 8,
    arma_clase: "A. de proyectil",
    arma_tam: "S",
    arma_especial: "-",
  },
  {
    arma: "Arco largo",
    arma_db: 40,
    arma_iniciativa: 30,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 0,
    arma_freq: 7,
    arma_clase: "A. de proyectil",
    arma_tam: "L",
    arma_especial: "-",
  },
  {
    arma: "Rodela",
    arma_db: 15,
    arma_iniciativa: 15,
    arma_atq: 0,
    arma_par: 10,
    arma_esq: 5,
    arma_freq: 10,
    arma_clase: "Escudo",
    arma_tam: "-",
  },
  {
    arma: "Escudo",
    arma_db: 20,
    arma_iniciativa: 25,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 10,
    arma_freq: 10,
    arma_tam: "-",
    arma_clase: "Escudo",
  },
  {
    arma: "Escudo corporal",
    arma_db: 25,
    arma_iniciativa: 40,
    arma_atq: 0,
    arma_par: 0,
    arma_esq: 15,
    arma_freq: 10,
    arma_tam: "-",
    arma_clase: "Escudo",
  },
];

var lista_armaduras = [
  {
    armadura: "Peto de cuero endurecido",
    def: 20,
    reqarm: 20,
    advertir: "-",
    mov: -10,
    dureza: "Duro",
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
    dureza: "Blando",
    clase: "Armadura",
  },
  {
    armadura: "Camisola de cuero",
    def: 10,
    reqarm: 0,
    advertir: "-",
    mov: 0,
    dureza: "Blando",
    clase: "Armadura",
  },
  {
    armadura: "Camisola de piel",
    def: 20,
    reqarm: 10,
    advertir: "-",
    mov: -10,
    dureza: "Blando",
    clase: "Armadura",
  },
  {
    armadura: "Camisola de anillas",
    def: 40,
    reqarm: 60,
    advertir: "-",
    mov: -20,
    dureza: "Blando",
    clase: "Armadura",
  },
  {
    armadura: "Completa gabardina",
    def: 10,
    reqarm: 0,
    advertir: "-",
    mov: 0,
    dureza: "Blando",
    clase: "Armadura",
  },
  {
    armadura: "Completa de cuero",
    def: 20,
    reqarm: 10,
    advertir: "-",
    mov: -10,
    dureza: "Blando",
    clase: "Armadura",
  },
  {
    armadura: "Completa de mallas",
    def: 30,
    reqarm: 30,
    advertir: "-",
    mov: -10,
    dureza: "Blando",
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
    armadura: "Completa de campaña pesada",
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
    dureza: "Dura",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo frentón",
    def: 30,
    reqarm: 0,
    advertir: 0,
    mov: "-",
    dureza: "Dura",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo coronilla",
    def: 20,
    reqarm: 0,
    advertir: 0,
    mov: "-",
    dureza: "Dura",
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
    dureza: "Dura",
    clase: "Yelmo",
  },
  {
    armadura: "Yelmo completo cerrado",
    def: 50,
    reqarm: 10,
    advertir: -30,
    mov: "-",
    dureza: "Dura",
    clase: "Yelmo",
  },
];

var lista_tabla_armas_estilos = [
  {
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
  {
    tabla: "E. Ambidiestria",
    clase: "Otro",
  },
  {
    tabla: "E. Área",
    clase: "Otro",
  },
  {
    tabla: "E. Precisión",
    clase: "Otro",
  },
  {
    tabla: "E. Desarme",
    clase: "Otro",
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
  8, // 13-15
  9, // 16
  10, // 17
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
  Dura: null,
  Blanda: {
    1: null,
    2: null,
  },
};

for (i = 1; i <= 6; i++) {
  var armadura_checked = this.getField("armadura" + i + "_check").value;
  if (armadura_checked === "Eq.") {
    var armadura_dureza = this.getField("armadura" + i + "_dureza").value;
    var armadura_clase = this.getField("armadura" + i).value.split(" ")[0];

    if (armadura_checked === "Eq.") {
      var armadura_t = {
        posicion: i,
        armadura: this.getField("armadura" + i).value,
        def: this.getField("armadura" + i + "_def").value,
        reqarm: this.getField("armadura" + i + "_reqarm").value,
        advertir: this.getField("armadura" + i + "_advertir").value,
        mov: this.getField("armadura" + i + "_mov").value,
        dureza: armadura_dureza,
        clase: armadura_clase,
        calidad: this.getField("armadura" + i + "_calidad").value,
      };
      if (armadura_dureza.value === "Dura") {
        if (armadura_clase === "Yelmo") {
          yelmos_equipados.Dura = armadura_t;
        } else {
          armaduras_equipadas.Dura = armadura_t;
        }
      } else {
        if (armadura_clase === "Yelmo") {
          yelmos_equipados.Blanda[
            yelmos_equipados.Blanda[1] ? 2 : 1
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

var lista_armas_equipadas = {
  D: null,
  I: null,
  "D+I": null,
};

for (i = 1; i <= 6; i++) {
  var arma_checked = this.getField("arma" + i + "_check").value;
  if (arma_checked === "D" || arma_checked === "I" || arma_checked === "D+I") {
    lista_armas_equipadas[arma_checked] = {
      posicion: i,
      arma: this.getField("arma" + i).value,
      atq: Number(this.getField("arma" + i + "_atq").value),
      par: Number(this.getField("arma" + i + "_par").value),
      esq: Number(this.getField("arma" + i + "_esq").value),
      db: Number(this.getField("arma" + i + "_db").value),
      iniciativa: Number(this.getField("arma" + i + "_iniciativa").value),
      freq: Number(this.getField("arma" + i + "_freq").value),
      clase: this.getField("arma" + i + "_clase").value,
      tam: this.getField("arma" + i + "_tam").value,
      especial: this.getField("arma" + i + "_especial").value,
      calidad: Number(this.getField("arma" + i + "_calidad").value),
    };

    if (
      lista_armas_equipadas["D+I"] ||
      (lista_armas_equipadas["I"] && lista_armas_equipadas["D"])
    ) {
      // break;
      i = 7;
    }
  }
}

var tablas_armas_actual = [];

for (i = 1; i <= 7; i++) {
  var tabla_arma = this.getField("tabla_arma" + i);
  var tabla_arma_clase = this.getField("tabla_arma" + i + "_clase");
  var tabla_arma_pd = this.getField("tabla_arma" + i + "_pd");

  if (tabla_arma.value === "-") {
    i = 8;
  } else {
    tablas_armas_actual.push({
      arma: tabla_arma.value,
      arma_clase: tabla_arma_clase.value,
      arma_pd: tabla_arma_pd.value,
    });
  }
}

var puntos_base = this.getField("puntos_base");
var nombre = this.getField("nombre");
var raza = this.getField("raza");
var nivel = this.getField("nivel");

// Experiencia

var exp_actuales = this.getField("exp_actuales");
var exp_totales = this.getField("exp_totales");

// Puntos de ventaja

var pventaja_restantes = this.getField("pventaja_restantes");
var pventaja_totales = this.getField("pventaja_totales");

// Puntos de desarrollo (PD)

var pd_restantes = this.getField("pd_restantes");
var pd_totales = this.getField("pd_totales");

// Mano dominante

var mano_dominante = this.getField("mano_dominante");
var ambidiestria;

// Atributos

var agi_puntos = this.getField("agi_puntos");
var agi_base = this.getField("agi_base");
var agi_actual = this.getField("agi_actual");
var agi_bono = this.getField("agi_bono");

var con_puntos = this.getField("con_puntos");
var con_base = this.getField("con_base");
var con_actual = this.getField("con_actual");
var con_bono = this.getField("con_bono");

var des_puntos = this.getField("des_puntos");
var des_base = this.getField("des_base");
var des_actual = this.getField("des_actual");
var des_bono = this.getField("des_bono");

var fue_puntos = this.getField("fue_puntos");
var fue_base = this.getField("fue_base");
var fue_actual = this.getField("fue_actual");
var fue_bono = this.getField("fue_bono");

var int_puntos = this.getField("int_puntos");
var int_base = this.getField("int_base");
var int_actual = this.getField("int_actual");
var int_bono = this.getField("int_bono");

var per_puntos = this.getField("per_puntos");
var per_base = this.getField("per_base");
var per_actual = this.getField("per_actual");
var per_bono = this.getField("per_bono");

// Carga

var carga_normal = this.getField("carga_normal");
var carga_max = this.getField("carga_max");

// Movimiento

var mov_base = this.getField("mov_base");
var mov_restr = this.getField("mov_restr");
var mov_max = this.getField("mov_max");

// Regeneración

var nventaja_reg = this.getField("nventaja_reg");
var reg_normal = this.getField("reg_normal");
var reg_max = this.getField("reg_max");

// Resistencias

var base_res = this.getField("base_res");

var nventaja_res_fisica = this.getField("nventaja_res_fisica");
var nventaja_res_enfermedades = this.getField("nventaja_res_enfermedades");
var nventaja_res_venenos = this.getField("nventaja_res_venenos");
var nventaja_res_frio = this.getField("nventaja_res_frio");
var nventaja_res_calor = this.getField("nventaja_res_calor");

var final_res_fisica = this.getField("final_res_fisica");
var final_res_enfermedades = this.getField("final_res_enfermedades");
var final_res_venenos = this.getField("final_res_venenos");
var final_res_frio = this.getField("final_res_frio");
var final_res_calor = this.getField("final_res_calor");

var esp_res_fisica = this.getField("esp_res_fisica");
var esp_res_enfermedades = this.getField("esp_res_enfermedades");
var esp_res_venenos = this.getField("esp_res_venenos");
var esp_res_frio = this.getField("esp_res_frio");
var esp_res_calor = this.getField("esp_res_calor");

// Vida

var esp_vida = this.getField("esp_vida");
var base_vida = this.getField("base_vida");
var pd_vida = this.getField("pd_vida");
var pd_base_vida = this.getField("pd_base_vida");
var nventaja_vida = this.getField("nventaja_vida");
var pventaja_vida = this.getField("pventaja_vida");
var totales_vida = this.getField("totales_vida");
var actuales_vida = this.getField("actuales_vida");
var op_vida_resta = this.getField("op_vida_resta");
var op_vida_suma = this.getField("op_vida_suma");

// Iniciativa

var base_iniciativa = this.getField("base_iniciativa");
var arma_iniciativa_total = this.getField("arma_iniciativa_total");
var armadura_iniciativa_total = this.getField("armadura_iniciativa_total");
var nventaja_iniciativa = this.getField("nventaja_iniciativa");
var pventaja_iniciativa = this.getField("pventaja_iniciativa");
var esp_iniciativa = this.getField("esp_iniciativa");
var final_iniciativa = this.getField("final_iniciativa");

// Llevar armadura

var pd_llA = this.getField("pd_llA");
var nventaja_llA = this.getField("nventaja_llA");
var pventaja_llA = this.getField("pventaja_llA");
var esp_llA = this.getField("esp_llA");
var final_llA = this.getField("final_llA");

// Esquiva

var pd_esquiva = this.getField("pd_esquiva");
var nventaja_esquiva = this.getField("nventaja_esquiva");
var pventaja_esquiva = this.getField("pventaja_esquiva");
var equipo_esquiva = this.getField("equipo_esquiva");
var final_esquiva = this.getField("final_esquiva");
var esp_esquiva = this.getField("esp_esquiva");

// Parada

var pd_parada = this.getField("pd_parada");
var nventaja_parada = this.getField("nventaja_parada");
var pventaja_parada = this.getField("pventaja_parada");
var equipo_parada_i = this.getField("equipo_parada_i");
var final_parada_i = this.getField("final_parada_i");
var equipo_parada_d = this.getField("equipo_parada_d");
var final_parada_d = this.getField("final_parada_d");
var esp_parada_d = this.getField("esp_parada_d");
var esp_parada_i = this.getField("esp_parada_i");

// Ataque

var pd_ataque = this.getField("pd_ataque");
var nventaja_ataque = this.getField("nventaja_ataque");
var pventaja_ataque = this.getField("pventaja_ataque");
var equipo_ataque_i = this.getField("equipo_ataque_i");
var final_ataque_i = this.getField("final_ataque_i");
var equipo_ataque_d = this.getField("equipo_ataque_d");
var final_ataque_d = this.getField("final_ataque_d");
var esp_ataque_d = this.getField("esp_ataque_d");
var esp_ataque_i = this.getField("esp_ataque_i");

// Armadura

var armadura_cabeza = this.getField("armadura_cabeza");
var armadura_espalda = this.getField("armadura_espalda");
var armadura_hombro_der = this.getField("armadura_hombro_der");
var armadura_hombro_izq = this.getField("armadura_hombro_izq");
var armadura_pecho = this.getField("armadura_pecho");
var armadura_brazo_der = this.getField("armadura_brazo_der");
var armadura_brazo_izq = this.getField("armadura_brazo_izq");
var armadura_mano_der = this.getField("armadura_mano_der");
var armadura_mano_izq = this.getField("armadura_mano_izq");
var armadura_pierna_der = this.getField("armadura_pierna_der");
var armadura_pierna_izq = this.getField("armadura_pierna_izq");
var armadura_pie_der = this.getField("armadura_pie_der");
var armadura_pie_izq = this.getField("armadura_pie_izq");

var negativo_armadura_cabeza = this.getField("negativo_armadura_cabeza");
var negativo_armadura_espalda = this.getField("negativo_armadura_espalda");
var negativo_armadura_hombro_der = this.getField(
  "negativo_armadura_hombro_der"
);
var negativo_armadura_hombro_izq = this.getField(
  "negativo_armadura_hombro_izq"
);
var negativo_armadura_pecho = this.getField("negativo_armadura_pecho");
var negativo_armadura_brazo_der = this.getField("negativo_armadura_brazo_der");
var negativo_armadura_brazo_izq = this.getField("negativo_armadura_brazo_izq");
var negativo_armadura_mano_der = this.getField("negativo_armadura_mano_der");
var negativo_armadura_mano_izq = this.getField("negativo_armadura_mano_izq");
var negativo_armadura_pierna_der = this.getField(
  "negativo_armadura_pierna_der"
);
var negativo_armadura_pierna_izq = this.getField(
  "negativo_armadura_pierna_izq"
);
var negativo_armadura_pie_der = this.getField("negativo_armadura_pie_der");
var negativo_armadura_pie_izq = this.getField("negativo_armadura_pie_izq");

// Desarmado

var arma0_check = this.getField("arma0_check");
var arma0_esq = this.getField("arma0_esq");
var arma0_atq = this.getField("arma0_atq");
var arma0_par = this.getField("arma0_par");
var arma0_db = this.getField("arma0_db");
var arma0_fue_bono = this.getField("arma0_fue_bono");
var arma0_df = this.getField("arma0_df");
var arma0_iniciativa = this.getField("arma0_iniciativa");
var arma0_freq = this.getField("arma0_freq");
var arma0_clase = this.getField("arma0_clase");
var arma0_tam = this.getField("arma0_tam");
var arma0_especial = this.getField("arma0_especial");
var arma0_calidad = this.getField("arma0_calidad");

// Ataque adicional

var atq_adicional = this.getField("atq_adicional");

// Dinero

var oro = this.getField("oro");
var op_oro_resta = this.getField("op_oro_resta");
var op_oro_suma = this.getField("op_oro_suma");

var plata = this.getField("plata");
var op_plata_resta = this.getField("op_plata_resta");
var op_plata_suma = this.getField("op_plata_suma");

var bronce = this.getField("bronce");
var op_bronce_resta = this.getField("op_bronce_resta");
var op_bronce_suma = this.getField("op_bronce_suma");

// Diff

var diff_x = this.getField("diff_x");
var a1_x = this.getField("a1_x");
var a2_x = this.getField("a2_x");

// Equipo

var equipo_acrobacias = this.getField("equipo_acrobacias");
var equipo_atletismo = this.getField("equipo_atletismo");
var equipo_nadar = this.getField("equipo_nadar");
var equipo_trepar = this.getField("equipo_trepar");
var equipo_ocultarse = this.getField("equipo_ocultarse");
var equipo_sigilo = this.getField("equipo_sigilo");

var equipo_ver = this.getField("equipo_ver");
var equipo_escuchar = this.getField("equipo_escuchar");
var equipo_buscar = this.getField("equipo_buscar");
var equipo_rastrear = this.getField("equipo_rastrear");

var armadura_cabeza_total,
  armadura_espalda_total,
  armadura_hombro_der_total,
  armadura_hombro_izq_total,
  armadura_pecho_total,
  armadura_brazo_der_total,
  armadura_brazo_izq_total,
  armadura_mano_der_total,
  armadura_mano_izq_total,
  armadura_pierna_der_total,
  armadura_pierna_izq_total,
  armadura_pie_der_total,
  armadura_pie_izq_total;

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
  var posicion = Number(event.target.name.substr(8, 1));
  var armadura_clase = this.getField("armadura" + posicion).value.split(" ")[0];
  var armadura_dureza = this.getField("armadura" + posicion + "_dureza").value;
  if (event.value === "Eq.") {
    if (
      (armadura_clase === "Yelmo" &&
        armadura_dureza === "Dura" &&
        yelmos_equipados.Dura) ||
      (armadura_clase === "Yelmo" &&
        armadura_dureza === "Blanda" &&
        yelmos_equipados.Blanda[1] &&
        yelmos_equipados.Blanda[2]) ||
      (armadura_clase !== "Yelmo" &&
        armadura_dureza === "Dura" &&
        armaduras_equipadas.Dura) ||
      (armadura_clase !== "Yelmo" &&
        armadura_dureza === "Blanda" &&
        armaduras_equipadas.Blanda[1] &&
        armaduras_equipadas.Blanda[2])
    ) {
      event.rc = false;
    } else {
      resetAtributosArmadura(posicion);

      aplicarNegativosArmadura(posicion);

      equiparArmaduraYelmo(
        {
          posicion: posicion,
          armadura: this.getField("armadura" + posicion).value,
          def: this.getField("armadura" + posicion + "_def").value,
          reqarm: this.getField("armadura" + posicion + "_reqarm").value,
          advertir: this.getField("armadura" + posicion + "_advertir").value,
          mov: this.getField("armadura" + posicion + "_mov").value,
          dureza: armadura_dureza,
          clase: armadura_clase,
          calidad: this.getField("armadura" + posicion + "_calidad").value,
        },
        armadura_clase,
        armadura_dureza
      );
    }
  } else {
    resetAtributosArmadura(posicion);

    desequiparArmaduraYelmo(posicion);
  }
}

function v_armadura(event) {
  var posicion = Number(event.target.name.substr(8, 1));
  this.getField(event.target.name + "_calidad").value = 0;
  this.getField(event.target.name + "_check").value = "-";

  resetAtributosArmadura(posicion, event.value);
}

function v_armadura_calidad(event) {
  var posicion = Number(event.target.name.substr(8, 1));

  resetAtributosArmadura(posicion);
  aplicarNegativosArmadura(posicion);
}

function v_arma_check(event) {
  var mano_a_desequipar = this.getField(event.target.name).value;
  var posicion = event.target.name.substr(4, 1);
  var arma = this.getField("arma" + posicion);
  var arma_clase = this.getField("arma" + posicion + "_clase");
  if (
    arma.value === "-" ||
    (arma_clase.value === "A. de proyectil" &&
      (event.value === "D" || event.value === "I")) ||
    (lista_armas_equipadas["D"] &&
      (event.value === "D" || event.value === "D+I") &&
      Number(lista_armas_equipadas["D"].posicion) !== Number(posicion)) ||
    (lista_armas_equipadas["I"] &&
      (event.value === "I" || event.value === "D+I") &&
      Number(lista_armas_equipadas["I"].posicion) !== Number(posicion)) ||
    (lista_armas_equipadas["D+I"] &&
      (event.value === "I" || event.value === "D" || event.value === "D+I"))
  ) {
    event.rc = false;
  } else if (event.value === "-") {
    lista_armas_equipadas[mano_a_desequipar] = null;
    resetAtributosArma(posicion);

    if (
      !lista_armas_equipadas["D"] &&
      !lista_armas_equipadas["I"] &&
      !lista_armas_equipadas["D+I"]
    ) {
      // Combate desarmado

      arma0_check.value = "D+I";
      resetAtributosArma(0);
      aplicarNegativosAlArma(0, "D+I");

      actualizarIniciativa();
      actualizarAtaque();
      actualizarParada();
      actualizarEsquiva();
    }
  } else {
    if (mano_a_desequipar !== "-") {
      lista_armas_equipadas[mano_a_desequipar] = null;
    }

    // if (lista_armas_equipadas["D"]) {
    //   if (event.value === "D" || event.value === "D+I") {
    //     if (Number(lista_armas_equipadas["D"].posicion) !== Number(posicion)) {
    //       this.getField(
    //         "arma" + lista_armas_equipadas["D"].posicion + "_check"
    //       ).value = "-";
    //     }
    //     // resetAtributosArma(lista_armas_equipadas["D"].posicion);
    //     // lista_armas_equipadas["D"] = null;
    //   }
    // }

    // if (lista_armas_equipadas["I"]) {
    //   if (event.value === "I" || event.value === "D+I") {
    //     if (Number(lista_armas_equipadas["I"].posicion) !== Number(posicion)) {
    //       this.getField(
    //         "arma" + lista_armas_equipadas["I"].posicion + "_check"
    //       ).value = "-";
    //     }
    //     // resetAtributosArma(lista_armas_equipadas["I"].posicion);

    //     // lista_armas_equipadas["I"] = null;
    //   }
    // }

    // if (lista_armas_equipadas["D+I"]) {
    //   this.getField(
    //     "arma" + lista_armas_equipadas["D+I"].posicion + "_check"
    //   ).value = "-";
    //   // resetAtributosArma(lista_armas_equipadas["D+I"].posicion);
    //   // lista_armas_equipadas["D+I"] = null;
    // }

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
    aplicarNegativosAlArma(posicion, event.value);

    lista_armas_equipadas[event.value] = {
      posicion: posicion,
      arma: arma.value,
      atq: Number(this.getField("arma" + posicion + "_atq").value),
      par: Number(this.getField("arma" + posicion + "_par").value),
      esq: Number(this.getField("arma" + posicion + "_esq").value),
      db: Number(this.getField("arma" + posicion + "_db").value),
      iniciativa: Number(
        this.getField("arma" + posicion + "_iniciativa").value
      ),
      freq: Number(this.getField("arma" + posicion + "_freq").value),
      clase: arma_clase.value,
      tam: this.getField("arma" + posicion + "_tam").value,
      especial: this.getField("arma" + posicion + "_especial").value,
      calidad: Number(this.getField("arma" + posicion + "_calidad").value),
    };

    if (event.value === "D+I") {
      var arma_fue_bono = this.getField("arma" + posicion + "_fue_bono");
      var arma_db = this.getField("arma" + posicion + "_db");
      var arma_df = this.getField("arma" + posicion + "_df");

      arma_fue_bono.value = Number(arma_fue_bono.value * 2);
      arma_df.value = Number(arma_db.value) + Number(arma_fue_bono.value);
    }

    actualizarIniciativa();
    actualizarAtaque();
    actualizarParada();
    actualizarEsquiva();
  }
}

function v_arma(event) {
  this.getField(event.target.name + "_calidad").value = 0;
  this.getField(event.target.name + "_check").value = "-";

  var posicion = event.target.name.substr(4, 1);

  resetAtributosArma(posicion, event.value);
}

function v_arma_calidad(event) {
  var i = event.target.name.substr(4, 1);
  var arma_clase = this.getField("arma" + i + "_clase");
  var arma_check = this.getField("arma" + i + "_check");

  if (arma_clase.value === "Escudo" || arma_clase.value === "-") {
    event.rc = false;
  } else {
    resetAtributosArma(i);
    aplicarNegativosAlArma(i, arma_check.value);
  }
}

function v_exp_actual(event) {
  // var nivel = this.getField("nivel");
  // var loop = true;
  // var nRslt;
  // while (event.value > Number(this.getField("exp_totales").value) && loop) {
  //   nRslt = app.alert(
  //     "Has sobrepasado los puntos de experiencia.\n\n" +
  //     "¿Quieres subir de nivel?",
  //     2,
  //     2,
  //     "Submit Validation"
  //   );
  //   if (nRslt === 4) {
  //     nivel.value++;
  //     event.value = event.value - Number(this.getField("exp_totales").value);
  //   } else {
  //     loop = false;
  //   }
  // }
  // loop = true;
  // var exp_actual = event.value;
  // while (exp_actual < 0 && Number(nivel.value) >= 0 && loop) {
  //   nRslt = app.alert(
  //     "Has introducido un valor negativo.\n\n" + "¿Quieres bajar de nivel?",
  //     2,
  //     2,
  //     "Submit Validation"
  //   );
  //   if (nRslt === 4) {
  //     nivel.value--;
  //     event.value =
  //       Number(event.value) + Number(this.getField("exp_totales").value);
  //     exp_actual = Number(event.value);
  //   } else {
  //     loop = false;
  //   }
  // }
}

function v_idioma_escrito(event) {
  var posicion = event.target.name.substr(6, 1);
  var coste_idioma = this.getField("idioma" + posicion + "_pd");
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

  switch (this.getField("idioma" + posicion + "_hablado").value) {
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
  var coste_idioma = this.getField("idioma" + posicion + "_pd");
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

  switch (this.getField("idioma" + posicion + "_escrito").value) {
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
  var pd_totales = this.getField("pd_totales");
  var limite_pd_combate = Number(pd_totales.value) / 2;
  var pd_parada = this.getField("pd_parada");
  var pd_esquiva = this.getField("pd_esquiva");
  var pd_llA = this.getField("pd_llA");
  if (Number(event.value) <= 0) {
    event.value = 0;
  } else if (
    Number(event.value) +
      Number(pd_parada.value) +
      Number(pd_esquiva.value) +
      Number(pd_llA.value) >
      limite_pd_combate ||
    Number(event.value) > limite_pd_combate / 4
  ) {
    event.rc = false;
  } else {
    actualizarAtaque();
  }
}

function v_pd_esquiva(event) {
  var pd_totales = this.getField("pd_totales");
  var limite_pd_combate = Number(pd_totales.value) / 2;
  var pd_ataque = this.getField("pd_ataque");
  var pd_parada = this.getField("pd_parada");
  var pd_llA = this.getField("pd_llA");

  if (Number(event.value) <= 0) {
    event.value = 0;
  } else if (
    Number(event.value) +
      Number(pd_ataque.value) +
      Number(pd_parada.value) +
      Number(pd_llA.value) >
      limite_pd_combate ||
    Number(event.value) > limite_pd_combate / 4
  ) {
    event.rc = false;
  } else {
    actualizarEsquiva();
  }
}

function v_pd_parada(event) {
  var pd_totales = this.getField("pd_totales");
  var limite_pd_combate = Number(pd_totales.value) / 2;
  var pd_ataque = this.getField("pd_ataque");
  var pd_llA = this.getField("pd_llA");
  var pd_esquiva = this.getField("pd_esquiva");
  if (Number(event.value) <= 0) {
    event.value = 0;
  } else if (
    Number(event.value) +
      Number(pd_ataque.value) +
      Number(pd_esquiva.value) +
      Number(pd_llA.value) >
      limite_pd_combate ||
    Number(event.value) > limite_pd_combate / 4
  ) {
    event.rc = false;
  } else {
    actualizarParada();
  }
}

function v_pd_llA(event) {
  var pd_totales = this.getField("pd_totales");
  var limite_pd_combate = Number(pd_totales.value) / 2;
  var pd_ataque = this.getField("pd_ataque");
  var pd_parada = this.getField("pd_parada");
  var pd_esquiva = this.getField("pd_esquiva");
  if (Number(event.value) <= 0) {
    event.value = 0;
  } else if (
    Number(event.value) +
      Number(pd_ataque.value) +
      Number(pd_esquiva.value) +
      Number(pd_parada.value) >
      limite_pd_combate ||
    Number(event.value) > limite_pd_combate / 10
  ) {
    event.rc = false;
  } else {
    actualizarLlA(event);
  }
}

function v_tabla_arma(event) {
  var posicion = Number(event.target.name.substr(event.target.name.length - 1));
  var coste_pd = this.getField(event.target.name + "_pd");
  var arma_clase = this.getField(event.target.name + "_clase");

  if (
    (posicion > 1 &&
      this.getField("tabla_arma" + (posicion - 1)).value === "-") ||
    (posicion < 7 && this.getField("tabla_arma" + (posicion + 1)).value !== "-")
  ) {
    event.rc = false;
  } else {
    if (event.value === "-") {
      coste_pd.value = 0;
      arma_clase.value = "-";
      tablas_armas_actual.pop();
    } else if (
      event.value === event.value.toUpperCase() ||
      event.value.substr(0, 3) === "E. "
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
      for (i = 1; i <= 7 && !encontrado; i++) {
        var t_arma = this.getField("tabla_arma" + i);
        var t_arma_clase = this.getField("tabla_arma" + i + "_clase");

        if (t_arma.value === event.value) {
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

    if (lista_armas_equipadas["D"]) {
      resetAtributosArma(lista_armas_equipadas["D"].posicion);
      aplicarNegativosAlArma(lista_armas_equipadas["D"].posicion, "D");

      lista_armas_equipadas["D"].atq = Number(
        this.getField("arma" + lista_armas_equipadas["D"].posicion + "_atq")
          .value
      );
      lista_armas_equipadas["D"].par = Number(
        this.getField("arma" + lista_armas_equipadas["D"].posicion + "_par")
          .value
      );
    }

    if (lista_armas_equipadas["I"]) {
      resetAtributosArma(lista_armas_equipadas["I"].posicion);
      aplicarNegativosAlArma(lista_armas_equipadas["I"].posicion, "I");

      lista_armas_equipadas["I"].atq = Number(
        this.getField("arma" + lista_armas_equipadas["I"].posicion + "_atq")
          .value
      );
      lista_armas_equipadas["I"].par = Number(
        this.getField("arma" + lista_armas_equipadas["I"].posicion + "_par")
          .value
      );
    }

    if (lista_armas_equipadas["D+I"]) {
      resetAtributosArma(lista_armas_equipadas["I"].posicion);
      aplicarNegativosAlArma(lista_armas_equipadas["I"].posicion, "I");
      resetAtributosArma(lista_armas_equipadas["D"].posicion);
      aplicarNegativosAlArma(lista_armas_equipadas["D"].posicion, "D");

      lista_armas_equipadas["D"].atq = Number(
        this.getField("arma" + lista_armas_equipadas["D"].posicion + "_atq")
          .value
      );
      lista_armas_equipadas["D"].par = Number(
        this.getField("arma" + lista_armas_equipadas["D"].posicion + "_par")
          .value
      );
      lista_armas_equipadas["I"].atq = Number(
        this.getField("arma" + lista_armas_equipadas["I"].posicion + "_atq")
          .value
      );
      lista_armas_equipadas["I"].par = Number(
        this.getField("arma" + lista_armas_equipadas["I"].posicion + "_par")
          .value
      );
    }

    actualizarAtaque();
    actualizarParada();
  }
}

function v_atributo(event) {
  var atributo = event.target.name.substr(0, 3);
  var atributo_puntos =
    event.target.name === atributo + "_puntos"
      ? Number(event.value)
      : Number(this.getField(atributo + "_puntos").value);
  var atributo_base =
    event.target.name === atributo + "_base"
      ? Number(event.value)
      : Number(this.getField(atributo + "_base").value);
  var atributo_actual = this.getField(atributo + "_actual");
  var atributo_bono = this.getField(atributo + "_bono");

  if (
    atributo_puntos < 0 ||
    pventaja_restantes.value - atributo_puntos < 0 ||
    atributo_base > 20 ||
    atributo_base < 1
  ) {
    event.rc = false;
  } else {
    pventaja_restantes.value =
      Number(pventaja_restantes.value) - atributo_puntos;
    atributo_actual.value = Number(atributo_base) + atributo_puntos;

    atributo_bono.value = lista_bonos[Number(atributo_actual.value)];

    switch (atributo) {
      case "agi":
        var mov_max = this.getField("mov_max");
        var mov_base = this.getField("mov_base");
        var mov_total = agi_actual.value + restriccion_mov_armadura;

        if (mov_total - 1 >= 1 && mov_total - 1 <= 20) {
          mov_max.value = lista_movimiento[mov_total - 1];
        } else {
          mov_max.value = 0;
        }

        this.getField("mov_restr").value = mov_max.value - mov_base.value;

        actualizarEsquiva();
        actualizarIniciativa();
        break;
      case "fue":
        var carga_normal = this.getField("carga_normal");
        var carga_max = this.getField("carga_max");

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
          var arma_fue_bono = this.getField("arma" + i + "arma_fue_bono");
          var arma_check = this.getField("arma" + i + "arma_check");
          var arma_clase = this.getField("arma" + i + "arma_clase");
          var arma_db = this.getField("arma" + i + "arma_db");
          var arma_df = this.getField("arma" + i + "arma_df");

          if (arma_clase.value === "A. de proyectil") {
            arma_fue_bono.value = 0;
          } else {
            if (arma_check.value === "D+I") {
              arma_fue_bono.value = Number(fue_bono.value) * 2;
            } else {
              arma_fue_bono.value = Number(fue_bono.value);
            }
          }

          arma_df.value = Math.ceil(
            Number(arma_db.value) + arma_fue_bono.value
          );
        }

        actualizarTablaDiferencias();

        break;
      case "con":
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
  var pventaja = this.getField("p" + event.target.name.substr(1));

  pventaja.value = Math.min(
    50,
    Number(event.value) * 5 * Math.floor(Number(nivel.value) / 2)
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
  var pventaja = this.getField("pventaja_llA");

  pventaja.value =
    Number(event.value) * 5 * Math.floor(Number(nivel.value) / 2);

  actualizarLlA();
}

function v_diff_x(event) {
  if (event.value < 0) {
    event.rc = false;
  } else {
    actualizarDiffX(event);
  }
}

function resetAtributosArma(posicion, arma_nueva) {
  var arma = arma_nueva ? arma_nueva : this.getField("arma" + posicion).value;
  var arma_par = this.getField("arma" + posicion + "_par");
  var arma_atq = this.getField("arma" + posicion + "_atq");
  var arma_esq = this.getField("arma" + posicion + "_esq");
  var arma_iniciativa = this.getField("arma" + posicion + "_iniciativa");
  var arma_clase = this.getField("arma" + posicion + "_clase");
  var arma_df = this.getField("arma" + posicion + "_df");
  var arma_db = this.getField("arma" + posicion + "_db");
  var arma_clase = this.getField("arma" + i + "_clase");
  var arma_fue_bono = this.getField("arma" + posicion + "_fue_bono");
  var arma_clase = this.getField("arma" + posicion + "_clase");
  var arma_freq = this.getField("arma" + posicion + "_freq");
  var arma_tam = this.getField("arma" + posicion + "_tam");
  var arma_especial = this.getField("arma" + posicion + "_especial");
  var arma_calidad = this.getField("arma" + posicion + "_calidad");

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
          Number(l_arma.arma_atq) + 5 * Number(arma_calidad.value);
        arma_par.value =
          Number(l_arma.arma_par) + 5 * Number(arma_calidad.value);
        arma_esq.value = l_arma.arma_esq;
        arma_db.value =
          Number(l_arma.arma_db) + 10 * Number(arma_calidad.value);
        arma_fue_bono.value =
          arma_clase.value === "A. de proyectil" ? 0 : Number(fue_bono.value);
        arma_iniciativa.value =
          Number(l_arma.arma_iniciativa) + 5 * Number(arma_calidad.value);
        arma_freq.value = l_arma.arma_freq;
        arma_clase.value = l_arma.arma_clase;
        arma_tam.value = l_arma.arma_tam;
        arma_especial.value = l_arma.arma_especial;
        arma_df.value = Math.ceil(Number(arma_db.value) + arma_fue_bono.value);

        return true;
      }
    });
  }
}

function resetAtributosArmadura(posicion, armadura_nueva) {
  var armadura = armadura_nueva
    ? armadura_nueva
    : this.getField("armadura" + posicion).value;
  var armadura_def = this.getField("armadura" + posicion + "_def");
  var armadura_reqarm = this.getField("armadura" + posicion + "_reqarm");
  var armadura_advertir = this.getField("armadura" + posicion + "_advertir");
  var armadura_mov = this.getField("armadura" + posicion + "_mov");
  var armadura_dureza = this.getField("armadura" + posicion + "_dureza");
  var armadura_calidad = this.getField("armadura" + posicion + "_calidad");

  if (armadura === "-") {
    armadura_def.value = "-";
    armadura_reqarm.value = "-";
    armadura_advertir.value = "-";
    armadura_mov.value = "-";
    armadura_dureza.value = "-";
    armadura_calidad.value = "-";
  } else if (armadura === "Cuerpo") {
    armadura_def.value = 10 * Number(armadura_calidad.value);
    armadura_advertir.value = 5 * Number(armadura_calidad.value);
    armadura_mov.value = 5 * Number(armadura_calidad.value);
  } else {
    lista_armaduras.some(function (l_armadura) {
      if (l_armadura.armadura === armadura) {
        armadura_def.value =
          l_armadura.def + 10 * Number(armadura_calidad.value);
        armadura_reqarm.value = Math.max(
          0,
          Number(l_armadura.reqarm) - 5 * Number(armadura_calidad.value)
        );
        armadura_advertir.value =
          l_armadura.advertir === "-"
            ? "-"
            : Math.min(
                0,
                Number(l_armadura.advertir) + 5 * Number(armadura_calidad.value)
              );
        armadura_mov.value =
          l_armadura.mov === "-"
            ? "-"
            : Math.min(
                0,
                Number(l_armadura.mov) + 5 * Number(armadura_calidad.value)
              );
        armadura_dureza.value = l_armadura.dureza;

        return true;
      }
    });
  }
}

function aplicarNegativosAlArma(posicion, check) {
  var arma = this.getField("arma" + posicion);
  var arma_par = this.getField("arma" + posicion + "_par");
  var arma_atq = this.getField("arma" + posicion + "_atq");
  var arma_clase = this.getField("arma" + posicion + "_clase");
  var arma_freq = this.getField("arma" + posicion + "_freq");
  var arma_tam = this.getField("arma" + posicion + "_tam");

  // Negativos por no saber usar el arma
  if (arma_clase.value !== "Escudo") {
    var tabla_arma, tabla_arma_clase;

    var similar = false;
    var encontrado = false;

    for (i = 1; i <= 7 && !encontrado; i++) {
      tabla_arma = this.getField("tabla_arma" + i);
      tabla_arma_clase = this.getField("tabla_arma" + i + "_clase");
      if (
        arma.value === tabla_arma.value ||
        (arma_clase.value === tabla_arma_clase.value &&
          tabla_arma.value === tabla_arma.value.toUpperCase())
      ) {
        encontrado = true;
      } else if (arma_clase.value === tabla_arma_clase.value) {
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
    var fue_req_diff = Number(arma_freq.value) - Number(fue_actual.value);
    if (fue_req_diff > 0) {
      arma_atq.value -= 5 * fue_req_diff;
      arma_par.value -= 5 * fue_req_diff;
    }
  }

  // Negativos por usarla en la mano no dominante
  if (check !== mano_dominante.value.charAt(0)) {
    arma_atq.value -= 30;
    arma_par.value -= 30;
  }

  // Negativos según el tamaño si no se usa con las dos manos
  if (
    (check === "D" && lista_armas_equipadas["I"]) ||
    (check === "I" && lista_armas_equipadas["D"])
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
    (check === "D" && !lista_armas_equipadas["I"]) ||
    (check === "I" && !lista_armas_equipadas["D"])
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

function aplicarNegativosArmadura(posicion) {
  var final_llA_v = this.getField("final_llA");
  var armadura_clase = this.getField("armadura" + posicion).value.split(" ")[0];
  var armadura_reqarm = this.getField("armadura" + posicion + "_reqarm");
  var armadura_advertir = this.getField("armadura" + posicion + "_advertir");
  var armadura_mov = this.getField("armadura" + posicion + "_mov");

  if (armadura_reqarm.value > final_llA.value) {
    if (armadura_clase === "Yelmo") {
      armadura_advertir.value =
        Number(armadura_advertir.value) -
        (Number(armadura_reqarm.value) - Number(final_llA.value));
    } else {
      armadura_mov.value =
        Number(armadura_mov.value) -
        (Number(armadura_reqarm.value) - Number(final_llA.value));
    }
    equipo_ver.value = armadura_advertir.value;
    equipo_escuchar.value = armadura_advertir.value;
    equipo_buscar.value = armadura_advertir.value;
    equipo_rastrear.value = armadura_advertir.value;

    actualizarHabilidad("ver");
    actualizarHabilidad("escuchar");
    actualizarHabilidad("buscar");
    actualizarHabilidad("rastrear");
  } else {
    if (armadura_clase === "Yelmo") {
      armadura_advertir.value = Math.min(
        0,
        Number(armadura_advertir.value) +
          Math.floor((final_llA_v.value - armadura_reqarm.value) / 50) * 10
      );
    } else {
      armadura_mov.value = Math.min(
        0,
        Number(armadura_mov.value) +
          Math.floor((final_llA_v.value - armadura_reqarm.value) / 50) * 10
      );
    }
    equipo_acrobacias.value = armadura_mov.value;
    equipo_atletismo.value = armadura_mov.value;
    equipo_nadar.value = armadura_mov.value;
    equipo_trepar.value = armadura_mov.value;
    equipo_ocultarse.value = armadura_mov.value;
    equipo_sigilo.value = armadura_mov.value;

    actualizarHabilidad("acrobacias");
    actualizarHabilidad("atletismo");
    actualizarHabilidad("nadar");
    actualizarHabilidad("trepar");
    actualizarHabilidad("ocultarse");
    actualizarHabilidad("sigilo");
  }
}

function actualizarHabilidad(habilidad) {
  var base_habilidad = this.getField("base_" + habilidad);
  var pventaja_habilidad = this.getField("pventaja_" + habilidad);
  var equipo_habilidad = this.getField("equipo_" + habilidad);
  var final_habilidad = this.getField("final_" + habilidad);
  var bono = 0,
    encontrado;

  for (var nombre_rama in lista_habilidades) {
    var rama = lista_habilidades[nombre_rama];
    rama.some(function (hab) {
      if (!encontrado) {
        if (hab.habilidad === habilidad) {
          bono = Number(this.getField(hab.atributo + "_bono").value);
          encontrado = true;
          return true;
        }
      } else {
        return true;
      }
    });
  }

  final_habilidad.value =
    Number(base_habilidad.value) +
    bono +
    Number(pventaja_habilidad.value) +
    Number(equipo_habilidad.value);
}

function desequiparArmaduraYelmo(posicion) {
  var encontrado = false;
  var clase = "";

  if (
    armaduras_equipadas.Dura &&
    armaduras_equipadas.Dura.posicion === posicion
  ) {
    clase = "Armadura";
    armaduras_equipadas.Dura = null;
    encontrado = true;
  }

  if (!encontrado) {
    if (
      armaduras_equipadas.Blanda[1] &&
      armaduras_equipadas.Blanda[1].posicion === posicion
    ) {
      clase = "Armadura";
      armaduras_equipadas.Blanda[1] = null;
      encontrado = true;
    }
  }

  if (!encontrado) {
    if (
      armaduras_equipadas.Blanda[2] &&
      armaduras_equipadas.Blanda[2].posicion === posicion
    ) {
      clase = "Armadura";
      armaduras_equipadas.Blanda[2] = null;
      encontrado = true;
    }
  }

  if (!encontrado) {
    if (yelmos_equipados.Dura && yelmos_equipados.Dura.posicion === posicion) {
      clase = "Yelmo";
      yelmos_equipados.Dura = null;
      encontrado = true;
    }
  }

  if (!encontrado) {
    if (
      yelmos_equipados.Blanda[1] &&
      yelmos_equipados.Blanda[1].posicion === posicion
    ) {
      clase = "Yelmo";
      yelmos_equipados.Blanda[1] = null;
      encontrado = true;
    }
  }

  if (!encontrado) {
    if (
      yelmos_equipados.Blanda[2] &&
      yelmos_equipados.Blanda[2].posicion === posicion
    ) {
      clase = "Yelmo";
      yelmos_equipados.Blanda[2] = null;
      encontrado = true;
    }
  }

  if (clase === "Yelmo") {
    equipo_ver.value = 0;
    equipo_escuchar.value = 0;
    equipo_buscar.value = 0;
    equipo_rastrear.value = 0;

    actualizarHabilidad("ver");
    actualizarHabilidad("escuchar");
    actualizarHabilidad("buscar");
    actualizarHabilidad("rastrear");
  } else {
    equipo_acrobacias.value = 0;
    equipo_atletismo.value = 0;
    equipo_nadar.value = 0;
    equipo_trepar.value = 0;
    equipo_ocultarse.value = 0;
    equipo_sigilo.value = 0;

    actualizarHabilidad("acrobacias");
    actualizarHabilidad("atletismo");
    actualizarHabilidad("nadar");
    actualizarHabilidad("trepar");
    actualizarHabilidad("ocultarse");
    actualizarHabilidad("sigilo");
  }
}

function equiparArmaduraYelmo(armadura_yelmo, clase, dureza) {
  if (clase === "Yelmo") {
    if (dureza === "Blanda") {
      yelmos_equipados.Blanda[
        yelmos_equipados.Blanda[1] ? 2 : 1
      ] = armadura_yelmo;
    } else {
      yelmos_equipados.Dura = armadura_yelmo;
    }
  } else {
    if (dureza === "Blanda") {
      armaduras_equipadas.Blanda[
        armaduras_equipadas.Blanda[1] ? 2 : 1
      ] = armadura_yelmo;
    } else {
      armaduras_equipadas.Dura = armadura_yelmo;
    }
  }
}

function actualizarIniciativa() {
  if (lista_armas_equipadas["D"] && !lista_armas_equipadas["I"]) {
    arma_iniciativa_total.value = Number(lista_armas_equipadas["D"].iniciativa);
  } else if (!lista_armas_equipadas["D"] && lista_armas_equipadas["I"]) {
    arma_iniciativa_total.value = Number(lista_armas_equipadas["I"].iniciativa);
  } else if (
    lista_armas_equipadas["I"] !== null &&
    lista_armas_equipadas["D"] !== null
  ) {
    equipo_esquiva.value =
      Number(lista_armas_equipadas["I"].esq) +
      Number(lista_armas_equipadas["D"].esq);
    arma_iniciativa_total.value =
      Number(lista_armas_equipadas["I"].iniciativa) +
      Number(lista_armas_equipadas["D"].iniciativa);
  } else if (lista_armas_equipadas["D+I"] !== null) {
    arma_iniciativa_total.value = Number(
      lista_armas_equipadas["D+I"].iniciativa
    );
  } else {
    arma_iniciativa_total.value = Number(arma0_iniciativa.value);
  }
  final_iniciativa.value =
    Number(base_iniciativa.value) +
    Number(des_bono.value) +
    Number(agi_bono.value) +
    Number(arma_iniciativa_total.value) +
    Number(armadura_iniciativa_total.value) +
    Number(esp_iniciativa.value);
}

function actualizarVida() {
  totales_vida.value =
    Number(base_vida.value) +
    Number(pd_base_vida.value) +
    Number(pventaja_vida.value) +
    Number(esp_vida.value);
}

function actualizarAtaque() {
  if (lista_armas_equipadas["D"] && !lista_armas_equipadas["I"]) {
    equipo_ataque_d.value = lista_armas_equipadas["D"].atq;
    equipo_ataque_i.value = "-";
  } else if (!lista_armas_equipadas["D"] && lista_armas_equipadas["I"]) {
    equipo_ataque_d.value = "-";
    equipo_ataque_i.value = lista_armas_equipadas["I"].atq;
  } else if (
    lista_armas_equipadas["I"] !== null &&
    lista_armas_equipadas["D"] !== null
  ) {
    equipo_ataque_d.value = lista_armas_equipadas["D"].atq;
    equipo_ataque_i.value = lista_armas_equipadas["I"].atq;
  } else if (lista_armas_equipadas["D+I"] !== null) {
    equipo_ataque_d.value = lista_armas_equipadas["D+I"].atq;
    equipo_ataque_i.value = lista_armas_equipadas["D+I"].atq;
  } else {
    equipo_ataque_d.value = Number(arma0_atq.value);
    equipo_ataque_i.value = Number(arma0_atq.value);
  }
  if (equipo_ataque_d.value === "-") {
    final_ataque_d.value = "-";
  } else {
    final_ataque_d.value =
      Number(pd_ataque.value) +
      Number(des_bono.value) +
      Number(pventaja_ataque.value) +
      Number(equipo_ataque_d.value) +
      Number(esp_ataque_d.value);
  }

  if (equipo_ataque_i.value === "-") {
    final_ataque_i.value = "-";
  } else {
    final_ataque_i.value =
      Number(pd_ataque.value) +
      Number(des_bono.value) +
      Number(pventaja_ataque.value) +
      Number(equipo_ataque_i.value) +
      Number(esp_ataque_i.value);
  }
}

function actualizarParada() {
  if (lista_armas_equipadas["D"] && !lista_armas_equipadas["I"]) {
    equipo_parada_d.value = lista_armas_equipadas["D"].atq;
    equipo_parada_i.value = "-";
  } else if (!lista_armas_equipadas["D"] && lista_armas_equipadas["I"]) {
    equipo_parada_d.value = "-";
    equipo_parada_i.value = lista_armas_equipadas["I"].atq;
  } else if (
    lista_armas_equipadas["I"] !== null &&
    lista_armas_equipadas["D"] !== null
  ) {
    equipo_parada_d.value = lista_armas_equipadas["D"].atq;
    equipo_parada_i.value = lista_armas_equipadas["I"].atq;
  } else if (lista_armas_equipadas["D+I"] !== null) {
    equipo_parada_d.value = lista_armas_equipadas["D+I"].atq;
    equipo_parada_i.value = lista_armas_equipadas["D+I"].atq;
  } else {
    equipo_parada_d.value = Number(arma0_atq.value);
    equipo_parada_i.value = Number(arma0_atq.value);
  }
  if (equipo_parada_d.value === "-") {
    final_parada_d.value = "-";
  } else {
    final_parada_d.value =
      Number(pd_parada.value) +
      Number(des_bono.value) +
      Number(pventaja_parada.value) +
      Number(equipo_parada_d.value) +
      Number(esp_parada_d.value);
  }

  if (equipo_parada_i.value === "-") {
    final_parada_i.value = "-";
  } else {
    final_parada_i.value =
      Number(pd_parada.value) +
      Number(des_bono.value) +
      Number(pventaja_parada.value) +
      Number(equipo_parada_i.value) +
      Number(esp_parada_i.value);
  }
}

function actualizarEsquiva() {
  if (lista_armas_equipadas["D"] && !lista_armas_equipadas["I"]) {
    equipo_esquiva.value = lista_armas_equipadas["D"].esq;
  } else if (!lista_armas_equipadas["D"] && lista_armas_equipadas["I"]) {
    equipo_esquiva.value = lista_armas_equipadas["I"].esq;
  } else if (
    lista_armas_equipadas["I"] !== null &&
    lista_armas_equipadas["D"] !== null
  ) {
    equipo_esquiva.value =
      Number(lista_armas_equipadas["I"].esq) +
      Number(lista_armas_equipadas["D"].esq);
  } else if (lista_armas_equipadas["D+I"] !== null) {
    equipo_esquiva.value = Number(lista_armas_equipadas["D+I"].esq);
  } else {
    equipo_esquiva.value = Number(arma0_esq.value);
  }
  final_esquiva.value =
    Number(pd_esquiva.value) +
    Number(agi_bono.value) +
    Number(pventaja_esquiva.value) +
    Number(equipo_esquiva.value) +
    Number(esp_esquiva.value);
}

function actualizarLlA(event) {
  var pd_llA_e =
    (event && event.target.name) === "pd_llA"
      ? Number(event.value)
      : Number(pd_llA.value);
  final_llA.value =
    pd_llA_e + Number(fue_bono.value) + Number(pventaja_llA.value);

  var armadura_posicion;

  if (armaduras_equipadas["Dura"]) {
    armadura_posicion = armaduras_equipadas["Dura"].posicion;
  }

  if (armaduras_equipadas["Blanda"]["1"]) {
    armadura_posicion = armaduras_equipadas["Blanda"]["1"].posicion;
  }

  if (armaduras_equipadas["Blanda"]["2"]) {
    armadura_posicion = armaduras_equipadas["Blanda"]["2"].posicion;
  }

  if (yelmos_equipados["Dura"]) {
    armadura_posicion = yelmos_equipados["Dura"].posicion;
  }

  if (yelmos_equipados["Blanda"]["1"]) {
    armadura_posicion = yelmos_equipados["Blanda"]["1"].posicion;
  }

  if (yelmos_equipados["Blanda"]["2"]) {
    armadura_posicion = yelmos_equipados["Blanda"]["2"].posicion;
  }

  resetAtributosArmadura(armadura_posicion);

  aplicarNegativosArmadura(armadura_posicion);
}

function actualizarTablaDiferencias() {
  // Actualizar tablas diferencias

  for (i = 10; i <= 200; i = i + 10) {
    var a1 = this.getField("a1_" + i); // Izquierda
    var a2 = this.getField("a2_" + i); // Derecha

    if (lista_armas_equipadas["D+I"]) {
      if (lista_armas_equipadas["D+I"])
        a1.value = Math.round(
          (Number(lista_armas_equipadas["D+I"].df) * i) / 500
        );

      a2.value = Math.round(
        (Number(lista_armas_equipadas["D+I"].df) * i) / 500
      );
    } else {
      if (lista_armas_equipadas["I"]) {
        a1.value = Math.round(
          (Number(lista_armas_equipadas["I"].df) * i) / 500
        );
      } else {
        if (!lista_armas_equipadas["D"]) {
          // combate desarmado
          a1.value = Math.round((Number(arma0_df.value) * i) / 500);

          a2.value = Math.round((Number(arma0_df.value) * i) / 500);
        } else {
          a1.value = "-";
        }
      }

      if (lista_armas_equipadas["D"]) {
        a2.value = Math.round(
          (Number(lista_armas_equipadas["D"].df) * i) / 500
        );
      } else {
        a2.value = "-";
      }
    }
  }

  actualizarDiffX();
}

function actualizarDiffX(event) {
  var diff_x_e = event ? event : diff_x;

  if (lista_armas_equipadas["D+I"]) {
    a1_x.value = Math.round(
      (Number(lista_armas_equipadas["D+I"].df) * diff_x_e.value) / 500
    );

    a2_x.value = Math.round(
      (Number(lista_armas_equipadas["D+I"].df) * diff_x_e.value) / 500
    );
  } else {
    if (lista_armas_equipadas["I"]) {
      a1_x.value = Math.round(
        (Number(lista_armas_equipadas["I"].df) * diff_x_e.value) / 500
      );
    } else {
      if (!lista_armas_equipadas["D"]) {
        // combate desarmado
        a1_x.value = Math.round(
          (Number(arma0_df.value) * diff_x_e.value) / 500
        );

        a2_x.value = Math.round(
          (Number(arma0_df.value) * diff_x_e.value) / 500
        );
      } else {
        a1_x.value = "-";
      }
    }

    if (lista_armas_equipadas["D"]) {
      a2_x.value = Math.round(
        (Number(lista_armas_equipadas["D"].df) * diff_x_e.value) / 500
      );
    } else if (lista_armas_equipadas["I"]) {
      a2_x.value = "-";
    }
  }
}

function armas_equipadas() {
  var str = "\n";
  for (var z in lista_armas_equipadas) {
    const element_z = lista_armas_equipadas[z];
    str += z + ": {\n";
    for (var v in element_z) {
      str += v + ": " + element_z[v] + ",\n";
    }
    str += "}\n";
  }
  log(str);
}
