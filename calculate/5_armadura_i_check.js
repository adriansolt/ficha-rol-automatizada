var i = event.target.name.substr(8, 1);
var armadura_dureza = this.getField("armadura" + i + "_dureza");
var armadura_mov = this.getField("armadura" + i + "_mov");
var armadura_advertir = this.getField("armadura" + i + "_advertir");
var armadura_def = this.getField("armadura" + i + "_def");
var armadura = this.getField("armadura" + i);
var armadura_reqarm = this.getField("armadura" + i + "_reqarm");
var armadura_clase = this.getField("armadura" + i).value.split(" ")[0];

if (
  armadura.value === "-" ||
  yelmo_blanda_full ||
  armadura_blanda_full ||
  (armadura_dura_full &&
    armadura_dureza.value === "Dura" &&
    armadura_clase !== "Yelmo") ||
  (yelmo_dura_full &&
    armadura_dureza.value === "Dura" &&
    armadura_clase === "Yelmo")
) {
  event.value = "-";
}

if (
  armadura.value === "Peto de cuero endurecido" ||
  armadura.value === "Peto de cuero tachonado" ||
  armadura.value === "Peto de metal" ||
  armadura.value === "Completa de piezas" ||
  armadura.value === "Completa de metal" ||
  armadura.value === "Completa con escamas" ||
  armadura.value === "Completa de placas" ||
  armadura.value === "Completa de placas pesada" ||
  armadura.value === "Completa de campaña pesada" ||
  armadura.value === "Yelmo de anillas" ||
  armadura.value === "Yelmo frentón" ||
  armadura.value === "Yelmo coronilla" ||
  armadura.value === "Yelmo completo abierto" ||
  armadura.value === "Yelmo completo cerrado"
) {
  armadura_dureza.value = "Dura";
} else if (
  armadura.value === "Camisola acolchada" ||
  armadura.value === "Camisola de cuero" ||
  armadura.value === "Camisola de piel" ||
  armadura.value === "Camisola de anillas" ||
  armadura.value === "Completa gabardina" ||
  armadura.value === "Completa de cuero" ||
  armadura.value === "Completa de mallas" ||
  armadura.value === "Yelmo de cuero" ||
  armadura.value === "Yelmo de maya"
) {
  armadura_dureza.value = "Blanda";
} else {
  armadura_dureza.value = "-";
  armadura_def.value = "-";
  armadura_reqarm.value = "-";
  armadura_advertir.value = "-";
  armadura_mov.value = "-";
}

