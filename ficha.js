// Categorias base
this.getField("puntos_base").value = 90 - puntos_base;

this.getField("puntos_creacion").value = Number(puntos_gastados);

// Nivel
var base = Number(nivel.value) == 0 ? 80 : 100;
md_totales.value = (Number(nivel.value) * 10) + base;

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
    actualizarDatosCategoria(5,4,5, 1, 2, 5, 0, 5, 10);
    break;
  case "Guerrero Acróbata":
    actualizarDatosCategoria(10,2, 10, 2, 3, 5, 5, 0, 0);
    break;
  case "Paladín":
    actualizarDatosCategoria(7,3, 5, 2, 2, 0, 0, 5, 10);
    break;
  case "Paladín Oscuro":
    actualizarDatosCategoria(7,3, 5, 2, 2, 5, 0, 0, 5);
    break;
  case "Tao":
    actualizarDatosCategoria(10,2, 5, 2, 2, 0, 0, 0, 0);
    break;
  case "Explorador":
    actualizarDatosCategoria(10,2, 5, 2, 2, 5, 0, 0, 0);
    break;
  case "Sombra":
    actualizarDatosCategoria(10,1, 10, 2, 3, 5, 5, 0, 0);
    break;
  case "Ladrón":
    actualizarDatosCategoria(10,1, 10, 3, 3, 0, 5, 0, 0);
    break;
  case "Asesino":
    actualizarDatosCategoria(10,1, 10, 3, 3, 5, 0, 0, 0);
    break;
  case "Ilusionista":
    actualizarDatosCategoria(10,1, 5, 3, 3, 0, 5, 0, 0);
    break;
  case "Novel":
    actualizarDatosCategoria(10,1, 5, 2, 2, 0, 0, 0, 0);
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
  cat_vida.value = cat_vida_v * Math.floor(nivel.value / 2);
  cat_iniciativa.value = cat_iniciativa_v * Math.floor(nivel.value / 2);
  coste_llA.value = coste_llA_v;
  coste_parada.value = coste_parada_v;
  cat_ataque.value = cat_ataque_v * Math.floor(nivel.value / 2);
  cat_esquiva.value = cat_esquiva_v * Math.floor(nivel.value / 2);
  cat_parada.value = cat_parada_v * Math.floor(nivel.value / 2);
  cat_llA.value = cat_llA_v * Math.floor(nivel.value / 2);
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
        esp_iniciativa.value =
          Number(esp_iniciativa.value) + 60;
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
        res_enfermedades_esp.value =
          Number(res_enfermedades_esp.value) + 25;
        res_venenos_esp.value =
          Number(res_venenos_esp.value) + 25;
        break;
      case "Resistencia física excepcional II":
        res_fisica_esp.value =
          Number(res_fisica_esp.value) + 50;
        res_enfermedades_esp.value =
          Number(res_enfermedades_esp.value) + 50;
        res_venenos_esp.value =
          Number(res_venenos_esp.value) + 50;
        break;
      case "Seductor":
        esp_persuasion.value =
          Number(esp_persuasion.value) + 60;
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

base_vida.value = lista_vida[Number(con_actual.value) - 1] + Math.floor(Number(pd_vida.value) / Number(coste_vida.value));
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

pd_llA.value = Number(md_llA.value) * valor_multiplo;

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



// Presencia
var presencia = this.getField("presencia");
presencia.value = 25 + nivel.value;

// Resistencias
this.getField("res_fisica_final").value =
  presencia.value + Number(con_bono.value) + Number(res_fisica_esp.value);
this.getField("res_enfermedades_final").value =
  presencia.value + Number(con_bono.value) + Number(res_enfermedades_esp.value);
this.getField("res_venenos_final").value =
  presencia.value + Number(con_bono.value) + Number(res_venenos_esp.value);

// Tabla de Armas

var combate_desarmado = false;

var num_tablas = 7;

