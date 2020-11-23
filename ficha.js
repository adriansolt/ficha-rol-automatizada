// Validate (exp_actual)
/*
var loop = true;
while(event.value > Number(this.getField("exp_totales").value) && loop) {
  var nRslt = app.alert ("Has sobrepasado los puntos de experiencia.\n\n"+"¿Quieres subir de nivel?", 2, 2, "Submit Validation");
    if(nRslt === 4) {
        this.getField("nivel").value++;
        event.value = event.value - Number(this.getField("exp_totales").value);
    } else {
      loop = false;
    }
}
loop = true;
var exp_actual = event.value;
while(exp_actual < 0 && Number(this.getField("nivel").value) >= 0 && loop) {
  var nRslt = app.alert ("Has introducido un valor negativo.\n\n"+"¿Quieres bajar de nivel?", 2, 2, "Submit Validation");
    if(nRslt === 4) {
        this.getField("nivel").value--;
        event.value = Number(event.value) + Number(this.getField("exp_totales").value);
        exp_actual = Number(event.value);
    } else {
      loop = false;
    }
}
*/

// Validate (pd_ataque)
/*
var pd_totales = this.getField("pd_totales");
var limite_pd_combate = Number(pd_totales.value) / 2;
var pd_ataque = this.getField("pd_ataque");
var pd_parada = this.getField("pd_parada");
if(Number(event.value) <= 0) {
  event.value = 0;
} else if((Number(event.value) + pd_parada.value) > Number(limite_pd_combate)) {
  event.value = pd_ataque.value;
}
*/

// Validate (pd_parada)
/*
var pd_totales = this.getField("pd_totales");
var limite_pd_combate = Number(pd_totales.value) / 2;
var pd_ataque = this.getField("pd_ataque");
var pd_parada = this.getField("pd_parada");
if(Number(event.value) <= 0) {
  event.value = 0;
} else if((Number(event.value) + pd_ataque.value) > Number(limite_pd_combate)) {
  event.value = pd_parada.value;
}
*/

// Validate (pd_llA)
/*
var pd_totales = this.getField("pd_totales");
var limite_pd_llA = Number(pd_totales.value) / 10;
var pd_llA = this.getField("pd_llA");
if(Number(event.value) <= 0) {
  event.value = 0;
} else if(Number(event.value) > Number(limite_pd_llA)) {
  event.value = pd_llA.value;
}
*/

var lista_habilidades = [
  "acrobacias",
  "atletismo",
  "montar",
  "nadar",
  "trepar",
  "saltar",
  "frialdad",
  "resdolor",
  "escuchar",
  "ver",
  "buscar",
  "rastrear",
  "animales",
  "ciencia",
  "herbolaria",
  "historia",
  "ley",
  "medicina",
  "memorizar",
  "navegacion",
  "ocultismo",
  "tasacion",
  "comerciar",
  "callejear",
  "estilo",
  "intimidar",
  "etiqueta",
  "persuasion",
  "advsocial",
  "cerrajeria",
  "disfraz",
  "ocultarse",
  "robo",
  "sigilo",
  "tramperia",
  "venenos",
  "arte",
  "baile",
  "forja",
  "musica",
  "tmanos",
  "alquimia",
  "sastreria",
  "joyeria",
  "caligrafia",
  "mates",
  "cocina",
];
var i = 0;
var j = 0;
var k = 0;

var lista_atr = ["agi", "con", "des", "fue", "int", "per", "pod", "vol"];
var lista_bonos = [
  -30,
  -20,
  -10,
  -5,
  0,
  5,
  5,
  10,
  10,
  15,
  20,
  20,
  25,
  25,
  30,
  35,
  35,
  40,
  40,
  45,
];
var puntos_gastados = 3 + Math.floor(Number(this.getField("nivel").value) / 2);
i = 0;
while (i < lista_atr.length) {
  var atr = lista_atr[i];
  var atr_actual = this.getField(atr + "_actual");
  var atr_puntos = this.getField(atr + "_puntos");
  atr_actual.value =
    Number(this.getField(atr + "_base").value) + atr_puntos.value;
  this.getField(atr + "_bono").value =
    lista_bonos[Number(atr_actual.value) - 1];
  puntos_gastados -= atr_puntos.value;
  i++;
}

