var lista_habilidades = [
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
    "profesiones"
]


var ventajas_1 = [
    "ataque",
    "parada",
]

var ventajas_2 = [
    "res_fisica",
    "res_enfermedades",
    "res_venenos",
    "res_frio",
    "res_calor",
]

var ventajas_3 = [
    "vida",
    "reg",
    "llA"
]

//

for (var i = 0; i < lista_habilidades.length; i++) {
    this.getField("nventaja_" + lista_habilidades[i]).setItems([0, 1, 2]);
    this.getField("nventaja_" + lista_habilidades[i]).textFont = "Roboto";
}

for (var i = 0; i < lista_campos.length; i++) {
    this.getField("nventaja_" + lista_campos[i]).setItems([0, 2, 3]);
    this.getField("nventaja_" + lista_campos[i]).textFont = "Roboto";
}


for (var i = 0; i < ventajas_1.length; i++) {
    this.getField("nventaja_" + ventajas_1[i]).setItems([0, 1]);
    this.getField("nventaja_" + ventajas_1[i]).textFont = "Roboto";
}

for (var i = 0; i < ventajas_2.length; i++) {
    this.getField("nventaja_" + ventajas_2[i]).setItems([0, 1, 2]);
    this.getField("nventaja_" + ventajas_2[i]).textFont = "Roboto";
}

for (var i = 0; i < ventajas_3.length; i++) {
    this.getField("nventaja_" + ventajas_3[i]).setItems([0, 1, 2, 3]);
    this.getField("nventaja_" + ventajas_3[i]).textFont = "Roboto";
}

//

for (var i = 0; i < lista_habilidades.length; i++) {
    this.getField("nventaja_" + lista_habilidades[i]).setItems(["-", "I", "II"]);
    this.getField("nventaja_" + lista_habilidades[i]).textFont = "HelveticaRounded-Bold";
}

for (var i = 0; i < lista_campos.length; i++) {
    this.getField("nventaja_" + lista_campos[i]).setItems(["-", "II", "III"]);
    this.getField("nventaja_" + lista_campos[i]).textFont = "HelveticaRounded-Bold";
}

for (var i = 0; i < ventajas_1.length; i++) {
    this.getField("nventaja_" + ventajas_1[i]).setItems(["-", "I"]);
    this.getField("nventaja_" + ventajas_1[i]).textFont = "HelveticaRounded-Bold";
}

for (var i = 0; i < ventajas_2.length; i++) {
    this.getField("nventaja_" + ventajas_2[i]).setItems(["-", "I", "II"]);
    this.getField("nventaja_" + ventajas_2[i]).textFont = "HelveticaRounded-Bold";
}

for (var i = 0; i < ventajas_3.length; i++) {
    this.getField("nventaja_" + ventajas_3[i]).setItems(["-", "I", "II", "III"]);
    this.getField("nventaja_" + ventajas_3[i]).textFont = "HelveticaRounded-Bold";
}