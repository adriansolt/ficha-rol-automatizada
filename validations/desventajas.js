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
  }