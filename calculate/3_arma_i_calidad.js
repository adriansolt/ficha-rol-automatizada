var i = event.target.name.substr(4,1);
var arma_clase = this.getField("arma" + i + "_clase");

var arma_par = this.getField("arma" + i + "_par");
var arma_esq = this.getField("arma" + i + "_esq");
var arma_atq = this.getField("arma" + i + "_atq");
var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
var arma_db = this.getField("arma" + i + "_db");
var arma_check = this.getField("arma" + i + "_check");

if(arma_clase.value === "Escudo" || arma_clase.value === "—") {
    event.value = "0";
} else {
  arma_atq.value += 5 * Number(event.value);
  arma_par.value += 5 * Number(event.value);
  arma_db.value += 10 * Number(event.value);
  arma_iniciativa.value += 5 * Number(event.value);

  if (arma_check.value === "D" || arma_check.value === "I") {
    if (arma_check.value === "I") {
      mano_i_ocupada = true;
      equipo_ataque_i.value += Number(arma_atq.value);
      equipo_parada_i.value += Number(arma_par.value);
    } else {
      mano_d_ocupada = true;
      equipo_ataque_d.value += Number(arma_atq.value);
      equipo_parada_d.value += Number(arma_par.value);
    }
  }

  if (arma_check.value === "D+I") {
    equipo_ataque_d.value += Number(arma_atq.value);
    equipo_parada_d.value += Number(arma_par.value);
    equipo_ataque_i.value += Number(arma_atq.value);
    equipo_parada_i.value += Number(arma_par.value);
  }

  iniciativa_total_arma.value += Number(arma_iniciativa.value);
  equipo_esquiva.value += Number(arma_esq.value);
}