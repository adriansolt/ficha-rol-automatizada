var num = event.target.name.substr(6, 1);
var coste_idioma = this.getField("idioma" + num + "_md");

switch (event.value) {
  case "Bajo":
    coste_idioma.value = 2;
    break;
  case "Medio":
    coste_idioma.value = 3;
    break;
  case "Alto":
    coste_idioma.value = 4;
    break;
  case "Nativo":
    coste_idioma.value = 5;
    break;
  default:
    coste_idioma.value = 0;
    break;
}

switch (this.getField("idioma" + num + "_hablado").value) {
  case "Bajo":
    coste_idioma.value += 2;
    break;
  case "Medio":
    coste_idioma.value += 3;
    break;
  case "Alto":
    coste_idioma.value += 4;
    break;
  case "Nativo":
    coste_idioma.value += 5;
    break;
  default:
    break;
}