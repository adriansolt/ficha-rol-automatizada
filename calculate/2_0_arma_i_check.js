var i = event.target.name.substr(4, 1);

var arma = this.getField("arma" + i);
var arma_par = this.getField("arma" + i + "_par");
var arma_esq = this.getField("arma" + i + "_esq");
var arma_atq = this.getField("arma" + i + "_atq");
var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
var arma_db = this.getField("arma" + i + "_db");
var arma_df = this.getField("arma" + i + "_df");
var arma_calidad = this.getField("arma" + i + "_calidad");
var arma_freq = this.getField("arma" + i + "_freq");
var arma_clase = this.getField("arma" + i + "_clase");
var arma_especial = this.getField("arma" + i + "_especial");
var arma_tam = this.getField("arma" + i + "_tam");
var arma_fue_bono = this.getField("arma" + i + "_fue_bono");

if (
  (mano_d_ocupada && (event.value === "D" || event.value === "D+I")) || 
  (mano_i_ocupada && (event.value === "I" || event.value === "D+I")) || 
  (manos_ocupadas) || 
  (arma_clase.value === "A. de proyectil") && (event.value === "I" || event.value === "D")) {
  event.value = "-";
}

if (arma.value !== "-") {
  arma_atq.value = 0;
  arma_par.value = 0;
  arma_esq.value = 0;
  arma_db.value = 0;
  arma_iniciativa.value = 0;
  switch (arma.value) {
    case "Lazo":
      arma_db.value += 5;
      arma_iniciativa.value += 10;
      arma_freq.value = 8;
      arma_clase.value = "Cuerda";
      arma_tam.value = "S";
      arma_especial.value = "Presa 18";
      break;
    case "Red de gladiador":
      arma_db.value += 5;
      arma_iniciativa.value += 0;
      arma_freq.value = 4;
      arma_clase.value = "Cuerda";
      arma_tam.value = "M";
      arma_especial.value = "Presa 20";
      break;
    case "Combate desarmado":
      arma_db.value += 10;
      arma_iniciativa.value += 20;
      arma_freq.value = "-";
      arma_tam.value = "-";
      arma_clase.value = "Sin armas";
      arma_especial.value = "Precisa";
      break;
    case "Jarrón":
      arma_db.value += 15;
      arma_iniciativa.value -= 10;
      arma_freq.value = 8;
      arma_clase.value = "Maza";
      arma_tam.value = "S";
      break;
    case "Botella rota":
      arma_db.value += 15;
      arma_iniciativa.value += 10;
      arma_freq.value = 6;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      break;
    case "Antorcha":
      arma_db.value += 20;
      arma_iniciativa.value -= 10;
      arma_freq.value = 8;
      arma_clase.value = "Maza";
      arma_tam.value = "S";
      break;
    case "Palo de madera":
      arma_db.value += 20;
      arma_iniciativa.value += 0;
      arma_freq.value = 8;
      arma_clase.value = "Maza";
      arma_tam.value = "S";
      break;
    case "Cadena":
      arma_db.value += 25;
      arma_iniciativa.value += 0;
      arma_freq.value = 12;
      arma_clase.value = "Cuerda";
      arma_tam.value = "M";
      arma_especial.value = "Presa 16";
      break;
    case "Estilete":
      arma_db.value += 25;
      arma_iniciativa.value += 20;
      arma_freq.value = 6;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      arma_especial.value = "Precisa";
      break;
    case "Silla":
      arma_db.value += 25;
      arma_iniciativa.value -= 20;
      arma_freq.value = 10;
      arma_clase.value = "Mandoble";
      arma_tam.value = "M";
      break;
    case "Barra metálica":
      arma_db.value += 25;
      arma_iniciativa.value -= 5;
      arma_freq.value = 10;
      arma_clase.value = "Maza";
      arma_tam.value = "M";
      break;
    case "Cestus":
      arma_freq.value = 6;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      arma_especial.value = "Precisa";
      arma_db.value += 25;
      arma_iniciativa.value += 10;
      break;
    case "Cuchillo de cocina":
      arma_db.value += 25;
      arma_iniciativa.value += 10;
      arma_freq.value = 8;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      break;
    case "Garrote":
      arma_db.value += 30;
      arma_iniciativa.value += 0;
      arma_freq.value = 10;
      arma_clase.value = "Maza";
      arma_tam.value = "S";
      break;
    case "Daga":
      arma_db.value += 30;
      arma_iniciativa.value += 20;
      arma_freq.value = 8;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      arma_especial.value = "Precisa";
      break;
    case "Vara":
      arma_db.value += 30;
      arma_iniciativa.value += 10;
      arma_freq.value = 8;
      arma_clase.value = "Asta";
      arma_tam.value = "L";
      break;
    case "Garfio":
      arma_db.value += 30;
      arma_iniciativa.value += 10;
      arma_freq.value = 8;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      break;
    case "Daga de parada":
      arma_db.value += 30;
      arma_iniciativa.value += 15;
      arma_freq.value = 6;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      arma_especial.value = "Precisa";
      break;
    case "Azada":
      arma_db.value += 30;
      arma_iniciativa.value -= 20;
      arma_freq.value = 8;
      arma_clase.value = "Hacha";
      arma_tam.value = "M";
      break;
    case "Hoz":
      arma_db.value += 35;
      arma_iniciativa.value -= 10;
      arma_freq.value = 8;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      break;
    case "Arpón":
      arma_db.value += 35;
      arma_iniciativa.value -= 5;
      arma_freq.value = 10;
      arma_clase.value = "Asta";
      arma_tam.value = "M";
      break;
    case "Florete":
      arma_db.value += 35;
      arma_iniciativa.value += 15;
      arma_freq.value = 6;
      arma_clase.value = "Espada";
      arma_especial.value = "Precisa";
      arma_tam.value = "S";
      break;
    case "Guadaña":
      arma_db.value += 35;
      arma_iniciativa.value += 0;
      arma_freq.value = 10;
      arma_clase.value = "Asta";
      arma_tam.value = "L";
      break;
    case "Jabalina":
      arma_db.value += 35;
      arma_iniciativa.value += 5;
      arma_freq.value = 8;
      arma_clase.value = "Asta";
      arma_tam.value = "L";
      break;
    case "Látigo":
      arma_db.value += 35;
      arma_iniciativa.value -= 20;
      arma_freq.value = 8;
      arma_clase.value = "Cuerda";
      arma_tam.value = "M";
      arma_especial.value = "Presa 16";
      break;
    case "Tridente":
      arma_db.value += 40;
      arma_iniciativa.value -= 10;
      arma_freq.value = 12;
      arma_clase.value = "Asta";
      arma_tam.value = "L";
      break;
    case "Hacha de leñador":
      arma_db.value += 40;
      arma_iniciativa.value -= 10;
      arma_freq.value = 10;
      arma_clase.value = "Hacha";
      arma_tam.value = "M";
      break;
    case "Pico":
      arma_db.value += 40;
      arma_iniciativa.value -= 20;
      arma_freq.value = 10;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      break;
    case "Lanza":
      arma_db.value += 40;
      arma_iniciativa.value += 5;
      arma_freq.value = 8;
      arma_clase.value = "Asta";
      break;
    case "Estoque":
      arma_db.value += 40;
      arma_iniciativa.value += 15;
      arma_freq.value = 8;
      arma_clase.value = "Espada";
      arma_especial.value = "Precisa";
      break;
    case "Espada corta":
      arma_db.value += 40;
      arma_iniciativa.value += 15;
      arma_freq.value = 8;
      arma_clase.value = "Arma corta";
      arma_tam.value = "S";
      arma_especial.value = "Precisa";
      break;
    case "Mayal":
    case "Maza":
      arma_db.value += 40;
      arma_iniciativa.value += 0;
      arma_freq.value = 12;
      arma_clase.value = "Maza";
      arma_tam.value = "M";
      break;
    case "Hacha de mano":
      arma_db.value += 45;
      arma_iniciativa.value += 0;
      arma_freq.value = 10;
      arma_clase.value = "Hacha";
      arma_tam.value = "M";
      break;
    case "Sable":
      arma_db.value += 45;
      arma_iniciativa.value += 10;
      arma_freq.value = 12;
      arma_clase.value = "Espada";
      arma_tam.value = "M";
      break;
    case "Martillo de guerra":
      arma_db.value += 50;
      arma_iniciativa.value -= 5;
      arma_freq.value = 12;
      arma_clase.value = "Asta";
      arma_tam.value = "M";
      break;
    case "Cimitarra":
      arma_db.value += 50;
      arma_iniciativa.value -= 5;
      arma_freq.value = 10;
      arma_clase.value = "Espada";
      arma_tam.value = "M";
      break;
    case "Espada larga":
      arma_db.value += 50;
      arma_iniciativa.value += 0;
      arma_freq.value = 12;
      arma_clase.value = "Espada";
      arma_tam.value = "M";
      break;
    case "Espada ancha":
      arma_db.value += 55;
      arma_iniciativa.value -= 5;
      arma_freq.value = 10;
      arma_clase.value = "Espada";
      arma_tam.value = "M";
      break;
    case "Maza pesada de combate":
      arma_db.value += 60;
      arma_iniciativa.value -= 15;
      arma_freq.value = 12;
      arma_clase.value = "Maza";
      arma_tam.value = "L";
      break;
    case "Alabarda":
      arma_db.value += 60;
      arma_iniciativa.value -= 15;
      arma_freq.value = 12;
      arma_clase.value = "Asta";
      arma_tam.value = "L";
      break;
    case "Espada bastarda":
      arma_db.value += 70;
      arma_iniciativa.value -= 30;
      arma_freq.value = 14;
      arma_clase.value = "Espada";
      arma_tam.value = "L";
      break;
    case "Hacha de guerra":
      arma_db.value += 70;
      arma_iniciativa.value -= 30;
      arma_freq.value = 14;
      arma_clase.value = "Hacha";
      arma_tam.value = "L";
      break;
    case "Gran martillo de guerra":
      arma_db.value += 70;
      arma_iniciativa.value -= 35;
      arma_freq.value = 14;
      arma_clase.value = "Maza";
      arma_tam.value = "L";
      break;
    case "Lanza de caballería":
      arma_db.value += 80;
      arma_iniciativa.value -= 30;
      arma_freq.value = 16;
      arma_clase.value = "Asta";
      arma_tam.value = "L";
      break;
    case "Mangual":
      arma_db.value += 80;
      arma_iniciativa.value -= 50;
      arma_freq.value = 16;
      arma_clase.value = "Mandoble";
      arma_tam.value = "L";
      break;
    case "Mandoble":
      arma_db.value += 90;
      arma_iniciativa.value -= 60;
      arma_freq.value = 16;
      arma_clase.value = "Mandoble";
      arma_tam.value = "L";
      break;
    case "Hacha a dos manos":
      arma_db.value += 100;
      arma_iniciativa.value -= 70;
      arma_freq.value = 18;
      arma_clase.value = "Hacha";
      arma_tam.value = "L";
      break;
    case "Ballesta de mano":
      arma_db.value += 30;
      arma_iniciativa.value += 10;
      arma_freq.value = 6;
      arma_clase.value = "A. de proyectil";
      arma_tam.value = "S";
      break;
    case "Ballesta Pesada":
      arma_db.value += 60;
      arma_iniciativa.value -= 20;
      arma_freq.value = 20;
      arma_clase.value = "A. de proyectil";
      arma_tam.value = "L";
      arma_especial.value = "Recarga";
      break;
    case "Arco corto":
      arma_db.value += 30;
      arma_iniciativa.value -= 10;
      arma_freq.value = 8;
      arma_clase.value = "A. de proyectil";
      arma_tam.value = "S";
      break;
    case "Arco largo":
      arma_db.value += 40;
      arma_iniciativa.value -= 30;
      arma_freq.value = 7;
      arma_clase.value = "A. de proyectil";
      arma_tam.value = "L";
      break;
    case "Rodela":
      arma_db.value += 15;
      arma_iniciativa.value -= 15;
      arma_par.value += 10;
      arma_esq.value += 5;
      arma_freq.value = 10;
      arma_clase.value = "Escudo";
      arma_tam.value = "-";
      break;
    case "Escudo":
      arma_db.value += 20;
      arma_iniciativa.value -= 25;
      arma_par.value += 20;
      arma_esq.value += 10;
      arma_freq.value = 10;
      arma_tam.value = "-";
      arma_clase.value = "Escudo";
      break;
    case "Escudo corporal":
      arma_db.value += 25;
      arma_iniciativa.value -= 40;
      arma_par.value += 30;
      arma_esq.value += 15;
      arma_freq.value = 10;
      arma_tam.value = "-";
      arma_clase.value = "Escudo";
      break;
    default:
      break;
  }
  if(arma_clase.value !== "A. de proyectil") {
    arma_fue_bono.value = Number(this.getField("fue_bono").value);
  } else {
    arma_fue_bono.value = 0;
  }

  arma_df.value = Math.ceil(Number(arma_db.value) + arma_fue_bono.value);

  if (event.value !== "-") {
    // Arma equipada

    // Negativos por no saber usar el arma
    if (arma_clase.value !== "Escudo") {
      var tabla_arma = this.getField("tabla_" + i);
      var tabla_arma_clase = this.getField("tabla_" + i + "_clase");

      var similar = false;
      var encontrado = false;

      var j = 1;
      while (j <= 7 && !encontrado) {
        var tabla_arma = this.getField("tabla_arma" + j);
        var tabla_arma_clase = this.getField("tabla_arma" + j + "_clase");
        if (
          arma.value === tabla_arma.value ||
          (arma_clase.value === tabla_arma_clase.value &&
            tabla_arma.value === tabla_arma.value.toUpperCase())
        ) {
          encontrado = true;
        } else if (arma_clase.value === tabla_arma_clase.value) {
          similar = true;
        }
        j++;
      }
      if (!encontrado) {
        if (similar) {
          arma_atq.value -= 20;
          arma_par.value -= 20;
        } else {
          arma_atq.value -= 60;
          arma_par.value -= 60;
        }
      }
    }

    // Negativos por no tener fuerza requerida
    if (arma_freq.value !== "-") {
      var fue_req_diff =
        Number(arma_freq.value) - Number(this.getField("fue_actual").value);
      if (fue_req_diff > 0) {
        arma_atq.value -= 5 * fue_req_diff;
        arma_par.value -= 5 * fue_req_diff;
      }
    }
    if (manos_libres) {
      manos_libres = false;
    }

    if (event.value === "D+I" || (mano_d_ocupada && mano_i_ocupada)) {
      manos_ocupadas = true;
    }
    equipo_esquiva.value += Number(arma_esq.value);


    num_checks_armas++;
  }
} else {
  event.value = "-";
  arma_atq.value = "-";
  arma_par.value = "-";
  arma_esq.value = "-";
  arma_freq.value = "-";
  arma_db.value = "-";
  arma_iniciativa.value = "-";
  arma_clase.value = "-";
  arma_tam.value = "-";
  arma_especial.value = "-";
  arma_df.value = "-";
  arma_fue_bono.value = "-";
  
}