// Validate (exp_actual)

var nivel = this.getField("nivel");
var loop = true;
while (event.value > Number(this.getField("exp_totales").value) && loop) {
  var nRslt = app.alert("Has sobrepasado los puntos de experiencia.\n\n" + "¿Quieres subir de nivel?", 2, 2, "Submit Validation");
  if (nRslt === 4) {
    nivel.value++;
    event.value = event.value - Number(this.getField("exp_totales").value);
  } else {
    loop = false;
  }
}
loop = true;
var exp_actual = event.value;
while (exp_actual < 0 && Number(nivel.value) >= 0 && loop) {
  var nRslt = app.alert("Has introducido un valor negativo.\n\n" + "¿Quieres bajar de nivel?", 2, 2, "Submit Validation");
  if (nRslt === 4) {
    nivel.value--;
    event.value = Number(event.value) + Number(this.getField("exp_totales").value);
    exp_actual = Number(event.value);
  } else {
    loop = false;
  }
}


// Validate (pd_ataque)

var pd_totales = this.getField("pd_totales");
var limite_pd_combate = Number(pd_totales.value) / 2;
var pd_ataque = this.getField("pd_ataque");
var pd_parada = this.getField("pd_parada");
var pd_esquiva = this.getField("pd_esquiva");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if ((Number(event.value) + pd_parada.value + pd_esquiva.value) > Number(limite_pd_combate)) {
  event.rc = false;
}


// Validate (pd_parada)

var pd_totales = this.getField("pd_totales");
var limite_pd_combate = Number(pd_totales.value) / 2;
var pd_ataque = this.getField("pd_ataque");
var pd_parada = this.getField("pd_parada");
var pd_esquiva = this.getField("pd_esquiva");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if ((Number(event.value) + pd_ataque.value + pd_esquiva.value) > Number(limite_pd_combate)) {
  event.rc = false;
}


// Validate (pd_esquiva)

var pd_totales = this.getField("pd_totales");
var limite_pd_combate = Number(pd_totales.value) / 2;
var pd_ataque = this.getField("pd_ataque");
var pd_parada = this.getField("pd_parada");
var pd_esquiva = this.getField("pd_esquiva");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if ((Number(event.value) + pd_ataque.value + pd_parada.value) > Number(limite_pd_combate)) {
  event.rc = false;
}


// Validate (pd_llA)

var pd_totales = this.getField("pd_totales");
var limite_pd_llA = Number(pd_totales.value) / 10;
var pd_llA = this.getField("pd_llA");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if (Number(event.value) > Number(limite_pd_llA)) {
  event.value = pd_llA.value;
}


// Script Ventajas

