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

var mod_armadura_cabeza = this.getField("mod_armadura_cabeza");
var mod_armadura_espalda = this.getField("mod_armadura_espalda");
var mod_armadura_hombro_der = this.getField("mod_armadura_hombro_der");
var mod_armadura_hombro_izq = this.getField("mod_armadura_hombro_izq");
var mod_armadura_pecho = this.getField("mod_armadura_pecho");
var mod_armadura_brazo_der = this.getField("mod_armadura_brazo_der");
var mod_armadura_brazo_izq = this.getField("mod_armadura_brazo_izq");
var mod_armadura_mano_der = this.getField("mod_armadura_mano_der");
var mod_armadura_mano_izq = this.getField("mod_armadura_mano_izq");
var mod_armadura_pierna_der = this.getField("mod_armadura_pierna_der");
var mod_armadura_pierna_izq = this.getField("mod_armadura_pierna_izq");
var mod_armadura_pie_der = this.getField("mod_armadura_pie_der");
var mod_armadura_pie_izq = this.getField("mod_armadura_pie_izq");

i = 0;
while (i < armadura_cabeza_lista.length) {
  if (i === 0) {
    armadura_cabeza_total += Number(armadura_cabeza_lista[i]);
  } else {
    armadura_cabeza_total += Number((Math.floor((armadura_cabeza_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_cabeza = armadura_cabeza_total - mod_armadura_cabeza.value;
armadura_cabeza.value = Math.max(0, diff_armadura_cabeza);


i = 0;
while (i < armadura_pecho_lista.length) {
  if (i === 0) {
    armadura_pecho_total += Number(armadura_pecho_lista[i]);
  } else {
    armadura_pecho_total += Number((Math.floor((armadura_pecho_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_pecho = armadura_pecho_total - mod_armadura_pecho.value;
armadura_pecho.value = Math.max(0, diff_armadura_pecho);


i = 0;
while (i < armadura_espalda_lista.length) {
  if (i === 0) {
    armadura_espalda_total += Number(armadura_espalda_lista[i]);
  } else {
    armadura_espalda_total += Number((Math.floor((armadura_espalda_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_espalda = armadura_espalda_total - mod_armadura_espalda.value;
armadura_espalda.value = Math.max(0, diff_armadura_espalda);


i = 0;
while (i < armadura_hombro_der_lista.length) {
  if (i === 0) {
    armadura_hombro_der_total += Number(armadura_hombro_der_lista[i]);
  } else {
    armadura_hombro_der_total += Number((Math.floor((armadura_hombro_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_hombro_der = armadura_hombro_der_total - mod_armadura_hombro_der.value;
armadura_hombro_der.value = Math.max(0, diff_armadura_hombro_der);


i = 0;
while (i < armadura_hombro_izq_lista.length) {
  if (i === 0) {
    armadura_hombro_izq_total += Number(armadura_hombro_izq_lista[i]);
  } else {
    armadura_hombro_izq_total += Number((Math.floor((armadura_hombro_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_hombro_izq = armadura_hombro_izq_total - mod_armadura_hombro_izq.value;
armadura_hombro_izq.value = Math.max(0, diff_armadura_hombro_izq);


i = 0;
while (i < armadura_brazo_der_lista.length) {
  if (i === 0) {
    armadura_brazo_der_total += Number(armadura_brazo_der_lista[i]);
  } else {
    armadura_brazo_der_total += Number((Math.floor((armadura_brazo_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_brazo_der = armadura_brazo_der_total - mod_armadura_brazo_der.value;
armadura_brazo_der.value = Math.max(0, diff_armadura_brazo_der);


i = 0;
while (i < armadura_brazo_izq_lista.length) {
  if (i === 0) {
    armadura_brazo_izq_total += Number(armadura_brazo_izq_lista[i]);
  } else {
    armadura_brazo_izq_total += Number((Math.floor((armadura_brazo_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_brazo_izq = armadura_brazo_izq_total - mod_armadura_brazo_izq.value;
armadura_brazo_izq.value = Math.max(0, diff_armadura_brazo_izq);


i = 0;
while (i < armadura_mano_der_lista.length) {
  if (i === 0) {
    armadura_mano_der_total += Number(armadura_mano_der_lista[i]);
  } else {
    armadura_mano_der_total += Number((Math.floor((armadura_mano_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_mano_der = armadura_mano_der_total - mod_armadura_mano_der.value;
armadura_mano_der.value = Math.max(0, diff_armadura_mano_der);


i = 0;
while (i < armadura_mano_izq_lista.length) {
  if (i === 0) {
    armadura_mano_izq_total += Number(armadura_mano_izq_lista[i]);
  } else {
    armadura_mano_izq_total += Number((Math.floor((armadura_mano_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_mano_izq = armadura_mano_izq_total - mod_armadura_mano_izq.value;
armadura_mano_izq.value = Math.max(0, diff_armadura_mano_izq);


i = 0;
while (i < armadura_pierna_der_lista.length) {
  if (i === 0) {
    armadura_pierna_der_total += Number(armadura_pierna_der_lista[i]);
  } else {
    armadura_pierna_der_total += Number((Math.floor((armadura_pierna_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_pierna_der = armadura_pierna_der_total - mod_armadura_pierna_der.value;
armadura_pierna_der.value = Math.max(0, diff_armadura_pierna_der);


i = 0;
while (i < armadura_pierna_izq_lista.length) {
  if (i === 0) {
    armadura_pierna_izq_total += Number(armadura_pierna_izq_lista[i]);
  } else {
    armadura_pierna_izq_total += Number((Math.floor((armadura_pierna_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_pierna_izq = armadura_pierna_izq_total - mod_armadura_pierna_izq.value;
armadura_pierna_izq.value = Math.max(0, diff_armadura_pierna_izq);


i = 0;
while (i < armadura_pie_der_lista.length) {
  if (i === 0) {
    armadura_pie_der_total += Number(armadura_pie_der_lista[i]);
  } else {
    armadura_pie_der_total += Number((Math.floor((armadura_pie_der_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_pie_der = armadura_pie_der_total - mod_armadura_pie_der.value;
armadura_pie_der.value = Math.max(0, diff_armadura_pie_der);


i = 0;
while (i < armadura_pie_izq_lista.length) {
  if (i === 0) {
    armadura_pie_izq_total += Number(armadura_pie_izq_lista[i]);
  } else {
    armadura_pie_izq_total += Number((Math.floor((armadura_pie_izq_lista[i] / 2) / 10) * 10));
  }
  i++;
}

var diff_armadura_pie_izq = armadura_pie_izq_total - mod_armadura_pie_izq.value;
armadura_pie_izq.value = Math.max(0, diff_armadura_pie_izq);

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
  Number(this.getField("idioma2_md").value) -
  Number(this.getField("idioma3_md").value) -
  Number(this.getField("idioma4_md").value) -
  Number(this.getField("idioma5_md").value) -
  Number(this.getField("tabla_arma2_md").value) -
  Number(this.getField("tabla_arma3_md").value) -
  Number(this.getField("tabla_arma4_md").value) -
  Number(this.getField("tabla_arma5_md").value) -
  Number(this.getField("tabla_arma6_md").value) -
  Number(this.getField("tabla_arma7_md").value);
