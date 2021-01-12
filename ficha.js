var agi_actual = this.getField("agi_actual");
var md_actuales = this.getField("md_actuales");

// Armaduras

var i = 1;
var armaduras_duras_eq = 0;
var armaduras_blandas_eq = 0;
var yelmos_blandos_eq = 0;
var yelmos_duros_eq = 0;

var armadura_vel = this.getField("armadura_vel");
armadura_vel.value = 0;
var restriccion_mov_armadura = 0;

var armadura_cabeza_lista = [];
var armadura_espalda_lista = [];
var armadura_hombro_der_lista = [];
var armadura_hombro_izq_lista = [];
var armadura_pecho_lista = [];
var armadura_brazo_der_lista = [];
var armadura_brazo_izq_lista = [];
var armadura_mano_der_lista = [];
var armadura_mano_izq_lista = [];
var armadura_pierna_der_lista = [];
var armadura_pierna_izq_lista = [];
var armadura_pie_der_lista = [];
var armadura_pie_izq_lista = [];

while (i < 7) {
  var armadura_dureza = this.getField("armadura" + i + "_dureza");
  var armadura_mov = this.getField("armadura" + i + "_mov");
  var armadura_advertir = this.getField("armadura" + i + "_advertir");

  if (armadura_dureza.value !== "—") {
    actualizarDatosArmadura(i);
    var armadura_clase = this.getField("armadura" + i).value.split(" ")[0];
    var armadura_check = this.getField("armadura" + i + "_check");
    if (armadura_check.value === "Eq.") {
      if (armadura_clase === "Yelmo") {
        // Yelmo
        if (armadura_dureza.value === "Dura") {
          yelmos_duros_eq++;
        } else {
          yelmos_blandos_eq++;
        }
      } else {
        // Armadura
        if (armadura_dureza.value === "Dura") {
          armaduras_duras_eq++;
        } else {
          armaduras_blandas_eq++;
        }
      }

      aplicarNegativosArmaduraEquipada(i);

      armadura_vel.value += Number(armadura_mov.value);
      this.getField("final_iniciativa").value += Number(armadura_mov.value);
      restriccion_mov_armadura += Math.floor((Number(armadura_mov.value) * 2 / 10));

      this.getField("esp_acrobacias").value += Number(armadura_mov.value);
      this.getField("esp_atletismo").value += Number(armadura_mov.value);
      this.getField("esp_montar").value += Number(armadura_mov.value);
      this.getField("esp_nadar").value += Number(armadura_mov.value);
      this.getField("esp_trepar").value += Number(armadura_mov.value);
      this.getField("esp_saltar").value += Number(armadura_mov.value);

      this.getField("esp_ver").value += Number(armadura_advertir.value);
      this.getField("esp_escuchar").value += Number(armadura_advertir.value);
      this.getField("esp_buscar").value += Number(armadura_advertir.value);

      this.getField("final_acrobacias").value += Number(armadura_mov.value);
      this.getField("final_atletismo").value += Number(armadura_mov.value);
      this.getField("final_montar").value += Number(armadura_mov.value);
      this.getField("final_nadar").value += Number(armadura_mov.value);
      this.getField("final_trepar").value += Number(armadura_mov.value);
      this.getField("final_saltar").value += Number(armadura_mov.value);

      this.getField("final_ver").value += Number(armadura_advertir.value);
      this.getField("final_escuchar").value += Number(armadura_advertir.value);
      this.getField("final_buscar").value += Number(armadura_advertir.value);

      var armad_def = this.getField("armadura" + i + "_def");
      switch (armadura_clase) {
        case "Peto":
          armadura_pecho_lista.push(armad_def.value);
          armadura_espalda_lista.push(armad_def.value);
          break;
        case "Camisola":
          armadura_pecho_lista.push(armad_def.value);
          armadura_espalda_lista.push(armad_def.value);
          armadura_hombro_der_lista.push(armad_def.value);
          armadura_hombro_izq_lista.push(armad_def.value);
          armadura_brazo_der_lista.push(armad_def.value);
          armadura_brazo_izq_lista.push(armad_def.value);
          armadura_mano_der_lista.push(armad_def.value);
          armadura_mano_izq_lista.push(armad_def.value);
          break;
        case "Completa":
          armadura_pecho_lista.push(armad_def.value);
          armadura_espalda_lista.push(armad_def.value);
          armadura_hombro_der_lista.push(armad_def.value);
          armadura_hombro_izq_lista.push(armad_def.value);
          armadura_brazo_der_lista.push(armad_def.value);
          armadura_brazo_izq_lista.push(armad_def.value);
          armadura_mano_der_lista.push(armad_def.value);
          armadura_mano_izq_lista.push(armad_def.value);
          armadura_pierna_der_lista.push(armad_def.value);
          armadura_pierna_izq_lista.push(armad_def.value);
          armadura_pie_der_lista.push(armad_def.value);
          armadura_pie_izq_lista.push(armad_def.value);
          break;
        case "Yelmo":
          armadura_cabeza_lista.push(armad_def.value);
          break;
        default:
          break;
      }

    }

  }
  i++;
}