var index = 1;
while (index <= 8) {
  var ventajas = [
    "Al límite",
    "Ambidiestría",
    "Armadura natural",
    "Buena suerte",
    "Reflejos rápidos",
    "Reflejos rápidos II",
    "Reflejos rápidos III",
    "Regeneración mejorada",
    "Regeneración mejorada II",
    "Regeneración mejorada III",
    "Resistencia física excepcional",
    "Resistencia física excepcional II",
    "Sueño ligero",
    "Tocado por el destino",
    "--- Solo durante la creación del personaje ---",
    "Afinidad animal",
    "Aprendizaje innato en llevar armadura",
    "Aprendizaje innato en llevar armadura II",
    "Aprendizaje innato en llevar armadura III",
    "Conecedor de todas las materias",
    "Dificil de matar",
    "Dificil de matar II",
    "Dificil de matar III",
    "Encanto",
    "Fondos iniciales",
    "Fondos iniciales II",
    "Fondos iniciales III",
    "Mente fria",
    "Inquietante",
    "Seductor",
    "Sentidos agudos",
    "Aprendizaje innato en VIGOR",
    "Aprendizaje innato en VIGOR II",
    "Aprendizaje innato en Frialdad",
    "Aprendizaje innato en Frialdad II",
    "Aprendizaje innato en Resdolor",
    "Aprendizaje innato en Resdolor II",
    "Aprendizaje innato en PERCEPTIVAS",
    "Aprendizaje innato en PERCEPTIVAS II",
    "Aprendizaje innato en Escuchar",
    "Aprendizaje innato en Escuchar II",
    "Aprendizaje innato en Ver",
    "Aprendizaje innato en Ver II",
    "Aprendizaje innato en Buscar",
    "Aprendizaje innato en Buscar II",
    "Aprendizaje innato en Rastrear",
    "Aprendizaje innato en Rastrear II",
    "Aprendizaje innato en SUBTERFUGIO",
    "Aprendizaje innato en SUBTERFUGIO II",
    "Aprendizaje innato en Cerrajeria",
    "Aprendizaje innato en Cerrajeria II",
    "Aprendizaje innato en Disfraz",
    "Aprendizaje innato en Disfraz II",
    "Aprendizaje innato en Ocultarse",
    "Aprendizaje innato en Ocultarse II",
    "Aprendizaje innato en Robo",
    "Aprendizaje innato en Robo II",
    "Aprendizaje innato en Sigilo",
    "Aprendizaje innato en Sigilo II",
    "Aprendizaje innato en Tramperia",
    "Aprendizaje innato en Tramperia II",
    "Aprendizaje innato en Venenos",
    "Aprendizaje innato en Venenos II",
    "Aprendizaje innato en INTELECTUALES",
    "Aprendizaje innato en INTELECTUALES II",
    "Aprendizaje innato en Animales",
    "Aprendizaje innato en Animales II",
    "Aprendizaje innato en Ciencia",
    "Aprendizaje innato en Ciencia II",
    "Aprendizaje innato en Herbolaria",
    "Aprendizaje innato en Herbolaria II",
    "Aprendizaje innato en Historia",
    "Aprendizaje innato en Historia II",
    "Aprendizaje innato en Ley",
    "Aprendizaje innato en Ley II",
    "Aprendizaje innato en Medicina",
    "Aprendizaje innato en Medicina II",
    "Aprendizaje innato en Memorizar",
    "Aprendizaje innato en Memorizar II",
    "Aprendizaje innato en Navegacion",
    "Aprendizaje innato en Navegacion II",
    "Aprendizaje innato en Ocultismo",
    "Aprendizaje innato en Ocultismo II",
    "Aprendizaje innato en Tasacion",
    "Aprendizaje innato en Tasacion II",
    "Aprendizaje innato en ATLETICAS",
    "Aprendizaje innato en ATLETICAS II",
    "Aprendizaje innato en Acrobacias",
    "Aprendizaje innato en Acrobacias II",
    "Aprendizaje innato en Atletismo",
    "Aprendizaje innato en Atletismo II",
    "Aprendizaje innato en Montar",
    "Aprendizaje innato en Montar II",
    "Aprendizaje innato en Nadar",
    "Aprendizaje innato en Nadar II",
    "Aprendizaje innato en Trepar",
    "Aprendizaje innato en Trepar II",
    "Aprendizaje innato en Saltar",
    "Aprendizaje innato en Saltar II",
    "Aprendizaje innato en SOCIALES",
    "Aprendizaje innato en SOCIALES II",
    "Aprendizaje innato en Comerciar",
    "Aprendizaje innato en Comerciar II",
    "Aprendizaje innato en Callejear",
    "Aprendizaje innato en Callejear II",
    "Aprendizaje innato en Estilo",
    "Aprendizaje innato en Estilo II",
    "Aprendizaje innato en Intimidar",
    "Aprendizaje innato en Intimidar II",
    "Aprendizaje innato en Etiqueta",
    "Aprendizaje innato en Etiqueta II",
    "Aprendizaje innato en Persuasion",
    "Aprendizaje innato en Persuasion II",
    "Aprendizaje innato en Adv. Social",
    "Aprendizaje innato en Adv. Social II",
    "Aprendizaje innato en CREATIVAS",
    "Aprendizaje innato en CREATIVAS II",
    "Aprendizaje innato en Arte",
    "Aprendizaje innato en Arte II",
    "Aprendizaje innato en Baile",
    "Aprendizaje innato en Baile II",
    "Aprendizaje innato en Forja",
    "Aprendizaje innato en Forja II",
    "Aprendizaje innato en Musica",
    "Aprendizaje innato en Musica II",
    "Aprendizaje innato en T. Manos",
    "Aprendizaje innato en T. Manos II",
    "Aprendizaje innato en Alquimia",
    "Aprendizaje innato en Alquimia II",
    "Aprendizaje innato en Sastreria",
    "Aprendizaje innato en Sastreria II",
    "Aprendizaje innato en Joyeria",
    "Aprendizaje innato en Joyeria II",
    "Aprendizaje innato en Caligrafia",
    "Aprendizaje innato en Caligrafia II",
    "Aprendizaje innato en Mates",
    "Aprendizaje innato en Mates II",
    "Aprendizaje innato en Cocina",
    "Aprendizaje innato en Cocina II",
    "Apto en VIGOR",
    "Apto en Frialdad",
    "Apto en Frialdad II",
    "Apto en Resdolor",
    "Apto en Resdolor II",
    "Apto en PERCEPTIVAS",
    "Apto en Escuchar",
    "Apto en Escuchar II",
    "Apto en Ver",
    "Apto en Ver II",
    "Apto en Buscar",
    "Apto en Buscar II",
    "Apto en Rastrear",
    "Apto en Rastrear II",
    "Apto en SUBTERFUGIO",
    "Apto en Cerrajeria",
    "Apto en Cerrajeria II",
    "Apto en Disfraz",
    "Apto en Disfraz II",
    "Apto en Ocultarse",
    "Apto en Ocultarse II",
    "Apto en Robo",
    "Apto en Robo II",
    "Apto en Sigilo",
    "Apto en Sigilo II",
    "Apto en Tramperia",
    "Apto en Tramperia II",
    "Apto en Venenos",
    "Apto en Venenos II",
    "Apto en INTELECTUALES",
    "Apto en Animales",
    "Apto en Animales II",
    "Apto en Ciencia",
    "Apto en Ciencia II",
    "Apto en Herbolaria",
    "Apto en Herbolaria II",
    "Apto en Historia",
    "Apto en Historia II",
    "Apto en Ley",
    "Apto en Ley II",
    "Apto en Medicina",
    "Apto en Medicina II",
    "Apto en Memorizar",
    "Apto en Memorizar II",
    "Apto en Navegacion",
    "Apto en Navegacion II",
    "Apto en Ocultismo",
    "Apto en Ocultismo II",
    "Apto en Tasacion",
    "Apto en Tasacion II",
    "Apto en ATLETICAS",
    "Apto en Acrobacias",
    "Apto en Acrobacias II",
    "Apto en Atletismo",
    "Apto en Atletismo II",
    "Apto en Montar",
    "Apto en Montar II",
    "Apto en Nadar",
    "Apto en Nadar II",
    "Apto en Trepar",
    "Apto en Trepar II",
    "Apto en Saltar",
    "Apto en Saltar II",
    "Apto en SOCIALES",
    "Apto en Comerciar",
    "Apto en Comerciar II",
    "Apto en Callejear",
    "Apto en Callejear II",
    "Apto en Estilo",
    "Apto en Estilo II",
    "Apto en Intimidar",
    "Apto en Intimidar II",
    "Apto en Etiqueta",
    "Apto en Etiqueta II",
    "Apto en Persuasion",
    "Apto en Persuasion II",
    "Apto en Adv. Social",
    "Apto en Adv. Social II",
    "Apto en CREATIVAS",
    "Apto en Arte",
    "Apto en Arte II",
    "Apto en Baile",
    "Apto en Baile II",
    "Apto en Forja",
    "Apto en Forja II",
    "Apto en Musica",
    "Apto en Musica II",
    "Apto en T. Manos",
    "Apto en T. Manos II",
    "Apto en Alquimia",
    "Apto en Alquimia II",
    "Apto en Sastreria",
    "Apto en Sastreria II",
    "Apto en Joyeria",
    "Apto en Joyeria II",
    "Apto en Caligrafia",
    "Apto en Caligrafia II",
    "Apto en Mates",
    "Apto en Mates II",
    "Apto en Cocina",
    "Apto en Cocina II",
    "--- Solo para categoria Novel ---",
    "NOVEL: Hab1, Hab2, Hab3, Hab4, Hab5"
  ];
  this.getField("ventaja" + index).setItems(ventajas);
  index++;
}


