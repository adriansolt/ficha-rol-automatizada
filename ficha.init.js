var lista_habilidades = [
  // ATLETICAS (0-5)
  "acrobacias",
  "atletismo",
  "montar",
  "nadar",
  "trepar",
  "saltar",
  // VIGOR (6-7)
  "frialdad",
  "resdolor",
  // PERCEPTIVAS (8-11)
  "escuchar",
  "ver",
  "buscar",
  "rastrear",
  // INTELECTUALES (12-21)
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
  // SOCIALES (22-28)
  "comerciar",
  "callejear",
  "estilo",
  "intimidar",
  "etiqueta",
  "persuasion",
  "advsocial",
  // SUBTERFUGIO (29-35)
  "cerrajeria",
  "disfraz",
  "ocultarse",
  "robo",
  "sigilo",
  "tramperia",
  "venenos",
  // CREATIVAS (30-40)
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

// Atributos
var con_actual = this.getField("con_actual");
var fue_actual = this.getField("fue_actual");
var con_bono = this.getField("con_bono");
var des_bono = this.getField("des_bono");
var fue_bono = this.getField("fue_bono");

// Vida
var coste_vida = this.getField("coste_vida");
var md_vida = this.getField("md_vida");
var pd_vida = this.getField("pd_vida");
var base_vida = this.getField("base_vida");
var esp_vida = this.getField("esp_vida");
var totales_vida = this.getField("totales_vida");
var actuales_vida = this.getField("actuales_vida");

// Llevar armadura
var md_llA = this.getField("md_llA");
var esp_llA = this.getField("esp_llA");
var base_llA = this.getField("base_llA");

// Iniciativa
var esp_iniciativa = this.getField("esp_iniciativa");

// Resistencias
var res_fisica_esp = this.getField("res_fisica_esp");
var res_enfermedades_esp = this.getField("res_enfermedades_esp");
var res_venenos_esp = this.getField("res_venenos_esp");

var nivel = this.getField("nivel");

var categoria = this.getField("categoria");

var esp_animales = this.getField("esp_animales");
var esp_frialdad = this.getField("esp_frialdad");
var esp_persuasion = this.getField("esp_persuasion");
var esp_ver = this.getField("esp_ver");
var esp_escuchar = this.getField("esp_escuchar");

var valor_multiplo = this.getField("valor_multiplo").value;

var reg_base = 0;
var reg_esp = 0;
var reg_final = 0;
var reg_normal = this.getField("reg_normal");
var reg_max = this.getField("reg_max");

var md_totales = this.getField("md_totales");
var md_actuales = this.getField("md_actuales");
md_actuales.value = Number(md_totales.value);

var i = 0;
var j = 0;
var k = 0;

while (j < lista_habilidades.length) {
  var habilidad = lista_habilidades[j];
  var esp_habilidad = this.getField("esp_" + habilidad);
  var pd_habilidad = this.getField("pd_" + habilidad);
  esp_habilidad.value = 0;
  j++;
}
esp_iniciativa.value = 0;
esp_vida.value = 0;
esp_llA.value = 0;
reg_esp = 0;
res_fisica_esp.value = 0;
res_enfermedades_esp.value = 0;
res_venenos_esp.value = 0;
j = 0;

var ctm = false;
var puntos_base = 0;

var lista_atr = ["agi", "con", "des", "fue", "int", "per", "pod", "vol"];
var lista_bonos = [
  -30,
  -25,
  -20,
  -20,
  -15,
  -15,
  -10,
  -5,
  -5,
  0,
  5,
  5,
  5,
  5,
  10,
  10,
  10,
  15,
  15,
  20,
];
var puntos_gastados = 6 + Math.floor(Number(nivel.value) / 2);
i = 0;
while (i < lista_atr.length) {
  var atr = lista_atr[i];
  var atr_actual = this.getField(atr + "_actual");
  var atr_base = this.getField(atr + "_base");
  var atr_puntos = this.getField(atr + "_puntos");
  // var atr_puntos = Number(atr_actual.value) - Number(atr_base.value);
  atr_actual.value = atr_base.value + atr_puntos.value;
  this.getField(atr + "_bono").value =
    lista_bonos[Number(atr_actual.value) - 1];
  puntos_gastados -= Number(atr_puntos.value);
  puntos_base += atr_base.value === 20 ? 24 : atr_base.value;
  i++;
}
i = 0;

this.getField("armadura0_def").value =
  Number(this.getField("armadura0_calidad").value) * 10;

// Categorias base
this.getField("puntos_base").value = 90 - puntos_base;

this.getField("puntos_creacion").value = Number(puntos_gastados);

// Nivel
var base = Number(nivel.value) == 0 ? 80 : 100;
md_totales.value = Number(nivel.value) * 10 + base;

// Categoria

switch (categoria.value) {
  // Coste Vida
  // Cat. Vida
  // Cat. Iniciativa
  // Coste LL.A.
  // Coste Parada
  // Cat. Atq
  // Cat. Esq
  // Cat. Par
  // Cat. Ll.A.
  case "Guerrero":
    actualizarDatosCategoria(5, 4, 5, 1, 2, 5, 0, 5, 10);
    break;
  case "Guerrero Acróbata":
    actualizarDatosCategoria(10, 2, 10, 2, 3, 5, 5, 0, 0);
    break;
  case "Paladín":
    actualizarDatosCategoria(7, 3, 5, 2, 2, 0, 0, 5, 10);
    break;
  case "Paladín Oscuro":
    actualizarDatosCategoria(7, 3, 5, 2, 2, 5, 0, 0, 5);
    break;
  case "Tao":
    actualizarDatosCategoria(10, 2, 5, 2, 2, 0, 0, 0, 0);
    break;
  case "Explorador":
    actualizarDatosCategoria(10, 2, 5, 2, 2, 5, 0, 0, 0);
    break;
  case "Sombra":
    actualizarDatosCategoria(10, 1, 10, 2, 3, 5, 5, 0, 0);
    break;
  case "Ladrón":
    actualizarDatosCategoria(10, 1, 10, 3, 3, 0, 5, 0, 0);
    break;
  case "Asesino":
    actualizarDatosCategoria(10, 1, 10, 3, 3, 5, 0, 0, 0);
    break;
  case "Ilusionista":
    actualizarDatosCategoria(10, 1, 5, 3, 3, 0, 5, 0, 0);
    break;
  case "Novel":
    actualizarDatosCategoria(10, 1, 5, 2, 2, 0, 0, 0, 0);
    break;
  default:
    break;
}

function actualizarDatosCategoria(
  coste_vida_v,
  cat_vida_v,
  cat_iniciativa_v,
  coste_llA_v,
  coste_parada_v,
  cat_ataque_v,
  cat_esquiva_v,
  cat_parada_v,
  cat_llA_v
) {
  coste_vida.value = coste_vida_v;
  this.getField("cat_vida").value = cat_vida_v * Math.floor(nivel.value / 2);
  this.getField("cat_iniciativa").value =
    cat_iniciativa_v * Math.floor(nivel.value / 2);
  this.getField("coste_llA").value = coste_llA_v;
  this.getField("coste_parada").value = coste_parada_v;
  this.getField("cat_ataque").value =
    cat_ataque_v * Math.floor(nivel.value / 2);
  this.getField("cat_esquiva").value =
    cat_esquiva_v * Math.floor(nivel.value / 2);
  this.getField("cat_parada").value =
    cat_parada_v * Math.floor(nivel.value / 2);
  this.getField("cat_llA").value = cat_llA_v * Math.floor(nivel.value / 2);
}

// Ventajas
i = 1;
var ventajas_list = [];
while (i < 8) {
  var ventaja = this.getField("ventaja" + i);
  if (ventaja.value) {
    ventajas_list.push(ventaja.value);
  }
  i++;
}

i = 0;
var ventaja_novel = categoria.value === "Novel" ? true : false;
while (i < ventajas_list.length) {
  var ventaja = ventajas_list[i];
  if (ventaja.match("Apto en")) {
    var ventaja_formateada = ventaja.substr(8).replace(/\./g, "").toLowerCase();
    // t manos ii
    var ventaja_sin_espacios;
    var ventaja_nombre;
    if (ventaja_formateada.substr(ventaja_formateada.length - 2) === "ii") {
      ventaja_sin_espacios = ventaja_formateada.replace(/\s+/g, "");
      // tmanosii
      ventaja_nombre = ventaja_sin_espacios.substr(
        0,
        ventaja_sin_espacios.length - 2
      );
      // tmanos
      var ventaja_field = this.getField("coste_" + ventaja_nombre);
      ventaja_field.value = 1;
    } else {
      // t manos
      // intelectuales
      ventaja_nombre = ventaja_formateada.replace(/\s+/g, "");
      var i_primera_ventaja = null;
      var i_ultima_ventaja = null;
      switch (ventaja_nombre) {
        case "vigor":
          i_primera_ventaja = 6;
          i_ultima_ventaja = 7;
          break;
        case "atleticas":
          i_primera_ventaja = 0;
          i_ultima_ventaja = 5;
          break;
        case "perceptivas":
          i_primera_ventaja = 8;
          i_ultima_ventaja = 11;
          break;
        case "subterfugio":
          i_primera_ventaja = 29;
          i_ultima_ventaja = 35;
          break;
        case "intelectuales":
          i_primera_ventaja = 12;
          i_ultima_ventaja = 21;
          break;
        case "sociales":
          i_primera_ventaja = 22;
          i_ultima_ventaja = 28;
          break;
        case "creativas":
          i_primera_ventaja = 30;
          i_ultima_ventaja = 40;
          break;
        default:
          break;
      }
      if (i_primera_ventaja !== null || i_ultima_ventaja !== null) {
        // intelectuales
        while (i_primera_ventaja <= i_ultima_ventaja) {
          var coste_ventaja = this.getField(
            "coste_" + lista_habilidades[i_primera_ventaja]
          );
          coste_ventaja.value = Number(coste_ventaja.value) === 3 ? 2 : 1;
          i_primera_ventaja++;
        }
      } else {
        // tmanos
        var coste_ventaja = this.getField("coste_" + ventaja_nombre);
        if (coste_ventaja) {
          coste_ventaja.value = Number(coste_ventaja.value) === 3 ? 2 : 1;
        }
      }
    }
  } else if (ventaja.match("Aprendizaje innato en")) {
    var ventaja_formateada = ventaja
      .substr(22)
      .replace(/\./g, "")
      .toLowerCase();
    // t manos
    // t manos ii
    // intelectuales
    // intelectuales ii
    var i_primera_ventaja = null;
    var i_ultima_ventaja = null;
    switch (ventaja_formateada.split(" ")[0]) {
      case "vigor":
        i_primera_ventaja = 6;
        i_ultima_ventaja = 7;
        break;
      case "atleticas":
        i_primera_ventaja = 0;
        i_ultima_ventaja = 5;
        break;
      case "perceptivas":
        i_primera_ventaja = 8;
        i_ultima_ventaja = 11;
        break;
      case "subterfugio":
        i_primera_ventaja = 29;
        i_ultima_ventaja = 35;
        break;
      case "intelectuales":
        i_primera_ventaja = 12;
        i_ultima_ventaja = 21;
        break;
      case "sociales":
        i_primera_ventaja = 22;
        i_ultima_ventaja = 28;
        break;
      case "creativas":
        i_primera_ventaja = 30;
        i_ultima_ventaja = 40;
        break;
      default:
        break;
    }
    if (i_primera_ventaja !== null || i_ultima_ventaja !== null) {
      // intelectuales
      var incr = 1 * Number(nivel.value);
      if (ventaja_formateada.substr(ventaja_formateada.length - 2) === "ii") {
        incr = incr * 2;
      }
      while (i_primera_ventaja <= i_ultima_ventaja) {
        var esp_ventaja = this.getField(
          "esp_" + lista_habilidades[i_primera_ventaja]
        );
        esp_ventaja.value += Number(esp_ventaja.value) + incr;
        i_primera_ventaja++;
      }
    } else {
      // tmanos
      var incr = 2 * Number(nivel.value);
      var ventaja_nombre = ventaja_formateada.replace(/\s+/g, "");
      if (ventaja_formateada.substr(ventaja_formateada.length - 2) === "ii") {
        incr = incr * 2;
        ventaja_nombre = ventaja_nombre.substr(0, ventaja_nombre.length - 2);
      }
      var esp_ventaja = this.getField("esp_" + ventaja_nombre);
      if (esp_ventaja) {
        esp_ventaja.value = Number(esp_ventaja.value) + incr;
      }
    }
  } else if (ventaja.toLowerCase().match("novel") && ventaja_novel) {
    var ventajas = ventaja
      .split(":")[1]
      .replace(/\s+/g, "")
      .replace(/\./g, "")
      .toLowerCase()
      .split(",");

    var lista_ventajas = [];

    for (var l = 0; l < ventajas.length; l++) {
      var ventaja = ventajas[l];
      for (var j = 0; j < lista_habilidades.length; j++) {
        var habilidad = lista_habilidades[j];
        if (ventaja === habilidad.substr(0, ventaja.length)) {
          lista_ventajas.push(habilidad);
          j = lista_habilidades.length;
        }
      }
    }

    var index = {};
    for (var l = lista_ventajas.length - 1; l >= 0; l--) {
      if (lista_ventajas[l] in index) {
        // remove this item
        lista_ventajas.splice(l, 1);
      } else {
        // add this value to index
        index[lista_ventajas[l]] = true;
      }
    }

    lista_ventajas = lista_ventajas.slice(0, 5);

    j = 0;
    var incr = 2 * Number(nivel.value);
    while (j < lista_ventajas.length) {
      var esp_habilidad = this.getField("esp_" + lista_ventajas[j]);
      if (esp_habilidad) {
        esp_habilidad.value = Number(esp_habilidad.value) + incr;
      }
      j++;
    }
    ventaja_novel = false;
  } else {
    switch (ventaja) {
      case "Afinidad animal":
        esp_animales.value = Number(esp_animales.value) + 60;
        break;
      case "Ambidiestria":
      case "Al límite":
      case "Aprendizaje innato en llevar armadura":
        esp_llA.value = 5 * Math.floor(Number(nivel.value / 2));
        break;
      case "Aprendizaje innato en llevar armadura II":
        esp_llA.value = 10 * Math.floor(Number(nivel.value / 2));
        break;
      case "Aprendizaje innato en llevar armadura III":
        esp_llA.value = 15 * Math.floor(Number(nivel.value / 2));
        break;
      case "Armadura natural":
        this.getField("armadura0_def").value += 20;
        break;
      case "Buena suerte":
        break;
      case "Conecedor de todas las materias":
        ctm = true;
        break;
      case "Dificil de matar":
        esp_vida.value = 2 * (nivel.value / 2);
        break;
      case "Dificil de matar II":
        esp_vida.value = 4 * (nivel.value / 2);
        break;
      case "Dificil de matar III":
        esp_vida.value = 6 * (nivel.value / 2);
        break;
      case "Fondos iniciales":
        this.getField("oro").value = 2000;
        break;
      case "Fondos iniciales II":
        this.getField("oro").value = 5000;
        break;
      case "Fondos iniciales III":
        this.getField("oro").value = 10000;
        break;
      case "Mente fria":
        esp_frialdad.value = Number(esp_frialdad.value) + 60;
        break;
      case "Reflejos rápidos":
        esp_iniciativa.value = Number(esp_iniciativa.value) + 25;
        break;
      case "Reflejos rápidos II":
        esp_iniciativa.value = Number(esp_iniciativa.value) + 45;
        break;
      case "Reflejos rápidos III":
        esp_iniciativa.value = Number(esp_iniciativa.value) + 60;
        break;
      case "Regeneración mejorada":
        reg_esp = Number(reg_esp) + 2;
        break;
      case "Regeneración mejorada II":
        reg_esp = Number(reg_esp) + 4;
        break;
      case "Regeneración mejorada III":
        reg_esp = Number(reg_esp) + 6;
        break;
      case "Resistencia física excepcional":
        res_fisica_esp.value = Number(res_fisica_esp.value) + 25;
        res_enfermedades_esp.value = Number(res_enfermedades_esp.value) + 25;
        res_venenos_esp.value = Number(res_venenos_esp.value) + 25;
        break;
      case "Resistencia física excepcional II":
        res_fisica_esp.value = Number(res_fisica_esp.value) + 50;
        res_enfermedades_esp.value = Number(res_enfermedades_esp.value) + 50;
        res_venenos_esp.value = Number(res_venenos_esp.value) + 50;
        break;
      case "Seductor":
        esp_persuasion.value = Number(esp_persuasion.value) + 60;
        break;
      case "Sentidos agudos":
        esp_ver.value = Number(esp_ver.value) + 30;
        esp_escuchar.value = Number(esp_escuchar.value) + 30;
        break;
      case "Sueño ligero":
      case "Tocado por el destino":
      default:
        break;
    }
  }
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
  Number(this.getField("desventaja3_coste").value);

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

pd_vida.value = Number(md_vida.value) * valor_multiplo;

base_vida.value =
  lista_vida[Number(con_actual.value) - 1] +
  Math.floor(Number(pd_vida.value) / Number(coste_vida.value));
// biolimite.value = ( -1) * Number(con_actual.value);

totales_vida.value =
  Number(base_vida.value) +
  Number(esp_vida.value) +
  Number(this.getField("cat_vida").value);

if (actuales_vida.value > totales_vida.value) {
  actuales_vida.value = totales_vida.value;
} else if (actuales_vida.value < 0) {
  actuales_vida.value = 0;
}
// else if (actuales_vida.value < biolimite.value) {
//  actuales_vida.value = biolimite.value;
// }

var defensa_ataque = ["parada", "esquiva", "ataque"];
i = 0;
while (i < defensa_ataque.length) {
  var c = defensa_ataque[i];
  var pd_defatq = this.getField("pd_" + c);
  var md_defatq = this.getField("md_" + c);
  var base_defatq = this.getField("base_" + c);
  // MD
  var md_restantes =
    md_totales.value / 2 -
    this.getField("md_" + defensa_ataque[(i + 1) % defensa_ataque.length])
      .value -
    this.getField("md_" + defensa_ataque[(i + 2) % defensa_ataque.length])
      .value;
  if (Number(md_defatq.value) > Number(md_restantes)) {
    md_defatq.value = Number(md_restantes);
  }

  if (Number(md_defatq.value) > md_totales.value / 4) {
    md_defatq.value = Math.floor(md_totales.value / 4);
    }

  //PD
  pd_defatq.value = md_defatq.value * valor_multiplo;

  // BASE
  if (pd_defatq.value && this.getField("coste_" + c).value > 0) {
    base_defatq.value = Math.floor(
      pd_defatq.value / this.getField("coste_" + c).value
    );
  } else {
    base_defatq.value = 0;
  }
  i++;
}

var limite_md_llA = Number(md_totales.value) / 10;
if (Number(md_llA.value) > Number(limite_md_llA)) {
  md_llA.value = Number(limite_md_llA);
}

this.getField("pd_llA").value = Number(md_llA.value) * valor_multiplo;

// PD Actuales

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

// Regeneracion
if (Number(con_actual.value) >= 1 && Number(con_actual.value) <= 4) {
  reg_base = 0;
} else if (Number(con_actual.value) >= 5 && Number(con_actual.value) <= 14) {
  reg_base = 1;
} else if (Number(con_actual.value) >= 15 && Number(con_actual.value) <= 19) {
  reg_base = 2;
} else {
  reg_base = 3;
}

reg_final = Number(reg_esp) + Number(reg_base);

switch (reg_final) {
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

// Presencia
var presencia = this.getField("presencia");
presencia.value = 25 + 5 * nivel.value;

// Resistencias
this.getField("res_fisica_final").value =
  presencia.value + Number(con_bono.value) + Number(res_fisica_esp.value);
this.getField("res_enfermedades_final").value =
  presencia.value + Number(con_bono.value) + Number(res_enfermedades_esp.value);
this.getField("res_venenos_final").value =
  presencia.value + Number(con_bono.value) + Number(res_venenos_esp.value);

// Carga

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

// Tabla de Armas

var combate_desarmado = false;

var num_tablas = 7;

for (i = 1; i <= num_tablas; i++) {
  var tabla_arma_i = this.getField("tabla_arma" + i);
  var tabla_arma_clase_i = this.getField("tabla_arma" + i + "_clase");
  var tabla_arma_clase_i_md = this.getField("tabla_arma" + i + "_md");
  if (tabla_arma_clase_i.value !== "—") {
    if (!combate_desarmado && tabla_arma_clase_i.value === "Sin armas") {
      combate_desarmado = true;
    }
    var tabla_arma_i = this.getField("tabla_arma" + i);
    var encontrado = false;
    for (j = 1; j < i && !encontrado; j++) {
      var tabla_arma_j = this.getField("tabla_arma" + j);
      var tabla_arma_clase_j = this.getField("tabla_arma" + j + "_clase");
      if (
        tabla_arma_clase_i.value === tabla_arma_clase_j.value &&
        tabla_arma_i.value !== tabla_arma_i.value.toUpperCase()
      ) {
        if (
          tabla_arma_i.value === tabla_arma_j.value ||
          tabla_arma_j.value !== tabla_arma_j.value.toUpperCase()
        ) {
          tabla_arma_clase_i_md.value = 0;
        } else {
          // similar
          tabla_arma_clase_i_md.value = 2;
        }
        encontrado = true;
      }
    }
    if (!encontrado) {
      if (tabla_arma_i.value === tabla_arma_i.value.toUpperCase()) {
        tabla_arma_clase_i_md.value = 10;
      } else {
        tabla_arma_clase_i_md.value = 4;
      }
    }
    if (this.getField("categoria").value === "Guerrero") {
      tabla_arma_clase_i_md.value = tabla_arma_clase_i_md.value / 2;
    }
  } else {
    i = num_tablas + 1;
  }
}

this.getField("tabla_arma1_md").value = 0;

// Armas

var equipo_parada = this.getField("equipo_parada");
var equipo_esquiva = this.getField("equipo_esquiva");
var equipo_ataque = this.getField("equipo_ataque");
var iniciativa_total_arma = this.getField("arma_vel");
equipo_parada.value = 0;
equipo_esquiva.value = 0;
equipo_ataque.value = 0;
iniciativa_total_arma.value = 0;
var num_checks_armas = 0;
var manos_ocupadas = false;
var manos_libres = true;

i = 1;
while (i < 7) {
  var clase = this.getField("arma" + i + "_clase");
  var calidad = this.getField("arma" + i + "_calidad");
  var check = this.getField("arma" + i + "_check");
  var especial = this.getField("arma" + i + "_especial");

  if (clase.value !== "—") {
    actualizarDatosArma(i);
    if (check.value === "Eq.") {
      var arma_ataque = this.getField("arma" + i + "_atq");
      var arma_parada = this.getField("arma" + i + "_par");
      var arma_esquiva = this.getField("arma" + i + "_esq");
      var arma_df = this.getField("arma" + i + "_df");
      var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
      arma_df.textSize = 12;
      manos_libres = false;
      iniciativa_total_arma.value += Number(arma_iniciativa.value);

      // Negativos por no saber usar el arma
      var arma_clase = this.getField("arma" + i + "_clase");
      if (arma_clase.value !== "Escudo") {
        var arma = this.getField("arma" + i);
        var arma_ataque = this.getField("arma" + i + "_atq");
        var arma_parada = this.getField("arma" + i + "_par");
        var tabla_arma = this.getField("tabla_" + i);
        var tabla_arma_clase = this.getField("tabla_" + i + "_clase");

        var similar = false;
        var encontrado = false;

        var j = 1;
        while (j <= 7 && !encontrado) {
          var tabla_arma = this.getField("tabla_arma" + j);
          var tabla_arma_clase = this.getField("tabla_arma" + j + "_clase");
          if (
            arma.value === tabla_arma.value ||
            (arma_clase.value === tabla_arma_clase.value &&
              tabla_arma.value === tabla_arma.value.toUpperCase())
          ) {
            encontrado = true;
          } else if (arma_clase.value === tabla_arma_clase.value) {
            similar = true;
          }
          j++;
        }

        if (!encontrado) {
          if (similar) {
            arma_ataque.value -= 20;
            arma_parada.value -= 20;
          } else {
            arma_ataque.value -= 60;
            arma_parada.value -= 60;
          }
        }
      }

      // Negativos por no tener fuerza requerida
      var arma_freq = this.getField("arma" + i + "_freq");
      if (arma_freq.value !== "—") {
        var arma_ataque = this.getField("arma" + i + "_atq");
        var arma_parada = this.getField("arma" + i + "_par");

        var fue_req_diff =
          Number(arma_freq.value) - Number(this.getField("fue_actual").value);
        if (fue_req_diff > 0) {
          arma_ataque.value -= 5 * fue_req_diff;
          arma_parada.value -= 5 * fue_req_diff;
        }
      }

      this.getField("equipo_ataque").value = Number(arma_ataque.value);
      this.getField("equipo_parada").value = Number(arma_parada.value);
      this.getField("equipo_esquiva").value = Number(arma_esquiva.value);

      num_checks_armas++;
    } else {
      arma_df.textSize = 8;
    }
  }
  i++;
}
i = 1;

// Acciones primer arma (desarmado)

if (
  num_checks_armas === 2 ||
  (num_checks_armas === 1 && especial.value === "A dos manos")
) {
  this.getField("arma0_df").textSize = 8;
  this.getField("arma0_check").value = "—";
  while (i < 7) {
    var check = this.getField("arma" + i + "_check");
    if (check.value !== "Eq.") {
      check.readonly = true;
    }
    i++;
  }
} else if (num_checks_armas === 0) {
  var arma0_ataque = this.getField("arma0_atq");
  var arma0_parada = this.getField("arma0_par");
  var arma0_iniciativa = this.getField("arma0_iniciativa");
  var arma0_db = this.getField("arma0_db");
  var arma0_df = this.getField("arma0_df");
  var arma0_calidad = this.getField("arma0_calidad");

  this.getField("arma0_check").value = "Eq.";
  arma0_df.textSize = 12;
  arma0_ataque.value = 5 * Number(arma0_calidad.value);
  arma0_parada.value = 5 * Number(arma0_calidad.value);
  arma0_iniciativa.value = 20 + 5 * Number(arma0_calidad.value);
  arma0_db.value = 10 + 5 * Number(arma0_calidad.value);
  arma0_df.value = Math.ceil(Number(arma0_db.value) + Number(fue_bono.value));

  if (!combate_desarmado) {
    arma0_ataque.value -= 60;
    arma0_parada.value -= 60;
  }

  equipo_ataque.value += this.getField("arma0_atq").value;
  equipo_parada.value += this.getField("arma0_par").value;
  iniciativa_total_arma.value += this.getField("arma0_iniciativa").value;
} else {
  this.getField("arma0_df").textSize = 8;
  this.getField("arma0_check").value = "—";
}

base_llA.value = Math.floor(
  Number(this.getField("pd_llA").value) /
    Number(this.getField("coste_llA").value)
);

this.getField("final_llA").value =
  Number(base_llA.value) +
  Number(this.getField("esp_llA").value) +
  Number(fue_bono.value) +
  Number(this.getField("cat_llA").value);

// Combate final

this.getField("final_ataque").value =
  Number(this.getField("base_ataque").value) +
  Number(this.getField("equipo_ataque").value) +
  Number(des_bono.value) +
  Number(this.getField("cat_ataque").value);

this.getField("final_parada").value =
  Number(this.getField("base_parada").value) +
  Number(this.getField("equipo_parada").value) +
  Number(des_bono.value) +
  Number(this.getField("cat_parada").value);

this.getField("final_esquiva").value =
  Number(this.getField("base_esquiva").value) +
  Number(this.getField("equipo_esquiva").value) +
  Number(this.getField("agi_bono").value) +
  Number(this.getField("cat_esquiva").value);

// Iniciativa
this.getField("final_iniciativa").value =
  Number(this.getField("agi_bono").value) +
  Number(this.getField("des_bono").value) +
  Number(this.getField("arma_vel").value) +
  Number(this.getField("cat_iniciativa").value) +
  Number(this.getField("esp_iniciativa").value);

// Habilidades

i = 0;
while (i < lista_habilidades.length) {
  var habilidad = lista_habilidades[i];
  var md_habilidad = this.getField("md_" + habilidad);
  var pd_habilidad = this.getField("pd_" + habilidad);
  var base_habilidad = this.getField("base_" + habilidad);
  pd_habilidad.value =
    Number(md_habilidad.value) * this.getField("valor_multiplo").value;
  if (Number(pd_habilidad.value) > 0) {
    base_habilidad.value = Math.floor(
      Number(pd_habilidad.value) /
        Number(this.getField("coste_" + habilidad).value)
    );
    md_actuales.value = Number(md_actuales.value) - Number(md_habilidad.value);
  } else {
    base_habilidad.value = ctm ? 0 : -30;
  }
  var bono = this.getField(lista_habilidades_atributos[i] + "_bono");
  var esp = this.getField("esp_" + habilidad);
  var cat_nivel = this.getField("cat_nivel_" + habilidad);
  var final_habilidad = this.getField("final_" + habilidad);
  if (ctm) {
    esp.value = Number(esp.value) + 10;
  }

  final_habilidad.value =
    Number(base_habilidad.value) +
    Number(bono.value) +
    Number(esp.value) +
    Number(cat_nivel.value);

  i++;
}

function actualizarDatosArma(i) {
  var arma_par = this.getField("arma" + i + "_par");
  var arma_esq = this.getField("arma" + i + "_esq");
  var arma_atq = this.getField("arma" + i + "_atq");
  var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
  var arma_db = this.getField("arma" + i + "_db");
  var arma_df = this.getField("arma" + i + "_df");
  var arma_calidad = this.getField("arma" + i + "_calidad");

  arma_atq.value = 5 * Number(arma_calidad.value);
  arma_par.value = 5 * Number(arma_calidad.value);
  arma_esq.value = 0;
  arma_iniciativa.value = 5 * Number(arma_calidad.value);
  arma_db.value = 10 * Number(arma_calidad.value);

  switch (this.getField("arma" + i).value) {
    case "Lazo":
      arma_db.value += 5;
      arma_iniciativa.value += +10;
      break;
    case "Red de gladiador":
      arma_db.value += 5;
      arma_iniciativa.value += 0;
      break;
    case "Combate desarmado":
      arma_db.value += 10;
      arma_iniciativa.value += 20;
      break;
    case "Jarrón":
      arma_db.value += 15;
      arma_iniciativa.value -= 10;
      break;
    case "Botella rota":
      arma_db.value += 15;
      arma_iniciativa.value += 10;
      break;
    case "Antorcha":
      arma_db.value += 20;
      arma_iniciativa.value -= 10;
      break;
    case "Palo de madera":
      arma_db.value += 20;
      arma_iniciativa.value += 0;
      break;
    case "Cadena":
      arma_db.value += 25;
      arma_iniciativa.value += 0;
      break;
    case "Estilete":
      arma_db.value += 25;
      arma_iniciativa.value += 20;
      break;
    case "Silla":
      arma_db.value += 25;
      arma_iniciativa.value -= 20;
      break;
    case "Barra metálica":
      arma_db.value += 25;
      arma_iniciativa.value -= 5;
      break;
    case "Cestus":
    case "Cuchillo de cocina":
      arma_db.value += 25;
      arma_iniciativa.value += 10;
      break;
    case "Garrote":
      arma_db.value += 30;
      arma_iniciativa.value += 0;
      break;
    case "Daga":
      arma_db.value += 30;
      arma_iniciativa.value += 20;
      break;
    case "Vara":
    case "Garfio":
      arma_db.value += 30;
      arma_iniciativa.value += 10;
      break;
    case "Daga de parada":
      arma_db.value += 30;
      arma_iniciativa.value += 15;
      break;
    case "Martillo":
    case "Azada":
      arma_db.value += 30;
      arma_iniciativa.value -= 20;
      break;
    case "Hoz":
      arma_db.value += 35;
      arma_iniciativa.value -= 10;
      break;
    case "Arpón":
      arma_db.value += 35;
      arma_iniciativa.value -= 5;
      break;
    case "Florete":
      arma_db.value += 35;
      arma_iniciativa.value += 15;
      break;
    case "Guadaña":
      arma_db.value += 35;
      arma_iniciativa.value += 0;
      break;
    case "Jabalina":
      arma_db.value += 35;
      arma_iniciativa.value += 5;
      break;
    case "Látigo":
      arma_db.value += 35;
      arma_iniciativa.value -= 20;
      break;
    case "Tridente":
    case "Hacha de leñador":
      arma_db.value += 40;
      arma_iniciativa.value -= 10;
      break;
    case "Pico":
      arma_db.value += 40;
      arma_iniciativa.value -= 20;
      break;
    case "Lanza":
      arma_db.value += 40;
      arma_iniciativa.value += 5;
      break;
    case "Estoque":
    case "Espada corta":
      arma_db.value += 40;
      arma_iniciativa.value += 15;
      break;
    case "Mayal":
    case "Maza":
      arma_db.value += 40;
      arma_iniciativa.value += 0;
      break;
    case "Hacha de mano":
      arma_db.value += 45;
      arma_iniciativa.value += 0;
      break;
    case "Sable":
      arma_db.value += 45;
      arma_iniciativa.value += 10;
      break;
    case "Martillo de guerra":
    case "Cimitarra":
      arma_db.value += 50;
      arma_iniciativa.value -= 5;
      break;
    case "Espada larga":
      arma_db.value += 50;
      arma_iniciativa.value += 0;
      break;
    case "Espada ancha":
      arma_db.value += 55;
      arma_iniciativa.value -= 5;
      break;
    case "Maza pesada de combate":
    case "Alabarda":
      arma_db.value += 60;
      arma_iniciativa.value -= 15;
      break;
    case "Espada bastarda":
    case "Hacha de guerra":
      arma_db.value += 70;
      arma_iniciativa.value -= 30;
      break;
    case "Gran martillo de guerra":
      arma_db.value += 70;
      arma_iniciativa.value -= 35;
      break;
    case "Lanza de caballería":
      arma_db.value += 80;
      arma_iniciativa.value -= 30;
      break;
    case "Mangual":
      arma_db.value += 80;
      arma_iniciativa.value -= 50;
      break;
    case "Mandoble":
      arma_db.value += 90;
      arma_iniciativa.value -= 60;
      break;
    case "Hacha a dos manos":
      arma_db.value += 100;
      arma_iniciativa.value -= 70;
      break;
    case "Rodela":
      arma_db.value += 15;
      arma_iniciativa.value -= 15;
      arma_par.value += 10;
      arma_esq.value += 5;
      break;
    case "Escudo":
      arma_db.value += 20;
      arma_iniciativa.value -= 25;
      arma_par.value += 20;
      arma_esq.value += 10;
      break;
    case "Escudo corporal":
      arma_db.value += 25;
      arma_iniciativa.value -= 40;
      arma_par.value += 30;
      arma_esq.value += 15;
      break;
    default:
      break;
  }

  arma_df.value = Math.ceil(
    Number(arma_db.value) + Number(this.getField("fue_bono").value)
  );
}

function log(k, v) {
  if (v === undefined) {
    console.println(k);
  } else {
    console.println(k + ": " + v);
  }
}