var cuerpo_def = this.getField("armadura0_def").value;

if (cuerpo_def > 0) {
  armadura_pecho_lista.push(cuerpo_def);
  armadura_espalda_lista.push(cuerpo_def);
  armadura_hombro_der_lista.push(cuerpo_def);
  armadura_hombro_izq_lista.push(cuerpo_def);
  armadura_brazo_der_lista.push(cuerpo_def);
  armadura_brazo_izq_lista.push(cuerpo_def);
  armadura_mano_der_lista.push(cuerpo_def);
  armadura_mano_izq_lista.push(cuerpo_def);
  armadura_pierna_der_lista.push(cuerpo_def);
  armadura_pierna_izq_lista.push(cuerpo_def);
  armadura_pie_der_lista.push(cuerpo_def);
  armadura_pie_izq_lista.push(cuerpo_def);
  armadura_cabeza_lista.push(cuerpo_def);
}

var armaduras_duras_full = false;
var armaduras_blandas_full = false;

if (armaduras_duras_eq > 0) {
  armaduras_duras_full = true;
  if (armaduras_blandas_eq > 2) {
    armaduras_blandas_full = true;
  }
}

var yelmos_duros_full = false;
var yelmos_blandos_full = false;

if (yelmos_duros_eq > 0) {
  yelmos_duros_full = true;
  if (yelmos_blandos_eq > 2) {
    yelmos_blandos_full = true;
  }
}

i = 1;
var armadura_peto = [];
var armadura_camisola = [];
var armadura_completa = [];
var armadura_yelmo = [];
while (i < 7) {
  var armadura = this.getField("armadura" + i);
  var armadura_check = this.getField("armadura" + i + "_check");
  var armadura_dureza = this.getField("armadura" + i + "_dureza");
  var armad_def = this.getField("armadura" + i + "_def");
  var armad_clase = armadura.value.split(" ")[0];
  if (armad_def.value !== "—") {
    if (
      (armadura_check.value !== "Eq.") && (
        (armaduras_duras_full && armad_clase !== "Yelmo" && armadura_dureza.value === "Dura") ||
        (armaduras_blandas_full && armad_clase !== "Yelmo" && armadura_dureza.value === "Blanda") ||
        (yelmos_duros_full && armad_clase === "Yelmo" && armadura_dureza.value === "Dura") ||
        (yelmos_blandos_full && armad_clase === "Yelmo" && armadura_dureza.value === "Blanda")
      )
    ) {
      armadura_check.readonly = true;
    } else {
      armadura_check.readonly = false;
    }
  }
  i++;
}

var armadura_cabeza_total = 0;
var armadura_espalda_total = 0;
var armadura_hombro_der_total = 0;
var armadura_hombro_izq_total = 0;
var armadura_pecho_total = 0;
var armadura_brazo_der_total = 0;
var armadura_brazo_izq_total = 0;
var armadura_mano_der_total = 0;
var armadura_mano_izq_total = 0;
var armadura_pierna_der_total = 0;
var armadura_pierna_izq_total = 0;
var armadura_pie_der_total = 0;
var armadura_pie_izq_total = 0;