// Script armas

var arma_lista = [
  "Red de gladiador",
  "Lazo",
  "Combate desarmado",
  "Jarrón",
  "Botella rota",
  "Antorcha",
  "Palo de madera",
  "Cadena",
  "Cestus",
  "Estilete",
  "Silla",
  "Barra metálica",
  "Cuchillo de cocina",
  "Garfio",
  "Garrote",
  "Daga",
  "Vara",
  "Daga de parada",
  "Martillo",
  "Azada",
  "Hoz",
  "Arpón",
  "Florete",
  "Guadaña",
  "Jabalina",
  "Látigo",
  "Hacha de leñador",
  "Pico",
  "Lanza",
  "Espada corta",
  "Mayal",
  "Maza",
  "Estoque",
  "Tridente",
  "Hacha de mano",
  "Sable",
  "Martillo de guerra",
  "Cimitarra",
  "Espada larga",
  "Espada ancha",
  "Maza pesada de combate",
  "Alabarda",
  "Espada bastarda",
  "Gran martillo de guerra",
  "Hacha de guerra",
  "Lanza de caballería",
  "Mangual",
  "Mandoble",
  "Hacha a dos manos"
]

for (var i = 1; i <= 6; i++) {
  this.getField("arma" + i).setItems(arma_lista);
}


// Validate ventaja

var num_ventaja = event.target.name.substr(7, 1);
var repetido = false;
var ventaja_novel = false;
var old_target = this.getField(event.target.name).value;
if (event.value.match(":") || "") {
  ventaja_novel = true;
}
var cond1 = event.value.toLowerCase();

if (cond1.substr(cond1.length - 4) === " iii") {
  cond1 = cond1.substr(0, cond1.length - 4);
} else if (cond1.substr(cond1.length - 3) === " ii") {
  cond1 = cond1.substr(0, cond1.length - 3);
}

for (var l = 1; l < 8 && !repetido; l++) {
  ventaja = this.getField("ventaja" + (((Number(num_ventaja) + l - 1) % 8) + 1)).value;
  var cond2 = ventaja.toLowerCase();
  if (ventaja_novel) {
    cond1 = cond1.substr(0, 5);
    cond2 = cond2.substr(0, 5);
  }

  if (cond2.substr(ventaja.length - 4) === " iii") {
    cond2 = cond2.substr(0, cond2.length - 4);
  } else if (cond2.substr(ventaja.length - 3) === " ii") {
    cond2 = cond2.substr(0, cond2.length - 3);
  }

  if (cond1 === cond2) {
    repetido = true;
    event.rc = false;
  }
}

if (!repetido) {
  if (
    event.value === "Afinidad animal" ||
    event.value === "Ambidiestría" ||
    event.value === "Aprendizaje innato en llevar armadura" ||
    event.value === "Dificil de matar" ||
    event.value === "Fondos iniciales" ||
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
  ) {
    this.getField("ventaja" + num_ventaja + "_coste").value = 2;
  } else if (
    event.value === "Aprendizaje innato en llevar armadura II" ||
    event.value === "Conecedor de todas las materias" ||
    event.value === "Dificil de matar II" ||
    event.value === "Fondos iniciales II" ||
    event.value === "Reflejos rápidos II" ||
    event.value === "Regeneración mejorada II" ||
    event.value === "Resistencia física excepcional II"
  ) {
    this.getField("ventaja" + num_ventaja + "_coste").value = 4;
  } else if (
    event.value === "Aprendizaje innato en llevar armadura III" ||
    event.value === "Aprendizaje innato en un campo II" ||
    event.value === "Dificil de matar III" ||
    event.value === "Fondos iniciales III" ||
    event.value === "Reflejos rápidos III" ||
    event.value === "Regeneración mejorada III"
  ) {
    this.getField("ventaja" + num_ventaja + "_coste").value = 6;
  } else if (
    event.value.substr(0, 7) === "Apto en" || event.value.substr(0, 21) === "Aprendizaje innato en"
  ) {
    // apto en un campo (4)
    // apto en una materia (2)
    // apto en una materia II (4)

    // aprendizaje innato en materia (2)
    // aprendizaje innato en materia II (4)
    // aprendizaje innato en campo (4)
    // aprendizaje innato en campo II (6)
    var ventaja_lC = event.value.toLowerCase();
    if (ventaja_lC.match("vigor") ||
      ventaja_lC.match("atleticas") ||
      ventaja_lC.match("perceptivas") ||
      ventaja_lC.match("subterfugio") ||
      ventaja_lC.match("intelectuales") ||
      ventaja_lC.match("sociales") ||
      ventaja_lC.match("creativas")
    ) {
      // apto en un campo (4)
      // aprendizaje innato en campo (4)
      // aprendizaje innato en campo II (6)

      if (ventaja_lC.match(" ii")) {
        this.getField("ventaja" + num_ventaja + "_coste").value = 6;
      } else {
        this.getField("ventaja" + num_ventaja + "_coste").value = 4;
      }
    } else {
      // apto en una materia (2)
      // apto en una materia II (4)
      // aprendizaje innato en materia (2)
      // aprendizaje innato en materia II (4)
      if (ventaja_lC.match(" ii")) {
        this.getField("ventaja" + num_ventaja + "_coste").value = 4;
      } else {
        this.getField("ventaja" + num_ventaja + "_coste").value = 2;
      }
    }

  } else if (ventaja_novel) {
    this.getField("ventaja" + num_ventaja + "_coste").value = 0;
  } else {
    this.getField("ventaja" + num_ventaja + "_coste").value = "";
  }
}



