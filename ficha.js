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

// Validate ventaja
/*
var num_ventaja = event.target.name.substr(7,1);
if(
    event.value === "Afinidad animal" ||
    event.value === "Ambidiestría" ||
    event.value === "Aprendizaje innato en llevar armadura" ||
    event.value === "Aprendizaje innato en una materia" ||
    event.value === "Apto en una materia" ||
    event.value === "Dificil de matar" ||
    event.value === "Fondos iniciales" ||
    event.value === "Habilidoso en destreza" ||
    event.value === "Mente fria" ||
    event.value === "Seductor" ||
    event.value === "Sentidos agudos" ||
    event.value === "Al límite" ||
    event.value === "Armadura natural" ||
    event.value === "Buena suerte" ||
    event.value === "Reflejos rápidos" ||
    event.value === "Regeneración mejorada" ||
    event.value === "Resistencia física excepcional" ||
    event.value === "Sueño ligero" ||
    event.value === "Tocado por el destino" 
  ) 
  {
    this.getField("ventaja" + num_ventaja + "_coste").value = 2;

  } else if (
    event.value === "Aprendizaje innato en llevar armadura II" ||
    event.value === "Aprendizaje innato en una materia II" ||
    event.value === "Aprendizaje innato en un campo" ||
    event.value === "Apto en un campo" ||
    event.value === "Apto en una materia II" ||
    event.value === "Conecedor de todas las materias" ||
    event.value === "Dificil de matar II" ||
    event.value === "Fondos iniciales II" ||
    event.value === "Reflejos rápidos II" ||
    event.value === "Regeneración mejorada II" ||
    event.value === "Resistencia física excepcional II" 
  ) 
  {
    this.getField("ventaja" + num_ventaja + "_coste").value = 4;
  } else if (
    event.value === "Aprendizaje innato en llevar armadura III" ||
    event.value === "Aprendizaje innato en un campo II" ||
    event.value === "Dificil de matar III" ||
    event.value === "Fondos iniciales III" ||
    event.value === "Reflejos rápidos III" ||
    event.value === "Regeneración mejorada III" 
  ) 
  {
    this.getField("ventaja" + num_ventaja + "_coste").value = 6;
  } else 
  {
    this.getField("ventaja" + num_ventaja + "_coste").value = "";
  }
*/

