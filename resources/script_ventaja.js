var lista_habs = [
  "escuchar",
  "ver",
  "buscar",
  "rastrear",
  "sigilo",
  //
  "atletismo",
  "nadar",
  "trepar",
  "montar",
  "acrobacias",
  "resdolor",
  //
  "arte",
  "disfraz",
  "estilo",
  "tmanos",
  "cerrajeria",
  "tramperia",
  "cocina",
  "venenos",
  //
  "orientarse",
  "ocultarse",
  "robo",
  "frialdad",
  "etiqueta",
  "animales",
  //
  "medicina",
  "historia",
  "ocultismo",
  "navegacion",
  "mates",
  "tasacion",
  //
  "ingenieria",
  "joyeria",
  "forja",
  "sastreria",
  "alquimia",
  "herbolaria",
];

var lista_campos = [
  "sensoriales",
  "corporales",
  "creativas",
  "sociales",
  "culturales",
  "profesiones",
];

var ventajas_1 = ["ataque", "parada"];

var ventajas_2 = [
  "res_fisica",
  "res_enfermedades",
  "res_venenos",
  "res_frio",
  "res_calor",
];

var ventajas_3 = ["vida", "reg", "llA"];

//

var i;

for (i = 0; i < lista_habs.length; i++) {
  f("nventaja_" + lista_habs[i]).setItems([0, 1, 2]);
  f("nventaja_" + lista_habs[i]).textFont = "Roboto";
}

for (i = 0; i < lista_campos.length; i++) {
  f("nventaja_" + lista_campos[i]).setItems([0, 2, 3]);
  f("nventaja_" + lista_campos[i]).textFont = "Roboto";
}

for (i = 0; i < ventajas_1.length; i++) {
  f("nventaja_" + ventajas_1[i]).setItems([0, 1]);
  f("nventaja_" + ventajas_1[i]).textFont = "Roboto";
}

for (i = 0; i < ventajas_2.length; i++) {
  f("nventaja_" + ventajas_2[i]).setItems([0, 1, 2]);
  f("nventaja_" + ventajas_2[i]).textFont = "Roboto";
}

for (i = 0; i < ventajas_3.length; i++) {
  f("nventaja_" + ventajas_3[i]).setItems([0, 1, 2, 3]);
  f("nventaja_" + ventajas_3[i]).textFont = "Roboto";
}

//

for (i = 0; i < lista_habs.length; i++) {
  f("nventaja_" + lista_habs[i]).setItems(["-", "I", "II"]);
  f("nventaja_" + lista_habs[i]).textFont = "HelveticaRounded-Bold";
}

for (i = 0; i < lista_campos.length; i++) {
  f("nventaja_" + lista_campos[i]).setItems(["-", "II", "III"]);
  f("nventaja_" + lista_campos[i]).textFont = "HelveticaRounded-Bold";
}

for (i = 0; i < ventajas_1.length; i++) {
  f("nventaja_" + ventajas_1[i]).setItems(["-", "I"]);
  f("nventaja_" + ventajas_1[i]).textFont = "HelveticaRounded-Bold";
}

for (i = 0; i < ventajas_2.length; i++) {
  f("nventaja_" + ventajas_2[i]).setItems(["-", "I", "II"]);
  f("nventaja_" + ventajas_2[i]).textFont = "HelveticaRounded-Bold";
}

for (i = 0; i < ventajas_3.length; i++) {
  f("nventaja_" + ventajas_3[i]).setItems(["-", "I", "II", "III"]);
  f("nventaja_" + ventajas_3[i]).textFont = "HelveticaRounded-Bold";
}