armadura_pecho_lista.sort().reverse();
armadura_espalda_lista.sort().reverse();
armadura_hombro_der_lista.sort().reverse();
armadura_hombro_izq_lista.sort().reverse();
armadura_brazo_der_lista.sort().reverse();
armadura_brazo_izq_lista.sort().reverse();
armadura_mano_der_lista.sort().reverse();
armadura_mano_izq_lista.sort().reverse();
armadura_pierna_der_lista.sort().reverse();
armadura_pierna_izq_lista.sort().reverse();
armadura_pie_der_lista.sort().reverse();
armadura_pie_izq_lista.sort().reverse();
armadura_cabeza_lista.sort().reverse();

var armadura_cabeza = this.getField("armadura_cabeza");
var armadura_espalda = this.getField("armadura_espalda");
var armadura_hombro_der = this.getField("armadura_hombro_der");
var armadura_hombro_der = this.getField("armadura_hombro_der");
var armadura_hombro_izq = this.getField("armadura_hombro_izq");
var armadura_pecho = this.getField("armadura_pecho");
var armadura_brazo_der = this.getField("armadura_brazo_der");
var armadura_brazo_izq = this.getField("armadura_brazo_izq");
var armadura_mano_der = this.getField("armadura_mano_der");
var armadura_mano_izq = this.getField("armadura_mano_izq");
var armadura_pierna_der = this.getField("armadura_pierna_der");
var armadura_pierna_izq = this.getField("armadura_pierna_izq");
var armadura_pie_der = this.getField("armadura_pie_der");
var armadura_pie_izq = this.getField("armadura_pie_izq");

var seleccionado_armadura_cabeza = armadura_cabeza.value;
var seleccionado_armadura_espalda = armadura_espalda.value;
var seleccionado_armadura_hombro_der = armadura_hombro_der.value;
var seleccionado_armadura_hombro_der = armadura_hombro_der.value;
var seleccionado_armadura_hombro_izq = armadura_hombro_izq.value;
var seleccionado_armadura_pecho = armadura_pecho.value;
var seleccionado_armadura_brazo_der = armadura_brazo_der.value;
var seleccionado_armadura_brazo_izq = armadura_brazo_izq.value;
var seleccionado_armadura_mano_der = armadura_mano_der.value;
var seleccionado_armadura_mano_izq = armadura_mano_izq.value;
var seleccionado_armadura_pierna_der = armadura_pierna_der.value;
var seleccionado_armadura_pierna_izq = armadura_pierna_izq.value;
var seleccionado_armadura_pie_der = armadura_pie_der.value;
var seleccionado_armadura_pie_izq = armadura_pie_izq.value;