// Validate desventaja (1-3)

var repetido = false;
var cond1 = event.value.toLowerCase();

if (cond1.substr(cond1.length - 3) === " iii") {
  cond1 = cond1.substr(0, cond1.length - 3);
} else if (cond1.substr(cond1.length - 3) === " ii") {
  cond1 = cond1.substr(0, cond1.length - 3);
}
for (var l = 1; l < 3 && !repetido; l++) {
  var desventaja = this.getField("desventaja" + (((Number(num_ventaja) + l - 1) % 3) + 1)).value;
  var cond2 = desventaja.toLowerCase();
  if (cond2.substr(ventaja.length - 3) === " iii") {
    cond2 = cond2.substr(0, cond2.length - 3);
  } else if (cond2.substr(ventaja.length - 3) === " ii") {
    cond2 = cond2.substr(0, cond2.length - 3);
  }

  if (cond1 === cond2) {
    event.rc = false;
    repetido = true;
  }

}
if (!repetido) {
  var num_desventaja = event.target.name.substr(10, 1);
  if (
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
  } else if (
    event.value === "Enfermedad grave" ||
    event.value === "Maldición II" ||
    event.value === "Reacción lenta II"
  ) {
    this.getField("desventaja" + num_desventaja + "_coste").value = 4;
  } else {
    this.getField("desventaja" + num_desventaja + "_coste").value = "";
  }
}

// Script armas

var tabla_arma_list = [
  "—",
  "ARMAS CORTAS",
  "HACHAS",
  "MAZAS",
  "ESPADAS",
  "MANDOBLES",
  "ASTAS",
  "CUERDAS",
  "—",
  "Red de gladiador",
  "Lazo",
  "Combate desarmado",
  "Jarrón",
  "Botella rota",
  "Antorcha",
  "Palo de madera",
  "Cadena",
  "Cestus",
  "Estilete",
  "Silla",
  "Barra metálica",
  "Cuchillo de cocina",
  "Garfio",
  "Garrote",
  "Daga",
  "Vara",
  "Daga de parada",
  "Martillo",
  "Azada",
  "Hoz",
  "Arpón",
  "Florete",
  "Guadaña",
  "Jabalina",
  "Látigo",
  "Hacha de leñador",
  "Pico",
  "Lanza",
  "Espada corta",
  "Mayal",
  "Maza",
  "Estoque",
  "Tridente",
  "Hacha de mano",
  "Sable",
  "Martillo de guerra",
  "Cimitarra",
  "Espada larga",
  "Espada ancha",
  "Maza pesada de combate",
  "Alabarda",
  "Espada bastarda",
  "Gran martillo de guerra",
  "Hacha de guerra",
  "Lanza de caballería",
  "Mangual",
  "Mandoble",
  "Hacha a dos manos",
]

var arma_list = [
  "—",
  "Red de gladiador",
  "Lazo",
  "Combate desarmado",
  "Jarrón",
  "Botella rota",
  "Antorcha",
  "Palo de madera",
  "Cadena",
  "Cestus",
  "Estilete",
  "Silla",
  "Barra metálica",
  "Cuchillo de cocina",
  "Garfio",
  "Garrote",
  "Daga",
  "Vara",
  "Daga de parada",
  "Martillo",
  "Azada",
  "Hoz",
  "Arpón",
  "Florete",
  "Guadaña",
  "Jabalina",
  "Látigo",
  "Hacha de leñador",
  "Pico",
  "Lanza",
  "Espada corta",
  "Mayal",
  "Maza",
  "Estoque",
  "Tridente",
  "Hacha de mano",
  "Sable",
  "Martillo de guerra",
  "Cimitarra",
  "Espada larga",
  "Espada ancha",
  "Maza pesada de combate",
  "Alabarda",
  "Espada bastarda",
  "Gran martillo de guerra",
  "Hacha de guerra",
  "Lanza de caballería",
  "Mangual",
  "Mandoble",
  "Hacha a dos manos",
  "--- ESCUDOS ---",
  "Rodela",
  "Escudo",
  "Escudo corporal"
]

var i = 0;
while (i++ < 7) {
  this.getField("arma" + i).setItems(arma_list);
  this.getField("tabla_arma" + i).setItems(tabla_arma_list);
}

for (var index = 1; index < 7; index++) {
  this.getField("arma" + index + "_check").setItems(["—", "Eq."]);
  this.getField("arma" + index + "_calidad").setItems(["-2", "-1", "0", "+1", "+2", "+3"]);

}

// Javascript armas_check
var num_checks_armas = 0;
var manos_ocupadas = false;
var num_arma = event.target.name.substr(4, 1);

var i = 0;
if (event.target.value = "On") {
  if (this.getField("arma" + num_arma + "_especial").value === "A dos manos") {
    while (i < 5) {
      var check = this.getField("arma" + (((num_arma + i) % 6) + 1) + "_check");
      check.readonly = true;
      i++;
    }
  } else {
    var encontrado = false;
    while (i < 5 && !encontrado) {
      var check = this.getField("arma" + (((num_arma + i) % 6) + 1) + "_check");
      if (check.value === "On") {
        encontrado = true;
      }
      i++;
    }

    if (encontrado) {
      i = 1;
      while (i < 7) {
        var check = this.getField("arma" + i + "_check");
        if (check.value === "Off") {
          check.readonly = true;
        }
        i++;
      }
    }

  }
}

