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
      var ventaja = this.getField(
        "ventaja" + (((Number(num_ventaja) + l - 1) % 7) + 1)
      ).value;
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
        if (event.value === "Fondos iniciales") {
          var oro = this.getField("oro");
          oro.value = Number(oro.value) + 200;
        }
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
        if (event.value === "Fondos iniciales II") {
          var oro = this.getField("oro");
          oro.value = Number(oro.value) + 500;
        }
      } else if (
        event.value === "Aprendizaje innato en llevar armadura III" ||
        event.value === "Aprendizaje innato en un campo II" ||
        event.value === "Dificil de matar III" ||
        event.value === "Fondos iniciales III" ||
        event.value === "Reflejos rápidos III" ||
        event.value === "Regeneración mejorada III"
      ) {
        this.getField("ventaja" + num_ventaja + "_coste").value = 6;
        if (event.value === "Fondos iniciales III") {
          var oro = this.getField("oro");
          oro.value = Number(oro.value) + 1000;
        }
      } else if (
        event.value.substr(0, 7) === "Apto en" ||
        event.value.substr(0, 21) === "Aprendizaje innato en"
      ) {
        // apto en un campo (4)
        // apto en una materia (2)
        // apto en una materia II (4)
  
        // aprendizaje innato en materia (2)
        // aprendizaje innato en materia II (4)
        // aprendizaje innato en campo (4)
        // aprendizaje innato en campo II (6)
        var ventaja_lC = event.value.toLowerCase();
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