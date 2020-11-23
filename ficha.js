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

// Atributos actuales
// if (
//   event.target.name === "agi_actual" ||
//   event.target.name === "con_actual" ||
//   event.target.name === "des_actual" ||
//   event.target.name === "fue_actual" ||
//   event.target.name === "int_actual" ||
//   event.target.name === "per_actual" ||
//   event.target.name === "pod_actual" ||
//   event.target.name === "vol_actual"
// ) {
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
i = 0;
while (i < lista_atr.length) {
  var atr = lista_atr[i];
  this.getField(atr + "_bono").value =
    lista_bonos[Number(this.getField(atr + "_actual").value) - 1];
  i++;
}

// }

// Nivel
// if (event.target.name === "nivel") {
var base = Number(this.getField("nivel").value) == 0 ? 400 : 500;
this.getField("pd_totales").value =
  Number(this.getField("nivel").value) * 100 + base;
// }

// Categoria
// if (event.target.name === "categoria" || event.target.name === "nivel") {
var categoria = this.getField("categoria");
var nivel = this.getField("nivel");
var coste_vida = this.getField("coste_vida");
var cat_vida = this.getField("cat_vida");
var cat_turno = this.getField("cat_turno");

var coste_llA = this.getField("coste_llA");

var cat_ataque = this.getField("cat_ataque");
var cat_parada = this.getField("cat_parada");
var cat_llA = this.getField("cat_llA");

// var coste_acrobacias = this.getField("coste_acrobacias");
// var coste_atletismo = this.getField("coste_atletismo");
// var coste_montar = this.getField("coste_montar");
// var coste_nadar = this.getField("coste_nadar");
// var coste_trepar = this.getField("coste_trepar");
// var coste_saltar = this.getField("coste_saltar");
// var coste_frialdad = this.getField("coste_frialdad");
// var coste_resdolor = this.getField("coste_resdolor");
// var coste_escuchar = this.getField("coste_escuchar");
// var coste_ver = this.getField("coste_ver");
// var coste_buscar = this.getField("coste_buscar");
// var coste_rastrear = this.getField("coste_rastrear");
// var coste_animales = this.getField("coste_animales");
// var coste_ciencia = this.getField("coste_ciencia");
// var coste_herbolaria = this.getField("coste_herbolaria");
// var coste_historia = this.getField("coste_historia");
// var coste_ley = this.getField("coste_ley");
// var coste_medicina = this.getField("coste_medicina");
// var coste_memorizar = this.getField("coste_memorizar");
// var coste_navegacion = this.getField("coste_navegacion");
// var coste_ocultismo = this.getField("coste_ocultismo");
// var coste_tasacion = this.getField("coste_tasacion");
// var coste_comerciar = this.getField("coste_comerciar");
// var coste_callejear = this.getField("coste_callejear");
// var coste_estilo = this.getField("coste_estilo");
// var coste_intimidar = this.getField("coste_intimidar");
// var coste_etiqueta = this.getField("coste_etiqueta");
// var coste_persuasion = this.getField("coste_persuasion");
// var coste_advsocial = this.getField("coste_advsocial");
// var coste_cerrajeria = this.getField("coste_cerrajeria");
// var coste_disfraz = this.getField("coste_disfraz");
// var coste_ocultarse = this.getField("coste_ocultarse");
// var coste_robo = this.getField("coste_robo");
// var coste_sigilo = this.getField("coste_sigilo");
// var coste_tramperia = this.getField("coste_tramperia");
// var coste_venenos = this.getField("coste_venenos");
// var coste_arte = this.getField("coste_arte");
// var coste_baile = this.getField("coste_baile");
// var coste_forja = this.getField("coste_forja");
// var coste_musica = this.getField("coste_musica");
// var coste_tmanos = this.getField("coste_tmanos");
// var coste_alquimia = this.getField("coste_alquimia");
// var coste_sastreria = this.getField("coste_sastreria");
// var coste_joyeria = this.getField("coste_joyeria");
// var coste_caligrafia = this.getField("coste_caligrafia");
// var coste_mates = this.getField("coste_mates");
// var coste_cocina = this.getField("coste_cocina");

