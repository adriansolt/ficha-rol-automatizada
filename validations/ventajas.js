if (event.value !== " " && event.value !== "" && event.value !== "-") {
    var num_ventaja = event.target.name.substr(7, 1);
    var repetido = false;
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
        if (event.value === "Fondos iniciales") {
          var oro = this.getField("oro");
          oro.value = Number(oro.value) + 200;
        } else if (event.value === "Fondos iniciales II") {
          var oro = this.getField("oro");
          oro.value = Number(oro.value) + 500;
        } else if (event.value === "Fondos iniciales III") {
          var oro = this.getField("oro");
          oro.value = Number(oro.value) + 1000;
        }
    }
  }