if (manos_ocupadas === false) {
  if (check.value === "On") {
    num_checks_armas = num_checks_armas + 1;
    if (num_checks_armas === 2 || (num_checks_armas === 1 && especial.value === "A dos manos")) {
      manos_ocupadas = true;
    }
  }
}

// Validar armas

var multiplicador = this.getField("sistema").value;
this.getField(event.target.name + "_clase").value = "—";
this.getField(event.target.name + "_especial").value = "—";
this.getField(event.target.name + "_calidad").value = 0;

switch (event.value) {
  case "Lazo":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 1;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Cuerda";
    this.getField(event.target.name + "_especial").value = "Presa 18";
    break;
  case "Red de gladiador":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 1;
    this.getField(event.target.name + "_iniciativa").value = "+0";
    this.getField(event.target.name + "_freq").value = "4";
    this.getField(event.target.name + "_clase").value = "Cuerda";
    this.getField(event.target.name + "_especial").value = "Presa 20";
    break;
  case "Combate desarmado":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 2;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 4;
    this.getField(event.target.name + "_freq").value = "1";
    this.getField(event.target.name + "_clase").value = "Sin armas";
    this.getField(event.target.name + "_especial").value = "Precisa";
    break;
  case "Jarrón":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 3;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Botella rota":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 3;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "6";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    break;
  case "Antorcha":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 4;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Palo de madera":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 4;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 0;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Cadena":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 5;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 0;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Cuerda";
    this.getField(event.target.name + "_especial").value = "Presa 16";
    break;
  case "Cestus":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 5;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "6";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    break;
  case "Estilete":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 5;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 4;
    this.getField(event.target.name + "_freq").value = "6";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    this.getField(event.target.name + "_especial").value = "Precisa";
    break;
  case "Silla":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 5;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 4;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Mandoble";
    break;
  case "Barra metálica":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 5;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 1;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Cuchillo de cocina":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 5;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    break;
  case "Garfio":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 6;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "6";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    break;
  case "Garrote":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 6;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 0;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Daga":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 6;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 4;
    this.getField(event.target.name + "_freq").value = "6";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    this.getField(event.target.name + "_especial").value = "Precisa";
    break;
  case "Vara":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 6;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Asta";
    this.getField(event.target.name + "_especial").value = "A dos manos";
    break;
  case "Daga de parada":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 6;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 3;
    this.getField(event.target.name + "_freq").value = "6";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    this.getField(event.target.name + "_especial").value = "Precisa";
    break;
  case "Martillo":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 6;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 4;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Azada":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 6;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 4;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Hacha";
    break;
  case "Hoz":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 7;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    break;
  case "Arpón":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 7;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 1;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Asta";
    break;
  case "Florete":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 7;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 3;
    this.getField(event.target.name + "_freq").value = "6";
    this.getField(event.target.name + "_clase").value = "Espada / Arma corta";
    this.getField(event.target.name + "_especial").value = "Precisa";
    break;
  case "Guadaña":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 7;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 0;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Asta / Mandoble";
    break;
  case "Jabalina":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 7;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 1;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Asta";
    break;
  case "Látigo":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 7;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 4;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Cuerda";
    this.getField(event.target.name + "_especial").value = "Presa 16";
    break;
  case "Hacha de leñador":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 8;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Hacha";
    break;
  case "Pico":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 8;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 4;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    break;
  case "Lanza":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 8;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 1;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Asta";
    break;
  case "Espada corta":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 8;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 3;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Arma corta";
    this.getField(event.target.name + "_especial").value = "Precisa";
    break;
  case "Mayal":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 8;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 0;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Maza / Cuerda";
    break;
  case "Maza":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 8;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 0;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Estoque":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 8;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 3;
    this.getField(event.target.name + "_freq").value = "8";
    this.getField(event.target.name + "_clase").value = "Espada";
    this.getField(event.target.name + "_especial").value = "Precisa";
    break;
  case "Tridente":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 8;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Asta";
    this.getField(event.target.name + "_especial").value = "Lanzable";
    break;
  case "Hacha de mano":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 9;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 0;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Hacha";
    break;
  case "Sable":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 9;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 2;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Espada";
    break;
  case "Martillo de guerra":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 10;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 1;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Cimitarra":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 10;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 1;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Espada";
    break;
  case "Espada larga":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 10;
    this.getField(event.target.name + "_iniciativa").value = "+" + multiplicador * 0;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Espada";
    break;
  case "Espada ancha":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 11;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 1;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Espada";
    break;
  case "Maza pesada de combate":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 12;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 3;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Maza / Mandoble";
    break;
  case "Alabarda":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 12;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 3;
    this.getField(event.target.name + "_freq").value = "12";
    this.getField(event.target.name + "_clase").value = "Asta / Mandoble";
    this.getField(event.target.name + "_especial").value = "A dos manos";
    break;
  case "Espada bastarda":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 14;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 6;
    this.getField(event.target.name + "_freq").value = "14";
    this.getField(event.target.name + "_clase").value = "Espada / Mandoble";
    break;
  case "Gran martillo de guerra":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 14;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 7;
    this.getField(event.target.name + "_freq").value = "14";
    this.getField(event.target.name + "_clase").value = "Maza";
    break;
  case "Hacha de guerra":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 14;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 6;
    this.getField(event.target.name + "_freq").value = "14";
    this.getField(event.target.name + "_clase").value = "Hacha";
    break;
  case "Lanza de caballería":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 16;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 6;
    this.getField(event.target.name + "_freq").value = "16";
    this.getField(event.target.name + "_clase").value = "Asta";
    break;
  case "Mangual":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 16;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 10;
    this.getField(event.target.name + "_freq").value = "16";
    this.getField(event.target.name + "_clase").value = "Maza / Mandoble";
    break;
  case "Mandoble":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 18;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 12;
    this.getField(event.target.name + "_freq").value = "16";
    this.getField(event.target.name + "_clase").value = "Mandoble";
    break;
  case "Hacha a dos manos":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = 0;
    this.getField(event.target.name + "_esq").value = 0;
    this.getField(event.target.name + "_db").value = multiplicador * 20;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 14;
    this.getField(event.target.name + "_freq").value = "18";
    this.getField(event.target.name + "_clase").value = "Hacha / Mandoble";
    break;
  case "Rodela":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = multiplicador * 2;
    this.getField(event.target.name + "_esq").value = multiplicador * 1;
    this.getField(event.target.name + "_db").value = multiplicador * 3;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 3;
    this.getField(event.target.name + "_freq").value = "10";
    this.getField(event.target.name + "_clase").value = "Escudo";
    break;
  case "Escudo":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = multiplicador * 4;
    this.getField(event.target.name + "_esq").value = multiplicador * 2;
    this.getField(event.target.name + "_db").value = multiplicador * 4;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 5;
    this.getField(event.target.name + "_freq").value = "14";
    this.getField(event.target.name + "_clase").value = "Escudo";
    break;
  case "Escudo completo":
    this.getField(event.target.name + "_atq").value = 0;
    this.getField(event.target.name + "_par").value = multiplicador * 6;
    this.getField(event.target.name + "_esq").value = multiplicador * 3;
    this.getField(event.target.name + "_db").value = multiplicador * 5;
    this.getField(event.target.name + "_iniciativa").value = "-" + multiplicador * 8;
    this.getField(event.target.name + "_freq").value = "20";
    this.getField(event.target.name + "_clase").value = "Escudo";
    break;
  default:
    this.getField(event.target.name + "_atq").value = "—";
    this.getField(event.target.name + "_par").value = "—";
    this.getField(event.target.name + "_esq").value = "—";
    this.getField(event.target.name + "_db").value = "—";
    this.getField(event.target.name + "_iniciativa").value = "—";
    this.getField(event.target.name + "_freq").value = "—";
    this.getField(event.target.name + "_df").value = "—";
    this.getField(event.target.name + "_calidad").value = "—";

    break;
}