this.getField("atr_restante").value = Number(puntos_gastados);

// Nivel
var base = Number(this.getField("nivel").value) == 0 ? 400 : 500;
this.getField("pd_totales").value =
  Number(this.getField("nivel").value) * 100 + base;

// Categoria
var categoria = this.getField("categoria");
var nivel = this.getField("nivel");
var coste_vida = this.getField("coste_vida");
var cat_vida = this.getField("cat_vida");
var cat_turno = this.getField("cat_turno");

var coste_llA = this.getField("coste_llA");

var cat_ataque = this.getField("cat_ataque");
var cat_parada = this.getField("cat_parada");
var cat_llA = this.getField("cat_llA");

switch (categoria.value) {
  case "Guerrero":
    coste_vida.value = 10;
    cat_vida.value = 20 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 1;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 10 * nivel.value;
    break;
  case "Guerrero Acróbata":
    coste_vida.value = 20;
    cat_vida.value = 10 * nivel.value;
    cat_turno.value = 10 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 0;
    break;
  case "Paladín":
    coste_vida.value = 15;
    cat_vida.value = 15 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 10 * nivel.value;
    break;
  case "Paladín Oscuro":
    coste_vida.value = 15;
    cat_vida.value = 15 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 0;
    cat_llA.value = 5 * nivel.value;
    break;
  case "Tao":
    coste_vida.value = 20;
    cat_vida.value = 10 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = 0;
    cat_llA.value = 0;
    break;
  case "Explorador":
    coste_vida.value = 20;
    cat_vida.value = 10 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 0;
    cat_llA.value = 0;
    break;
  case "Sombra":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 10 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 0;
    break;
  case "Ladrón":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 10 * nivel.value;
    coste_llA.value = 3;
    cat_ataque.value = 0;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 0;
    break;
  case "Asesino":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 10 * nivel.value;
    coste_llA.value = 3;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 0;
    cat_llA.value = 0;
    break;
  case "Ilusionista":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 3;
    cat_ataque.value = 0;
    cat_parada.value = 5;
    cat_llA.value = 0;
    break;
  case "Novel":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = 0;
    cat_llA.value = 0;
    break;
  default:
    break;
}

var lista_vida = [
  5,
  20,
  40,
  55,
  70,
  85,
  95,
  110,
  120,
  135,
  150,
  160,
  175,
  185,
  200,
  215,
  225,
  240,
  250,
  265,
];

var base_vida = this.getField("base_vida");
var mult_vida = this.getField("mult_vida");
var con_actual = this.getField("con_actual");
var totales_vida = this.getField("totales_vida");
var actuales_vida = this.getField("actuales_vida");
var biolimite = this.getField("biolimite");

base_vida.value = lista_vida[Number(con_actual.value) - 1];
biolimite.value = -1 * Number(con_actual.value);

mult_vida.value = this.getField("n_multiplos").value * con_actual.value;

totales_vida.value =
  (Number(base_vida.value) +
    Number(this.getField("cat_vida").value) +
    Number(mult_vida.value)) /
  5;

if (actuales_vida.value > totales_vida.value) {
  actuales_vida.value = totales_vida.value;
} else if (actuales_vida.value < biolimite.value) {
  actuales_vida.value = biolimite.value;
}

this.getField("des_agi_bono").value = Math.max(
  this.getField("des_bono").value,
  this.getField("agi_bono").value
);

