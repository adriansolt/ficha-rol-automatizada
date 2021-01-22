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


// Validate (md_ataque)

var md_totales = this.getField("md_totales");
var limite_md_combate = Number(md_totales.value) / 2;
var md_ataque = this.getField("md_ataque");
var md_parada = this.getField("md_parada");
var md_esquiva = this.getField("md_esquiva");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if ((Number(event.value) + md_parada.value + md_esquiva.value) > Number(limite_md_combate)) {
  event.rc = false;
}


// Validate (md_parada)

var md_totales = this.getField("md_totales");
var limite_md_combate = Number(md_totales.value) / 2;
var md_ataque = this.getField("md_ataque");
var md_parada = this.getField("md_parada");
var md_esquiva = this.getField("md_esquiva");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if ((Number(event.value) + md_ataque.value + md_esquiva.value) > Number(limite_md_combate)) {
  event.rc = false;
}


// Validate (md_esquiva)

var md_totales = this.getField("md_totales");
var limite_md_combate = Number(md_totales.value) / 2;
var md_ataque = this.getField("md_ataque");
var md_parada = this.getField("md_parada");
var md_esquiva = this.getField("md_esquiva");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if ((Number(event.value) + md_ataque.value + md_parada.value) > Number(limite_md_combate)) {
  event.rc = false;
}


// Validate (md_llA)

var md_totales = this.getField("md_totales");
var limite_md_llA = Number(md_totales.value) / 10;
var md_llA = this.getField("md_llA");
if (Number(event.value) <= 0) {
  event.value = 0;
} else if (Number(event.value) > Number(limite_md_llA)) {
  event.value = md_llA.value;
}


// Script Ventajas

var index = 1;
while (index <= 8) {
  var ventajas = [
    "-",
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

// Idiomas

this.getField("idioma1_escrito").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);
this.getField("idioma1_hablado").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);

this.getField("idioma2_escrito").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);
this.getField("idioma2_hablado").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);

this.getField("idioma3_escrito").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);
this.getField("idioma3_hablado").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);

this.getField("idioma4_escrito").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);
this.getField("idioma4_hablado").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);

this.getField("idioma5_escrito").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);
this.getField("idioma5_hablado").setItems(["Nada", "Bajo", "Medio", "Alto", "Nativo"]);

// Validate ventaja