i = 0;
while (i < armadura_cabeza_lista.length) {
  if (i === 0) {
    armadura_cabeza_total += Number(armadura_cabeza_lista[i]);
  } else {
    armadura_cabeza_total += Number((Math.floor((armadura_cabeza_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_cabeza_lista = [];

i = armadura_cabeza_total;
// armadura_cabeza.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_cabeza) === Number(i)) {
    armadura_cabeza_lista.unshift(i);
  } else {
    armadura_cabeza_lista.push(i);
  }
  i = i - 10;
}


i = 0;
while (i < armadura_pecho_lista.length) {
  if (i === 0) {
    armadura_pecho_total += Number(armadura_pecho_lista[i]);
  } else {
    armadura_pecho_total += Number((Math.floor((armadura_pecho_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pecho_lista = [];

i = armadura_pecho_total;
// armadura_pecho.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pecho) === Number(i)) {
    armadura_pecho_lista.unshift(i);
  } else {
    armadura_pecho_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_espalda_lista.length) {
  if (i === 0) {
    armadura_espalda_total += Number(armadura_espalda_lista[i]);
  } else {
    armadura_espalda_total += Number((Math.floor((armadura_espalda_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_espalda_lista = [];

i = armadura_espalda_total;
// armadura_espalda.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_espalda) === Number(i)) {
    armadura_espalda_lista.unshift(i);
  } else {
    armadura_espalda_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_hombro_der_lista.length) {
  if (i === 0) {
    armadura_hombro_der_total += Number(armadura_hombro_der_lista[i]);
  } else {
    armadura_hombro_der_total += Number((Math.floor((armadura_hombro_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_hombro_der_lista = [];

i = armadura_hombro_der_total;
// armadura_hombro_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_hombro_der) === Number(i)) {
    armadura_hombro_der_lista.unshift(i);
  } else {
    armadura_hombro_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_hombro_izq_lista.length) {
  if (i === 0) {
    armadura_hombro_izq_total += Number(armadura_hombro_izq_lista[i]);
  } else {
    armadura_hombro_izq_total += Number((Math.floor((armadura_hombro_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_hombro_izq_lista = [];

i = armadura_hombro_izq_total;
// armadura_hombro_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_hombro_izq) === Number(i)) {
    armadura_hombro_izq_lista.unshift(i);
  } else {
    armadura_hombro_izq_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_brazo_der_lista.length) {
  if (i === 0) {
    armadura_brazo_der_total += Number(armadura_brazo_der_lista[i]);
  } else {
    armadura_brazo_der_total += Number((Math.floor((armadura_brazo_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_brazo_der_lista = [];

i = armadura_brazo_der_total;
// armadura_brazo_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_brazo_der) === Number(i)) {
    armadura_brazo_der_lista.unshift(i);
  } else {
    armadura_brazo_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_brazo_izq_lista.length) {
  if (i === 0) {
    armadura_brazo_izq_total += Number(armadura_brazo_izq_lista[i]);
  } else {
    armadura_brazo_izq_total += Number((Math.floor((armadura_brazo_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_brazo_izq_lista = [];

i = armadura_brazo_izq_total;
// armadura_brazo_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_brazo_izq) === Number(i)) {
    armadura_brazo_izq_lista.unshift(i);
  } else {
    armadura_brazo_izq_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_mano_der_lista.length) {
  if (i === 0) {
    armadura_mano_der_total += Number(armadura_mano_der_lista[i]);
  } else {
    armadura_mano_der_total += Number((Math.floor((armadura_mano_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_mano_der_lista = [];

i = armadura_mano_der_total;
// armadura_mano_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_mano_der) === Number(i)) {
    armadura_mano_der_lista.unshift(i);
  } else {
    armadura_mano_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_mano_izq_lista.length) {
  if (i === 0) {
    armadura_mano_izq_total += Number(armadura_mano_izq_lista[i]);
  } else {
    armadura_mano_izq_total += Number((Math.floor((armadura_mano_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_mano_izq_lista = [];

i = armadura_mano_izq_total;
// armadura_mano_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_mano_izq) === Number(i)) {
    armadura_mano_izq_lista.unshift(i);
  } else {
    armadura_mano_izq_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_pierna_der_lista.length) {
  if (i === 0) {
    armadura_pierna_der_total += Number(armadura_pierna_der_lista[i]);
  } else {
    armadura_pierna_der_total += Number((Math.floor((armadura_pierna_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pierna_der_lista = [];

i = armadura_pierna_der_total;
// armadura_pierna_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pierna_der) === Number(i)) {
    armadura_pierna_der_lista.unshift(i);
  } else {
    armadura_pierna_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_pierna_izq_lista.length) {
  if (i === 0) {
    armadura_pierna_izq_total += Number(armadura_pierna_izq_lista[i]);
  } else {
    armadura_pierna_izq_total += Number((Math.floor((armadura_pierna_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pierna_izq_lista = [];

i = armadura_pierna_izq_total;
// armadura_pierna_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pierna_izq) === Number(i)) {
    armadura_pierna_izq_lista.unshift(i);
  } else {
    armadura_pierna_izq_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_pie_der_lista.length) {
  if (i === 0) {
    armadura_pie_der_total += Number(armadura_pie_der_lista[i]);
  } else {
    armadura_pie_der_total += Number((Math.floor((armadura_pie_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pie_der_lista = [];

i = armadura_pie_der_total;
// armadura_pie_der.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pie_der) === Number(i)) {
    armadura_pie_der_lista.unshift(i);
  } else {
    armadura_pie_der_lista.push(i);
  }

  i = i - 10;
}


i = 0;
while (i < armadura_pie_izq_lista.length) {
  if (i === 0) {
    armadura_pie_izq_total += Number(armadura_pie_izq_lista[i]);
  } else {
    armadura_pie_izq_total += Number((Math.floor((armadura_pie_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

armadura_pie_izq_lista = [];

i = armadura_pie_izq_total;
// armadura_pie_izq.display = Number(i) === 0 ? 1 : 0;

while (i >= 0) {
  if (Number(seleccionado_armadura_pie_izq) === Number(i)) {
    armadura_pie_izq_lista.unshift(i);
  } else {
    armadura_pie_izq_lista.push(i);
  }

  i = i - 10;
}

armadura_cabeza.setItems(armadura_cabeza_lista);
armadura_espalda.setItems(armadura_espalda_lista);
armadura_hombro_der.setItems(armadura_hombro_der_lista);
armadura_hombro_der.setItems(armadura_hombro_der_lista);
armadura_hombro_izq.setItems(armadura_hombro_izq_lista);
armadura_pecho.setItems(armadura_pecho_lista);
armadura_brazo_der.setItems(armadura_brazo_der_lista);
armadura_brazo_izq.setItems(armadura_brazo_izq_lista);
armadura_mano_der.setItems(armadura_mano_der_lista);
armadura_mano_izq.setItems(armadura_mano_izq_lista);
armadura_pierna_der.setItems(armadura_pierna_der_lista);
armadura_pierna_izq.setItems(armadura_pierna_izq_lista);
armadura_pie_der.setItems(armadura_pie_der_lista);
armadura_pie_izq.setItems(armadura_pie_izq_lista);


// Movimiento
var mov_max = this.getField("mov_max");
var mov_base = this.getField("mov_base");
var mov_total = agi_actual.value + restriccion_mov_armadura;
if (mov_total < 1) {
  mov_max.value = "0";
} else {
  switch (agi_actual.value + restriccion_mov_armadura) {
    case 1:
    case 2:
    case 3:
    case 4:
      mov_max.value = 1;
      break;
    case 5:
      mov_max.value = 2;
      break;
    case 6:
      mov_max.value = 3;
      break;
    case 7:
      mov_max.value = 4;
      break;
    case 8:
      mov_max.value = 5;
      break;
    case 9:
      mov_max.value = 6;
      break;
    case 10:
    case 11:
    case 12:
      mov_max.value = 7;
      break;
    case 13:
    case 14:
    case 15:
      mov_max.value = 8;
      break;
    case 16:
      mov_max.value = 9;
      break;
    case 17:
      mov_max.value = 10;
      break;
    case 18:
    case 19:
      mov_max.value = 11;
      break;
    default:
      mov_max.value = 12;
      break;
  }
  switch (agi_actual.value) {
    case 1:
    case 2:
    case 3:
    case 4:
      mov_base.value = 1;
      break;
    case 5:
      mov_base.value = 2;
      break;
    case 6:
      mov_base.value = 3;
      break;
    case 7:
      mov_base.value = 4;
      break;
    case 8:
      mov_base.value = 5;
      break;
    case 9:
      mov_base.value = 6;
      break;
    case 10:
    case 11:
    case 12:
      mov_base.value = 7;
      break;
    case 13:
    case 14:
    case 15:
      mov_base.value = 8;
      break;
    case 16:
      mov_base.value = 9;
      break;
    case 17:
      mov_base.value = 10;
      break;
    case 18:
    case 19:
      mov_base.value = 11;
      break;
    default:
      mov_base.value = 12;
      break;
  }
}

this.getField("mov_restr").value = (mov_max.value - mov_base.value);

md_actuales.value =
  Number(md_actuales.value) -
  Number(this.getField("md_ataque").value) -
  Number(this.getField("md_parada").value) -
  Number(this.getField("md_esquiva").value) -
  Number(this.getField("md_llA").value) -
  Number(this.getField("md_vida").value) -
  Number(this.getField("idioma1_md").value) -
  Number(this.getField("idioma2_md").value) -
  Number(this.getField("idioma3_md").value) -
  Number(this.getField("idioma4_md").value) -
  Number(this.getField("idioma5_md").value) -
  Number(this.getField("tabla_arma1_md").value) -
  Number(this.getField("tabla_arma2_md").value) -
  Number(this.getField("tabla_arma3_md").value) -
  Number(this.getField("tabla_arma4_md").value) -
  Number(this.getField("tabla_arma5_md").value) -
  Number(this.getField("tabla_arma6_md").value) -
  Number(this.getField("tabla_arma7_md").value);

// FUNCIONES



function actualizarDatosArmadura(numero_armadura) {
  var armadura = this.getField("armadura" + numero_armadura);
  var armadura_def = this.getField("armadura" + numero_armadura + "_def");
  var armadura_reqarm = this.getField("armadura" + numero_armadura + "_reqarm");
  var armadura_advertir = this.getField("armadura" + numero_armadura + "_advertir");
  var armadura_mov = this.getField("armadura" + numero_armadura + "_mov");
  var armadura_calidad = this.getField("armadura" + numero_armadura + "_calidad");
  switch (armadura.value) {
    case "Peto de cuero endurecido":
      armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (20 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Peto de cuero tachonado":
      armadura_def.value = 30 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (25 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Peto de metal":
      armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (40 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Camisola acolchada":
      armadura_def.value = 10 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Camisola de cuero":
      armadura_def.value = 10 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Camisola de piel":
      armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (10 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Camisola de anillas":
      armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (60 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-20 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Completa gabardina":
      armadura_def.value = 10 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Completa de cuero":
      armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (10 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Completa de mallas":
      armadura_def.value = 30 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (30 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Completa de piezas":
      armadura_def.value = 50 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (50 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-20 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Completa de metal":
      armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (70 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-30 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Completa con escamas":
      armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (80 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-30 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Completa de placas":
      armadura_def.value = 50 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (90 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-40 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Completa de placas pesada":
      armadura_def.value = 60 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (120 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-50 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Completa de campaña pesada":
      armadura_def.value = 70 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (150 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = Math.min(0, (-60 + (5 * Number(armadura_calidad.value))));
      armadura_advertir.value = 0;
      break;
    case "Yelmo de anillas":
      armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Yelmo frentón":
      armadura_def.value = 30 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Yelmo coronilla":
      armadura_def.value = 20 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Yelmo de cuero":
      armadura_def.value = 10 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Yelmo de maya":
      armadura_def.value = 40 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = Math.min(0, (-10 + (5 * Number(armadura_calidad.value))));
      break;
    case "Yelmo completo abierto":
      armadura_def.value = 50 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (5 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = 0;
      armadura_advertir.value = Math.min(0, (-20 + (5 * Number(armadura_calidad.value))));
      break;
    case "Yelmo completo cerrado":
      armadura_def.value = 50 + (10 * Number(armadura_calidad.value));
      armadura_reqarm.value = Math.max(0, (10 - (5 * Number(armadura_calidad.value))));
      armadura_mov.value = 0;
      armadura_advertir.value = Math.min(0, (-30 + (5 * Number(armadura_calidad.value))));
      break;

    default:
      break;
  }
}

function aplicarNegativosArmaduraEquipada(num_armadura) {
  var diff_reqarm = Number(this.getField("final_llA").value) - Number(this.getField("armadura" + num_armadura + "_reqarm").value);
  var armadura_mov = this.getField("armadura" + num_armadura + "_mov");
  var armadura_advertir = this.getField("armadura" + num_armadura + "_advertir");
  var armadura_clase = this.getField("armadura" + num_armadura).value.split(" ")[0];

  if (armadura_clase === "Yelmo") {
    // Yelmos
    // Tiene req armadura suficiente
    if (diff_reqarm >= 0) {
      armadura_advertir.value = Math.min(0, Number(armadura_advertir.value) + (Math.floor(diff_reqarm / 50) * 10));
    } else {
      // No tiene req armadura suficiente
      armadura_advertir.value = Number(armadura_advertir.value) + diff_reqarm;

    }
    // Varias equipadas
    if ((yelmos_blandos_eq + yelmos_duros_eq) > 1) {
      armadura_advertir.value += -20;
    }
  } else {
    // Armaduras
    // Tiene req armadura suficiente
    if (diff_reqarm >= 0) {
      armadura_mov.value = Math.min(0, Number(armadura_mov.value) + (Math.floor(diff_reqarm / 50) * 10));
    } else {
      // No tiene req armadura suficiente
      armadura_mov.value = Number(armadura_mov.value) + diff_reqarm;
    }
    // Varias equipadas
    if ((armaduras_duras_eq + armaduras_blandas_eq) > 1) {
      armadura_mov.value += -20;
    }
  }
}
