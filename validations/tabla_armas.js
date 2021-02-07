var num = Number(event.target.name.substr(event.target.name.length - 1));
var tabla_arma = this.getField(event.target.name);
var coste_md = this.getField(event.target.name + "_md");
var arma_clase = this.getField(event.target.name + "_clase");


if((num > 1 && this.getField("tabla_arma" + (num-1)).value === "-") || (num < 7 && this.getField("tabla_arma" + (num+1)).value !== "-")) {
    event.rc = false;
}

if(event.rc) {
  switch (event.value) {
    case "ARMAS CORTAS":
      arma_clase.value = "Arma corta";
      break;
    case "HACHAS":
      arma_clase.value = "Hacha";
      break;
    case "MAZAS":
      arma_clase.value = "Maza";
      break;
    case "ESPADAS":
      arma_clase.value = "Espada";
      break;
    case "MANDOBLES":
      arma_clase.value = "Mandoble";
      break;
    case "ASTAS":
      arma_clase.value = "Asta";
      break;
    case "CUERDAS":
      arma_clase.value = "Cuerda";
      break;
    case "Lazo":
      arma_clase.value = "Cuerda";
      break;
    case "Red de gladiador":
      arma_clase.value = "Cuerda";
      break;
    case "Combate desarmado":
      arma_clase.value = "Sin armas";
      break;
    case "Jarrón":
      arma_clase.value = "Maza";
      break;
    case "Botella rota":
      arma_clase.value = "Arma corta";
      break;
    case "Antorcha":
      arma_clase.value = "Maza";
      break;
    case "Palo de madera":
      arma_clase.value = "Maza";
      break;
    case "Cadena":
      arma_clase.value = "Cuerda";
      break;
    case "Cestus":
      arma_clase.value = "Arma corta";
      break;
    case "Estilete":
      arma_clase.value = "Arma corta";
      break;
    case "Silla":
      arma_clase.value = "Mandoble";
      break;
    case "Barra metálica":
      arma_clase.value = "Maza";
      break;
    case "Cuchillo de cocina":
      arma_clase.value = "Arma corta";
      break;
    case "Garfio":
      arma_clase.value = "Arma corta";
      break;
    case "Garrote":
      arma_clase.value = "Maza";
      break;
    case "Daga":
      arma_clase.value = "Arma corta";
      break;
    case "Vara":
      arma_clase.value = "Asta";
      break;
    case "Daga de parada":
      arma_clase.value = "Arma corta";
      break;
    case "Martillo":
      arma_clase.value = "Maza";
      break;
    case "Azada":
      arma_clase.value = "Hacha";
      break;
    case "Hoz":
      arma_clase.value = "Arma corta";
      break;
    case "Arpón":
      arma_clase.value = "Asta";
      break;
    case "Florete":
      arma_clase.value = "Espada";
      break;
    case "Guadaña":
      arma_clase.value = "Asta";
      break;
    case "Jabalina":
      arma_clase.value = "Asta";
      break;
    case "Látigo":
      arma_clase.value = "Cuerda";
      break;
    case "Hacha de leñador":
      arma_clase.value = "Hacha";
      break;
    case "Pico":
      arma_clase.value = "Arma corta";
      break;
    case "Lanza":
      arma_clase.value = "Asta";
      break;
    case "Espada corta":
      arma_clase.value = "Arma corta";
      break;
    case "Mayal":
      arma_clase.value = "Cuerda";
      break;
    case "Maza":
      arma_clase.value = "Maza";
      break;
    case "Estoque":
      arma_clase.value = "Espada";
      break;
    case "Tridente":
      arma_clase.value = "Asta";
      break;
    case "Hacha de mano":
      arma_clase.value = "Hacha";
      break;
    case "Sable":
      arma_clase.value = "Espada";
      break;
    case "Martillo de guerra":
      arma_clase.value = "Maza";
      break;
    case "Cimitarra":
      arma_clase.value = "Espada";
      break;
    case "Espada larga":
      arma_clase.value = "Espada";
      break;
    case "Espada ancha":
      arma_clase.value = "Espada";
      break;
    case "Maza pesada de combate":
      arma_clase.value = "Maza";
      break;
    case "Alabarda":
      arma_clase.value = "Asta";
      break;
    case "Espada bastarda":
      arma_clase.value = "Espada";
      break;
    case "Gran martillo de guerra":
      arma_clase.value = "Maza";
      break;
    case "Hacha de guerra":
      arma_clase.value = "Hacha";
      break;
    case "Lanza de caballería":
      arma_clase.value = "Asta";
      break;
    case "Mangual":
      arma_clase.value = "Mandoble";
      break;
    case "Mandoble":
      arma_clase.value = "Mandoble";
      break;
    case "Hacha a dos manos":
      arma_clase.value = "Hacha";
      break;
    case "Rodela":
      arma_clase.value = "Escudo";
      break;
    case "Escudo":
      arma_clase.value = "Escudo";
      break;
    case "Escudo completo":
      arma_clase.value = "Escudo";
      break;
    default:
      event.value = "-";
      arma_clase.value = "-";
      coste_md.value = 0;
      break;
  }
}
