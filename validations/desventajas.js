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
      var desventaja = this.getField(
        "desventaja" + (((Number(num_desventaja) + l - 1) % 3) + 1)
      ).value;
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
        this.getField("desventaja" + num_desventaja + "_coste").value = 0;
      }
    }
  } else {
    this.getField("desventaja" + num_desventaja + "_coste").value = 0;
  }