var parada_ataque = ["parada", "ataque"];
i = 0;
while (i < parada_ataque.length) {
  var c = parada_ataque[i];
  // PD
  var parada_o_ataque = this.getField("pd_" + parada_ataque[i]);
  var pd_restantes =
    this.getField("pd_totales").value / 2 -
    this.getField("pd_" + parada_ataque[(i + 1) % parada_ataque.length]).value;
  if (parada_o_ataque.value > pd_restantes) {
    parada_o_ataque.value = pd_restantes;
  }
  // BASE
  if (this.getField("pd_" + c).value && this.getField("coste_" + c).value > 0) {
    this.getField("base_" + c).value = Math.floor(
      this.getField("pd_" + c).value / this.getField("coste_" + c).value
    );
  } else {
    this.getField("base_" + c).value = 0;
  }
  i++;
}

this.getField("final_ataque").value =
  Number(this.getField("base_ataque").value) +
  Number(this.getField("des_bono").value) +
  Number(this.getField("cat_ataque").value);

this.getField("final_parada").value =
  Number(this.getField("base_parada").value) +
  Number(this.getField("des_agi_bono").value) +
  Number(this.getField("cat_parada").value);

var base_llA = this.getField("base_llA");
var pd_llA = this.getField("pd_llA");

this.getField("base_llA").value = Math.floor(
  Number(this.getField("pd_llA").value) /
    Number(this.getField("coste_llA").value)
);

this.getField("final_llA").value =
  Number(this.getField("base_llA").value) +
  Number(this.getField("fue_bono").value) +
  Number(this.getField("cat_llA").value);
// }

// PD Actuales
var pd_actuales = this.getField("pd_actuales");

var lista_habilidades_atributos = [
  "agi",
  "agi",
  "agi",
  "agi",
  "agi",
  "fue",
  "vol",
  "vol",
  "per",
  "per",
  "per",
  "per",
  "int",
  "int",
  "int",
  "int",
  "int",
  "int",
  "int",
  "int",
  "int",
  "int",
  "int",
  "int",
  "pod",
  "vol",
  "int",
  "int",
  "int",
  "des",
  "des",
  "per",
  "des",
  "agi",
  "per",
  "int",
  "pod",
  "agi",
  "des",
  "pod",
  "des",
  "int",
  "des",
  "des",
  "pod",
  "int",
  "des",
];

pd_actuales.value =
  Number(this.getField("pd_totales").value) -
  Number(this.getField("pd_ataque").value) -
  Number(this.getField("pd_parada").value) -
  Number(this.getField("pd_llA").value) -
  Number(this.getField("coste_vida").value) *
    Number(this.getField("n_multiplos").value);

i = 0;
while (i < lista_habilidades.length) {
  var habilidad = lista_habilidades[i];
  var pd_habilidad = this.getField("pd_" + habilidad);
  var base_habilidad = this.getField("base_" + habilidad);
  if (Number(pd_habilidad.value) > 0) {
    base_habilidad.value = Math.floor(
      Number(pd_habilidad.value) /
        Number(this.getField("coste_" + habilidad).value)
    );
    pd_actuales.value = Number(pd_actuales.value) - Number(pd_habilidad.value);
  } else {
    base_habilidad.value = "";
  }
  var bono = this.getField(lista_habilidades_atributos[i] + "_bono");
  var esp = this.getField("esp_" + habilidad);
  var cat_nivel = this.getField("cat_nivel_" + habilidad);
  var final_habilidad = this.getField("final_" + habilidad);
  var base_hab_final =
    Number(base_habilidad.value) === 0 ? -30 : Number(base_habilidad.value);
  final_habilidad.value =
    Number(base_hab_final) +
    Number(bono.value) +
    Number(esp.value) +
    Number(cat_nivel.value);
  i++;
}

// Regeneracion
var reg_base = this.getField("reg_base");
var reg_final = this.getField("reg_final");
var reg_pv = this.getField("reg_pv");

