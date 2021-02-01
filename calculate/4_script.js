i = 0;
var diferencia = 10;
var diff_x = this.getField("diff_x");
var a1_x = this.getField("a1_x");
var a2_x = this.getField("a2_x");
a1_x.value = "—";
a2_x.value = "—";
while (i < 7) {
  var arma_check = this.getField("arma" + i + "_check");
  var arma_especial = this.getField("arma" + i + "_especial");
  var arma_df = this.getField("arma" + i + "_df");
  var arma_atq = this.getField("arma" + i + "_atq");
  var arma_par = this.getField("arma" + i + "_par");
  var arma_tam = this.getField("arma" + i + "_tam");
  if (arma_check.value === "D+I") {
    if(i !== 0) {
      var arma_fue_bono = this.getField("arma" + i + "_fue_bono");
      // duplicar el bono de fuerza si lleva el arma con las dos manos
      arma_df.value += arma_fue_bono.value;
      arma_fue_bono.value = arma_fue_bono.value * 2;
    }
    arma_check.setItems(["D+I", "D", "I", "—"]);
    diferencia = 10;
    while (diferencia <= 200) {
      // diferencia => diferencia
      this.getField("a2_" + diferencia).value = Math.round(
        (Number(arma_df.value) * diferencia) / 500
      );
      this.getField("a1_" + diferencia).value = Math.round(
        (Number(arma_df.value) * diferencia) / 500
      );
      diferencia = diferencia + 10;
    }
    if (Number(diff_x.value) >= 0) {
      a1_x.value = Math.round(
        (Number(arma_df.value) * Number(diff_x.value)) / 500
      );
      a2_x.value = Math.round(
        (Number(arma_df.value) * Number(diff_x.value)) / 500
      );
    }

    equipo_ataque_i.value += Number(arma_atq.value);
    equipo_parada_i.value += Number(arma_par.value);
    equipo_ataque_d.value += Number(arma_atq.value);
    equipo_parada_d.value += Number(arma_par.value);
  } else if (arma_check.value === "D") {
    diferencia = 10;
    while (diferencia <= 200) {
      // diferencia => diferencia
      this.getField("a2_" + diferencia).value = Math.round(
        (Number(arma_df.value) * diferencia) / 500
      );
      diferencia = diferencia + 10;
    }
    if (Number(diff_x.value) >= 0) {
      a2_x.value = Math.round(
        (Number(arma_df.value) * Number(diff_x.value)) / 500
      );
    }
    if (mano_i_ocupada) {
      switch (arma_tam.value) {
        case "S":
          arma_atq.value += -20;
          arma_par.value += -20;
          break;
        case "M":
          arma_atq.value += -30;
          arma_par.value += -30;
          break;
        case "L":
          arma_atq.value += -40;
          arma_par.value += -40;
          break;
        default:
          break;
      }
      arma_check.setItems(["D", "—"]);
    } else {
      switch (arma_tam.value) {
        case "S":
          arma_atq.value += -10;
          arma_par.value += -10;
          break;
        case "M":
          arma_atq.value += -15;
          arma_par.value += -15;
          break;
        case "L":
          arma_atq.value += -20;
          arma_par.value += -20;
          break;
        default:
          break;
      }
      arma_check.setItems(["D", "D+I", "I", "—"]);
    }
    equipo_ataque_d.value += Number(arma_atq.value);
    equipo_parada_d.value += Number(arma_par.value);
  } else if (arma_check.value === "I") {
    diferencia = 10;
    while (diferencia <= 200) {
      // diferencia => diferencia
      this.getField("a1_" + diferencia).value = Math.round(
        (Number(arma_df.value) * diferencia) / 500
      );
      diferencia = diferencia + 10;
    }
    if (Number(diff_x.value) >= 0) {
      a1_x.value = Math.round(
        (Number(arma_df.value) * Number(diff_x.value)) / 500
      );
    }
    if (mano_d_ocupada) {
      switch (arma_tam.value) {
        case "S":
          arma_atq.value += -20;
          arma_par.value += -20;
          break;
        case "M":
          arma_atq.value += -30;
          arma_par.value += -30;
          break;
        case "L":
          arma_atq.value += -40;
          arma_par.value += -40;
          break;
        default:
          break;
      }
      arma_check.setItems(["I", "—"]);
    } else {
      switch (arma_tam.value) {
        case "S":
          arma_atq.value += -10;
          arma_par.value += -10;
          break;
        case "M":
          arma_atq.value += -15;
          arma_par.value += -15;
          break;
        case "L":
          arma_atq.value += -20;
          arma_par.value += -20;
          break;
        default:
          break;
      }
      arma_check.setItems(["I", "D+I", "D", "—"]);
    }
    equipo_ataque_i.value += Number(arma_atq.value);
    equipo_parada_i.value += Number(arma_par.value);
  } else {
    if (manos_ocupadas) {
      // arma_check.readonly = true;
      arma_check.setItems(["—"]);
    } else {
      if (mano_d_ocupada) {
        arma_check.setItems(["—", "I"]);
      } else if (mano_i_ocupada) {
        arma_check.setItems(["—", "D"]);
      } else {
        arma_check.setItems(["—", "D", "I", "D+I"]);
      }
    }
  }

  if (
    (arma_check.value === "D" || arma_check.value === "I") &&
    arma_check.value !== mano_dominante.value.substr(0, 1) &&
    !ambidiestria
  ) {
    // mano no dominante
    if (arma_check.value === "D") {
      equipo_ataque_d.value += -30;
      equipo_parada_d.value += -30;
    } else {
      equipo_ataque_i.value += -30;
      equipo_parada_i.value += -30;
    }
    this.getField("arma" + i + "_atq").value += -30;
    this.getField("arma" + i + "_par").value += -30;
  }

  i++;
}

