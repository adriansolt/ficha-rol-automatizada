
    var num = event.target.name.substr(7,1);
    var ventaja = this.getField("ventaja" + num).value;
    if (
      ventaja === "Afinidad animal" ||
      ventaja === "Ambidiestría" ||
      ventaja === "Aprendizaje innato en llevar armadura" ||
      ventaja === "Dificil de matar" ||
      ventaja === "Fondos iniciales" ||
      ventaja === "Mente fria" ||
      ventaja === "Inquietante" ||
      ventaja === "Seductor" ||
      ventaja === "Sentidos agudos" ||
      ventaja === "Al límite" ||
      ventaja === "Armadura natural" ||
      ventaja === "Buena suerte" ||
      ventaja === "Reflejos rápidos" ||
      ventaja === "Regeneración mejorada" ||
      ventaja === "Resistencia física excepcional" ||
      ventaja === "Sueño ligero" ||
      ventaja === "Tocado por el destino"
    ) {
      event.value = 2;
    } else if (
      ventaja === "Aprendizaje innato en llevar armadura II" ||
      ventaja === "Conecedor de todas las materias" ||
      ventaja === "Dificil de matar II" ||
      ventaja === "Fondos iniciales II" ||
      ventaja === "Reflejos rápidos II" ||
      ventaja === "Regeneración mejorada II" ||
      ventaja === "Resistencia física excepcional II"
    ) {
      event.value = 4;
    } else if (
      ventaja === "Aprendizaje innato en llevar armadura III" ||
      ventaja === "Aprendizaje innato en un campo II" ||
      ventaja === "Dificil de matar III" ||
      ventaja === "Fondos iniciales III" ||
      ventaja === "Reflejos rápidos III" ||
      ventaja === "Regeneración mejorada III"
    ) {
      event.value = 6;
    } else if (
      ventaja.substr(0, 7) === "Apto en" ||
      ventaja.substr(0, 21) === "Aprendizaje innato en"
    ) {
      // apto en un campo (4)
      // apto en una materia (2)
      // apto en una materia II (4)

      // aprendizaje innato en materia (2)
      // aprendizaje innato en materia II (4)
      // aprendizaje innato en campo (4)
      // aprendizaje innato en campo II (6)
      var ventaja_lC = ventaja.toLowerCase();
      if (
        ventaja_lC.match("vigor") ||
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
          event.value = 6;
        } else {
          event.value = 4;
        }
      } else {
        // apto en una materia (2)
        // apto en una materia II (4)
        // aprendizaje innato en materia (2)
        // aprendizaje innato en materia II (4)
        if (ventaja_lC.match(" ii")) {
          event.value = 4;
        } else {
          event.value = 2;
        }
      }
    } else {
      event.value = 0;
    }
  