if (Number(con_actual.value) === 1 || Number(con_actual.value) === 2) {
  reg_base.value = 0;
} else if (Number(con_actual.value) >= 3 || Number(con_actual.value) <= 7) {
  reg_base.value = 1;
} else if (Number(con_actual.value) === 8 || Number(con_actual.value) === 9) {
  reg_base.value = 2;
} else {
  switch (Number(con_actual.value)) {
    case 10:
      reg_base.value = 3;
      break;
    case 11:
      reg_base.value = 4;
      break;
    case 12:
      reg_base.value = 5;
      break;
    case 13:
      reg_base.value = 6;
      break;
    case 14:
      reg_base.value = 7;
      break;
    case 15:
      reg_base.value = 8;
      break;
    case 16:
      reg_base.value = 9;
      break;
    case 17:
      reg_base.value = 10;
      break;
    case 18:
      reg_base.value = 11;
      break;
    case 19:
    case 20:
      reg_base.value = 12;
      break;
    default:
      break;
  }
}

reg_final.value = Number(this.getField("reg_esp").value) + Number(reg_base.value);

switch (reg_final.value) {
  case 1:
    reg_pv.value = 2;
    break;
  case 2:
    reg_pv.value = 4;
    break;
  case 3:
    reg_pv.value = 6;
    break;
  case 4:
    reg_pv.value = 8;
    break;
  case 5:
    reg_pv.value = 10;
    break;
  case 6:
    reg_pv.value = 15;
    break;
  case 7:
    reg_pv.value = 20;
    break;
  case 8:
    reg_pv.value = 50;
    break;
  case 9:
    reg_pv.value = 100;
    break;
  case 10:
    // reg_pv.value = 2;
    // break;
  case 11:
    // reg_pv.value = 2;
    // break;
  case 12:
    // reg_pv.value = 2;
    // break;
  case 13:
    // reg_pv.value = 2;
    // break;
  case 14:
    // reg_pv.value = 2;
    // break;
  case 15:
    // reg_pv.value = 2;
    // break;
  case 16:
    // reg_pv.value = 2;
    // break;
  case 17:
    // reg_pv.value = 2;
    // break;
  case 18:
    // reg_pv.value = 2;
    // break;
  case 19:
    // reg_pv.value = 2;
    // break;
  case 20:
    reg_pv.value = 100;
    break;
  default:
    break;
}

// Armas
var arma1_dbase = this.getField("arma1_dbase");
var arma2_dbase = this.getField("arma2_dbase");
var arma1_dfinal = this.getField("arma1_dfinal");
var arma2_dfinal = this.getField("arma2_dfinal");
var arma1_vel = this.getField("arma1_vel");
var arma2_vel = this.getField("arma2_vel");
var arma_vel = this.getField("arma_vel");

arma_vel.value = Number(arma1_vel.value) + Number(arma2_vel.value);
arma1_dfinal.value = (Number(arma1_dbase.value) + Number(this.getField("fue_bono").value)) / 10;
arma2_dfinal.value = (Number(arma2_dbase.value) + Number(this.getField("fue_bono").value)) / 10;


// Turno
this.getField("final_turno").value = 
  Number(this.getField("armadura_vel").value) +  
  Number(this.getField("agi_bono").value) +
  Number(this.getField("des_bono").value) +
  Number(this.getField("arma_vel").value) +
  Number(this.getField("cat_turno").value) +
  Number(this.getField("especial_turno").value);

// Presencia
var presencia = this.getField("presencia");
presencia.value = 25 + (nivel.value*5);

// Resistencias
this.getField("res_fisica_final").value = presencia.value + Number(this.getField("con_bono").value) + Number(this.getField("res_fisica_esp").value);
this.getField("res_enfermedades_final").value = presencia.value + Number(this.getField("con_bono").value) + Number(this.getField("res_enfermedades_esp").value);
this.getField("res_venenos_final").value = presencia.value + Number(this.getField("con_bono").value) + Number(this.getField("res_venenos_esp").value);