// var cat_nivel_acrobacias = this.getField("cat_nivel_acrobacias");
// var cat_nivel_atletismo = this.getField("cat_nivel_atletismo");
// var cat_nivel_montar = this.getField("cat_nivel_montar");
// var cat_nivel_nadar = this.getField("cat_nivel_nadar");
// var cat_nivel_trepar = this.getField("cat_nivel_trepar");
// var cat_nivel_saltar = this.getField("cat_nivel_saltar");
// var cat_nivel_frialdad = this.getField("cat_nivel_frialdad");
// var cat_nivel_resdolor = this.getField("cat_nivel_resdolor");
// var cat_nivel_escuchar = this.getField("cat_nivel_escuchar");
// var cat_nivel_ver = this.getField("cat_nivel_ver");
// var cat_nivel_buscar = this.getField("cat_nivel_buscar");
// var cat_nivel_rastrear = this.getField("cat_nivel_rastrear");
// var cat_nivel_animales = this.getField("cat_nivel_animales");
// var cat_nivel_ciencia = this.getField("cat_nivel_ciencia");
// var cat_nivel_herbolaria = this.getField("cat_nivel_herbolaria");
// var cat_nivel_historia = this.getField("cat_nivel_historia");
// var cat_nivel_ley = this.getField("cat_nivel_ley");
// var cat_nivel_medicina = this.getField("cat_nivel_medicina");
// var cat_nivel_memorizar = this.getField("cat_nivel_memorizar");
// var cat_nivel_navegacion = this.getField("cat_nivel_navegacion");
// var cat_nivel_ocultismo = this.getField("cat_nivel_ocultismo");
// var cat_nivel_tasacion = this.getField("cat_nivel_tasacion");
// var cat_nivel_comerciar = this.getField("cat_nivel_comerciar");
// var cat_nivel_callejear = this.getField("cat_nivel_callejear");
// var cat_nivel_estilo = this.getField("cat_nivel_estilo");
// var cat_nivel_intimidar = this.getField("cat_nivel_intimidar");
// var cat_nivel_etiqueta = this.getField("cat_nivel_etiqueta");
// var cat_nivel_persuasion = this.getField("cat_nivel_persuasion");
// var cat_nivel_advsocial = this.getField("cat_nivel_advsocial");
// var cat_nivel_cerrajeria = this.getField("cat_nivel_cerrajeria");
// var cat_nivel_disfraz = this.getField("cat_nivel_disfraz");
// var cat_nivel_ocultarse = this.getField("cat_nivel_ocultarse");
// var cat_nivel_robo = this.getField("cat_nivel_robo");
// var cat_nivel_sigilo = this.getField("cat_nivel_sigilo");
// var cat_nivel_tramperia = this.getField("cat_nivel_tramperia");
// var cat_nivel_venenos = this.getField("cat_nivel_venenos");
// var cat_nivel_arte = this.getField("cat_nivel_arte");
// var cat_nivel_baile = this.getField("cat_nivel_baile");
// var cat_nivel_forja = this.getField("cat_nivel_forja");
// var cat_nivel_musica = this.getField("cat_nivel_musica");
// var cat_nivel_tmanos = this.getField("cat_nivel_tmanos");
// var cat_nivel_alquimia = this.getField("cat_nivel_alquimia");
// var cat_nivel_sastreria = this.getField("cat_nivel_sastreria");
// var cat_nivel_joyeria = this.getField("cat_nivel_joyeria");
// var cat_nivel_caligrafia = this.getField("cat_nivel_caligrafia");
// var cat_nivel_mates = this.getField("cat_nivel_mates");
// var cat_nivel_cocina = this.getField("cat_nivel_cocina");

var bono_habilidades_10 = [];
var bono_habilidades_5 = [];
var coste_habilidades_1 = [];
var coste_habilidades_2 = [];
var coste_ramas_1 = [];
var coste_ramas_2 = [];
var coste_ramas_3 = [];