for (i = 1; i <= num_tablas; i++) {
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
      if (tabla_arma_clase_i.value === tabla_arma_clase_j.value && tabla_arma_i.value !== tabla_arma_i.value.toUpperCase()) {
        if (
          tabla_arma_i.value === tabla_arma_j.value || tabla_arma_j.value !== tabla_arma_j.value.toUpperCase()
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
    i = num_tablas+1;
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
    check.readonly = false;
    var arma_ataque = this.getField("arma" + i + "_atq");
    var arma_parada = this.getField("arma" + i + "_par");
    var arma_esquiva = this.getField("arma" + i + "_esq");
    var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
    var arma_freq = this.getField("arma" + i + "_freq");
    var arma_db = this.getField("arma" + i + "_db");
    var arma_df = this.getField("arma" + i + "_df");
    var arma = this.getField("arma" + i);

    actualizarDatosArma(i);

    arma_df.value = Math.ceil(Number(arma_db.value) + Number(fue_bono.value));


    if (manos_ocupadas === false) {
      check.readonly = false;
      if (check.value === "Eq.") {
        arma_df.textSize = 12;
        manos_libres = false;
        iniciativa_total_arma.value += Number(arma_iniciativa.value);

        // Negativos por no saber usar el arma
        aplicarNegativosArmaPorTabla(i);

        // Negativos por no tener fuerza requerida
        aplicarNegativosArmaPorFueReq(i);

        this.getField("equipo_ataque").value = Number(arma_ataque.value);
        this.getField("equipo_parada").value = Number(arma_parada.value);
        this.getField("equipo_esquiva").value = Number(arma_esquiva.value);

        num_checks_armas++;

        // Ocupar manos si se seleccionan dos armas o una a dos manos
        if (num_checks_armas === 2 || (num_checks_armas === 1 && especial.value === "A dos manos")) {
          manos_ocupadas = true;
        }

      } else {
        arma_df.textSize = 8;
      }
    } else {
      check.readonly = true;
    }
  }
  i++;
}
i = 1;

// Acciones primer arma (desarmado)

if (manos_ocupadas === true) {
  this.getField("arma0_df").textSize = 8;
  this.getField("arma0_check").value = "—";
  while (i < 7) {
    var check = this.getField("arma" + i + "_check");
    if (check.value !== "Eq.") {
      check.readonly = true;
    }
    i++;
  }
} else if (manos_libres === true) {

  actualizarPrimerArma();

  equipo_ataque.value += this.getField("arma0_atq").value;
  equipo_parada.value += this.getField("arma0_par").value;
  iniciativa_total_arma.value += this.getField("arma0_iniciativa").value;

} else {
  this.getField("arma0_df").textSize = 8;
  this.getField("arma0_check").value = "—";
}

base_llA.value = Math.floor(Number(pd_llA.value) / Number(coste_llA.value));

this.getField("final_llA").value =
  Number(base_llA.value) +
  Number(esp_llA.value) +
  Number(fue_bono.value) +
  Number(cat_llA.value);

// Armaduras

i = 1;
var armaduras_duras_eq = 0;
var armaduras_blandas_eq = 0;
var yelmos_blandos_eq = 0;
var yelmos_duros_eq = 0;

var armadura_vel = this.getField("armadura_vel");
armadura_vel.value = 0;
var restriccion_mov_armadura = 0;

var esp_ver = this.getField("esp_ver");
var esp_escuchar = this.getField("esp_escuchar");
var esp_buscar = this.getField("esp_buscar");

var esp_acrobacias = this.getField("esp_acrobacias");
var esp_atletismo = this.getField("esp_atletismo");
var esp_montar = this.getField("esp_montar");
var esp_nadar = this.getField("esp_nadar");
var esp_trepar = this.getField("esp_trepar");
var esp_saltar = this.getField("esp_saltar");

var armadura_cabeza_lista = [];
var armadura_espalda_lista = [];
var armadura_hombro_der_lista = [];
var armadura_hombro_izq_lista = [];
var armadura_pecho_lista = [];
var armadura_brazo_der_lista = [];
var armadura_brazo_izq_lista = [];
var armadura_mano_der_lista = [];
var armadura_mano_izq_lista = [];
var armadura_pierna_der_lista = [];
var armadura_pierna_izq_lista = [];
var armadura_pie_der_lista = [];
var armadura_pie_izq_lista = [];

while (i < 7) {
  var armadura_dureza = this.getField("armadura" + i + "_dureza");
  var armadura_mov = this.getField("armadura" + i + "_mov");
  var armadura_advertir = this.getField("armadura" + i + "_advertir");

  if (armadura_dureza.value !== "—") {
    actualizarDatosArmadura(i);
    var armadura_clase = this.getField("armadura" + i).value.split(" ")[0];
    var armadura_check = this.getField("armadura" + i + "_check");
    if (armadura_check.value === "Eq.") {
      if (armadura_clase === "Yelmo") {
        // Yelmo
        if (armadura_dureza.value === "Dura") {
          yelmos_duros_eq++;
        } else {
          yelmos_blandos_eq++;
        }
      } else {
        // Armadura
        if (armadura_dureza.value === "Dura") {
          armaduras_duras_eq++;
        } else {
          armaduras_blandas_eq++;
        }
      }

      aplicarNegativosArmaduraEquipada(i);

      armadura_vel.value += Number(armadura_mov.value);
      restriccion_mov_armadura += Math.floor((Number(armadura_mov.value) * 2 / 10));

      esp_acrobacias.value += Number(armadura_mov.value);
      esp_atletismo.value += Number(armadura_mov.value);
      esp_montar.value += Number(armadura_mov.value);
      esp_nadar.value += Number(armadura_mov.value);
      esp_trepar.value += Number(armadura_mov.value);
      esp_saltar.value += Number(armadura_mov.value);

      esp_ver.value += Number(armadura_advertir.value);
      esp_escuchar.value += Number(armadura_advertir.value);
      esp_buscar.value += Number(armadura_advertir.value);

      var armad_def = this.getField("armadura" + i + "_def");
      switch (armadura_clase) {
        case "Peto":
          armadura_pecho_lista.push(armad_def.value);
          armadura_espalda_lista.push(armad_def.value);
          break;
        case "Camisola":
          armadura_pecho_lista.push(armad_def.value);
          armadura_espalda_lista.push(armad_def.value);
          armadura_hombro_der_lista.push(armad_def.value);
          armadura_hombro_izq_lista.push(armad_def.value);
          armadura_brazo_der_lista.push(armad_def.value);
          armadura_brazo_izq_lista.push(armad_def.value);
          armadura_mano_der_lista.push(armad_def.value);
          armadura_mano_izq_lista.push(armad_def.value);
          break;
        case "Completa":
          armadura_pecho_lista.push(armad_def.value);
          armadura_espalda_lista.push(armad_def.value);
          armadura_hombro_der_lista.push(armad_def.value);
          armadura_hombro_izq_lista.push(armad_def.value);
          armadura_brazo_der_lista.push(armad_def.value);
          armadura_brazo_izq_lista.push(armad_def.value);
          armadura_mano_der_lista.push(armad_def.value);
          armadura_mano_izq_lista.push(armad_def.value);
          armadura_pierna_der_lista.push(armad_def.value);
          armadura_pierna_izq_lista.push(armad_def.value);
          armadura_pie_der_lista.push(armad_def.value);
          armadura_pie_izq_lista.push(armad_def.value);
          break;
        case "Yelmo":
          armadura_cabeza_lista.push(armad_def.value);
          break;
        default:
          break;
      }

    }

  }
  i++;
}

var cuerpo_def = this.getField("armadura0_def").value;

if(cuerpo_def > 0) {
  armadura_pecho_lista.push(cuerpo_def);
  armadura_espalda_lista.push(cuerpo_def);
  armadura_hombro_der_lista.push(cuerpo_def);
  armadura_hombro_izq_lista.push(cuerpo_def);
  armadura_brazo_der_lista.push(cuerpo_def);
  armadura_brazo_izq_lista.push(cuerpo_def);
  armadura_mano_der_lista.push(cuerpo_def);
  armadura_mano_izq_lista.push(cuerpo_def);
  armadura_pierna_der_lista.push(cuerpo_def);
  armadura_pierna_izq_lista.push(cuerpo_def);
  armadura_pie_der_lista.push(cuerpo_def);
  armadura_pie_izq_lista.push(cuerpo_def);
  armadura_cabeza_lista.push(cuerpo_def);
}

var armaduras_duras_full = false;
var armaduras_blandas_full = false;

if (armaduras_duras_eq > 0) {
  armaduras_duras_full = true;
  if (armaduras_blandas_eq > 2) {
    armaduras_blandas_full = true;
  }
}

var yelmos_duros_full = false;
var yelmos_blandos_full = false;

if (yelmos_duros_eq > 0) {
  yelmos_duros_full = true;
  if (yelmos_blandos_eq > 2) {
    yelmos_blandos_full = true;
  }
}

i = 1;
var armadura_peto = [];
var armadura_camisola = [];
var armadura_completa = [];
var armadura_yelmo = [];
while (i < 7) {
  var armadura = this.getField("armadura" + i);
  var armadura_check = this.getField("armadura" + i + "_check");
  var armadura_dureza = this.getField("armadura" + i + "_dureza");
  var armad_def = this.getField("armadura" + i + "_def");
  var armad_clase = armadura.value.split(" ")[0];
  if (armad_def.value !== "—") {
    if (
      (armadura_check.value !== "Eq.") && (
        (armaduras_duras_full && armad_clase !== "Yelmo" && armadura_dureza.value === "Dura") ||
        (armaduras_blandas_full && armad_clase !== "Yelmo" && armadura_dureza.value === "Blanda") ||
        (yelmos_duros_full && armad_clase === "Yelmo" && armadura_dureza.value === "Dura") ||
        (yelmos_blandos_full && armad_clase === "Yelmo" && armadura_dureza.value === "Blanda")
      )
    ) {
      armadura_check.readonly = true;
    } else {
      armadura_check.readonly = false;
    }
  }
  i++;
}

var armadura_cabeza_total = 0;
var armadura_espalda_total = 0;
var armadura_hombro_der_total = 0;
var armadura_hombro_izq_total = 0;
var armadura_pecho_total = 0;
var armadura_brazo_der_total = 0;
var armadura_brazo_izq_total = 0;
var armadura_mano_der_total = 0;
var armadura_mano_izq_total = 0;
var armadura_pierna_der_total = 0;
var armadura_pierna_izq_total = 0;
var armadura_pie_der_total = 0;
var armadura_pie_izq_total = 0;

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

var armadura_cabeza = this.getField("armadura_cabeza");
var armadura_espalda = this.getField("armadura_espalda");
var armadura_hombro_der = this.getField("armadura_hombro_der");
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

var seleccionado_armadura_cabeza = armadura_cabeza.value;
var seleccionado_armadura_espalda = armadura_espalda.value;
var seleccionado_armadura_hombro_der = armadura_hombro_der.value;
var seleccionado_armadura_hombro_der = armadura_hombro_der.value;
var seleccionado_armadura_hombro_izq = armadura_hombro_izq.value;
var seleccionado_armadura_pecho = armadura_pecho.value;
var seleccionado_armadura_brazo_der = armadura_brazo_der.value;
var seleccionado_armadura_brazo_izq = armadura_brazo_izq.value;
var seleccionado_armadura_mano_der = armadura_mano_der.value;
var seleccionado_armadura_mano_izq = armadura_mano_izq.value;
var seleccionado_armadura_pierna_der = armadura_pierna_der.value;
var seleccionado_armadura_pierna_izq = armadura_pierna_izq.value;
var seleccionado_armadura_pie_der = armadura_pie_der.value;
var seleccionado_armadura_pie_izq = armadura_pie_izq.value;

i = 0;
while (i < armadura_cabeza_lista.length) {
  if (i === 0) {
    armadura_cabeza_total += Number(armadura_cabeza_lista[i]);
  } else {
    armadura_cabeza_total += Number((Math.floor((armadura_cabeza_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_cabeza_lista = [];

i = armadura_cabeza_total;
// armadura_cabeza.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_cabeza) === Number(i)) {
    armadura_cabeza_lista.unshift(i);
  } else {
    armadura_cabeza_lista.push(i);
  }
  i = i - 10;
}


i = 0;
while (i < armadura_pecho_lista.length) {
  if (i === 0) {
    armadura_pecho_total += Number(armadura_pecho_lista[i]);
  } else {
    armadura_pecho_total += Number((Math.floor((armadura_pecho_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pecho_lista = [];

i = armadura_pecho_total;
// armadura_pecho.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pecho) === Number(i)) {
    armadura_pecho_lista.unshift(i);
  } else {
    armadura_pecho_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_espalda_lista.length) {
  if (i === 0) {
    armadura_espalda_total += Number(armadura_espalda_lista[i]);
  } else {
    armadura_espalda_total += Number((Math.floor((armadura_espalda_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_espalda_lista = [];

i = armadura_espalda_total;
// armadura_espalda.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_espalda) === Number(i)) {
    armadura_espalda_lista.unshift(i);
  } else {
    armadura_espalda_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_hombro_der_lista.length) {
  if (i === 0) {
    armadura_hombro_der_total += Number(armadura_hombro_der_lista[i]);
  } else {
    armadura_hombro_der_total += Number((Math.floor((armadura_hombro_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_hombro_der_lista = [];

i = armadura_hombro_der_total;
// armadura_hombro_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_hombro_der) === Number(i)) {
    armadura_hombro_der_lista.unshift(i);
  } else {
    armadura_hombro_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_hombro_izq_lista.length) {
  if (i === 0) {
    armadura_hombro_izq_total += Number(armadura_hombro_izq_lista[i]);
  } else {
    armadura_hombro_izq_total += Number((Math.floor((armadura_hombro_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_hombro_izq_lista = [];

i = armadura_hombro_izq_total;
// armadura_hombro_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_hombro_izq) === Number(i)) {
    armadura_hombro_izq_lista.unshift(i);
  } else {
    armadura_hombro_izq_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_brazo_der_lista.length) {
  if (i === 0) {
    armadura_brazo_der_total += Number(armadura_brazo_der_lista[i]);
  } else {
    armadura_brazo_der_total += Number((Math.floor((armadura_brazo_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_brazo_der_lista = [];

i = armadura_brazo_der_total;
// armadura_brazo_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_brazo_der) === Number(i)) {
    armadura_brazo_der_lista.unshift(i);
  } else {
    armadura_brazo_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_brazo_izq_lista.length) {
  if (i === 0) {
    armadura_brazo_izq_total += Number(armadura_brazo_izq_lista[i]);
  } else {
    armadura_brazo_izq_total += Number((Math.floor((armadura_brazo_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_brazo_izq_lista = [];

i = armadura_brazo_izq_total;
// armadura_brazo_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_brazo_izq) === Number(i)) {
    armadura_brazo_izq_lista.unshift(i);
  } else {
    armadura_brazo_izq_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_mano_der_lista.length) {
  if (i === 0) {
    armadura_mano_der_total += Number(armadura_mano_der_lista[i]);
  } else {
    armadura_mano_der_total += Number((Math.floor((armadura_mano_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_mano_der_lista = [];

i = armadura_mano_der_total;
// armadura_mano_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_mano_der) === Number(i)) {
    armadura_mano_der_lista.unshift(i);
  } else {
    armadura_mano_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_mano_izq_lista.length) {
  if (i === 0) {
    armadura_mano_izq_total += Number(armadura_mano_izq_lista[i]);
  } else {
    armadura_mano_izq_total += Number((Math.floor((armadura_mano_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_mano_izq_lista = [];

i = armadura_mano_izq_total;
// armadura_mano_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_mano_izq) === Number(i)) {
    armadura_mano_izq_lista.unshift(i);
  } else {
    armadura_mano_izq_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_pierna_der_lista.length) {
  if (i === 0) {
    armadura_pierna_der_total += Number(armadura_pierna_der_lista[i]);
  } else {
    armadura_pierna_der_total += Number((Math.floor((armadura_pierna_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pierna_der_lista = [];

i = armadura_pierna_der_total;
// armadura_pierna_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pierna_der) === Number(i)) {
    armadura_pierna_der_lista.unshift(i);
  } else {
    armadura_pierna_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_pierna_izq_lista.length) {
  if (i === 0) {
    armadura_pierna_izq_total += Number(armadura_pierna_izq_lista[i]);
  } else {
    armadura_pierna_izq_total += Number((Math.floor((armadura_pierna_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pierna_izq_lista = [];

i = armadura_pierna_izq_total;
// armadura_pierna_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pierna_izq) === Number(i)) {
    armadura_pierna_izq_lista.unshift(i);
  } else {
    armadura_pierna_izq_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_pie_der_lista.length) {
  if (i === 0) {
    armadura_pie_der_total += Number(armadura_pie_der_lista[i]);
  } else {
    armadura_pie_der_total += Number((Math.floor((armadura_pie_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pie_der_lista = [];

i = armadura_pie_der_total;
// armadura_pie_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pie_der) === Number(i)) {
    armadura_pie_der_lista.unshift(i);
  } else {
    armadura_pie_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_pie_izq_lista.length) {
  if (i === 0) {
    armadura_pie_izq_total += Number(armadura_pie_izq_lista[i]);
  } else {
    armadura_pie_izq_total += Number((Math.floor((armadura_pie_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pie_izq_lista = [];

i = armadura_pie_izq_total;
// armadura_pie_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pie_izq) === Number(i)) {
    armadura_pie_izq_lista.unshift(i);
  } else {
    armadura_pie_izq_lista.push(i);
  }

  i = i - 10;
}

armadura_cabeza.setItems(armadura_cabeza_lista);
armadura_espalda.setItems(armadura_espalda_lista);
armadura_hombro_der.setItems(armadura_hombro_der_lista);
armadura_hombro_der.setItems(armadura_hombro_der_lista);
armadura_hombro_izq.setItems(armadura_hombro_izq_lista);
armadura_pecho.setItems(armadura_pecho_lista);
armadura_brazo_der.setItems(armadura_brazo_der_lista);
armadura_brazo_izq.setItems(armadura_brazo_izq_lista);
armadura_mano_der.setItems(armadura_mano_der_lista);
armadura_mano_izq.setItems(armadura_mano_izq_lista);
armadura_pierna_der.setItems(armadura_pierna_der_lista);
armadura_pierna_izq.setItems(armadura_pierna_izq_lista);
armadura_pie_der.setItems(armadura_pie_der_lista);
armadura_pie_izq.setItems(armadura_pie_izq_lista);


// Movimiento
var mov_max = this.getField("mov_max");
var mov_base = this.getField("mov_base");
var mov_total = agi_actual.value + restriccion_mov_armadura;
if (mov_total < 1) {
  mov_max.value = "0";
} else {
  switch (agi_actual.value + restriccion_mov_armadura) {
    case 1:
    case 2:
    case 3:
    case 4:
      mov_max.value = 1;
      break;
    case 5:
      mov_max.value = 2;
      break;
    case 6:
      mov_max.value = 3;
      break;
    case 7:
      mov_max.value = 4;
      break;
    case 8:
      mov_max.value = 5;
      break;
    case 9:
      mov_max.value = 6;
      break;
    case 10:
    case 11:
    case 12:
      mov_max.value = 7;
      break;
    case 13:
    case 14:
    case 15:
      mov_max.value = 8;
      break;
    case 16:
      mov_max.value = 9;
      break;
    case 17:
      mov_max.value = 10;
      break;
    case 18:
    case 19:
      mov_max.value = 11;
      break;
    default:
      mov_max.value = 12;
      break;
  }
  switch (agi_actual.value) {
    case 1:
    case 2:
    case 3:
    case 4:
      mov_base.value = 1;
      break;
    case 5:
      mov_base.value = 2;
      break;
    case 6:
      mov_base.value = 3;
      break;
    case 7:
      mov_base.value = 4;
      break;
    case 8:
      mov_base.value = 5;
      break;
    case 9:
      mov_base.value = 6;
      break;
    case 10:
    case 11:
    case 12:
      mov_base.value = 7;
      break;
    case 13:
    case 14:
    case 15:
      mov_base.value = 8;
      break;
    case 16:
      mov_base.value = 9;
      break;
    case 17:
      mov_base.value = 10;
      break;
    case 18:
    case 19:
      mov_base.value = 11;
      break;
    default:
      mov_base.value = 12;
      break;
  }
}


// Iniciativa
this.getField("final_iniciativa").value =
  Number(this.getField("armadura_vel").value) +
  Number(agi_bono.value) +
  Number(des_bono.value) +
  Number(this.getField("arma_vel").value) +
  Number(this.getField("cat_iniciativa").value) +
  Number(esp_iniciativa.value);

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
  Number(agi_bono.value) +
  Number(this.getField("cat_esquiva").value);


  i = 0;
  while (i < lista_habilidades.length) {
    var habilidad = lista_habilidades[i];
    var md_habilidad = this.getField("md_" + habilidad);
    var pd_habilidad = this.getField("pd_" + habilidad);
    var base_habilidad = this.getField("base_" + habilidad);
    pd_habilidad.value = Number(md_habilidad.value) * valor_multiplo;
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

  this.getField("mov_restr").value = (mov_max.value - mov_base.value);

  md_actuales.value =
  Number(md_totales.value) -
  Number(this.getField("md_ataque").value) -
  Number(this.getField("md_parada").value) -
  Number(this.getField("md_esquiva").value) -
  Number(md_llA.value) -
  Number(md_vida.value) -
  Number(this.getField("idioma1_md").value) -
  Number(this.getField("idioma2_md").value) -
  Number(this.getField("idioma3_md").value) -
  Number(this.getField("idioma4_md").value) -
  Number(this.getField("idioma5_md").value) -
  Number(this.getField("tabla_arma1_md").value) -
  Number(this.getField("tabla_arma2_md").value) -
  Number(this.getField("tabla_arma3_md").value) -
  Number(this.getField("tabla_arma4_md").value) -
  Number(this.getField("tabla_arma5_md").value) -
  Number(this.getField("tabla_arma6_md").value) -
  Number(this.getField("tabla_arma7_md").value)
  ;