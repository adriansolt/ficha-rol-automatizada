var i = event.target.name.substr(4,1);

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

  arma_atq.value = 0;
  arma_par.value = 0;
  arma_esq.value = 0;
  arma_db.value = 0;
  arma_iniciativa.value = 0;
  arma_fue_bono.value = Number(this.getField("fue_bono").value);

  arma_db.value += 10;
  arma_iniciativa.value += 20;

  arma_df.value = Math.ceil(Number(arma_db.value) + arma_fue_bono.value);
  if (manos_libres === true) {
    event.value = "D+I";
    equipo_ataque_i.value += Number(arma_atq.value);
    equipo_parada_i.value += Number(arma_par.value);
    equipo_ataque_d.value += Number(arma_atq.value);
    equipo_parada_d.value += Number(arma_par.value);
  } else {
    event.value = "—"
  }

  if (event.value !== "—") {
    // Arma equipada

    // Negativos por no saber usar el arma
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
