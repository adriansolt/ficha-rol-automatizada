var nivel = this.getField("nivel");
var loop = true;
while (event.value > Number(this.getField("exp_totales").value) && loop) {
  var nRslt = app.alert(
    "Has sobrepasado los puntos de experiencia.\n\n" +
      "¿Quieres subir de nivel?",
    2,
    2,
    "Submit Validation"
  );
  if (nRslt === 4) {
    nivel.value++;
    event.value = event.value - Number(this.getField("exp_totales").value);
  } else {
    loop = false;
  }
}
loop = true;
var exp_actual = event.value;
while (exp_actual < 0 && Number(nivel.value) >= 0 && loop) {
  var nRslt = app.alert(
    "Has introducido un valor negativo.\n\n" + "¿Quieres bajar de nivel?",
    2,
    2,
    "Submit Validation"
  );
  if (nRslt === 4) {
    nivel.value--;
    event.value =
      Number(event.value) + Number(this.getField("exp_totales").value);
    exp_actual = Number(event.value);
  } else {
    loop = false;
  }
}