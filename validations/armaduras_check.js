if (event.value === "Eq.") {
  var yelmo_duro_count = 0;
  var yelmo_blando_count = 0;
  var armadura_duro_count = 0;
  var armadura_blando_count = 0;
  var num = Number(event.target.name.substr(8, 1));
  var armadura_clase = this.getField("armadura" + num).value.split(" ")[0];
  var armadura_dureza = this.getField("armadura" + num + "_dureza");
  if(armadura_dureza.value === "Dura") {
      if(armadura_clase === "Yelmo") {
        yelmo_duro_count++;
      } else {
        armadura_duro_count++;
      }
  } else {
    if(armadura_clase === "Yelmo") {
        yelmo_blando_count++;
      } else {
        armadura_blando_count++;
      }
  }
  var i = 1;
  while (i <= 6) {
    var armadura_check = this.getField("armadura" + i + "_check");
    if (armadura_check.value === "Eq.") {
      var armadura_clase_i = this.getField("armadura" + i).value.split(" ")[0];
      var armadura_dureza_i = this.getField("armadura" + i + "_dureza");
      if (armadura_clase_i === "Yelmo") {
        if (armadura_dureza_i.value === "Dura") {
            yelmo_duro_count++;
        } else {
            yelmo_blando_count++;
        }
      } else {
        if (armadura_dureza_i.value === "Dura") {
            armadura_duro_count++;
        } else {
            armadura_blando_count++;
        }
      }
    }
    i++;
  }
  if(
        armadura_duro_count > 1 || 
        yelmo_duro_count > 1 || 
        (armadura_duro_count > 0 && (armadura_blando_count > 2)) ||
        (yelmo_duro_count > 0 && (yelmo_blando_count > 2))
    ) {
        event.rc = false;
    }
}