switch (categoria.value) {
  case "Guerrero":
    coste_vida.value = 10;
    cat_vida.value = 20 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 1;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 10 * nivel.value;
    coste_ramas_1 = ["vigor"];
    coste_ramas_2 = ["atleticas", "sociales", "perceptivas", "creativas"];
    coste_ramas_3 = ["intelectuales", "subterfugio"];
    bono_habilidades_5 = ["resdolor"];
    break;
  case "Guerrero Acróbata":
    coste_vida.value = 20;
    cat_vida.value = 10 * nivel.value;
    cat_turno.value = 10 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 0;
    coste_ramas_2 = [
      "atleticas",
      "sociales",
      "perceptivas",
      "vigor",
      "subterfugio",
      "creativas",
    ];
    coste_ramas_3 = ["intelectuales"];
    bono_habilidades_10 = [
      "acrobacias",
      "saltar",
      "atletismo",
      "tmanos",
      "estilo",
    ];
    break;
  case "Paladín":
    coste_vida.value = 15;
    cat_vida.value = 15 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 10 * nivel.value;
    coste_ramas_1 = ["sociales"];
    coste_ramas_2 = [
      "atleticas",
      "perceptivas",
      "intelectuales",
      "vigor",
      "creativas",
    ];
    coste_ramas_3 = ["subterfugio"];
    coste_habilidades_1 = ["resdolor"];
    bono_habilidades_5 = ["estilo"];
    bono_habilidades_10 = ["acrobacias", "saltar", "atletismo", "tmanos"];
    break;
  case "Paladín Oscuro":
    coste_vida.value = 15;
    cat_vida.value = 15 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 0;
    cat_llA.value = 5 * nivel.value;
    coste_ramas_1 = ["sociales"];
    coste_ramas_2 = [
      "atleticas",
      "perceptivas",
      "intelectuales",
      "vigor",
      "subterfugio",
      "creativas",
    ];
    coste_habilidades_1 = ["frialdad"];
    bono_habilidades_5 = ["estilo"];
    bono_habilidades_10 = ["acrobacias", "saltar", "atletismo", "tmanos"];
    break;
  case "Tao":
    coste_vida.value = 20;
    cat_vida.value = 10 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = 0;
    cat_llA.value = 0;
    coste_ramas_2 = [
      "atleticas",
      "sociales",
      "perceptivas",
      "vigor",
      "subterfugio",
      "creativas",
    ];
    coste_ramas_3 = ["intelectuales"];
    bono_habilidades_10 = ["estilo"];
    break;
  case "Explorador":
    coste_vida.value = 20;
    cat_vida.value = 10 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 0;
    cat_llA.value = 0;
    coste_ramas_1 = ["perceptivas"];
    coste_ramas_2 = ["atleticas", "sociales", "subterfugio", "creativas"];
    coste_ramas_3 = ["intelectuales", "vigor"];
    coste_habilidades_1 = ["tramperia", "animales"];
    coste_habilidades_2 = ["herbolaria", "medicina"]; 
    bono_habilidades_5 = [
      "ver",
      "escuchar",
      "tramperia",
      "animales",
      "herbolaria",
    ];
    bono_habilidades_10 = ["buscar", "rastrear", "sigilo"];
    break;
  case "Sombra":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 10 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 0;
    coste_ramas_2 = [
      "vigor",
      "perceptivas",
      "atleticas",
      "sociales",
      "subterfugio",
      "creativas",
    ];
    coste_ramas_3 = ["intelectuales"];
    bono_habilidades_10 = ["ver", "escuchar", "ocultarse", "buscar", "sigilo"];
    break;
  case "Ladrón":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 10 * nivel.value;
    coste_llA.value = 3;
    cat_ataque.value = 0;
    cat_parada.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_llA.value = 0;
    coste_ramas_1 = ["atleticas", "subterfugio"];
    coste_ramas_2 = ["perceptivas", "sociales", "creativas"];
    coste_ramas_3 = ["intelectuales", "vigor"];
    coste_habilidades_1 = ["tasacion"];
    bono_habilidades_5 = [
      "ver",
      "escuchar",
      "ocultarse",
      "buscar",
      "sigilo",
      "tramperia",
      "tmanos",
    ];
    bono_habilidades_10 = ["robo"];
    break;
  case "Asesino":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 10 * nivel.value;
    coste_llA.value = 3;
    cat_ataque.value = 5 * nivel.value > 50 ? 50 : 5 * nivel.value;
    cat_parada.value = 0;
    cat_llA.value = 0;
    coste_ramas_1 = ["perceptivas"];
    coste_ramas_2 = ["sociales", "creativas", "atleticas", "subterfugio"];
    coste_ramas_3 = ["intelectuales", "vigor"];
    coste_habilidades_1 = ["sigilo"];
    coste_habilidades_2 = ["frialdad", "memorizar"];
    bono_habilidades_5 = ["ver", "escuchar"];
    bono_habilidades_10 = [
      "ocultarse",
      "sigilo",
      "venenos",
      "frialdad",
      "tramperia",
    ];
    break;
  case "Ilusionista":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 3;
    cat_ataque.value = 0;
    cat_parada.value = 5;
    cat_llA.value = 0;
    coste_ramas_2 = [
      "perceptivas",
      "intelectuales",
      "sociales",
      "creativas",
      "atleticas",
      "subterfugio",
    ];
    coste_ramas_3 = ["vigor"];
    coste_habilidades_1 = ["tmanos", "persuasion"];
    bono_habilidades_5 = [
      "advsocial",
      "disfraz",
      "robo",
      "persuasion",
      "sigilo",
    ];
    bono_habilidades_10 = ["ocultarse", "tmanos"];
    break;
  case "Novel":
    coste_vida.value = 20;
    cat_vida.value = 5 * nivel.value;
    cat_turno.value = 5 * nivel.value;
    coste_llA.value = 2;
    cat_ataque.value = 0;
    cat_parada.value = 0;
    cat_llA.value = 0;
    coste_ramas_2 = [
      "vigor",
      "perceptivas",
      "intelectuales",
      "sociales",
      "creativas",
      "atleticas",
      "subterfugio",
    ];
    break;
  default:
    break;
}