// Validate desventaja (1-4)
/*
var num_desventaja = event.target.name.substr(10,1);
if(
    event.value === "-2 a una característica" ||
    event.value === "Adicción/vicio grave" ||
    event.value === "Alergia grave" ||
    event.value === "Debilidad física" ||
    event.value === "Desafortunado" ||
    event.value === "Endeble" ||
    event.value === "Extremidad atrofiada" ||
    event.value === "Fobia grave" ||
    event.value === "Insufrible" ||
    event.value === "Lenta curación" ||
    event.value === "Mala suerte" ||
    event.value === "Maldición" ||
    event.value === "Miopía" ||
    event.value === "Mudo" ||
    event.value === "Patoso" ||
    event.value === "Reacción lenta" ||
    event.value === "Salud enfermiza" ||
    event.value === "Sordo" ||
    event.value === "Sueño profundo" ||
    event.value === "Vulnerable a los venenos" ||
    event.value === "Vulnerable al dolor" ||
    event.value === "Vulnerable al frío" ||
    event.value === "Vulnerable al calor" 
  ) {
    this.getField("desventaja" + num_desventaja + "_coste").value = 2;
  } else if(
    event.value === "Enfermedad grave" ||
    event.value === "Maldición II" ||
    event.value === "Reacción lenta II"
  ) { 
    this.getField("desventaja" + num_desventaja + "_coste").value = 4;
  } else {
    this.getField("desventaja" + num_desventaja + "_coste").value = "";
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
while (j < lista_habilidades.length) {
  var habilidad = lista_habilidades[j];
  var esp_habilidad = this.getField("esp_" + habilidad);
  esp_habilidad.value = "";
  j++
}
j = 0;

var ctm = false;
var puntos_base = 0;

var lista_atr = ["agi", "con", "des", "fue", "int", "per", "pod", "vol"];
var lista_bonos = [
  -6,
  -5,
  -4,
  -4,
  -3,
  -3,
  -2,
  -1,
  -1,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  3,
  4,
];
var puntos_gastados = 6 + Math.floor(Number(this.getField("nivel").value) / 2);
i = 0;
while (i < lista_atr.length) {
  var atr = lista_atr[i];
  var atr_actual = this.getField(atr + "_actual");
  var atr_base = this.getField(atr + "_base");
  var atr_puntos = Number(atr_actual.value) - Number(atr_base.value);
  this.getField(atr + "_bono").value =
    lista_bonos[Number(atr_actual.value) - 1];
  puntos_gastados -= atr_puntos;
  puntos_base += atr_base.value === 20 ? 24 : atr_base.value;
  i++;
}

puntos_gastados =
  puntos_gastados -
  Number(this.getField("ventaja1_coste").value) -
  Number(this.getField("ventaja2_coste").value) -
  Number(this.getField("ventaja3_coste").value) -
  Number(this.getField("ventaja4_coste").value) -
  Number(this.getField("ventaja5_coste").value) -
  Number(this.getField("ventaja6_coste").value) -
  Number(this.getField("ventaja7_coste").value) +
  Number(this.getField("desventaja1_coste").value) +
  Number(this.getField("desventaja2_coste").value) +
  Number(this.getField("desventaja3_coste").value) +
  Number(this.getField("desventaja4_coste").value);

// Categorias base
this.getField("puntos_base").value = 90 - puntos_base;

this.getField("puntos_creacion").value = Number(puntos_gastados);

// Nivel
var base = Number(this.getField("nivel").value) == 0 ? 80 : 100;
this.getField("pd_totales").value =
  Number(this.getField("nivel").value) * 10 + base;

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
    coste_vida.value = 2;
    cat_vida.value = 4 * (nivel.value / 2);
    cat_turno.value = (nivel.value / 2);
    coste_llA.value = 1;
    cat_ataque.value = (nivel.value / 2);
    cat_parada.value = (nivel.value / 2);
    cat_llA.value = 2 * (nivel.value / 2);
    break;
  case "Guerrero Acróbata":
    coste_vida.value = 4;
    cat_vida.value = 2 * (nivel.value / 2);
    cat_turno.value = 2 * (nivel.value / 2);
    coste_llA.value = 2;
    cat_ataque.value = (nivel.value / 2);
    cat_parada.value = (nivel.value / 2);
    cat_llA.value = 0;
    break;
  case "Paladín":
    coste_vida.value = 3;
    cat_vida.value = 3 * (nivel.value / 2);
    cat_turno.value = (nivel.value / 2);
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = (nivel.value / 2);
    cat_llA.value = 2 * (nivel.value / 2);
    break;
  case "Paladín Oscuro":
    coste_vida.value = 3;
    cat_vida.value = 3 * (nivel.value / 2);
    cat_turno.value = (nivel.value / 2);
    coste_llA.value = 2;
    cat_ataque.value = (nivel.value / 2);
    cat_parada.value = 0;
    cat_llA.value = (nivel.value / 2);
    break;
  case "Tao":
    coste_vida.value = 4;
    cat_vida.value = 2 * (nivel.value / 2);
    cat_turno.value = (nivel.value / 2);
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = 0;
    cat_llA.value = 0;
    break;
  case "Explorador":
    coste_vida.value = 4;
    cat_vida.value = 2 * (nivel.value / 2);
    cat_turno.value = (nivel.value / 2);
    coste_llA.value = 2;
    cat_ataque.value = (nivel.value / 2);
    cat_parada.value = 0;
    cat_llA.value = 0;
    break;
  case "Sombra":
    coste_vida.value = 4;
    cat_vida.value = (nivel.value / 2);
    cat_turno.value = 2 * (nivel.value / 2);
    coste_llA.value = 2;
    cat_ataque.value = (nivel.value / 2);
    cat_parada.value = (nivel.value / 2);
    cat_llA.value = 0;
    break;
  case "Ladrón":
    coste_vida.value = 4;
    cat_vida.value = (nivel.value / 2);
    cat_turno.value = 2 * (nivel.value / 2);
    coste_llA.value = 3;
    cat_ataque.value = 0;
    cat_parada.value = (nivel.value / 2);
    cat_llA.value = 0;
    break;
  case "Asesino":
    coste_vida.value = 4;
    cat_vida.value = (nivel.value / 2);
    cat_turno.value = 2 * (nivel.value / 2);
    coste_llA.value = 3;
    cat_ataque.value = (nivel.value / 2);
    cat_parada.value = 0;
    cat_llA.value = 0;
    break;
  case "Ilusionista":
    coste_vida.value = 4;
    cat_vida.value = (nivel.value / 2);
    cat_turno.value = (nivel.value / 2);
    coste_llA.value = 3;
    cat_ataque.value = 0;
    cat_parada.value = 1;
    cat_llA.value = 0;
    break;
  case "Novel":
    coste_vida.value = 4;
    cat_vida.value = (nivel.value / 2);
    cat_turno.value = (nivel.value / 2);
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = 0;
    cat_llA.value = 0;
    break;
  default:
    break;
}

// Ventajas
i = 1;
while(i < 8) {
  switch (this.getField("ventaja"+i).value) {
    case "Afinidad animal":
      this.getField("esp_animales").value = Number(this.getField("esp_animales").value) + 12;
      break;
    case "Aprendizaje innato en llevar armadura":
      this.getField("esp_llA").value = (nivel.value / 2);
      break;
    case "Aprendizaje innato en llevar armadura II":
      this.getField("esp_llA").value = 2 * (nivel.value / 2);
      break;
    case "Aprendizaje innato en llevar armadura III":
      this.getField("esp_llA").value = 3 * (nivel.value / 2);
      break;
    case "Aprendizaje innato en una materia":
      this.getField("esp_llA").value = 3 * (nivel.value / 2);
      break;
    case "Aprendizaje innato en una materia II":
      this.getField("esp_llA").value = 3 * (nivel.value / 2);
      break;
    case "Dificil de matar":
      this.getField("esp_vida").value = 2 * (nivel.value / 2);
      break;
    case "Dificil de matar II":
      this.getField("esp_vida").value = 4 * (nivel.value / 2);
      break;
    case "Dificil de matar III":
      this.getField("esp_vida").value = 6 * (nivel.value / 2);
      break;
    case "Fondos iniciales":
      break;
    case "Fondos iniciales II":
      break;
    case "Fondos iniciales III":
      break;
    case "Habilidoso en destreza":
      this.getField("esp_tmanos").value = Number(this.getField("esp_tmanos").value) + 12;
      break;
    case "Mente fria":
      this.getField("esp_frialdad").value = Number(this.getField("esp_frialdad").value) + 12;
      break;
      case "Seductor":
      this.getField("esp_persuasion").value = Number(this.getField("esp_persuasion").value) + 12;
      break;
    case "Sentidos agudos":
      this.getField("esp_ver").value = Number(this.getField("esp_ver").value) + 6;
      this.getField("esp_escuchar").value = Number(this.getField("esp_escuchar").value) + 6;
      break;
    case "Reflejos rápidos":
      this.getField("especial_turno").value = Number(this.getField("especial_turno").value) + 5;
      break;
    case "Regeneración mejorada":
      this.getField("reg_especial").value = Number(this.getField("reg_especial").value) + 2;
      break;
    case "Resistencia física excepcional":
      this.getField("res_fisica_esp").value = Number(this.getField("res_fisica_esp").value) + 5;
      this.getField("res_enfermedades_esp").value = Number(this.getField("res_enfermedades_esp").value) + 5;
      this.getField("res_venenos_esp").value = Number(this.getField("reg_especial").value) + 5;
      break;
    case "Conecedor de todas las materias":
      ctm = true;
      break;
    case "Reflejos rápidos II":
      this.getField("especial_turno").value = Number(this.getField("especial_turno").value) + 9;
      break;
    case "Regeneración mejorada II":
      this.getField("reg_especial").value = Number(this.getField("reg_especial").value) + 4;
      break;
    case "Resistencia física excepcional II":
      this.getField("res_fisica_esp").value = Number(this.getField("res_fisica_esp").value) + 10;
      this.getField("res_enfermedades_esp").value = Number(this.getField("res_enfermedades_esp").value) + 10;
      this.getField("res_venenos_esp").value = Number(this.getField("reg_especial").value) + 10;
      break;
    case "Reflejos rápidos III":
      this.getField("especial_turno").value = Number(this.getField("especial_turno").value) + 12;
      break;
    case "Regeneración mejorada III":
      this.getField("reg_especial").value = Number(this.getField("reg_especial").value) + 6;
      break;
    default:
      break;
  }
  i++;
}

var lista_vida = [
  1,
  3,
  4,
  7,
  8,
  10,
  11,
  13,
  14,
  16,
  17,
  18,
  19,
  21,
  22,
  23,
  24,
  26,
  28,
  30,
];

var base_vida = this.getField("base_vida");
var mult_vida = this.getField("mult_vida");
var con_actual = this.getField("con_actual");
var con_bono = this.getField("con_bono");
var totales_vida = this.getField("totales_vida");
var actuales_vida = this.getField("actuales_vida");
var esp_vida = this.getField("esp_vida");
// var biolimite = this.getField("biolimite");

base_vida.value = lista_vida[Number(con_actual.value) - 1];
// biolimite.value = -1 * Number(con_actual.value);

mult_vida.value = this.getField("n_multiplos").value * con_bono.value;

totales_vida.value =
  Number(base_vida.value) +
  Number(esp_vida.value) +
  Number(this.getField("cat_vida").value) +
  Number(mult_vida.value);

if (actuales_vida.value > totales_vida.value) {
  actuales_vida.value = totales_vida.value;
} else if (actuales_vida.value < 0) {
  actuales_vida.value = 0;
}
// else if (actuales_vida.value < biolimite.value) {
//   actuales_vida.value = biolimite.value;
// }

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
  Number(this.getField("esp_llA").value) +
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
  if(ctm) {
    esp.value = Number(esp.value) + 2;
  }
  // var base_hab_final =
    // base_habilidad.value === "" ? -6 : Number(base_habilidad.value);
  final_habilidad.value =
    Number(bono.value) +
    Number(esp.value) +
    Number(cat_nivel.value);
    final_habilidad.value = Number(final_habilidad.value) + (ctm ? Number(base_habilidad.value) : -6);
  
  i++;
}

// Regeneracion
var reg_base = this.getField("reg_base");
var reg_final = this.getField("reg_final");
var reg_pv = this.getField("reg_pv");

if (Number(con_actual.value) >= 1 && Number(con_actual.value) <= 4) {
  reg_base.value = 0;
} else if (Number(con_actual.value) >= 5 && Number(con_actual.value) <= 14) {
  reg_base.value = 1;
} else if (Number(con_actual.value) >= 15 && Number(con_actual.value) <= 19) {
  reg_base.value = 2;
} else {
  reg_base.value = 3;
}

reg_final.value =
  Number(this.getField("reg_esp").value) + Number(reg_base.value);

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
arma1_dfinal.value =
  Number(arma1_dbase.value) + Number(this.getField("fue_bono").value);
arma2_dfinal.value =
  Number(arma2_dbase.value) + Number(this.getField("fue_bono").value);

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
presencia.value = 5 + nivel.value;

// Resistencias
this.getField("res_fisica_final").value =
  presencia.value +
  Number(this.getField("con_bono").value) +
  Number(this.getField("res_fisica_esp").value);
this.getField("res_enfermedades_final").value =
  presencia.value +
  Number(this.getField("con_bono").value) +
  Number(this.getField("res_enfermedades_esp").value);
this.getField("res_venenos_final").value =
  presencia.value +
  Number(this.getField("con_bono").value) +
  Number(this.getField("res_venenos_esp").value);


  
  