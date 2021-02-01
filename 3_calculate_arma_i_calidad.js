
var i = event.target.name.substr(4,1);
var arma_clase = this.getField("arma" + i + "_clase");

var arma_par = this.getField("arma" + i + "_par");
var arma_esq = this.getField("arma" + i + "_esq");
var arma_atq = this.getField("arma" + i + "_atq");
var arma_iniciativa = this.getField("arma" + i + "_iniciativa");
var arma_db = this.getField("arma" + i + "_db");

if(arma_clase.value === "Escudo" || arma_clase.value === "—") {
    event.value = "0";
} else {
  arma_atq.value = Number(arma_atq.value) + 5 * Number(event.value);
  arma_par.value = Number(arma_par.value) +  (5 * Number(event.value));
  arma_db.value = Number(arma_db.value) +  (10 * Number(event.value));
  arma_iniciativa.value = Number(arma_iniciativa.value) +  (5 * Number(event.value));
}