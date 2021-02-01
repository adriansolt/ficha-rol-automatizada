var dureza = this.getField(event.target.name + "_dureza");
var check = this.getField(event.target.name + "_check");
var calidad = this.getField(event.target.name + "_calidad");
check.value = "—";
calidad.value = 0;
if (
  event.value === "Peto de cuero endurecido" ||
  event.value === "Peto de cuero tachonado" ||
  event.value === "Peto de metal" ||
  event.value === "Completa de piezas" ||
  event.value === "Completa de metal" ||
  event.value === "Completa con escamas" ||
  event.value === "Completa de placas" ||
  event.value === "Completa de placas pesada" ||
  event.value === "Completa de campaña pesada" ||
  event.value === "Yelmo de anillas" ||
  event.value === "Yelmo frentón" ||
  event.value === "Yelmo coronilla" ||
  event.value === "Yelmo completo abierto" ||
  event.value === "Yelmo completo cerrado"
) {
  dureza.value = "Dura";
  check.readonly = false;
  calidad.readonly = false;
} else if (
  event.value === "Camisola acolchada" ||
  event.value === "Camisola de cuero" ||
  event.value === "Camisola de piel" ||
  event.value === "Camisola de anillas" ||
  event.value === "Completa gabardina" ||
  event.value === "Completa de cuero" ||
  event.value === "Completa de mallas" ||
  event.value === "Yelmo de cuero" ||
  event.value === "Yelmo de maya"
) {
  dureza.value = "Blanda";
  check.readonly = false;
  calidad.readonly = false;
} else {
  check.readonly = true;
  calidad.readonly = true;
  dureza.value = "—";
  this.getField(event.target.name + "_def").value = "—";
  this.getField(event.target.name + "_reqarm").value = "—";
  this.getField(event.target.name + "_advertir").value = "—";
  this.getField(event.target.name + "_mov").value = "—";
}