if (armadura_dureza.value !== "-") {
  var armadura_calidad = this.getField("armadura" + i + "_calidad");
  switch (armadura.value) {
    case "Peto de cuero endurecido":
      armadura_def.value = 20 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        20 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -10 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Peto de cuero tachonado":
      armadura_def.value = 30 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        25 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -10 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Peto de metal":
      armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        40 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -10 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Camisola acolchada":
    case "Camisola de cuero":
    case "Completa gabardina":
    case "Yelmo de cuero":
      armadura_def.value = 10 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Camisola de piel":
    case "Completa de cuero":
      armadura_def.value = 20 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        10 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -10 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Camisola de anillas":
      armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        60 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -20 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Completa de mallas":
      armadura_def.value = 30 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        30 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -10 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Completa de piezas":
      armadura_def.value = 50 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        50 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -20 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Completa de metal":
      armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        70 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -30 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Completa con escamas":
      armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        80 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -30 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Completa de placas":
      armadura_def.value = 50 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        90 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -40 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Completa de placas pesada":
      armadura_def.value = 60 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        120 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -50 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Completa de campaña pesada":
      armadura_def.value = 70 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        150 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = Math.min(
        0,
        -60 + 5 * Number(armadura_calidad.value)
      );
      armadura_advertir.value = 0;
      break;
    case "Yelmo de anillas":
    case "Yelmo coronilla":
      armadura_def.value = 20 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Yelmo frentón":
      armadura_def.value = 30 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = 0;
      break;
    case "Yelmo de maya":
      armadura_def.value = 40 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = 0;
      armadura_mov.value = 0;
      armadura_advertir.value = Math.min(
        0,
        -10 + 5 * Number(armadura_calidad.value)
      );
      break;
    case "Yelmo completo abierto":
      armadura_def.value = 50 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        5 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = 0;
      armadura_advertir.value = Math.min(
        0,
        -20 + 5 * Number(armadura_calidad.value)
      );
      break;
    case "Yelmo completo cerrado":
      armadura_def.value = 50 + 10 * Number(armadura_calidad.value);
      armadura_reqarm.value = Math.max(
        0,
        10 - 5 * Number(armadura_calidad.value)
      );
      armadura_mov.value = 0;
      armadura_advertir.value = Math.min(
        0,
        -30 + 5 * Number(armadura_calidad.value)
      );
      break;

    default:
      break;
  }

  if (event.value === "Eq.") {
    
    reqarm_total -= Number(this.getField("armadura" + i + "_reqarm").value);

    if (armadura_clase === "Yelmo") {
      // Yelmos
      // Tiene req armadura suficiente
      if (reqarm_total >= 0) {
        armadura_advertir.value = Math.min(
          0,
          Number(armadura_advertir.value) + Math.floor(reqarm_total / 50) * 10
        );
      } else {
        // No tiene req armadura suficiente
        armadura_advertir.value = Number(armadura_advertir.value) + reqarm_total;
      }
      // Varias equipadas
      if (yelmo_blanda_eq || (armadura_clase === "Yelmo" && yelmo_dura_full)) {
        armadura_advertir.value += -20;
      }
    } else {
      // Armaduras
      // Tiene req armadura suficiente
      if (reqarm_total >= 0) {
        armadura_mov.value = Math.min(
          0,
          Number(armadura_mov.value) + Math.floor(reqarm_total / 50) * 10
        );
      } else {
        // No tiene req armadura suficiente
        armadura_mov.value = Number(armadura_mov.value) + reqarm_total;
      }
      // Varias equipadas
      if (armadura_blanda_eq || (armadura_clase !== "Yelmo" && armadura_dura_full)) {
        armadura_mov.value += -20;
      }
    }

    if (armadura_dureza.value === "Dura") {
      if (armadura_clase === "Yelmo") {
        yelmo_dura_full = true;
      } else {
        armadura_dura_full = true;
      }
    } else {
      // armadura_dureza.value === "Blanda"
      if (armadura_clase === "Yelmo") {
        if (yelmo_blanda_eq) {
          yelmo_blanda_full = true;
        } else {
          yelmo_blanda_eq = true;
        }
      } else {
        if (armadura_blanda_eq) {
          armadura_blanda_full = true;
        } else {
          armadura_blanda_eq = true;
        }
      }
    }

    armadura_vel.value += Number(armadura_mov.value);
    this.getField("final_iniciativa").value += Number(armadura_mov.value);
    restriccion_mov_armadura += Math.floor(
      (Number(armadura_mov.value) * 2) / 10
    );
  }
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

  var armadura_def = this.getField("armadura" + i + "_def");
  switch (armadura_clase) {
    case "Peto":
      armadura_pecho_lista.push(armadura_def.value);
      armadura_espalda_lista.push(armadura_def.value);
      break;
    case "Camisola":
      armadura_pecho_lista.push(armadura_def.value);
      armadura_espalda_lista.push(armadura_def.value);
      armadura_hombro_der_lista.push(armadura_def.value);
      armadura_hombro_izq_lista.push(armadura_def.value);
      armadura_brazo_der_lista.push(armadura_def.value);
      armadura_brazo_izq_lista.push(armadura_def.value);
      armadura_mano_der_lista.push(armadura_def.value);
      armadura_mano_izq_lista.push(armadura_def.value);
      break;
    case "Completa":
      armadura_pecho_lista.push(armadura_def.value);
      armadura_espalda_lista.push(armadura_def.value);
      armadura_hombro_der_lista.push(armadura_def.value);
      armadura_hombro_izq_lista.push(armadura_def.value);
      armadura_brazo_der_lista.push(armadura_def.value);
      armadura_brazo_izq_lista.push(armadura_def.value);
      armadura_mano_der_lista.push(armadura_def.value);
      armadura_mano_izq_lista.push(armadura_def.value);
      armadura_pierna_der_lista.push(armadura_def.value);
      armadura_pierna_izq_lista.push(armadura_def.value);
      armadura_pie_der_lista.push(armadura_def.value);
      armadura_pie_izq_lista.push(armadura_def.value);
      break;
    case "Yelmo":
      armadura_cabeza_lista.push(armadura_def.value);
      break;
    default:
      break;
  }
}