if (event.value !== " " && event.value !== "" && event.value !== "-") {
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

  for (var l = 1; l <= 6 && !repetido; l++) {

    ventaja = this.getField("ventaja" + (((Number(num_ventaja) + l - 1) % 7) + 1)).value;
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
} else {
  this.getField("ventaja" + num_ventaja + "_coste").value = "";
}

// Validate desventaja (1-3)

if (event.value !== " " && event.value !== "" && event.value !== "-") {
  var repetido = false;
  var cond1 = event.value.toLowerCase();
  var num_desventaja = event.target.name.substr(10, 1);

  if (cond1.substr(cond1.length - 3) === " iii") {
    cond1 = cond1.substr(0, cond1.length - 3);
  } else if (cond1.substr(cond1.length - 3) === " ii") {
    cond1 = cond1.substr(0, cond1.length - 3);
  }
  for (var l = 1; l <= 2 && !repetido; l++) {
    var desventaja = this.getField("desventaja" + (((Number(num_desventaja) + l - 1) % 3) + 1)).value;
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
      event.value.substr(0, 11) === "Vicio grave" ||
      event.value.substr(0, 13) === "Alergia grave" ||
      event.value.substr(0, 16) === "Debilidad física" ||
      event.value === "Desafortunado" ||
      event.value === "Endeble" ||
      event.value.substr(0, 20) === "Extremidad atrofiada" ||
      event.value.substr(0, 11) === "Fobia grave" ||
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
} else {
  this.getField("desventaja" + num_desventaja + "_coste").value = "";
}

// Script armas

var tabla_arma_list = [
  "--",
  "ARMAS CORTAS",
  "HACHAS",
  "MAZAS",
  "ESPADAS",
  "MANDOBLES",
  "ASTAS",
  "CUERDAS",
  "--",
  "Lazo",
  "Red de gladiador",
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

var i = 1;
while (i < 7) {
  this.getField("arma" + i).setItems(arma_list);
  this.getField("tabla_arma" + i).setItems(tabla_arma_list);
  i++;
}
i = 1;
while (i < 7) {
  this.getField("arma" + i + "_check").setItems(["—", "Eq."]);
  this.getField("arma" + i + "_calidad").setItems(["-2", "-1", "0", "+1", "+2", "+3"]);
  i++;
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

var arma_clase = this.getField(event.target.name + "_clase");
var arma_calidad = this.getField(event.target.name + "_calidad");
var arma_freq = this.getField(event.target.name + "_freq");
var arma_especial = this.getField(event.target.name + "_especial");
var arma_check = this.getField(event.target.name + "_check");
arma_clase.value = "—";
arma_especial.value = "—";
arma_calidad.value = 0;
arma_calidad.readonly = false;
arma_check.readonly = false;

switch (event.value) {
  case "Lazo":
    arma_freq.value = 8;
    arma_clase.value = "Cuerda";
    arma_especial.value = "Presa 18";
    break;
  case "Red de gladiador":
    arma_freq.value = 4;
    arma_clase.value = "Cuerda";
    arma_especial.value = "Presa 20";
    break;
  case "Jarrón":
    arma_freq.value = 8;
    arma_clase.value = "Maza";
    break;
  case "Botella rota":
    arma_freq.value = 6;
    arma_clase.value = "Arma corta";
    break;
  case "Antorcha":
    arma_freq.value = 8;
    arma_clase.value = "Maza";
    break;
  case "Palo de madera":
    arma_freq.value = 8;
    arma_clase.value = "Maza";
    break;
  case "Cadena":
    arma_freq.value = 12;
    arma_clase.value = "Cuerda";
    arma_especial.value = "Presa 16";
    break;
  case "Cestus":
    arma_freq.value = 6;
    arma_clase.value = "Arma corta";
    break;
  case "Estilete":
    arma_freq.value = 6;
    arma_clase.value = "Arma corta";
    arma_especial.value = "Precisa";
    break;
  case "Silla":
    arma_freq.value = 10;
    arma_clase.value = "Mandoble";
    break;
  case "Barra metálica":
    arma_freq.value = 10;
    arma_clase.value = "Maza";
    break;
  case "Cuchillo de cocina":
    arma_freq.value = 8;
    arma_clase.value = "Arma corta";
    break;
  case "Garfio":
    arma_freq.value = 6;
    arma_clase.value = "Arma corta";
    break;
  case "Garrote":
    arma_freq.value = 10;
    arma_clase.value = "Maza";
    break;
  case "Daga":
    arma_freq.value = 6;
    arma_clase.value = "Arma corta";
    arma_especial.value = "Precisa";
    break;
  case "Vara":
    arma_freq.value = 8;
    arma_clase.value = "Asta";
    arma_especial.value = "A dos manos";
    break;
  case "Daga de parada":
    arma_freq.value = 6;
    arma_clase.value = "Arma corta";
    arma_especial.value = "Precisa";
    break;
  case "Martillo":
    arma_freq.value = 8;
    arma_clase.value = "Maza";
    break;
  case "Azada":
    arma_freq.value = 8;
    arma_clase.value = "Hacha";
    break;
  case "Hoz":
    arma_freq.value = 8;
    arma_clase.value = "Arma corta";
    break;
  case "Arpón":
    arma_freq.value = 10;
    arma_clase.value = "Asta";
    break;
  case "Florete":
    arma_freq.value = 6;
    arma_clase.value = "Espada";
    arma_especial.value = "Precisa";
    break;
  case "Guadaña":
    arma_freq.value = 10;
    arma_clase.value = "Asta";
    break;
  case "Jabalina":
    arma_freq.value = 8;
    arma_clase.value = "Asta";
    break;
  case "Látigo":
    arma_freq.value = 8;
    arma_clase.value = "Cuerda";
    arma_especial.value = "Presa 16";
    break;
  case "Hacha de leñador":
    arma_freq.value = 10;
    arma_clase.value = "Hacha";
    break;
  case "Pico":
    arma_freq.value = 10;
    arma_clase.value = "Arma corta";
    break;
  case "Lanza":
    arma_freq.value = 8;
    arma_clase.value = "Asta";
    break;
  case "Espada corta":
    arma_freq.value = 8;
    arma_clase.value = "Arma corta";
    arma_especial.value = "Precisa";
    break;
  case "Mayal":
    arma_freq.value = 12;
    arma_clase.value = "Cuerda";
    break;
  case "Maza":
    arma_freq.value = 12;
    arma_clase.value = "Maza";
    break;
  case "Estoque":
    arma_freq.value = 8;
    arma_clase.value = "Espada";
    arma_especial.value = "Precisa";
    break;
  case "Tridente":
    arma_freq.value = 12;
    arma_clase.value = "Asta";
    arma_especial.value = "Lanzable";
    break;
  case "Hacha de mano":
    arma_freq.value = 10;
    arma_clase.value = "Hacha";
    break;
  case "Sable":
    arma_freq.value = 12;
    arma_clase.value = "Espada";
    break;
  case "Martillo de guerra":
    arma_freq.value = 12;
    arma_clase.value = "Maza";
    break;
  case "Cimitarra":
    arma_freq.value = 10;
    arma_clase.value = "Espada";
    break;
  case "Espada larga":
    arma_freq.value = 12;
    arma_clase.value = "Espada";
    break;
  case "Espada ancha":
    arma_freq.value = 10;
    arma_clase.value = "Espada";
    break;
  case "Maza pesada de combate":
    arma_freq.value = 12;
    arma_clase.value = "Maza";
    break;
  case "Alabarda":
    arma_freq.value = 12;
    arma_clase.value = "Asta";
    arma_especial.value = "A dos manos";
    break;
  case "Espada bastarda":
    arma_freq.value = 14;
    arma_clase.value = "Espada";
    break;
  case "Gran martillo de guerra":
    arma_freq.value = 14;
    arma_clase.value = "Maza";
    break;
  case "Hacha de guerra":
    arma_freq.value = 14;
    arma_clase.value = "Hacha";
    break;
  case "Lanza de caballería":
    arma_freq.value = 16;
    arma_clase.value = "Asta";
    break;
  case "Mangual":
    arma_freq.value = 16;
    arma_clase.value = "Mandoble";
    break;
  case "Mandoble":
    arma_freq.value = 16;
    arma_clase.value = "Mandoble";
    break;
  case "Hacha a dos manos":
    arma_freq.value = 18;
    arma_clase.value = "Hacha";
    break;
  case "Rodela":
    arma_freq.value = 10;
    arma_clase.value = "Escudo";
    arma_calidad.readonly = true;
    break;
  case "Escudo":
    arma_freq.value = 14;
    arma_clase.value = "Escudo";
    arma_calidad.readonly = true;
    break;
  case "Escudo corporal":
    arma_freq.value = 20;
    arma_clase.value = "Escudo";
    arma_calidad.readonly = true;
    break;
    default:
      this.getField(event.target.name + "_atq").value = "—";
      this.getField(event.target.name + "_par").value = "—";
      this.getField(event.target.name + "_esq").value = "—";
      this.getField(event.target.name + "_db").value = "—";
      this.getField(event.target.name + "_df").value = "—";
      this.getField(event.target.name + "_iniciativa").value = "—";
      
      check.readonly = true;
      check.value = "—";
      
      arma_clase.value = "—";
      arma_freq.value = "—";
      arma_calidad.readonly = true;
    break;
}


// Validar tabla_arma

var num = Number(event.target.name.substr(event.target.name.length - 1));
var tabla_arma = this.getField(event.target.name);
var coste_md = this.getField(event.target.name + "_md");
var arma_clase = this.getField(event.target.name + "_clase");

switch (event.value) {
  case "ARMAS CORTAS":
    arma_clase.value = "Arma corta";
    break;
  case "HACHAS":
    arma_clase.value = "Hacha";
    break;
  case "MAZAS":
    arma_clase.value = "Maza";
    break;
  case "ESPADAS":
    arma_clase.value = "Espada";
    break;
  case "MANDOBLES":
    arma_clase.value = "Mandoble";
    break;
  case "ASTAS":
    arma_clase.value = "Asta";
    break;
  case "CUERDAS":
    arma_clase.value = "Cuerda";
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
    arma_clase.value = "Espada";
    break;
  case "Guadaña":
    arma_clase.value = "Asta";
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
    arma_clase.value = "Cuerda";
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
    arma_clase.value = "Maza";
    break;
  case "Alabarda":
    arma_clase.value = "Asta";
    break;
  case "Espada bastarda":
    arma_clase.value = "Espada";
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
    arma_clase.value = "Mandoble";
    break;
  case "Mandoble":
    arma_clase.value = "Mandoble";
    break;
  case "Hacha a dos manos":
    arma_clase.value = "Hacha";
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
    event.value = "—";
    arma_clase.value = "—";
    coste_md.value = 0;
    break;
}

if (event.value === "—") {
  // tabla no valida
  if ((num - 1) >= 1) {
    this.getField("tabla_arma" + (num - 1)).readonly = false;
    event.target.readonly = true;
  }
} else {
  // tabla valida
  if ((num + 1) <= 7) {
    this.getField("tabla_arma" + (num + 1)).readonly = false;
    event.target.readonly = true;
  }
}

// Script armaduras

var lista_armaduras = [
  "Peto de cuero endurecido",
  "Peto de cuero tachonado",
  "Peto de metal",
  "Camisola acolchada",
  "Camisola de cuero",
  "Camisola de piel",
  "Camisola de anillas",
  "Completa gabardina",
  "Completa de cuero",
  "Completa de mallas",
  "Completa de piezas",
  "Completa de metal",
  "Completa con escamas",
  "Completa de placas",
  "Completa de placas pesada",
  "Completa de campaña pesada",
  "Yelmo de anillas",
  "Yelmo frentón",
  "Yelmo coronilla",
  "Yelmo de cuero",
  "Yelmo de maya",
  "Yelmo completo abierto",
  "Yelmo completo cerrado",
]
var i = 0;
while (i < 7) {
  this.getField("armadura" + i).setItems(lista_armaduras);
  i++;
}

// Validar armaduras

var dureza = this.getField(event.target.name + "_dureza");
var check = this.getField(event.target.name + "_check");
var calidad = this.getField(event.target.name + "_calidad");
check.value = "—";
calidad.value = 0;
if (
  event.value === "Peto de cuero endurecido" ||
  event.value === "Peto de cuero tachonado" ||
  event.value === "Peto de metal" ||
  event.value === "Completa de piezas" ||
  event.value === "Completa de metal" ||
  event.value === "Completa con escamas" ||
  event.value === "Completa de placas" ||
  event.value === "Completa de placas pesada" ||
  event.value === "Completa de campaña pesada" ||
  event.value === "Yelmo de anillas" ||
  event.value === "Yelmo frentón" ||
  event.value === "Yelmo coronilla" ||
  event.value === "Yelmo completo abierto" ||
  event.value === "Yelmo completo cerrado"
) {
  dureza.value = "Dura";
  check.readonly = false;
  calidad.readonly = false;
} else if (
  event.value === "Camisola acolchada" ||
  event.value === "Camisola de cuero" ||
  event.value === "Camisola de piel" ||
  event.value === "Camisola de anillas" ||
  event.value === "Completa gabardina" ||
  event.value === "Completa de cuero" ||
  event.value === "Completa de mallas" ||
  event.value === "Yelmo de cuero" ||
  event.value === "Yelmo de maya"
) {
  dureza.value = "Blanda";
  check.readonly = false;
  calidad.readonly = false;
} else {
  check.readonly = true;
  calidad.readonly = true;
  dureza.value = "—";
  this.getField(event.target.name + "_def").value = "—";
  this.getField(event.target.name + "_reqarm").value = "—";
  this.getField(event.target.name + "_advertir").value = "—";
  this.getField(event.target.name + "_mov").value = "—";
}

// Validar idiomas hablados
var num = event.target.name.substr(6, 1);
var coste_idioma = this.getField("idioma" + num + "_md");

switch (event.value) {
  case "Bajo":
    coste_idioma.value = 2;
    break;
  case "Medio":
    coste_idioma.value = 3;
    break;
  case "Alto":
    coste_idioma.value = 4;
    break;
  case "Nativo":
    coste_idioma.value = 5;
    break;
    default:
    coste_idioma.value = 0;
    break;
}

switch (this.getField("idioma" + num + "_escrito").value) {
  case "Bajo":
    coste_idioma.value += 2;
    break;
  case "Medio":
    coste_idioma.value += 3;
    break;
  case "Alto":
    coste_idioma.value += 4;
    break;
  case "Nativo":
    coste_idioma.value += 5;
    break;
  default:
    break;
}