// Validar tabla_arma

var num = Number(event.target.name.substr(event.target.name.length - 1));
var multiplicador = this.getField("sistema").value;
var tabla_arma = this.getField(event.target.name);
var coste_pd = this.getField(event.target.name + "_pd");
var arma_clase = this.getField(event.target.name + "_clase");
var encontrado = false;


switch (event.value) {
  case "Armas Cortas":
    arma_clase.value = "Arma Corta";
    coste_pd.value = multiplicador * 10;
    encontrado = true;
    break;
  case "Hachas":
    arma_clase.value = "Hacha";
    coste_pd.value = multiplicador * 10;
    encontrado = true;
    break;
  case "Mazas":
    arma_clase.value = "Maza";
    coste_pd.value = multiplicador * 10;
    encontrado = true;
    break;
  case "Espadas":
    arma_clase.value = "Espada";
    coste_pd.value = multiplicador * 10;
    encontrado = true;
    break;
  case "Mandobles":
    arma_clase.value = "Mandoble";
    coste_pd.value = multiplicador * 10;
    encontrado = true;
    break;
  case "Astas":
    arma_clase.value = "Asta";
    coste_pd.value = multiplicador * 10;
    encontrado = true;
    break;
  case "Cuerdas":
    arma_clase.value = "Cuerda";
    coste_pd.value = multiplicador * 10;
    encontrado = true;
    break;
  case "Lazo":
    arma_clase.value = "Cuerda";
    break;
  case "Red de gladiador":
    arma_clase.value = "Cuerda";
    break;
  case "Combate desarmado":
    arma_clase.value = "Sin armas";
    break;
  case "Jarrón":
    arma_clase.value = "Maza";
    break;
  case "Botella rota":
    arma_clase.value = "Arma corta";
    break;
  case "Antorcha":
    arma_clase.value = "Maza";
    break;
  case "Palo de madera":
    arma_clase.value = "Maza";
    break;
  case "Cadena":
    arma_clase.value = "Cuerda";
    break;
  case "Cestus":
    arma_clase.value = "Arma corta";
    break;
  case "Estilete":
    arma_clase.value = "Arma corta";
    break;
  case "Silla":
    arma_clase.value = "Mandoble";
    break;
  case "Barra metálica":
    arma_clase.value = "Maza";
    break;
  case "Cuchillo de cocina":
    arma_clase.value = "Arma corta";
    break;
  case "Garfio":
    arma_clase.value = "Arma corta";
    break;
  case "Garrote":
    arma_clase.value = "Maza";
    break;
  case "Daga":
    arma_clase.value = "Arma corta";
    break;
  case "Vara":
    arma_clase.value = "Asta";
    break;
  case "Daga de parada":
    arma_clase.value = "Arma corta";
    break;
  case "Martillo":
    arma_clase.value = "Maza";
    break;
  case "Azada":
    arma_clase.value = "Hacha";
    break;
  case "Hoz":
    arma_clase.value = "Arma corta";
    break;
  case "Arpón":
    arma_clase.value = "Asta";
    break;
  case "Florete":
    arma_clase.value = "Espada / Arma corta";
    break;
  case "Guadaña":
    arma_clase.value = "Asta / Mandoble";
    break;
  case "Jabalina":
    arma_clase.value = "Asta";
    break;
  case "Látigo":
    arma_clase.value = "Cuerda";
    break;
  case "Hacha de leñador":
    arma_clase.value = "Hacha";
    break;
  case "Pico":
    arma_clase.value = "Arma corta";
    break;
  case "Lanza":
    arma_clase.value = "Asta";
    break;
  case "Espada corta":
    arma_clase.value = "Arma corta";
    break;
  case "Mayal":
    arma_clase.value = "Maza / Cuerda";
    break;
  case "Maza":
    arma_clase.value = "Maza";
    break;
  case "Estoque":
    arma_clase.value = "Espada";
    break;
  case "Tridente":
    arma_clase.value = "Asta";
    break;
  case "Hacha de mano":
    arma_clase.value = "Hacha";
    break;
  case "Sable":
    arma_clase.value = "Espada";
    break;
  case "Martillo de guerra":
    arma_clase.value = "Maza";
    break;
  case "Cimitarra":
    arma_clase.value = "Espada";
    break;
  case "Espada larga":
    arma_clase.value = "Espada";
    break;
  case "Espada ancha":
    arma_clase.value = "Espada";
    break;
  case "Maza pesada de combate":
    arma_clase.value = "Maza / Mandoble";
    break;
  case "Alabarda":
    arma_clase.value = "Asta / Mandoble";
    break;
  case "Espada bastarda":
    arma_clase.value = "Espada / Mandoble";
    break;
  case "Gran martillo de guerra":
    arma_clase.value = "Maza";
    break;
  case "Hacha de guerra":
    arma_clase.value = "Hacha";
    break;
  case "Lanza de caballería":
    arma_clase.value = "Asta";
    break;
  case "Mangual":
    arma_clase.value = "Maza / Mandoble";
    break;
  case "Mandoble":
    arma_clase.value = "Mandoble";
    break;
  case "Hacha a dos manos":
    arma_clase.value = "Hacha / Mandoble";
    break;
  case "Rodela":
    arma_clase.value = "Escudo";
    break;
  case "Escudo":
    arma_clase.value = "Escudo";
    break;
  case "Escudo completo":
    arma_clase.value = "Escudo";
    break;
    default:
    arma_clase.value = "—";
    coste_pd.value = 0;
    break;
}