while (i < bono_habilidades_10.length) {
  var habilidad_bono = bono_habilidades_10[i];
  this.getField("cat_nivel_" + habilidad_bono).value = 10 * Number(nivel.value);
  i++;
}
i = 0;
while (i < bono_habilidades_5.length) {
  var habilidad_bono = bono_habilidades_5[i];
  this.getField("cat_nivel_" + habilidad_bono).value = 5 * Number(nivel.value);
  i++;
}

var index = 0;

// COSTES
i = 0;
j = 0;
k = 0;

var lista_ramas = [coste_ramas_1, coste_ramas_2,coste_ramas_3];
while (i < lista_ramas.length) {
  index = i + 1;
  var coste_ramas = lista_ramas[i];
  while (j < coste_ramas.length) {
    var rama = coste_ramas[j];
    if (Number(this.getField("coste_" + rama).value) !== index) {
      this.getField("coste_" + rama).value = index;
    }
    var habilidades_rama = [];
    switch (rama) {
      case "atleticas":
        habilidades_rama = lista_habilidades.slice(
          0,
          lista_habilidades.indexOf("frialdad")
        );
        break;
      case "vigor":
        habilidades_rama = lista_habilidades.slice(
          lista_habilidades.indexOf("frialdad"),
          lista_habilidades.indexOf("escuchar")
        );
        break;
      case "perceptivas":
        habilidades_rama = lista_habilidades.slice(
          lista_habilidades.indexOf("escuchar"),
          lista_habilidades.indexOf("animales")
        );
        break;
      case "intelectuales":
        habilidades_rama = lista_habilidades.slice(
          lista_habilidades.indexOf("animales"),
          lista_habilidades.indexOf("comerciar")
        );
        break;
      case "sociales":
        habilidades_rama = lista_habilidades.slice(
          lista_habilidades.indexOf("comerciar"),
          lista_habilidades.indexOf("cerrajeria")
        );
        break;
      case "subterfugio":
        habilidades_rama = lista_habilidades.slice(
          lista_habilidades.indexOf("cerrajeria"),
          lista_habilidades.indexOf("arte")
        );
        break;
      case "creativas":
        habilidades_rama = lista_habilidades.slice(
          lista_habilidades.indexOf("arte"),
          lista_habilidades.length
        );
        break;

      default:
        break;
    }
    while (k < habilidades_rama.length) {
      var habilidad_rama = habilidades_rama[k];
      if (Number(this.getField("coste_" + habilidad_rama).value) !== index) {
        this.getField("coste_" + habilidad_rama).value = index;
      }
      k++;
    }
    j++;
  }
  i++;
}
var lista_coste_habilidades = [coste_habilidades_1, coste_habilidades_2];
i = 0;
j = 0;
while (i < lista_coste_habilidades.length) {
  var coste_habilidades = lista_coste_habilidades[i];
  index = i + 1;
  while (j < coste_habilidades.length) {
    var habilidad_coste = coste_habilidades[j];
    if (Number(this.getField("coste_" + habilidad_coste).value) !== index) {
      this.getField("coste_" + habilidad_coste).value = index;
    }
    j++;
  }
  i++;
}