base_llA.value = Math.floor(
  Number(this.getField("pd_llA").value) /
    Number(this.getField("coste_llA").value)
);

this.getField("final_llA").value =
  Number(base_llA.value) +
  Number(this.getField("esp_llA").value) +
  Number(this.getField("mod_llA").value) +
  Number(fue_bono.value) +
  Number(this.getField("cat_llA").value);

// Combate final

if (this.getField("equipo_ataque_i").value !== "—") {
  this.getField("final_ataque_i").value =
    Number(this.getField("base_ataque").value) +
    Number(this.getField("equipo_ataque_i").value) +
    Number(this.getField("mod_ataque_i").value) +
    Number(des_bono.value) +
    Number(this.getField("cat_ataque").value);
} else {
  this.getField("final_ataque_i").value = "—";
}

if (this.getField("equipo_parada_i").value !== "—") {
  this.getField("final_parada_i").value =
    Number(this.getField("base_parada").value) +
    Number(this.getField("equipo_parada_i").value) +
    Number(this.getField("mod_parada_i").value) +
    Number(des_bono.value) +
    Number(this.getField("cat_parada").value);
} else {
  this.getField("final_parada_i").value = "—";
}
if (this.getField("equipo_ataque_d").value !== "—") {
  this.getField("final_ataque_d").value =
    Number(this.getField("base_ataque").value) +
    Number(this.getField("equipo_ataque_d").value) +
    Number(this.getField("mod_ataque_d").value) +
    Number(des_bono.value) +
    Number(this.getField("cat_ataque").value);
} else {
  this.getField("final_ataque_d").value = "—";
}
if (this.getField("equipo_parada_d").value !== "—") {
  this.getField("final_parada_d").value =
    Number(this.getField("base_parada").value) +
    Number(this.getField("equipo_parada_d").value) +
    Number(this.getField("mod_parada_d").value) +
    Number(des_bono.value) +
    Number(this.getField("cat_parada").value);
} else {
  this.getField("final_parada_d").value = "—";
}
this.getField("final_esquiva").value =
  Number(this.getField("base_esquiva").value) +
  Number(this.getField("equipo_esquiva").value) +
  Number(this.getField("mod_esquiva").value) +
  Number(this.getField("agi_bono").value) +
  Number(this.getField("cat_esquiva").value);

