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

var lista_armadura = [
  {
    peso: "Muy ligera",
    def: 10,
    reqarm: 0,
    advertir: 0,
    movimiento: 0,
  },
  {
    peso: "Ligera",
    def: 20,
    reqarm: 30 / 12,
    advertir: -5 / 1,
    movimiento: -10 / 12,
  },
  {
    peso: "Media",
    def: 30,
    reqarm: 60 / 12,
    advertir: -10 / 1,
    movimiento: -25 / 12,
  },
  {
    peso: "Pesada",
    def: 50,
    reqarm: 90 / 12,
    advertir: -20 / 1,
    movimiento: -40 / 12,
  },
  {
    peso: "Muy pesada",
    def: 70,
    reqarm: 120 / 12,
    advertir: -30 / 1,
    movimiento: -60 / 12,
  },
];

var lista_armas = [
  // CUERDA
  {
    peso: "Ligera",
    tipo: "Cuerda",
    freq: 4,
    db: 10,
    iniciativa: 20,
  },
  {
    peso: "Media",
    tipo: "Cuerda",
    freq: 8,
    db: 15,
    iniciativa: 10,
  },
  {
    peso: "Pesada",
    tipo: "Cuerda",
    freq: 10,
    db: 30,
    iniciativa: 0,
  },
  {
    peso: "Muy pesada",
    tipo: "Cuerda",
    freq: 14,
    db: 45,
    iniciativa: -20,
  },
  // ARMA CORTA
  {
    peso: "Ligera",
    tipo: "Arma corta",
    freq: 6,
    db: 25,
    iniciativa: 25,
  },
  {
    peso: "Media",
    tipo: "Arma corta",
    freq: 8,
    db: 30,
    iniciativa: 20,
  },
  {
    peso: "Pesada",
    tipo: "Arma corta",
    freq: 10,
    db: 35,
    iniciativa: 15,
  },
  {
    peso: "Muy pesada",
    tipo: "Arma corta",
    freq: 12,
    db: 40,
    iniciativa: 10,
  },
  // ESPADA
  {
    peso: "Ligera",
    tipo: "Espada",
    freq: 10,
    db: 35,
    iniciativa: 0,
  },
  {
    peso: "Media",
    tipo: "Espada",
    freq: 13,
    db: 60,
    iniciativa: -25,
  },
  {
    peso: "Pesada",
    tipo: "Espada",
    freq: 17,
    db: 80,
    iniciativa: -45,
  },
  {
    peso: "Muy pesada",
    tipo: "Espada",
    freq: 19,
    db: 90,
    iniciativa: -60,
  },
  // HACHA
  {
    peso: "Ligera",
    tipo: "Hacha",
    freq: 10,
    db: 40,
    iniciativa: 0,
  },
  {
    peso: "Media",
    tipo: "Hacha",
    freq: 14,
    db: 65,
    iniciativa: -25,
  },
  {
    peso: "Pesada",
    tipo: "Hacha",
    freq: 18,
    db: 85,
    iniciativa: -50,
  },
  {
    peso: "Muy pesada",
    tipo: "Hacha",
    freq: 20,
    db: 95,
    iniciativa: -65,
  },
  // MAZA
  {
    peso: "Ligera",
    tipo: "Maza",
    freq: 10,
    db: 40,
    iniciativa: 0,
  },
  {
    peso: "Media",
    tipo: "Maza",
    freq: 14,
    db: 65,
    iniciativa: -25,
  },
  {
    peso: "Pesada",
    tipo: "Maza",
    freq: 18,
    db: 85,
    iniciativa: -55,
  },
  {
    peso: "Muy pesada",
    tipo: "Maza",
    freq: 20,
    db: 100,
    iniciativa: -70,
  },
  // LANZA
  {
    peso: "Ligera",
    tipo: "Maza",
    freq: 10,
    db: 30,
    iniciativa: 10,
  },
  {
    peso: "Media",
    tipo: "Maza",
    freq: 12,
    db: 40,
    iniciativa: 0,
  },
  {
    peso: "Pesada",
    tipo: "Maza",
    freq: 14,
    db: 50,
    iniciativa: -5,
  },
  {
    peso: "Muy pesada",
    tipo: "Maza",
    freq: 18,
    db: 80,
    iniciativa: -30,
  },
  // A DISTANCIA
  {
    peso: "Ligera",
    tipo: "A distancia",
    freq: 8,
    db: 30,
    iniciativa: 10,
  },
  {
    peso: "Media",
    tipo: "A distancia",
    freq: 10,
    db: 40,
    iniciativa: 0,
  },
  {
    peso: "Pesada",
    tipo: "A distancia",
    freq: 14,
    db: 50,
    iniciativa: -20,
  },
  {
    peso: "Muy pesada",
    tipo: "A distancia",
    freq: 18,
    db: 60,
    iniciativa: -30,
  },
  // ESCUDO
  {
    peso: "Ligera",
    tipo: "Escudo",
    freq: 8,
    db: 5,
    iniciativa: -10,
    defensa: 5,
  },
  {
    peso: "Media",
    tipo: "Escudo",
    freq: 10,
    db: 15,
    iniciativa: -15,
    defensa: 10,
  },
  {
    peso: "Pesada",
    tipo: "Escudo",
    freq: 14,
    db: 20,
    iniciativa: -25,
    defensa: 20,
  },
  {
    peso: "Muy pesada",
    tipo: "Escudo",
    freq: 18,
    db: 25,
    iniciativa: -40,
    defensa: 30,
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

var armaduras_equipadas = [];

for (i = 1; i <= 7; i++) {
  var armadura_eq = f("armadura" + i + "_eq").value;
  if (armadura_eq == "Eq.") {
    armaduras_equipadas.push({
      posicion: i,
      peso: S(f("armadura" + i + "_peso").value),
      reqarm: S(f("armadura" + i + "_reqarm").value),
      def: S(f("armadura" + i + "_def").value),
      advertir: S(f("armadura" + i + "_advertir").value),
      movimiento: S(f("armadura" + i + "_mov").value),
      calidad: S(f("armadura" + i + "_calidad").value),
      cabeza: B(f("armadura" + i + "_cabeza").isBoxChecked(0)),
      espalda: B(f("armadura" + i + "_espalda").isBoxChecked(0)),
      pecho: B(f("armadura" + i + "_pecho").isBoxChecked(0)),
      hombro_izq: B(f("armadura" + i + "_hombro_izq").isBoxChecked(0)),
      hombro_der: B(f("armadura" + i + "_hombro_der").isBoxChecked(0)),
      brazo_izq: B(f("armadura" + i + "_brazo_izq").isBoxChecked(0)),
      brazo_der: B(f("armadura" + i + "_brazo_der").isBoxChecked(0)),
      mano_izq: B(f("armadura" + i + "_mano_izq").isBoxChecked(0)),
      mano_der: B(f("armadura" + i + "_mano_der").isBoxChecked(0)),
      pierna_izq: B(f("armadura" + i + "_pierna_izq").isBoxChecked(0)),
      pierna_der: B(f("armadura" + i + "_pierna_der").isBoxChecked(0)),
      pie_izq: B(f("armadura" + i + "_pie_izq").isBoxChecked(0)),
      pie_der: B(f("armadura" + i + "_pie_der").isBoxChecked(0)),
    });
  }
}

var armas_equipadas = {
  D: null,
  I: null,
  "D+I": null,
};

for (
  i = 1;
  i <= 6 &&
  !armas_equipadas["D+I"] &&
  !(armas_equipadas["I"] && armas_equipadas["D"]);
  i++
) {
  var arma_mano = f("arma" + i + "_mano").value;
  if (arma_mano == "D" || arma_mano == "I" || arma_mano == "D+I") {
    armas_equipadas[arma_mano] = {
      posicion: i,
      tipo: S(f("arma" + i + "_tipo").value),
      peso: S(f("arma" + i + "_peso").value),
      freq: S(f("arma" + i + "_freq").value),
      db: S(f("arma" + i + "_db").value),
      atq: S(f("arma" + i + "_atq").value),
      par: S(f("arma" + i + "_par").value),
      iniciativa: S(f("arma" + i + "_iniciativa").value),
      calidad: S(f("arma" + i + "_calidad").value),
    };
  }
}

var armas_aprendidas = [];

for (
  i = 1;
  i <= 7 && S(f("aprendizaje_arma" + i + "_nivel").value) !== "-";
  i++
) {
  armas_aprendidas.push({
    nivel: S(f("aprendizaje_arma" + i + "_nivel").value),
    tipo: S(f("aprendizaje_arma" + i + "_tipo").value),
    peso: S(f("aprendizaje_arma" + i + "_peso").value),
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

// Puntos de desarrollo (PE)

var pe_actuales = f("pe_actuales");
var pe_totales = f("pe_totales");

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
var pe_vida = f("pe_vida");
var pe_vida_coste = f("pe_vida_coste");
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

var pe_llA = f("pe_llA");
var nventaja_llA = f("nventaja_llA");
var pventaja_llA = f("pventaja_llA");
var esp_llA = f("esp_llA");
var final_llA = f("final_llA");

// Esquiva

var pe_esquiva = f("pe_esquiva");
var nventaja_esquiva = f("nventaja_esquiva");
var pventaja_esquiva = f("pventaja_esquiva");
var final_esquiva = f("final_esquiva");
var esp_esquiva = f("esp_esquiva");

// Parada

var pe_parada = f("pe_parada");
var nventaja_parada = f("nventaja_parada");
var pventaja_parada = f("pventaja_parada");
var equipo_parada_i = f("equipo_parada_i");
var final_parada_i = f("final_parada_i");
var equipo_parada_d = f("equipo_parada_d");
var final_parada_d = f("final_parada_d");
var esp_parada_d = f("esp_parada_d");
var esp_parada_i = f("esp_parada_i");

// Ataque

var pe_ataque = f("pe_ataque");
var nventaja_ataque = f("nventaja_ataque");
var pventaja_ataque = f("pventaja_ataque");
var equipo_ataque_i = f("equipo_ataque_i");
var final_ataque_i = f("final_ataque_i");
var equipo_ataque_d = f("equipo_ataque_d");
var final_ataque_d = f("final_ataque_d");
var esp_ataque_d = f("esp_ataque_d");
var esp_ataque_i = f("esp_ataque_i");

// Armadura

var armaduras_cabeza = f("armaduras_cabeza");
var armaduras_espalda = f("armaduras_espalda");
var armaduras_hombro_der = f("armaduras_hombro_der");
var armaduras_hombro_izq = f("armaduras_hombro_izq");
var armaduras_pecho = f("armaduras_pecho");
var armaduras_brazo_der = f("armaduras_brazo_der");
var armaduras_brazo_izq = f("armaduras_brazo_izq");
var armaduras_mano_der = f("armaduras_mano_der");
var armaduras_mano_izq = f("armaduras_mano_izq");
var armaduras_pierna_der = f("armaduras_pierna_der");
var armaduras_pierna_izq = f("armaduras_pierna_izq");
var armaduras_pie_der = f("armaduras_pie_der");
var armaduras_pie_izq = f("armaduras_pie_izq");

// Desarmado

var arma0_mano = f("arma0_mano");
var arma0_tipo = f("arma0_tipo");
var arma0_db = f("arma0_db");
var arma0_fue_bono = f("arma0_fue_bono");
var arma0_df = f("arma0_df");
var arma0_atq = f("arma0_atq");
var arma0_par = f("arma0_par");
var arma0_iniciativa = f("arma0_iniciativa");
var arma0_calidad = f("arma0_calidad");

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

var warning_pm_actuales = f("warning_pm_actuales");
var warning_pe_actuales = f("warning_pe_actuales");
var warning_combate = f("warning_combate");
var pe_actuales_combate = f("pe_actuales_combate");
var pe_totales_combate = f("pe_totales_combate");

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

function v_idioma(event) {
  if (!event.value) {
    event.value = "-";
  }
}

function v_idioma_escrito(event) {
  posicion = event.target.name.substr(6, 1);
  var coste_idioma = f("idioma" + posicion + "_pe");
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
  actualizarField(pe_actuales, coste_idioma.value, coste_idioma_v);
  coste_idioma.value = coste_idioma_v;
  checkWarningPEActuales(pe_actuales.value, pe_totales.value);
}

function v_idioma_hablado(event) {
  posicion = event.target.name.substr(6, 1);
  var coste_idioma = f("idioma" + posicion + "_pe");
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
  actualizarField(pe_actuales, coste_idioma.value, coste_idioma_v);
  coste_idioma.value = coste_idioma_v;
  checkWarningPEActuales(pe_actuales.value, pe_totales.value);
}

function v_mano_dominante(event) {
  if (event.value == "Ambas") {
    pm_actuales.value = N(pm_actuales.value) + 2;
  } else if (mano_dominante.value == "Ambas") {
    pm_actuales.value -= 2;
  }
  mano_dominante_v = event.value;
  aplicarNegativosArmas();
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
}

/**
 * atr_puntos
 * atr_base
 */

function v_atributo(event) {
  event.value = floor(event.value);

  var atributo = event.target.name.substr(0, 3);
  var atributo_puntos =
    event.target.name == atributo + "_puntos"
      ? event.value
      : f(atributo + "_puntos").value;
  var atributo_base =
    event.target.name == atributo + "_base"
      ? event.value
      : f(atributo + "_base").value;
  var atributo_actual = f(atributo + "_actual");
  var atributo_actual_old_v = atributo_actual.value;
  var atributo_bono = f(atributo + "_bono");
  var atributo_bono_old_v = atributo_bono.value;
  if (
    atributo_puntos < 0 ||
    N(atributo_puntos) + N(atributo_base) > 20 ||
    atributo_base > 20 ||
    atributo_base < 1
  ) {
    event.rc = false;
  } else {
    if (event.target.name == atributo + "_puntos") {
      actualizarField(pm_actuales, f(atributo + "_puntos").value, event.value);
    }
    atributo_actual.value = N(atributo_base) + N(atributo_puntos);

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
        switch (N(fue_actual.value)) {
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
          resetArma(i);
        }

        actualizarField(final_llA, atributo_bono_old_v, atributo_bono.value);

        calculoTotalArmaduras();
        reset_arma = false;
        aplicarNegativosArmas();
        reset_arma = true;
        actualizarTablaDiferencias();
        break;
      case "con":
        var base_vida_old_v = base_vida.value;
        base_vida.value = lista_vida_base_por_nivel[atributo_actual.value - 1];
        actualizarField(totales_vida, base_vida_old_v, base_vida.value);
        actualizarField(actuales_vida, base_vida_old_v, base_vida.value);

        // REG
        reg_base.value = regBasePorCON(atributo_actual.value);

        if (N(nventaja_reg.value) > 0) {
          reg_base.value = N(reg_base.value) + N(nventaja_reg.value * 2);
        }
        if (N(nventaja_reg.value) == -1) {
          actualizarRegeneracionesSegunRegeneracionBase(reg_base.value, 2);
        } else {
          actualizarRegeneracionesSegunRegeneracionBase(reg_base.value, 1);
        }
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
        actualizarVidaPECoste();
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

  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
}

// ARMADURAS

function v_armadura_eq(event) {
  posicion = event.target.name.substr(8, 1);
  var armadura = f("armadura" + posicion);
  if (event.value == "Eq.") {
    if (S(armadura.value) == "-" || noCabeArmadura(posicion)) {
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
  f(event.target.name + "_eq").value = "-";

  resetAtributosArmadura(posicion, event.value);
}

function v_armadura_calidad(event) {
  var posicion = event.target.name.substr(8, 1);
  var armadura = f("armadura" + posicion);
  if (posicion == 0) {
    if (event.value == 0) {
      pm_actuales.value = N(pm_actuales.value) - 2;
    } else {
      pm_actuales.value = N(pm_actuales.value) + 2;
    }
  }

  resetAtributosArmadura(posicion, armadura.value, event.value);
  calculoTotalArmaduras();
}

// ARMAS

function v_arma_mano(event) {
  var mano_a_desequipar = f(event.target.name).value;
  posicion = event.target.name.substr(4, 1);
  var arma = f("arma" + posicion);
  var arma_fue_bono = f("arma" + posicion + "_fue_bono");
  var arma_df = f("arma" + posicion + "_df");
  var arma_db = f("arma" + posicion + "_db");
  var arma_clase = f("arma" + posicion + "_clase");

  if (
    S(arma.value) == "-" ||
    (arma_clase.value == "A. de proyectil" &&
      (event.value == "D" || event.value == "I")) ||
    manoOcupada(event.value, posicion)
  ) {
    event.rc = false;
  } else if (S(event.value) == "-") {
    armas_equipadas[mano_a_desequipar] = null;
    arma_fue_bono.value = fue_bono.value;
    arma_df.value = Math.max(0, N(arma_db.value) + N(arma_fue_bono.value));

    resetArma(posicion);

    if (
      !armas_equipadas["D"] &&
      !armas_equipadas["I"] &&
      !armas_equipadas["D+I"]
    ) {
      // Combate desarmado

      arma0_mano.value = "D+I";

      actualizarIniciativa();
      actualizarEsquiva();
    }
    aplicarNegativosArmas();
    actualizarTablaDiferencias();
  } else {
    if (S(mano_a_desequipar) != "-") {
      resetArma(armas_equipadas[mano_a_desequipar].posicion);
      armas_equipadas[mano_a_desequipar] = null;
    } else {
      resetArma(0);
    }

    arma0_mano.value = "-";

    armas_equipadas[event.value] = {
      posicion: posicion,
      arma: arma.value,
      atq: f("arma" + posicion + "_atq").value,
      par: f("arma" + posicion + "_par").value,
      db: f("arma" + posicion + "_db").value,
      iniciativa: f("arma" + posicion + "_iniciativa").value,
      freq: f("arma" + posicion + "_freq").value,
      clase: arma_clase.value,
      tam: f("arma" + posicion + "_tam").value,
      especial: f("arma" + posicion + "_especial").value,
      calidad: f("arma" + posicion + "_calidad").value,
    };

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
  f(event.target.name + "_mano").value = "-";

  posicion = event.target.name.substr(4, 1);

  resetArma(posicion, event.value);
}

function v_arma_calidad(event) {
  i = event.target.name.substr(4, 1);
  var arma_clase = f("arma" + i + "_clase");
  var arma_mano = f("arma" + i + "_mano");
  var arma = f("arma" + i);

  if (S(arma_clase.value) == "-") {
    event.rc = false;
  } else {
    resetArma(i, arma.value, event.value);
    if (
      arma_mano.value == "I" ||
      arma_mano.value == "D" ||
      arma_mano.value == "D+I"
    ) {
      reset_arma = false;
      aplicarNegativosArma(arma_mano.value);
      reset_arma = true;
    }
  }
}

// TABLA DE ARMAS

function v_aprendizaje_arma_nivel(event) {
  posicion = event.target.name.substr(16, 1);
  var aprendizaje_arma_nivel = f("aprendizaje_arma" + posicion + "_nivel");
  var aprendizaje_arma_peso = f("aprendizaje_arma" + posicion + "_peso");
  var aprendizaje_arma_tipo = f("aprendizaje_arma" + posicion + "_tipo");
  var aprendizaje_arma_pe = f("aprendizaje_arma" + posicion + "_pe");
  if (S(event.value) !== "-") {
    if (
      (N(posicion) > 1 &&
        S(f("aprendizaje_arma" + (posicion - 1) + "_nivel").value) === "-") ||
      S(aprendizaje_arma_tipo.value) === "-" ||
      (S(aprendizaje_arma_peso.value) === "-" &&
        S(aprendizaje_arma_tipo.value) !== "Sin armas")
    ) {
      event.rc = false;
    } else {
      if (S(f(event.target.name).value) !== "-") {
        armas_aprendidas[posicion - 1].nivel = aprendizaje_arma_nivel.value;
        aprendizaje_arma_pe.value = calcularAprendizajeArmaPE(posicion - 1);
      } else {
        armas_aprendidas.push({
          nivel: aprendizaje_arma_nivel.value,
          tipo: aprendizaje_arma_tipo.value,
          peso: aprendizaje_arma_peso.value,
        });
        aprendizaje_arma_pe.value = calcularAprendizajeArmaPE(
          armas_aprendidas.length
        );
      }
    }
  } else {
    if (
      N(posicion) < 7 &&
      S(f("aprendizaje_arma" + (N(posicion) + 1) + "_nivel").value) !== "-"
    ) {
      event.rc = false;
    } else {
      armas_aprendidas.pop();
    }
  }
}

function calcularAprendizajeArmaPE(pos) {
  var coste;
  var similar = false;
  var tipologia;
  if (armas_aprendidas[pos].peso === "Todas") {
    if (armas_aprendidas[pos].nivel === "Alto") {
      coste = 25;
    } else if (armas_aprendidas[pos].nivel === "Medio") {
      coste = 20;
    } else {
      coste = 15;
    }
  } else {
    for (i = 0; i < pos && !similar && !tipologia; i++) {
      if (armas_aprendidas[pos].tipo === armas_aprendidas[i].tipo) {
        if (armas_aprendidas[i].peso == "Todas") {
          tipologia = armas_aprendidas[i].nivel;
        } else if (armas_aprendidas[i].nivel == "Alto") {
          similar = true;
        }
      }
    }
    if (tipologia) {
      if (tipologia == "Bajo") {
        if (armas_aprendidas[pos].nivel === "Bajo") {
          coste = 0;
        } else if (armas_aprendidas[pos].nivel === "Medio") {
          coste = 5;
        } else {
          coste = 10;
        }
      } else if (tipologia == "Medio") {
        if (
          armas_aprendidas[pos].nivel === "Bajo" ||
          armas_aprendidas[pos].nivel === "Medio"
        ) {
          coste = 0;
        } else {
          coste = 5;
        }
      } else {
        coste = 0;
      }
    } else {
      if (armas_aprendidas[pos].nivel == "Bajo") {
        coste = similar ? 0 : 5;
      } else if (armas_aprendidas[pos].nivel == "Medio") {
        coste = 5;
      } else {
        coste = similar ? 5 : 10;
      }
    }
  }

  return coste;
}

function v_tabla_arma(event) {
  posicion = event.target.name.substr(event.target.name.length - 1);
  var coste_pe = f(event.target.name + "_pe");
  var coste_pe_old_v = coste_pe.value;
  var arma_clase = f(event.target.name + "_clase");

  if (
    (N(posicion) > 1 &&
      N(f("tabla_arma" + (posicion - 1) + "_nivel").value) == 0) ||
    (N(posicion) < 7 &&
      N(f("tabla_arma" + (N(posicion) + 1) + "_nivel").value) > 0)
  ) {
    event.rc = false;
  } else {
    if (S(event.value) == "-" || S(f(event.target.name).value) != "-") {
      tablas_arma_aprendidas.pop();
    }

    if (S(event.value) == "-") {
      coste_pe.value = 0;
      arma_clase.value = "-";
    } else if (
      event.value == event.value.toUpperCase()
      // || event.value.substr(0, 3) == "E. "
    ) {
      coste_pe.value = 25;
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
          coste_pe.value = 0;
          encontrado = true;
        } else {
          if (t_arma_clase.value.indexOf("/") > -1) {
            if (
              !similar &&
              arma_clase.value.indexOf(
                t_arma_clase.value.substr(0, t_arma_clase.value.indexOf(" "))
              ) > -1
            ) {
              similar = true;
            }
            if (
              !similar &&
              arma_clase.value.indexOf(
                t_arma_clase.value.substr(t_arma_clase.value.indexOf("/") + 2)
              ) > -1
            ) {
              similar = true;
            }
          } else if (arma_clase.value.indexOf("/") > -1) {
            if (
              !similar &&
              t_arma_clase.value.indexOf(
                arma_clase.value.substr(0, arma_clase.value.indexOf(" "))
              ) > -1
            ) {
              similar = true;
            }
            if (
              !similar &&
              t_arma_clase.value.indexOf(
                arma_clase.value.substr(arma_clase.value.indexOf("/") + 2)
              ) > -1
            ) {
              similar = true;
            }
          } else {
            if (t_arma_clase.value == arma_clase.value && !similar) {
              similar = true;
            }
          }
        }
      }

      if (!encontrado && posicion > 1) {
        coste_pe.value = similar ? 5 : 10;
      }
    }
    if (posicion > 1) {
      actualizarField(pe_actuales, coste_pe_old_v, coste_pe.value);
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

  checkWarningPEActuales(pe_actuales.value, pe_totales.value);
}

function checkWarningPEActuales(pe_act, pe_tot) {
  if (pe_tot - pe_act >= 0) {
    warning_pe_actuales.value = "";
  } else {
    warning_pe_actuales.value = "_ _ _ _ _ _ _ _";
  }
}

function checkWarningPMActuales(pm_act, pm_tot) {
  if (pm_tot - pm_act >= 0) {
    warning_pm_actuales.value = "";
  } else {
    warning_pm_actuales.value = "_ _ _ _ _ _ _ _ _ _";
  }
}

function checkWarningCombate(event) {
  var pe_llA_v =
    event && event.target.name == "pe_llA" ? event.value : pe_llA.value;
  var pe_ataque_v =
    event && event.target.name == "pe_ataque" ? event.value : pe_ataque.value;
  var pe_parada_v =
    event && event.target.name == "pe_parada" ? event.value : pe_parada.value;
  var pe_esquiva_v =
    event && event.target.name == "pe_esquiva" ? event.value : pe_esquiva.value;
  var suma_combate =
    N(pe_llA_v) + N(pe_ataque_v) + N(pe_parada_v) + N(pe_esquiva_v);
  pe_actuales_combate.value = suma_combate;
  if (pe_totales_combate.value - pe_actuales_combate.value >= 0) {
    warning_combate.value = "";
  } else {
    warning_combate.value =
      "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";
  }
}

// LLEVAR ARMADURA

function v_pe_llA(event) {
  event.value = floor(event.value);
  if (event.value >= 0) {
    actualizarFinal(event);
    actualizarField(pe_actuales, pe_llA.value, event.value);
    calculoTotalArmaduras();
    checkWarningCombate(event);
    checkWarningPEActuales(pe_actuales.value, pe_totales.value);
  } else {
    event.rc = false;
  }

  if (!event.value) {
    event.value = 0;
  }
}

function v_nventaja_llA(event) {
  var pventaja_llA_old_v = pventaja_llA.value;
  pventaja_llA.value = nivel.value * event.value * 5;
  actualizarField(final_llA, pventaja_llA_old_v, pventaja_llA.value);
  actualizarField(pm_actuales, nventaja_llA.value * 2, event.value * 2);
  calculoTotalArmaduras();
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
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

function v_pe_vida(event) {
  event.value = floor(event.value);

  if (event.value < 0) {
    event.rc = false;
  } else {
    actualizarField(actuales_vida, pe_vida.value, event.value);
    actualizarField(totales_vida, pe_vida.value, event.value);
    actualizarVidaPECoste(event.value);
  }
}

function actualizarVidaPECoste(pe_vida_p) {
  var pe_vida_v = pe_vida_p || pe_vida_p == 0 ? pe_vida_p : pe_vida.value;
  var pe_vida_coste_old_v = pe_vida_coste.value;
  switch (N(con_actual.value)) {
    case 1:
      pe_vida_coste.value = 15 * pe_vida_v;
      break;
    case 2:
    case 3:
      pe_vida_coste.value = 14 * pe_vida_v;
      break;
    case 4:
    case 5:
      pe_vida_coste.value = 13 * pe_vida_v;
      break;
    case 6:
    case 7:
      pe_vida_coste.value = 12 * pe_vida_v;
      break;
    case 8:
    case 9:
      pe_vida_coste.value = 11 * pe_vida_v;
      break;
    case 10:
    case 11:
      pe_vida_coste.value = 10 * pe_vida_v;
      break;
    case 12:
    case 13:
      pe_vida_coste.value = 9 * pe_vida_v;
      break;
    case 14:
    case 15:
      pe_vida_coste.value = 8 * pe_vida_v;
      break;
    case 16:
    case 17:
      pe_vida_coste.value = 7 * pe_vida_v;
      break;
    case 18:
    case 19:
      pe_vida_coste.value = 6 * pe_vida_v;
      break;
    case 20:
      pe_vida_coste.value = 5 * pe_vida_v;
      break;
    default:
      break;
  }
  actualizarField(pe_actuales, pe_vida_coste_old_v, pe_vida_coste.value);

  checkWarningPEActuales(pe_actuales.value, pe_totales.value);
}

function v_nventaja_vida(event) {
  actualizarField(
    pventaja_vida,
    nventaja_vida.value * nivel.value * 2,
    event.value * nivel.value * 2
  );
  actualizarField(pm_actuales, nventaja_vida.value * 2, event.value * 2);
  actualizarField(
    actuales_vida,
    nventaja_vida.value * nivel.value * 2,
    event.value * nivel.value * 2
  );
  actualizarField(
    totales_vida,
    nventaja_vida.value * nivel.value * 2,
    event.value * nivel.value * 2
  );
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
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

function v_pe_ataque(event) {
  event.value = floor(event.value);

  if (event.value >= 0) {
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
    actualizarField(pe_actuales, pe_ataque.value, event.value);
    checkWarningCombate(event);
    checkWarningPEActuales(pe_actuales.value, pe_totales.value);
  } else {
    event.rc = false;
  }
}

function v_pe_esquiva(event) {
  event.value = floor(event.value);

  if (event.value >= 0) {
    actualizarFinal(event);
    actualizarField(pe_actuales, pe_esquiva.value, event.value);
    checkWarningCombate(event);
    checkWarningPEActuales(pe_actuales.value, pe_totales.value);
  } else {
    event.rc = false;
  }
}

function v_pe_parada(event) {
  event.value = floor(event.value);
  if (event.value >= 0) {
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

    actualizarField(pe_actuales, pe_parada.value, event.value);
    checkWarningCombate(event);
    checkWarningPEActuales(pe_actuales.value, pe_totales.value);
  } else {
    event.rc = false;
  }
}

function v_nventaja_combate(event) {
  var pventaja = f("p" + event.target.name.substr(1));
  var pventaja_old_v = pventaja.value;
  pventaja.value = Math.min(50, event.value * 5 * nivel.value);

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

  actualizarField(pm_actuales, f(event.target.name).value * 2, event.value * 2);
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
}

function v_esp_combate(event) {
  event.value = floor(event.value);

  if (isNaN(event.value)) {
    event.rc = false;
  } else {
    var final_combate = f(
      "final" + event.target.name.substr(event.target.name.indexOf("_"))
    ).value;
    if (S(final_combate) == "-") {
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
    if (N(actuales_vida.value) + N(event.value) > totales_vida.value) {
      actuales_vida.value = totales_vida.value;
    } else {
      actuales_vida.value = N(actuales_vida.value) + N(event.value);
    }
    event.value = "-";
  } else {
    event.rc = false;
  }
}

function v_op_vida_suma(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    if (N(actuales_vida.value) + N(event.value) > totales_vida.value) {
      actuales_vida.value = totales_vida.value;
    } else {
      actuales_vida.value = N(actuales_vida.value) + N(event.value);
    }
    event.value = "+";
  } else {
    event.rc = false;
  }
}

function v_op_bronce_1(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    bronce.value = N(event.value) + N(bronce.value);
    event.value = "-";
  } else {
    event.rc = false;
  }
}

function v_op_bronce_2(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    bronce.value = N(event.value) + N(bronce.value);
    event.value = "+";
  } else {
    event.rc = false;
  }
}

function v_op_plata_1(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    plata.value = N(event.value) + N(plata.value);
    event.value = "-";
  } else {
    event.rc = false;
  }
}

function v_op_plata_2(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    plata.value = N(event.value) + N(plata.value);
    event.value = "+";
  } else {
    event.rc = false;
  }
}

function v_op_oro_1(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    oro.value = N(event.value) + N(oro.value);
    event.value = "-";
  } else {
    event.rc = false;
  }
}

function v_op_oro_2(event) {
  event.value = floor(event.value);

  if (!isNaN(event.value)) {
    oro.value = N(event.value) + N(oro.value);
    event.value = "+";
  } else {
    event.rc = false;
  }
}

function v_bronce(event) {
  event.value = floor(event.value);

  if (event.value >= 100) {
    var plata_up = Math.floor(event.value / 100);
    plata.value = N(plata.value) + N(plata_up);
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
    oro.value = N(oro.value) + N(oro_up);
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

function v_pe_habilidad(event) {
  var habilidad = event.target.name.substr(3);
  var hab_mult = f("mult_" + habilidad);
  var hab_final = f("final_" + habilidad);
  var hab_base = f("base_" + habilidad);
  var hab_base_old_v = hab_base.value;
  var mult_rama = f("mult_" + getRama(habilidad));
  event.value = floor(event.value);
  if (event.value > 0) {
    if (hab_mult.value != "x2" && mult_rama.value != "x2") {
      hab_base.value = N(event.value);
    } else {
      hab_base.value = 2 * N(event.value);
    }
  } else {
    event.value = 0;
    hab_base.value = -30;
  }
  if (event.rc) {
    actualizarField(hab_final, hab_base_old_v, hab_base.value);
    actualizarField(pe_actuales, f(event.target.name).value, event.value);
    checkWarningPEActuales(pe_actuales.value, pe_totales.value);
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
    var hab_pe = f("pe_" + event.target.name.substr(5));
    var rama_v = getRama(hab);
    var rama_mult = f("mult_" + rama_v);
    if (rama_mult.value == "x2" && event.value == "x2") {
      event.rc = false;
    } else {
      if (event.value != "x2") {
        if (hab_pe.value > 0) {
          if (rama_mult.value != "x2") {
            hab_base.value = hab_pe.value;
          } else {
            hab_base.value = hab_pe.value * 2;
          }
        } else {
          hab_base.value = -30;
        }
        pm_actuales.value = N(pm_actuales.value) - 2;
      } else {
        if (hab_pe.value > 0) {
          hab_base.value = hab_pe.value * 2;
        } else {
          hab_base.value = -30;
        }
        pm_actuales.value = N(pm_actuales.value) + 2;
      }
      actualizarField(hab_final, hab_base_old_v, hab_base.value);
      checkWarningPMActuales(pm_actuales.value, pm_totales.value);
    }
  }
}

function v_mult_rama(event) {
  lista_habilidades[event.target.name.substr(5)].forEach(function (hab) {
    var hab_base = f("base_" + hab.habilidad);
    var hab_pe = f("pe_" + hab.habilidad);
    var hab_base_old_v = hab_base.value;
    var hab_final = f("final_" + hab.habilidad);
    var hab_mult = f("mult_" + hab.habilidad);
    if (hab_mult.value == "x2") {
      validar_rama = false;
      hab_mult.value = "-";
      pm_actuales.value = N(pm_actuales.value) - 2;
      validar_rama = true;
    }
    if (hab_base.value > 0) {
      if (event.value != "x2") {
        hab_base.value = hab_pe.value;
      } else {
        hab_base.value = hab_pe.value * 2;
      }
      actualizarField(hab_final, hab_base_old_v, hab_base.value);
    }
  });
  if (event.value != "x2") {
    pm_actuales.value = N(pm_actuales.value) - 4;
  } else {
    pm_actuales.value = N(pm_actuales.value) + 4;
  }
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
}

function v_nventaja_rama(event) {
  lista_habilidades[event.target.name.substr(9)].forEach(function (hab) {
    var hab_pventaja = f("pventaja_" + hab.habilidad);
    var hab_pventaja_old_v = hab_pventaja.value;
    var hab_final = f("final_" + hab.habilidad);
    actualizarField(
      hab_pventaja,
      nivel.value * f(event.target.name).value * 5,
      nivel.value * event.value * 5
    );
    actualizarField(hab_final, hab_pventaja_old_v, hab_pventaja.value);
  });
  var nventaja_pventaja = [0, 4, 6];
  actualizarField(
    pm_actuales,
    nventaja_pventaja[N(f(event.target.name).value)],
    nventaja_pventaja[N(event.value)]
  );
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
}

function v_nventaja_habilidad(event) {
  var hab_pventaja = f("pventaja" + event.target.name.substr(8));
  var hab_final = f("final" + event.target.name.substr(8));

  actualizarField(
    hab_pventaja,
    10 * nivel.value * f(event.target.name).value,
    10 * nivel.value * event.value
  );
  actualizarField(
    hab_final,
    10 * nivel.value * f(event.target.name).value,
    10 * nivel.value * event.value
  );

  if (event.value == 1) {
    num_ventajas_hab.value = N(num_ventajas_hab.value) + 1;
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
    num_ventajas_hab.value = N(num_ventajas_hab.value) - 1;
  }
  if (num_ventajas_hab.value >= 0 && num_ventajas_hab.value <= 5) {
    num_ventajas_gratis.value = num_ventajas_hab.value;
  }

  actualizarField(pm_actuales, cost_old, cost_new);
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
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
  switch (N(event.value)) {
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
  actualizarField(pm_actuales, f(event.target.name).value * 2, event.value * 2);
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);

  actualizarIniciativa();
}

function actualizarIniciativa() {
  if (armas_equipadas["D"] && !armas_equipadas["I"]) {
    arma_iniciativa_total.value = armas_equipadas["D"].iniciativa;
  } else if (!armas_equipadas["D"] && armas_equipadas["I"]) {
    arma_iniciativa_total.value = armas_equipadas["I"].iniciativa;
  } else if (armas_equipadas["I"] != null && armas_equipadas["D"] != null) {
    arma_iniciativa_total.value =
      N(armas_equipadas["I"].iniciativa) + N(armas_equipadas["D"].iniciativa);
  } else if (armas_equipadas["D+I"] != null) {
    arma_iniciativa_total.value = armas_equipadas["D+I"].iniciativa;
  } else {
    arma_iniciativa_total.value = arma0_iniciativa.value;
  }
  final_iniciativa.value =
    N(base_iniciativa.value) +
    N(des_bono.value) +
    N(agi_bono.value) +
    N(arma_iniciativa_total.value) +
    N(armadura_iniciativa_total.value) +
    N(pventaja_iniciativa.value) +
    N(esp_iniciativa.value);
}

function actualizarMovimiento() {
  var mov_total =
    N(agi_actual.value) + N(floor(armadura_iniciativa_total.value / 10));

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
  if (S(equipo_ataque_d.value) == "-") {
    final_ataque_d.value = "-";
  } else {
    final_ataque_d.value =
      N(pe_ataque.value) +
      N(des_bono.value) +
      N(pventaja_ataque.value) +
      N(equipo_ataque_d.value) +
      N(esp_ataque_d.value);
  }

  if (S(equipo_ataque_i.value) == "-") {
    final_ataque_i.value = "-";
  } else {
    final_ataque_i.value =
      N(pe_ataque.value) +
      N(des_bono.value) +
      N(pventaja_ataque.value) +
      N(equipo_ataque_i.value) +
      N(esp_ataque_i.value);
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
  if (S(equipo_parada_d.value) == "-") {
    final_parada_d.value = "-";
  } else {
    final_parada_d.value =
      N(pe_parada.value) +
      N(des_bono.value) +
      N(pventaja_parada.value) +
      N(equipo_parada_d.value) +
      N(esp_parada_d.value);
  }

  if (S(equipo_parada_i.value) == "-") {
    final_parada_i.value = "-";
  } else {
    final_parada_i.value =
      N(pe_parada.value) +
      N(des_bono.value) +
      N(pventaja_parada.value) +
      N(equipo_parada_i.value) +
      N(esp_parada_i.value);
  }
}

function actualizarEsquiva() {
  final_esquiva.value =
    N(pe_esquiva.value) +
    N(agi_bono.value) +
    N(pventaja_esquiva.value) +
    N(esp_esquiva.value);
}

function actualizarTablaDiferencias() {
  // Actualizar tablas diferencias
  for (i = 10; i <= 200; i = i + 10) {
    var a1 = f("a1_" + i); // Izquierda
    var a2 = f("a2_" + i); // Derecha
    if (armas_equipadas["D+I"]) {
      // D+I ocupado
      a1.value = Math.round(
        (f("arma" + armas_equipadas["D+I"].posicion + "_df").value * i) / 500
      );
      a2.value = Math.round(
        (f("arma" + armas_equipadas["D+I"].posicion + "_df").value * i) / 500
      );
    } else if (armas_equipadas["I"]) {
      // I ocupado
      a1.value = Math.round(
        (f("arma" + armas_equipadas["I"].posicion + "_df").value * i) / 500
      );
      if (armas_equipadas["D"]) {
        // D ocupado
        a2.value = Math.round(
          (f("arma" + armas_equipadas["D"].posicion + "_df").value * i) / 500
        );
      } else {
        // D libre
        a2.value = "-";
      }
    } else if (armas_equipadas["D"]) {
      // D ocupado y I libre
      a1.value = "-";
      a2.value = Math.round(
        (f("arma" + armas_equipadas["D"].posicion + "_df").value * i) / 500
      );
    } else {
      // I y D libre
      a1.value = Math.round((arma0_df.value * i) / 500);
      a2.value = Math.round((arma0_df.value * i) / 500);
    }
  }

  actualizarDiffX();
}

function actualizarDiffX(event) {
  var diff_x_e = event ? event : diff_x;
  if (armas_equipadas["D+I"]) {
    // D+I ocupado
    a1_x.value = Math.round(
      (f("arma" + armas_equipadas["D+I"].posicion + "_df").value *
        diff_x_e.value) /
        500
    );
    a2_x.value = Math.round(
      (f("arma" + armas_equipadas["D+I"].posicion + "_df").value *
        diff_x_e.value) /
        500
    );
  } else if (armas_equipadas["I"]) {
    // I ocupado
    a1_x.value = Math.round(
      (f("arma" + armas_equipadas["I"].posicion + "_df").value *
        diff_x_e.value) /
        500
    );
    if (armas_equipadas["D"]) {
      // D ocupado
      a2_x.value = Math.round(
        (f("arma" + armas_equipadas["D"].posicion + "_df").value *
          diff_x_e.value) /
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
      (f("arma" + armas_equipadas["D"].posicion + "_df").value *
        diff_x_e.value) /
        500
    );
  } else {
    // I y D libre
    a1_x.value = Math.round(
      (Math.max(0, arma0_df.value) * diff_x_e.value) / 500
    );
    a2_x.value = Math.round(
      (Math.max(0, arma0_df.value) * diff_x_e.value) / 500
    );
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
  var armadura_reqarm;

  var yelmo_advertir;
  var yelmo_reqarm;

  [
    armaduras_equipadas.Dura,
    armaduras_equipadas.Blanda[1],
    armaduras_equipadas.Blanda[2],
  ].forEach(function (armadura_array) {
    if (armadura_array) {
      armadura_mov = f("armadura" + armadura_array.posicion + "_mov");
      armadura_reqarm = f("armadura" + armadura_array.posicion + "_reqarm");
      armaduras_mov_total += N(armadura_mov.value);
      armaduras_reqarm_total += N(armadura_reqarm.value);

      num_armaduras++;
    }
  });

  if (num_armaduras > 0) {
    var diff_reqarm_armaduras = final_llA.value - armaduras_reqarm_total;
    if (diff_reqarm_armaduras > 0) {
      armaduras_mov_total = Math.min(
        0,
        N(armaduras_mov_total) + floor(diff_reqarm_armaduras / 50) * 10
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
      yelmo_reqarm = f("armadura" + yelmo_array.posicion + "_reqarm");
      yelmos_advertir_total += N(yelmo_advertir.value);
      yelmos_reqarm_total += N(yelmo_reqarm.value);

      num_yelmos++;
    }
  });

  if (num_yelmos > 0) {
    var diff_reqarm_yelmos = final_llA.value - yelmos_reqarm_total;
    if (diff_reqarm_yelmos > 0) {
      yelmos_advertir_total = Math.min(
        0,
        N(yelmos_advertir_total) + floor(diff_reqarm_yelmos / 50) * 10
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
    total = N(total) + lista[i] / 2;
    i++;
  }
  var res = lista.length == 0 ? 0 : N(lista[0]) + floor(total / 10) * 10;
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
  reg_base.value = regBasePorCON(con_actual.value);

  if (N(event.value) > 0) {
    reg_base.value = N(reg_base.value) + N(event.value * 2);
  }

  actualizarField(pm_actuales, nventaja_reg.value * 2, event.value * 2);
  if (N(event.value) == -1) {
    actualizarRegeneracionesSegunRegeneracionBase(reg_base.value, 2);
  } else {
    actualizarRegeneracionesSegunRegeneracionBase(reg_base.value, 1);
  }
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
}

function actualizarRegeneracionesSegunRegeneracionBase(reg_base_v, divisor) {
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
  reg_max.value = Math.floor(reg_max.value / divisor);
  reg_normal.value = Math.floor(reg_normal.value / divisor);
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
  checkWarningPMActuales(pm_actuales.value, pm_totales.value);
}

function v_pe_totales(event) {
  event.value = floor(event.value);

  if (event.value < 250) {
    event.value = 250;
  }

  if (isNaN(event.value)) {
    event.rc = false;
  } else {
    nivel.value = floor((event.value - 250) / 50);
    pm_totales.value = 6 + N(nivel.value);
    pe_totales_combate.value = floor(event.value / 2);

    if (nventaja_res_fisica.value < 0) {
      final_res_fisica.value = (30 + nivel.value * 5 + N(con_bono.value)) / 2;
    } else {
      actualizarField(final_res_fisica, base_res.value, 30 + nivel.value * 5);
    }
    if (nventaja_res_venenos.value < 0) {
      final_res_venenos.value = (30 + nivel.value * 5 + N(con_bono.value)) / 2;
    } else {
      actualizarField(final_res_venenos, base_res.value, 30 + nivel.value * 5);
    }
    if (nventaja_res_enfermedades.value < 0) {
      final_res_enfermedades.value =
        (30 + nivel.value * 5 + N(con_bono.value)) / 2;
    } else {
      actualizarField(
        final_res_enfermedades,
        base_res.value,
        30 + nivel.value * 5
      );
    }
    if (nventaja_res_frio.value < 0) {
      final_res_frio.value = (30 + nivel.value * 5 + N(con_bono.value)) / 2;
    } else {
      actualizarField(final_res_frio, base_res.value, 30 + nivel.value * 5);
    }
    if (nventaja_res_calor.value < 0) {
      final_res_calor.value = (30 + nivel.value * 5 + N(con_bono.value)) / 2;
    } else {
      actualizarField(final_res_calor, base_res.value, 30 + nivel.value * 5);
    }

    base_res.value = 30 + nivel.value * 5;

    if (nventaja_llA.value > 0) {
      actualizarField(
        final_llA,
        pventaja_llA.value,
        nventaja_llA.value * nivel.value * 5
      );
      pventaja_llA.value = nventaja_llA.value * nivel.value * 5;
    }

    if (nventaja_esquiva.value > 0) {
      actualizarField(
        final_esquiva,
        pventaja_esquiva.value,
        Math.min(50, nivel.value * 5)
      );
      pventaja_esquiva.value = Math.min(50, nivel.value * 5);
    }

    if (nventaja_ataque.value > 0) {
      if (S(final_ataque_d.value) != "-" && S(equipo_ataque_d.value) != "-") {
        actualizarField(
          final_ataque_d,
          pventaja_ataque.value,
          Math.min(50, nivel.value * 5)
        );
      }
      if (S(final_ataque_i.value) != "-" && S(equipo_ataque_i.value) != "-") {
        actualizarField(
          final_ataque_i,
          pventaja_ataque.value,
          Math.min(50, nivel.value * 5)
        );
      }
      pventaja_ataque.value = Math.min(50, nivel.value * 5);
    }

    if (nventaja_parada.value > 0) {
      if (S(final_parada_d.value) != "-" && S(equipo_parada_d.value) != "-") {
        actualizarField(
          final_parada_d,
          pventaja_parada.value,
          Math.min(50, nivel.value * 5)
        );
      }
      if (S(final_parada_i.value) != "-" && S(equipo_parada_i.value) != "-") {
        actualizarField(
          final_parada_i,
          pventaja_parada.value,
          Math.min(50, nivel.value * 5)
        );
      }
      pventaja_parada.value = Math.min(50, Math.min(50, nivel.value * 5));
    }

    if (nventaja_vida.value > 0) {
      actualizarField(
        actuales_vida,
        pventaja_vida.value,
        nventaja_vida.value * nivel.value * 2
      );
      actualizarField(
        totales_vida,
        pventaja_vida.value,
        nventaja_vida.value * nivel.value * 2
      );
      pventaja_vida.value = nventaja_vida.value * nivel.value * 2;
    }

    actualizarField(
      final_iniciativa,
      base_iniciativa.value,
      15 + N(5 * nivel.value)
    );

    base_iniciativa.value = 15 + N(5 * nivel.value);

    for (var rama in lista_habilidades) {
      var pventaja_rama = 0;
      var nventaja_rama = f("nventaja_" + rama);
      if (nventaja_rama.value > 0) {
        pventaja_rama = 5 * nventaja_rama.value * nivel.value;
      }
      lista_habilidades[rama].forEach(function (hab) {
        var nventaja_hab = f("nventaja_" + hab.habilidad);
        if (nventaja_hab.value > 0 || nventaja_rama.value > 0) {
          var pventaja_hab = f("pventaja_" + hab.habilidad);
          var pventaja_hab_old_v = pventaja_hab.value;
          var final_hab = f("final_" + hab.habilidad);
          pventaja_hab.value =
            N(10 * nivel.value * nventaja_hab.value) + N(pventaja_rama);
          final_hab.value =
            final_hab.value - N(pventaja_hab_old_v) + N(pventaja_hab.value);
        }
      });
    }
    checkWarningPEActuales(pe_actuales.value, event.value);
    checkWarningPMActuales(pm_actuales.value, pm_totales.value);
    checkWarningCombate();
  }
}

function resetArma(posicion, arma_nueva, calidad) {
  var arma = arma_nueva ? arma_nueva : f("arma" + posicion).value;
  var arma_par = f("arma" + posicion + "_par");
  var arma_atq = f("arma" + posicion + "_atq");
  var arma_iniciativa = f("arma" + posicion + "_iniciativa");
  var arma_clase = f("arma" + posicion + "_clase");
  var arma_df = f("arma" + posicion + "_df");
  var arma_db = f("arma" + posicion + "_db");
  var arma_fue_bono = f("arma" + posicion + "_fue_bono");
  var arma_freq = f("arma" + posicion + "_freq");
  var arma_tam = f("arma" + posicion + "_tam");
  var arma_especial = f("arma" + posicion + "_especial");
  var arma_mano = f("arma" + posicion + "_mano").value;
  for (var mano in armas_equipadas) {
    if (armas_equipadas[mano] && armas_equipadas[mano].posicion == posicion) {
      arma_mano = mano;
    }
  }
  var arma_calidad = calidad
    ? calidad
    : f("arma" + posicion + "_calidad").value;

  if (S(arma) == "-") {
    arma_atq.value = "-";
    arma_par.value = "-";
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
        arma_atq.value = N(l_arma.arma_atq) + N(5 * arma_calidad);
        arma_par.value = N(l_arma.arma_par) + N(5 * arma_calidad);
        arma_db.value = N(l_arma.arma_db) + N(10 * arma_calidad);
        arma_iniciativa.value = N(l_arma.arma_iniciativa) + N(5 * arma_calidad);
        arma_freq.value = l_arma.arma_freq;
        arma_clase.value = l_arma.arma_clase;
        arma_tam.value = l_arma.arma_tam;
        arma_especial.value = l_arma.arma_especial;
        arma_fue_bono.value =
          arma_mano == "D+I" && arma_clase.value != "Sin armas"
            ? N(fue_bono.value) + 10
            : fue_bono.value;
        arma_df.value = Math.max(0, N(arma_db.value) + N(arma_fue_bono.value));

        return true;
      }
    });
  }
}

function resetAtributosArmadura(posicion, armadura_nueva, calidad_nueva) {
  var armadura = armadura_nueva
    ? armadura_nueva
    : f("armadura" + posicion).value;
  var armadura_def = f("armadura" + posicion + "_def");
  var armadura_reqarm = f("armadura" + posicion + "_reqarm");
  var armadura_advertir = f("armadura" + posicion + "_advertir");
  var armadura_mov = f("armadura" + posicion + "_mov");
  var armadura_dureza = f("armadura" + posicion + "_dureza");
  var armadura_calidad = calidad_nueva
    ? calidad_nueva
    : f("armadura" + posicion + "_calidad").value;

  if (S(armadura) == "-") {
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
        armadura_def.value = N(l_armadura.def) + N(10 * armadura_calidad);
        armadura_reqarm.value = Math.max(
          0,
          l_armadura.reqarm - 5 * armadura_calidad
        );
        armadura_advertir.value =
          S(l_armadura.advertir) == "-"
            ? "-"
            : Math.min(0, N(l_armadura.advertir) + N(5 * armadura_calidad));
        armadura_mov.value =
          S(l_armadura.mov) == "-"
            ? "-"
            : Math.min(0, N(l_armadura.mov) + N(5 * armadura_calidad));
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
  var arma_fue_bono = f("arma" + posicion + "_fue_bono");
  var arma_db = f("arma" + posicion + "_db");
  var arma_df = f("arma" + posicion + "_df");

  if (reset_arma) {
    resetArma(posicion);
  }

  if (S(arma_freq.value).indexOf("/") > -1) {
    if (mano_v == "D" || mano_v == "I") {
      arma_freq.value = S(arma_freq.value).substr(
        S(arma_freq.value).indexOf("/") + 2
      );
    } else if (mano_v == "D+I") {
      arma_freq.value = S(arma_freq.value).substr(
        0,
        S(arma_freq.value).indexOf(" ")
      );
    }
  }
  // Negativos por no tener fuerza requerida
  if (S(arma_freq.value) != "-") {
    var fue_req_diff = arma_freq.value - fue_actual.value;
    if (fue_req_diff > 0) {
      arma_atq.value -= 10 * fue_req_diff;
      arma_par.value -= 5 * fue_req_diff;
      arma_fue_bono.value -= 10 * fue_req_diff;
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
  }
  // Negativos según el tamaño si no se usa con las dos manos

  if (
    (mano_v === "D" && armas_equipadas["I"]) ||
    (mano_v === "I" && armas_equipadas["D"]) ||
    arma_clase.value == "Escudo"
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
  if (mano_v == "D") {
    equipo_parada_d.value = arma_par.value;
    equipo_ataque_d.value = arma_atq.value;
    final_ataque_d.value =
      N(pe_ataque.value) +
      N(des_bono.value) +
      N(pventaja_ataque.value) +
      N(equipo_ataque_d.value) +
      N(esp_ataque_d.value);
    final_parada_d.value =
      N(pe_parada.value) +
      N(des_bono.value) +
      N(pventaja_parada.value) +
      N(equipo_parada_d.value) +
      N(esp_parada_d.value);
  } else if (mano_v == "I") {
    equipo_parada_i.value = arma_par.value;
    equipo_ataque_i.value = arma_atq.value;
    final_ataque_i.value =
      N(pe_ataque.value) +
      N(des_bono.value) +
      N(pventaja_ataque.value) +
      N(equipo_ataque_i.value) +
      N(esp_ataque_i.value);
    final_parada_i.value =
      N(pe_parada.value) +
      N(des_bono.value) +
      N(pventaja_parada.value) +
      N(equipo_parada_i.value) +
      N(esp_parada_i.value);
  } else {
    equipo_parada_i.value = arma_par.value;
    equipo_ataque_i.value = arma_atq.value;
    equipo_parada_d.value = arma_par.value;
    equipo_ataque_d.value = arma_atq.value;
    final_ataque_i.value =
      N(pe_ataque.value) +
      N(des_bono.value) +
      N(pventaja_ataque.value) +
      N(equipo_ataque_i.value) +
      N(esp_ataque_i.value);
    final_ataque_d.value =
      N(pe_ataque.value) +
      N(des_bono.value) +
      N(pventaja_ataque.value) +
      N(equipo_ataque_d.value) +
      N(esp_ataque_d.value);
    final_parada_i.value =
      N(pe_parada.value) +
      N(des_bono.value) +
      N(pventaja_parada.value) +
      N(equipo_parada_i.value) +
      N(esp_parada_i.value);
    final_parada_d.value =
      N(pe_parada.value) +
      N(des_bono.value) +
      N(pventaja_parada.value) +
      N(equipo_parada_d.value) +
      N(esp_parada_d.value);
  }

  arma_df.value = Math.max(0, arma_db.value + arma_fue_bono.value);
  actualizarTablaDiferencias();
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
      reqarm_total += N(yelmo_array.reqarm);
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
      reqarm_total += N(armadura_array.reqarm);
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
    N(base_habilidad.value) +
    N(bono) +
    N(pventaja_habilidad.value) +
    N(equipo_habilidad.value);
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
      yelmos_equipados.Blando[yelmos_equipados.Blando[1] ? 2 : 1] =
        armadura_yelmo;
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
  field.value = N(field.value) + N(new_value) - N(old_value);
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

function N(value) {
  return Number(value);
}

function S(value) {
  return String(value);
}

function B(value) {
  return Boolean(value);
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