// }

// Vida
// if (
//   event.target.name === "categoria" ||
//   event.target.name === "nivel" ||
//   event.target.name === "con_actual" ||
//   event.target.name === "n_multiplos" ||
//   event.target.name === "nivel" ||
//   event.target.name === "actuales_vida" ||
//   event.target.name === "curar_1" ||
//   event.target.name === "quitar_1"
// ) {
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

// if (event.target.name === "con_actual") {
base_vida.value = lista_vida[Number(con_actual.value) - 1];
biolimite.value = -5 * Number(con_actual.value);
// }

mult_vida.value = this.getField("n_multiplos").value * con_actual.value;

totales_vida.value =
  Number(base_vida.value) +
  Number(this.getField("cat_vida").value) +
  Number(mult_vida.value);

if (actuales_vida.value > totales_vida.value) {
  actuales_vida.value = totales_vida.value;
} else if (actuales_vida.value < biolimite.value) {
  actuales_vida.value = biolimite.value;
}
// }

// Parada / Ataque
// if (
//   event.target.name === "categoria" ||
//   event.target.name === "nivel" ||
//   event.target.name === "pd_parada" ||
//   event.target.name === "pd_ataque" ||
//   event.target.name === "des_actual" ||
//   event.target.name === "agi_actual"
// ) {
// if (
//   event.target.name === "des_actual" ||
//   event.target.name === "agi_actual"
// ) {
this.getField("des_agi_bono").value = Math.max(
  this.getField("des_bono").value,
  this.getField("agi_bono").value
);
// }
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

// Final Ataque
// if (
//   event.target.name === "categoria" ||
//   event.target.name === "nivel" ||
//   event.target.name === "pd_ataque" ||
//   event.target.name === "des_actual"
// ) {
this.getField("final_ataque").value =
  Number(this.getField("base_ataque").value) +
  Number(this.getField("des_bono").value) +
  Number(this.getField("cat_ataque").value);
// }

// Final Parada
// if (
//   event.target.name === "pd_parada" ||
//   event.target.name === "agi_actual" ||
//   event.target.name === "categoria" ||
//   event.target.name === "nivel" ||
//   event.target.name === "des_actual"
// ) {
this.getField("final_parada").value =
  Number(this.getField("base_parada").value) +
  Number(this.getField("des_agi_bono").value) +
  Number(this.getField("cat_parada").value);
// }
// }

// Llevar armadura
// if (
//   event.target.name === "pd_llA" ||
//   event.target.name === "categoria" ||
//   event.target.name === "nivel" ||
//   event.target.name === "fue_actual"
// ) {
var base_llA = this.getField("base_llA");
var pd_llA = this.getField("pd_llA");
var pd_llA_disponible = Number(this.getField("pd_totales").value) * 0.1;

if (Number(pd_llA.value) > pd_llA_disponible) {
  pd_llA.value = pd_llA_disponible;
}
base_llA = Math.floor(
  this.getField("pd_llA").value / this.getField("coste_llA").value
);

this.getField("final_llA").value =
  Number(base_llA.value) +
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
  Number(this.getField("coste_vida").value) * Number(this.getField("n_multiplos").value);

i = 0;
while (i < lista_habilidades.length) {
  var habilidad = lista_habilidades[i];
  var pd_habilidad = this.getField("pd_" + habilidad);
  var base_habilidad = this.getField("base_" + habilidad);
  console.println(base_habilidad.value);
  if (Number(pd_habilidad.value) > 0) {
    base_habilidad.value = Math.floor(
      Number(pd_habilidad.value) /
        Number(this.getField("coste_" + habilidad).value)
    );
    pd_actuales.value = Number(pd_actuales.value) - Number(pd_habilidad.value);
  } else {
    base_habilidad.value = "";
  }
  var bono = this.getField(lista_habilidades_atributos[i]+"_bono");
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