// Iniciativa
this.getField("final_iniciativa").value =
  Number(this.getField("agi_bono").value) +
  Number(this.getField("des_bono").value) +
  Number(this.getField("arma_vel").value) +
  Number(this.getField("cat_iniciativa").value) +
  Number(this.getField("mod_iniciativa").value) +
  Number(this.getField("mod_iniciativa").value) +
  Number(this.getField("esp_iniciativa").value);

// Habilidades

i = 0;
while (i < lista_habilidades.length) {
  var habilidad = lista_habilidades[i];
  var md_habilidad = this.getField("md_" + habilidad);
  var pd_habilidad = this.getField("pd_" + habilidad);
  var base_habilidad = this.getField("base_" + habilidad);
  pd_habilidad.value =
    Number(md_habilidad.value) * this.getField("valor_multiplo").value;
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

var oro = this.getField("oro");
var plata = this.getField("plata");
var bronce = this.getField("bronce");

var op_oro_1 = this.getField("op_oro_1");
var op_plata_1 = this.getField("op_plata_1");
var op_bronce_1 = this.getField("op_bronce_1");

var op_oro_2 = this.getField("op_oro_2");
var op_plata_2 = this.getField("op_plata_2");
var op_bronce_2 = this.getField("op_bronce_2");

// Operaciones bronce
if (
  (Number(op_bronce_1.value) !== 0 &&
    op_bronce_1.value !== "-" &&
    op_bronce_1.value !== "+") ||
  (Number(op_bronce_2.value) !== 0 &&
    op_bronce_2.value !== "-" &&
    op_bronce_2.value !== "+")
) {
  if (
    Number(op_bronce_2.value) !== 0 &&
    op_bronce_2.value !== "-" &&
    op_bronce_2.value !== "+"
  ) {
    bronce.value = Number(bronce.value) + Number(op_bronce_2.value);
  } else {
    bronce.value = Number(bronce.value) + Number(op_bronce_1.value);
  }
  if (bronce.value >= 100) {
    var plata_up = Math.floor(bronce.value / 100);
    plata.value = Number(plata.value) + plata_up;
    bronce.value = Number(bronce.value) - plata_up * 100;
  } else if (bronce.value < 0) {
    bronce.value = 0;
  }
}

// Operaciones plata
if (
  (Number(op_plata_2.value) !== 0 &&
    op_plata_2.value !== "-" &&
    op_plata_2.value !== "+") ||
  (Number(op_plata_1.value) !== 0 &&
    op_plata_1.value !== "-" &&
    op_plata_1.value !== "+") ||
  plata.value > 99
) {
  if (
    Number(op_plata_1.value) !== 0 &&
    op_plata_1.value !== "-" &&
    op_plata_1.value !== "+"
  ) {
    plata.value = Number(plata.value) + Number(op_plata_1.value);
  } else if (
    Number(op_plata_2.value) !== 0 &&
    op_plata_2.value !== "-" &&
    op_plata_2.value !== "+"
  ) {
    plata.value = Number(plata.value) + Number(op_plata_2.value);
  }
  var oro_update = Math.floor(plata.value / 100);
  if ((oro_update < 0 && oro_update <= Number(oro.value)) || oro_update > 0) {
    plata.value = Math.abs(oro_update * 100) - Math.abs(plata.value);
    oro.value = Number(oro.value) + oro_update;
  }
}

// Operaciones oro
// 1
if (
  Number(op_oro_1.value) !== 0 &&
  Number(op_oro_1.value) !== "-" &&
  Number(op_oro_1.value) !== "+" &&
  (Number(op_oro_1.value) > 0 ||
    Number(oro.value) + Number(op_oro_1.value) >= 0)
) {
  oro.value = Number(oro.value) + Number(op_oro_1.value);
}

// 2
if (
  Number(op_oro_2.value) !== 0 &&
  op_oro_2.value !== "-" &&
  op_oro_2.value !== "+" &&
  Number(oro.value) + Number(op_oro_2.value) >= 0
) {
  oro.value = Number(oro.value) + Number(op_oro_2.value);
}