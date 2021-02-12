var num = Number(event.target.name.substr(event.target.name.length - 1));
var tabla_arma = this.getField(event.target.name);
var coste_md = this.getField(event.target.name + "_md");
var arma_clase = this.getField(event.target.name + "_clase");


if ((num > 1 && this.getField("tabla_arma" + (num - 1)).value === "-") || (num < 7 && this.getField("tabla_arma" + (num + 1)).value !== "-")) {
  event.rc = false;
}

if (event.rc) {
  switch (event.value) {
    case "ARMAS CORTAS":
    case "Cuchillo de cocina":
    case "Garfio":
    case "Daga":
    case "Daga de parada":
    case "Botella rota":
    case "Cestus":
    case "Estilete":
    case "Espada corta":
    case "Pico":
    case "Hoz":
      arma_clase.value = "Arma corta";
      break;
    case "HACHAS":
    case "Azada":
    case "Hacha de leñador":
    case "Hacha de mano":
    case "Hacha de guerra":
    case "Hacha a dos manos":
      arma_clase.value = "Hacha";
      break;
    case "MAZAS":
    case "Jarrón":
    case "Antorcha":
    case "Barra metálica":
    case "Garrote":
    case "Martillo de guerra":
    case "Maza":
    case "Martillo":
    case "Palo de madera":
    case "Gran martillo de guerra":
    case "Maza pesada de combate":
      arma_clase.value = "Maza";
      break;
    case "ESPADAS":
    case "Florete":
    case "Estoque":
    case "Cimitarra":
    case "Sable":
    case "Espada larga":
    case "Espada bastarda":
    case "Espada ancha":
      arma_clase.value = "Espada";
      break;
    case "MANDOBLES":
    case "Silla":
    case "Mangual":
    case "Mandoble":
      arma_clase.value = "Mandoble";
      break;
    case "ASTAS":
    case "Vara":
    case "Arpón":
    case "Guadaña":
    case "Jabalina":
    case "Lanza":
    case "Tridente":
    case "Lanza de caballería":
    case "Alabarda":
      arma_clase.value = "Asta";
      break;
    case "CUERDAS":
    case "Lazo":
    case "Látigo":
    case "Mayal":
    case "Cadena":
    case "Red de gladiador":
      arma_clase.value = "Cuerda";
      break;
    case "A. DE PROYECTIL":
    case "Ballesta de mano":
    case "Ballesta Pesada":
    case "Arco corto":
    case "Arco largo":
      arma_clase.value = "A. de proyectil";
      break;
    case "ESCUDOS":
    case "Rodela":
    case "Escudo":
    case "Escudo completo":
      arma_clase.value = "Escudo";
      break;
    case "Combate desarmado":
      arma_clase.value = "Sin armas";
      break;
    default:
      event.value = "-";
      arma_clase.value = "-";
      coste_md.value = 0;
      break;
  }
}