if (arma_clase.value !== "—") {
  for (var index = 1; index < num && !encontrado; index++) {
    var tabla_arma_clase = this.getField("tabla_arma" + index + "_clase");

    if (tabla_arma_clase.value === arma_clase.value) {
      encontrado = true;
      coste_pd.value = 2 * multiplicador;
    }
  }

  if(!encontrado) {
    coste_pd.value = 4 * multiplicador;
  }

  if (this.getField("categoria").value === "Guerrero") {
    coste_pd.value = coste_pd.value / 2;
  }

  if((num + 1) <= 7) {
    this.getField("tabla_arma" + (num + 1)).readonly = false;
    event.target.readonly = true;
  }

  //TODO: Eliminar de los siguientes items la opcion seleccionada (deleteItemAt())
} else {
  if((num - 1) >= 1) {
    this.getField("tabla_arma" + (num - 1)).readonly = false;
    event.target.readonly = true;
  }
}

// Validar sistema

var lista = [
  this.getField("pd_acrobacias").value = (event.value === "D100") ? this.getField("pd_acrobacias").value * 5 : Math.floor(this.getField("pd_acrobacias").value / 5);
  this.getField("pd_atletismo").value = (event.value === "D100") ? this.getField("pd_atletismo").value * 5 : Math.floor(this.getField("pd_atletismo").value / 5);
  this.getField("pd_montar").value = (event.value === "D100") ? this.getField("pd_montar").value * 5 : Math.floor(this.getField("pd_montar").value / 5);
  this.getField("pd_nadar").value = (event.value === "D100") ? this.getField("pd_nadar").value * 5 : Math.floor(this.getField("pd_nadar").value / 5);
  this.getField("pd_trepar").value = (event.value === "D100") ? this.getField("pd_trepar").value * 5 : Math.floor(this.getField("pd_trepar").value / 5);
  this.getField("pd_saltar").value = (event.value === "D100") ? this.getField("pd_saltar").value * 5 : Math.floor(this.getField("pd_saltar").value / 5);
  this.getField("pd_frialdad").value = (event.value === "D100") ? this.getField("pd_frialdad").value * 5 : Math.floor(this.getField("pd_frialdad").value / 5);
  this.getField("pd_resdolor").value = (event.value === "D100") ? this.getField("pd_resdolor").value * 5 : Math.floor(this.getField("pd_resdolor").value / 5);
  this.getField("pd_escuchar").value = (event.value === "D100") ? this.getField("pd_escuchar").value * 5 : Math.floor(this.getField("pd_escuchar").value / 5);
  this.getField("pd_ver").value = (event.value === "D100") ? this.getField("pd_ver").value * 5 : Math.floor(this.getField("pd_ver").value / 5);
  this.getField("pd_buscar").value = (event.value === "D100") ? this.getField("pd_buscar").value * 5 : Math.floor(this.getField("pd_buscar").value / 5);
  this.getField("pd_rastrear").value = (event.value === "D100") ? this.getField("pd_rastrear").value * 5 : Math.floor(this.getField("pd_rastrear").value / 5);
  this.getField("pd_animales").value = (event.value === "D100") ? this.getField("pd_animales").value * 5 : Math.floor(this.getField("pd_animales").value / 5);
  this.getField("pd_ciencia").value = (event.value === "D100") ? this.getField("pd_ciencia").value * 5 : Math.floor(this.getField("pd_ciencia").value / 5);
  this.getField("pd_herbolaria").value = (event.value === "D100") ? this.getField("pd_herbolaria").value * 5 : Math.floor(this.getField("pd_herbolaria").value / 5);
  this.getField("pd_historia").value = (event.value === "D100") ? this.getField("pd_historia").value * 5 : Math.floor(this.getField("pd_historia").value / 5);
  this.getField("pd_ley").value = (event.value === "D100") ? this.getField("pd_ley").value * 5 : Math.floor(this.getField("pd_ley").value / 5);
  this.getField("pd_medicina").value = (event.value === "D100") ? this.getField("pd_medicina").value * 5 : Math.floor(this.getField("pd_medicina").value / 5);
  this.getField("pd_memorizar").value = (event.value === "D100") ? this.getField("pd_memorizar").value * 5 : Math.floor(this.getField("pd_memorizar").value / 5);
  this.getField("pd_navegacion").value = (event.value === "D100") ? this.getField("pd_navegacion").value * 5 : Math.floor(this.getField("pd_navegacion").value / 5);
  this.getField("pd_ocultismo").value = (event.value === "D100") ? this.getField("pd_ocultismo").value * 5 : Math.floor(this.getField("pd_ocultismo").value / 5);
  this.getField("pd_tasacion").value = (event.value === "D100") ? this.getField("pd_tasacion").value * 5 : Math.floor(this.getField("pd_tasacion").value / 5);
  this.getField("pd_comerciar").value = (event.value === "D100") ? this.getField("pd_comerciar").value * 5 : Math.floor(this.getField("pd_comerciar").value / 5);
  this.getField("pd_callejear").value = (event.value === "D100") ? this.getField("pd_callejear").value * 5 : Math.floor(this.getField("pd_callejear").value / 5);
  this.getField("pd_estilo").value = (event.value === "D100") ? this.getField("pd_estilo").value * 5 : Math.floor(this.getField("pd_estilo").value / 5);
  this.getField("pd_intimidar").value = (event.value === "D100") ? this.getField("pd_intimidar").value * 5 : Math.floor(this.getField("pd_intimidar").value / 5);
  this.getField("pd_etiqueta").value = (event.value === "D100") ? this.getField("pd_etiqueta").value * 5 : Math.floor(this.getField("pd_etiqueta").value / 5);
  this.getField("pd_persuasion").value = (event.value === "D100") ? this.getField("pd_persuasion").value * 5 : Math.floor(this.getField("pd_persuasion").value / 5);
  this.getField("pd_advsocial").value = (event.value === "D100") ? this.getField("pd_advsocial").value * 5 : Math.floor(this.getField("pd_advsocial").value / 5);
  this.getField("pd_cerrajeria").value = (event.value === "D100") ? this.getField("pd_cerrajeria").value * 5 : Math.floor(this.getField("pd_cerrajeria").value / 5);
  this.getField("pd_disfraz").value = (event.value === "D100") ? this.getField("pd_disfraz").value * 5 : Math.floor(this.getField("pd_disfraz").value / 5);
  this.getField("pd_ocultarse").value = (event.value === "D100") ? this.getField("pd_ocultarse").value * 5 : Math.floor(this.getField("pd_ocultarse").value / 5);
  this.getField("pd_robo").value = (event.value === "D100") ? this.getField("pd_robo").value * 5 : Math.floor(this.getField("pd_robo").value / 5);
  this.getField("pd_sigilo").value = (event.value === "D100") ? this.getField("pd_sigilo").value * 5 : Math.floor(this.getField("pd_sigilo").value / 5);
  this.getField("pd_tramperia").value = (event.value === "D100") ? this.getField("pd_tramperia").value * 5 : Math.floor(this.getField("pd_tramperia").value / 5);
  this.getField("pd_venenos").value = (event.value === "D100") ? this.getField("pd_venenos").value * 5 : Math.floor(this.getField("pd_venenos").value / 5);
  this.getField("pd_arte").value = (event.value === "D100") ? this.getField("pd_arte").value * 5 : Math.floor(this.getField("pd_arte").value / 5);
  this.getField("pd_baile").value = (event.value === "D100") ? this.getField("pd_baile").value * 5 : Math.floor(this.getField("pd_baile").value / 5);
  this.getField("pd_forja").value = (event.value === "D100") ? this.getField("pd_forja").value * 5 : Math.floor(this.getField("pd_forja").value / 5);
  this.getField("pd_musica").value = (event.value === "D100") ? this.getField("pd_musica").value * 5 : Math.floor(this.getField("pd_musica").value / 5);
  this.getField("pd_tmanos").value = (event.value === "D100") ? this.getField("pd_tmanos").value * 5 : Math.floor(this.getField("pd_tmanos").value / 5);
  this.getField("pd_alquimia").value = (event.value === "D100") ? this.getField("pd_alquimia").value * 5 : Math.floor(this.getField("pd_alquimia").value / 5);
  this.getField("pd_sastreria").value = (event.value === "D100") ? this.getField("pd_sastreria").value * 5 : Math.floor(this.getField("pd_sastreria").value / 5);
  this.getField("pd_joyeria").value = (event.value === "D100") ? this.getField("pd_joyeria").value * 5 : Math.floor(this.getField("pd_joyeria").value / 5);
  this.getField("pd_caligrafia").value = (event.value === "D100") ? this.getField("pd_caligrafia").value * 5 : Math.floor(this.getField("pd_caligrafia").value / 5);
  this.getField("pd_mates").value = (event.value === "D100") ? this.getField("pd_mates").value * 5 : Math.floor(this.getField("pd_mates").value / 5);
  this.getField("pd_cocina").value = (event.value === "D100") ? this.getField("pd_cocina").value * 5 : Math.floor(this.getField("pd_cocina").value / 5);
  this.getField("pd_ataque").value = (event.value === "D100") ? this.getField("pd_ataque").value * 5 : Math.floor(this.getField("pd_ataque").value / 5);
  this.getField("pd_parada").value = (event.value === "D100") ? this.getField("pd_parada").value * 5 : Math.floor(this.getField("pd_parada").value / 5);
  this.getField("pd_esquiva").value = (event.value === "D100") ? this.getField("pd_esquiva").value * 5 : Math.floor(this.getField("pd_esquiva").value / 5);
  this.getField("pd_llA").value = (event.value === "D100") ? this.getField("pd_llA").value * 5 : Math.floor(this.getField("pd_llA").value / 5);
];

var j = 0;

while (j < lista.length) {
  var element = this.getField("pd_" + lista[j]);
  console.println(element.value);
  if(element.value !== 0) {
    element.value = (event.value === "D100") ? element.value * 5 : Math.floor(element.value / 5);
  }
  j++;
}